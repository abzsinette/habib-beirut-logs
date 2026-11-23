-- Habib Beirut Daily Logs: database setup.
-- Paste all of this into Supabase > SQL Editor > New query, then click Run. Run it once.

-- One row per day. All the sheets of that day are stored together in "data".
create table if not exists public.days (
  day date primary key,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

-- Only signed-in staff can read or write. Nobody else, even with the public key.
alter table public.days enable row level security;
drop policy if exists "staff read" on public.days;
drop policy if exists "staff insert" on public.days;
drop policy if exists "staff update" on public.days;
create policy "staff read"   on public.days for select to authenticated using (true);
create policy "staff insert" on public.days for insert to authenticated with check (true);
create policy "staff update" on public.days for update to authenticated using (true) with check (true);

-- Combines two sets of entries so two phones saving at once don't erase each other.
create or replace function public.jsonb_deep_merge(a jsonb, b jsonb)
returns jsonb language plpgsql immutable as $$
declare k text; v jsonb; result jsonb;
begin
  if a is null or jsonb_typeof(a) <> 'object' or b is null or jsonb_typeof(b) <> 'object' then
    return b;
  end if;
  result := a;
  for k, v in select * from jsonb_each(b) loop
    if jsonb_typeof(result -> k) = 'object' and jsonb_typeof(v) = 'object' then
      result := jsonb_set(result, array[k], public.jsonb_deep_merge(result -> k, v));
    else
      result := jsonb_set(result, array[k], v, true);
    end if;
  end loop;
  return result;
end $$;

-- The app calls this to save. It adds the new entries to the day and returns the full day.
create or replace function public.merge_day(p_day date, p_patch jsonb)
returns jsonb language plpgsql security invoker as $$
declare result jsonb;
begin
  insert into public.days as d (day, data) values (p_day, p_patch)
  on conflict (day) do update
    set data = public.jsonb_deep_merge(d.data, excluded.data), updated_at = now()
  returning d.data into result;
  return result;
end $$;

revoke all on function public.merge_day(date, jsonb) from public, anon;
grant execute on function public.merge_day(date, jsonb) to authenticated;

-- Live updates: phones see each other's entries without refreshing.
do $$ begin
  alter publication supabase_realtime add table public.days;
exception when duplicate_object then null;
end $$;
