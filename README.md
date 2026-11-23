# Habib Beirut Daily Logs

Phone app for the restaurant's daily sheets: temperatures, bar and restaurant checklists, cleaning, cash closing and staff meals. English, French and Arabic.

App © 2026 Sinette · Habib Beirut

## Files

| File | What it does |
|---|---|
| `index.html` | The page itself |
| `style.css` | Colours, fonts and layout |
| `app.js` | Everything the app does |
| `config.js` | Your Supabase details (the only file you edit) |
| `manifest.webmanifest`, `icon-*.png` | Make it installable with its own icon |
| `sw.js` | Lets the app open without wifi |
| `setup.sql` | Creates the database (run once in Supabase) |

## Setup

### 1. Create the database (Supabase)
1. Sign up at supabase.com and create a new project (free plan). Choose a region in Europe.
2. Open **SQL Editor**, paste the whole of `setup.sql`, click **Run**.
3. Open **Authentication > Users > Add user > Create new user**.
   Email: `staff@habibbeirut.app` (or any email, it is never used for mail).
   Password: the restaurant password. Tick **Auto Confirm User**.
4. In the Authentication settings, turn **off** "Allow new users to sign up".
   This stops strangers from creating their own account.

### 2. Connect the app to the database
1. In Supabase open **Project Settings > API** (or **API Keys**).
2. Copy the **Project URL** and the **anon / publishable** key.
   Never copy the `service_role` or secret key.
3. Paste them into `config.js`. If you used another email in step 1.3, put it in `staffEmail`.

### 3. Put it online (GitHub Pages)
1. On github.com click **New repository**. Name: `habib-beirut-logs`. Public. Create.
2. Click **uploading an existing file**, drag all the files in, click **Commit changes**.
3. Open **Settings > Pages**. Source: **Deploy from a branch**, branch **main**, folder **/ (root)**. Save.
4. After a minute or two the app is at `https://YOUR-USERNAME.github.io/habib-beirut-logs/`.

### 4. Install it on each phone
- iPhone: open the link in Safari > Share > **Add to Home Screen**.
- Android: open the link in Chrome > menu > **Install app** (or Add to Home screen).
- Sign in once with the restaurant password, then type your name.

## Updating the app later
Upload the changed files to the repository again, and change `VERSION` in `sw.js` (for example `hb-v2`) so phones load the new version.

## Good to know
- The free Supabase plan pauses a project after a week with no use. Daily use keeps it awake.
- Everyone signs in with the same password; each entry is stamped with the name typed on that phone.
  To change the password, edit the user in Supabase and tell the team.
- Entries made without wifi are kept on the phone and sent automatically when the connection returns.
