(()=>{"use strict";
/* ---------- languages: every text is [English, French, Arabic] ---------- */
const LANGS=["en","fr","ar"],LOCALE=["en-GB","fr-FR","ar-LB-u-nu-latn"],LANGNAME=["English","Français","العربية"],LANGTAG=["EN","FR","ع"];
let LI=0;
try{const s=localStorage.getItem("hb:lang");if(LANGS.includes(s))LI=LANGS.indexOf(s);}catch(e){}
const T={
 tagline:["Daily hygiene and bar logs","Relevés quotidiens : hygiène et bar","السجلات اليومية للنظافة والبار"],
 setName:["Set your name","Votre nom","أدخل اسمك"],
 today:["Today","Aujourd'hui","اليوم"],
 pastRO:["Past day, read only","Jour passé, lecture seule","يوم سابق، للقراءة فقط"],
 prevDay:["Previous day","Jour précédent","اليوم السابق"],
 nextDay:["Next day","Jour suivant","اليوم التالي"],
 language:["Language","Langue","اللغة"],
 tabToday:["Today","Jour","اليوم"],tabTemp:["Temp.","Temp.","الحرارة"],tabBar:["Lists","Listes","القوائم"],tabClean:["Cleaning","Nettoyage","التنظيف"],tabHist:["History","Historique","السجل"],
 connecting:["Connecting to the saved logs…","Connexion aux relevés enregistrés…","جارٍ الاتصال بالسجلات المحفوظة…"],
 unsent:["No connection. Your entries are kept on this phone and will be saved as soon as the connection comes back.","Pas de connexion. Vos saisies sont gardées sur ce téléphone et seront enregistrées dès le retour de la connexion.","لا يوجد اتصال. إدخالاتك محفوظة على هذا الهاتف وستُرسل فور عودة الاتصال."],
 loginTitle:["Sign in","Connexion","تسجيل الدخول"],
 loginHint:["Enter the restaurant password. You only need to do this once on each phone.","Saisissez le mot de passe du restaurant. Une seule fois par téléphone.","أدخل كلمة سر المطعم. تحتاج إلى ذلك مرة واحدة فقط على كل هاتف."],
 password:["Restaurant password","Mot de passe du restaurant","كلمة سر المطعم"],
 signIn:["Sign in","Se connecter","دخول"],signingIn:["Signing in…","Connexion…","جارٍ الدخول…"],
 wrongPass:["Wrong password. Check it with your manager.","Mot de passe incorrect. Vérifiez-le auprès de votre responsable.","كلمة السر خاطئة. تحقّق منها مع المدير."],
 noNet:["Cannot reach the server. Check the wifi and try again.","Serveur injoignable. Vérifiez le wifi et réessayez.","تعذّر الوصول إلى الخادم. تحقّق من الواي فاي وحاول مجدداً."],
 signOut:["Sign this phone out","Déconnecter ce téléphone","تسجيل خروج هذا الهاتف"],
 setupTitle:["Not connected yet","Pas encore connecté","غير متصل بعد"],
 setupHint:["This copy of the app is not linked to a database. Fill in config.js with the Supabase details.","Cette copie de l'application n'est reliée à aucune base de données. Complétez config.js avec les informations Supabase.","هذه النسخة من التطبيق غير مرتبطة بقاعدة بيانات. املأ ملف config.js بمعلومات Supabase."],
 slow:["The saved logs cannot be reached yet. What you see may be out of date.","Les relevés enregistrés sont inaccessibles pour l'instant. L'affichage n'est peut-être pas à jour.","تعذّر الوصول إلى السجلات المحفوظة حالياً. قد لا يكون ما تراه محدّثاً."],
 cantSave:["This account can read the logs but cannot save entries.","Ce compte peut lire les relevés mais ne peut pas enregistrer de saisies.","هذا الحساب يستطيع قراءة السجلات لكنه لا يستطيع حفظ الإدخالات."],
 viewingPast:["You are looking at {0}. Past days cannot be changed.","Vous consultez le {0}. Les jours passés ne sont pas modifiables.","أنت تعرض {0}. لا يمكن تعديل الأيام السابقة."],
 glance:["Today at a glance","La journée en un coup d'œil","نظرة سريعة على اليوم"],
 daySum:["Day summary","Résumé de la journée","ملخّص اليوم"],
 attention:["Needs attention","À traiter","يحتاج إلى متابعة"],
 allGood:["Nothing overdue and no readings outside the limits.","Rien en retard et aucun relevé hors limites.","لا شيء متأخر ولا قراءات خارج الحدود."],
 sheets:["Sheets","Fiches","الأوراق"],
 copy:["Copy this day as a text report","Copier la journée en rapport texte","نسخ تقرير اليوم كنص"],
 readAt:["{0} read {1} °C at {2}","{0} : {1} °C à {2}","{0}: ⁦{1} °C⁩ عند {2}"],
 outNeed:["Outside the limit. Note the corrective action.","Hors limite. Notez l'action corrective.","خارج الحد. دوّن الإجراء التصحيحي."],
 outNoted:["Outside the limit. Action noted.","Hors limite. Action notée.","خارج الحد. تم تدوين الإجراء."],
 missRead:["{0} {1} readings missing","{0} : relevés de {1} manquants","{0}: قراءات {1} ناقصة"],
 nOfM:["{0} of {1} not recorded","{0} sur {1} non saisis","{0} من {1} غير مسجّلة"],
 cleanMiss:["{0} cleaning not recorded","{0} : nettoyage non enregistré","{0}: التنظيف غير مسجّل"],
 outStock:["Out of stock","En rupture","غير متوفر"],
 lowStock:["Running low","Stock bas","كمية قليلة"],
 of:["{0} of {1}","{0} sur {1}","{0} من {1}"],
 complete:["complete","terminé","مكتمل"],
 tTemp:["Temperatures · {0}","Températures · {0}","الحرارة · {0}"],
 tCheck:["{0} checklist","Checklist {0}","قائمة {0}"],
 tStock:["Bar items check","Contrôle des articles du bar","فحص أصناف البار"],
 tClean:["Cleaning · {0}","Nettoyage · {0}","التنظيف · {0}"],
 resp:["Manager","Responsable","المسؤول"],
 signedBy:["Signed by {0} at {1}","Signé par {0} à {1}","وقّع {0} الساعة {1}"],
 notSigned:["Not signed yet","Pas encore signé","لم يوقَّع بعد"],
 sign:["Sign","Signer","توقيع"],remove:["Remove","Retirer","إزالة"],
 tempTitle:["Temperature control","Contrôle des températures","مراقبة درجات الحرارة"],
 limPos:["Limit 0 to 4 °C","Limite 0 à 4 °C","الحد من 0 إلى ⁦4 °C⁩"],
 limNeg:["Limit −18 °C or colder","Limite −18 °C ou moins","الحد ⁦−18 °C⁩ أو أبرد"],
 tap:["tap","saisir","اضغط"],later:["later","plus tard","لاحقاً"],
 obs:["Observations / actions","Observations / actions","ملاحظات / إجراءات"],
 obsNeed:["Reading outside the limit. Add the corrective action.","Relevé hors limite. Ajoutez l'action corrective.","قراءة خارج الحد. أضف الإجراء التصحيحي."],
 tempFoot:["Temperatures in °C. Report any anomaly and note the corrective actions. A reading can be entered from one hour before its time.","Températures en °C. Signaler toute anomalie et noter les actions correctives. Un relevé peut être saisi à partir d'une heure avant son horaire.","درجات الحرارة بـ ⁦°C⁩. بلّغ عن أي خلل ودوّن الإجراءات التصحيحية. يمكن إدخال القراءة قبل موعدها بساعة واحدة."],
 barTitle:["Checklists","Checklists","القوائم"],
 cOpen:["Bar opening","Ouverture bar","افتتاح البار"],cPrep:["Bar prep","Préparation bar","تحضير البار"],cSweet:["Sweet prep","Préparation desserts","تحضير الحلويات"],cClose:["Bar closing","Fermeture bar","إغلاق البار"],cStock:["Bar items","Articles du bar","أصناف البار"],
 note:["Note","Note","ملاحظة"],
 sOk:["OK","OK","متوفر"],sLow:["Low","Bas","قليل"],sOut:["Out","Rupture","نفد"],
 stockFoot:["Tap an item name to add a note, such as the quantity to order.","Touchez le nom d'un article pour ajouter une note, par exemple la quantité à commander.","اضغط على اسم الصنف لإضافة ملاحظة، مثل الكمية المطلوب طلبها."],
 cleanTitle:["Cleaning control sheet","Fiche de contrôle et nettoyage","ورقة مراقبة التنظيف"],
 cleaned:["Cleaned","Nettoyé","تم التنظيف"],notRec:["Not recorded","Non enregistré","غير مسجّل"],todo:["To do","À faire","للتنفيذ"],laterToday:["Later today","Plus tard","لاحقاً اليوم"],
 markClean:["Mark cleaned","Valider","تم التنظيف"],undo:["Undo","Annuler","تراجع"],
 cleanFoot:["Fill in after each round. Your name and the time are recorded when you tap, which replaces the paper signature.","À compléter après chaque passage. Votre nom et l'heure sont enregistrés à chaque validation, ce qui remplace la signature papier.","تُعبّأ بعد كل جولة. يُسجَّل اسمك والوقت عند الضغط، وهذا يحلّ مكان التوقيع الورقي."],
 histTitle:["History","Historique","السجل"],
 histSub:["Every saved day, most recent first. Open one to see its sheets.","Tous les jours enregistrés, du plus récent au plus ancien. Ouvrez-en un pour voir ses fiches.","كل الأيام المحفوظة، الأحدث أولاً. افتح يوماً لعرض أوراقه."],
 histLoad:["Loading saved days…","Chargement des jours enregistrés…","جارٍ تحميل الأيام المحفوظة…"],
 histErr:["The saved days cannot be reached right now.","Les jours enregistrés sont inaccessibles pour l'instant.","تعذّر الوصول إلى الأيام المحفوظة الآن."],
 retry:["Try again","Réessayer","حاول مجدداً"],
 histNone:["No days saved yet.","Aucun jour enregistré.","لا توجد أيام محفوظة بعد."],
 histNoneSub:["Days appear here once the first entry is made.","Les jours apparaissent ici dès la première saisie.","تظهر الأيام هنا بعد أول إدخال."],
 hTemp:["Temperatures","Températures","الحرارة"],hCheck:["Checklists","Checklists","القوائم"],hClean:["Cleaning","Nettoyage","التنظيف"],
 hOut:["{0} out of limit","{0} hors limite","{0} خارج الحد"],
 nameTitle:["Who is filling in the sheets?","Qui remplit les fiches ?","من يعبّئ الأوراق؟"],
 nameHint:["Your name is attached to each entry you make on this device, in place of a signature.","Votre nom est associé à chaque saisie faite sur cet appareil, à la place d'une signature.","يُرفق اسمك بكل إدخال تقوم به على هذا الجهاز بدلاً من التوقيع."],
 firstName:["First name","Prénom","الاسم"],
 cancel:["Cancel","Annuler","إلغاء"],save:["Save","Enregistrer","حفظ"],
 tempHint:["{0}. Read the thermometer and enter what it shows.","{0}. Lisez le thermomètre et saisissez la valeur affichée.","{0}. اقرأ ميزان الحرارة وأدخل القيمة الظاهرة."],
 saveRead:["Save reading","Enregistrer","حفظ القراءة"],clear:["Clear","Effacer","مسح"],
 colder:["One degree colder","Un degré de moins","درجة أقل"],warmer:["One degree warmer","Un degré de plus","درجة أكثر"],
 obsHint:["Anomaly seen and the corrective action taken.","Anomalie constatée et action corrective effectuée.","الخلل الملاحَظ والإجراء التصحيحي المتّخذ."],
 obsAlert:["{0} °C is outside the limit for {1}. Note what you did about it.","{0} °C est hors limite pour {1}. Notez ce que vous avez fait.","⁦{0} °C⁩ خارج الحد لـ {1}. دوّن ما قمت به."],
 noteFor:["Note for {0}","Note pour {0}","ملاحظة عن {0}"],
 stockHint:["For example the quantity left or the amount to order.","Par exemple la quantité restante ou à commander.","مثلاً الكمية المتبقية أو المطلوب طلبها."],
 cleanHint:["Cleaning done / observations","Nettoyage effectué / observations","التنظيف المنفَّذ / ملاحظات"],
 tFull:["Storage is full. Ask the page owner to clear old days.","Le stockage est plein. Demandez au propriétaire de la page de supprimer d'anciens jours.","مساحة التخزين ممتلئة. اطلب من صاحب الصفحة حذف أيام قديمة."],
 tFail:["That entry did not save. Check the connection and try again.","La saisie n'a pas été enregistrée. Vérifiez la connexion et réessayez.","لم يُحفظ الإدخال. تحقق من الاتصال وحاول مجدداً."],
 tCopied:["Day report copied. Paste it into a message or a document.","Rapport copié. Collez-le dans un message ou un document.","تم نسخ التقرير. الصقه في رسالة أو مستند."],
 tNoCopy:["Copying is blocked in this view.","La copie est bloquée dans cette vue.","النسخ غير متاح في هذا العرض."],
 tNumber:["Enter the temperature as a number, for example 3 or −18.","Saisissez la température en chiffres, par exemple 3 ou −18.","أدخل الحرارة كرقم، مثلاً 3 أو ⁦−18⁩."],
 tabCash:["Cash","Caisse","الصندوق"],
 cashTitle:["Cash closing sheet","Fiche de clôture de caisse","ورقة إقفال الصندوق"],
 branch:["Branch / restaurant","Branche / restaurant","الفرع / المطعم"],
 payTitle:["Payment methods","Moyens de paiement","وسائل الدفع"],
 pCb:["Bank card (CB / Visa / Mastercard)","Carte bleue (CB / Visa / Mastercard)","بطاقة مصرفية (CB / Visa / Mastercard)"],
 pTr:["Meal voucher (Ticket restaurant)","Ticket restaurant","قسيمة مطعم (Ticket restaurant)"],
 pAmex:["American Express","American Express","أمريكان إكسبرس"],
 pEsp:["Cash","Espèces","نقداً"],
 nTx:["{0} transactions","{0} transactions","عدد العمليات: {0}"],
 txCount:["Number of transactions","Nb transactions","عدد العمليات"],
 amount:["Amount (€)","Montant (€)","المبلغ (€)"],
 totalPay:["Total takings","Total des encaissements","مجموع المقبوضات"],
 floatTitle:["Cash float","Fonds de caisse","رصيد الصندوق"],
 fOpen:["Float at start of day","Fonds de caisse au début de journée","رصيد الصندوق في بداية اليوم"],
 fClose:["Float at closing (counted)","Fonds de caisse à la clôture (compté)","رصيد الصندوق عند الإقفال (بعد العدّ)"],
 fExp:["Expected at closing","Attendu à la clôture","المتوقَّع عند الإقفال"],
 fExpHint:["Start + cash − purchases","Début + espèces − achats","البداية + النقد − المشتريات"],
 fGap:["Float difference","Écart de fonds de caisse","فرق الصندوق"],
 fGapHint:["Counted − expected","Compté − attendu","المعدود − المتوقَّع"],
 buyTitle:["Purchases (if needed)","Achats (si nécessaire)","المشتريات (عند الحاجة)"],
 buyAdd:["Add a purchase","Ajouter un achat","إضافة عملية شراء"],
 buyLabel:["What was bought","Désignation de l'achat","وصف المشتريات"],
 buyNone:["No purchases recorded.","Aucun achat enregistré.","لا مشتريات مسجّلة."],
 totalBuy:["Total purchases","Total des achats","مجموع المشتريات"],
 totalAfter:["Total after purchases","Total caisse après achats","مجموع الصندوق بعد المشتريات"],
 totalAfterHint:["Takings − purchases","Encaissements − achats","المقبوضات − المشتريات"],
 del:["Delete","Supprimer","حذف"],
 tCash:["Cash closing","Clôture de caisse","إقفال الصندوق"],
 gapAlert:["Cash float difference of {0}","Écart de caisse de {0}","فرق في الصندوق بقيمة ⁦{0}⁩"],
 gapSub:["The counted float does not match the expected amount.","Le fonds compté ne correspond pas au montant attendu.","الرصيد المعدود لا يطابق المبلغ المتوقَّع."],
 tAmount:["Enter the amount as a number, for example 125.50.","Saisissez le montant en chiffres, par exemple 125,50.","أدخل المبلغ كرقم، مثلاً 125.50."],
 tabMeals:["Meals","Repas","الوجبات"],
 mealTitle:["Staff meal sheet","Fiche repas du personnel","ورقة وجبات الموظفين"],
 mealAdd:["Add a staff meal","Ajouter un repas","إضافة وجبة"],
 mealNone:["No staff meals recorded.","Aucun repas enregistré.","لا وجبات مسجّلة."],
 mealItem:["Item","Article","الصنف"],
 mealQty:["Quantity","Quantité","الكمية"],
 mealEmp:["Employee name","Nom de l'employé","اسم الموظف"],
 modSign:["MOD sign","Visa MOD","توقيع المدير المناوب"],
 modBy:["MOD: {0} {1}","MOD : {0} {1}","المدير المناوب: {0} {1}"],
 headChef:["Head Chef","Chef de cuisine","رئيس الطهاة"],
 manager:["Manager","Manager","المدير"],
 tMeals:["Staff meals","Repas du personnel","وجبات الموظفين"],
 mealCount:["{0} recorded","{0} enregistrés","المسجّلة: {0}"],
 mealWait:["Staff meals awaiting MOD signature: {0}","Repas en attente du visa MOD : {0}","وجبات بانتظار توقيع المدير المناوب: {0}"],
 mealFoot:["Each meal is stamped with the name and time of entry. The manager on duty (MOD) then signs each line.","Chaque repas est horodaté avec le nom de la personne qui le saisit. Le manager de service (MOD) vise ensuite chaque ligne.","تُسجَّل كل وجبة مع الاسم ووقت الإدخال، ثم يوقّع المدير المناوب (MOD) على كل سطر."],
 histBtn:["See past days","Voir les jours passés","عرض الأيام السابقة"],
 tQty:["Enter the item and a quantity of at least 1.","Saisissez l'article et une quantité d'au moins 1.","أدخل الصنف وكمية لا تقل عن 1."],
 cRestAm:["Restaurant AM","Restaurant matin","المطعم صباحاً"],cRestPm:["Restaurant PM","Restaurant soir","المطعم مساءً"],
 rNone:["none","aucun","لا شيء"],rChecked:["{0}/{1} checked","{0}/{1} contrôlés","{0}/{1} تم فحصها"]
};
const t=(k,...a)=>{const row=T[k];let s=row?row[LI]:k;a.forEach((v,i)=>{s=s.split("{"+i+"}").join(v);});return s;};
const L=tr=>Array.isArray(tr)?tr[LI]:tr;

/* ---------- The sheets, copied from the paper forms ---------- */
const SLOTS=[10,14,18,21];
const HOURS=[10,11,12,13,14,15,16,17,18,19,20,21,22];
const LIMIT={pos:{min:0,max:4,text:"limPos",quick:[0,1,2,3,4,5,6,7,8]},neg:{min:-40,max:-18,text:"limNeg",quick:[-24,-22,-21,-20,-19,-18,-17,-16,-14]}};
const fr3=n=>["Fridge "+n,"Frigo "+n,"براد "+n], fb3=n=>["Bar fridge "+n,"Frigo bar "+n,"براد البار "+n];
const TEMP={
  bar:{label:["Bar","Bar","البار"],eq:[["fb1",fb3(1),"pos"],["fb2",fb3(2),"pos"],["fb3",fb3(3),"pos"]]},
  cuisine:{label:["Kitchen","Cuisine","المطبخ"],eq:[["cf",["Cold room","Chambre froide","غرفة التبريد"],"pos"],["f1",fr3(1),"pos"],["f2",fr3(2),"pos"],["f3",fr3(3),"pos"],["f4",fr3(4),"pos"],["fp",["Positive fridge","Frigo positif","براد (حرارة موجبة)"],"pos"],["cn",["Negative freezer","Congélateur négatif","فريزر (حرارة سالبة)"],"neg"]]}
};
const CHECK0={
  open:{label:"cOpen",items:[
   ["Turn on all machines at the bar and make sure they are working properly","Allumer toutes les machines du bar et vérifier qu'elles fonctionnent correctement","تشغيل جميع آلات البار والتأكد من أنها تعمل جيداً"],
   ["Make sure the printer is on and working properly","Vérifier que l'imprimante est allumée et fonctionne","التأكد من أن الطابعة مشغّلة وتعمل جيداً"],
   ["Make sure that all machines are clean and well sanitized before each use","Vérifier que toutes les machines sont propres et désinfectées avant chaque utilisation","التأكد من نظافة وتعقيم جميع الآلات قبل كل استعمال"],
   ["Make sure the ice maker is working properly","Vérifier que la machine à glaçons fonctionne","التأكد من أن آلة الثلج تعمل جيداً"],
   ["Make sure all fridges are full and ready for service","Vérifier que tous les frigos sont pleins et prêts pour le service","التأكد من أن جميع البرادات ممتلئة وجاهزة للخدمة"],
   ["Check all the syrup bottles: expiration and cleanliness","Contrôler les bouteilles de sirop : date d'expiration et propreté","فحص قناني الشراب: تاريخ الصلاحية والنظافة"],
   ["Check the sweets display quality and expiry date (inform the chef of any missing item)","Contrôler la vitrine des desserts : qualité et dates d'expiration (prévenir le chef s'il manque un article)","فحص واجهة الحلويات: الجودة وتاريخ الصلاحية (إبلاغ الشيف عن أي صنف ناقص)"],
   ["Make sure all bar tools are clean and ready for use","Vérifier que tous les ustensiles du bar sont propres et prêts","التأكد من أن جميع أدوات البار نظيفة وجاهزة"],
   ["Check the quality and the expiry date of the fresh products","Contrôler la qualité et la date d'expiration des produits frais","فحص جودة وتاريخ صلاحية المنتجات الطازجة"],
   ["Check the ice cream freezer, and make sure it is always clean","Contrôler le congélateur à glaces et vérifier qu'il est toujours propre","فحص فريزر البوظة والتأكد من نظافته دائماً"],
   ["Make sure all items in use are labeled with the right date","Vérifier que tous les produits entamés sont étiquetés avec la bonne date","التأكد من أن جميع الأصناف المستعملة عليها ملصق بالتاريخ الصحيح"],
   ["Make sure you have enough quantity of all items in the store","Vérifier qu'il y a assez de stock de chaque article en réserve","التأكد من توفر كمية كافية من جميع الأصناف في المخزن"]]},
  prep:{label:"cPrep",items:[
   ["Refill the espresso beans grinder","Remplir le moulin à café (espresso)","تعبئة مطحنة حبوب الإسبريسو"],
   ["Cut the ginger into small cuts","Couper le gingembre en petits morceaux","تقطيع الزنجبيل قطعاً صغيرة"],
   ["Put the beer glasses in the freezer","Mettre les verres à bière au congélateur","وضع كؤوس البيرة في الفريزر"],
   ["Lemon slices for sparkling water","Tranches de citron pour l'eau gazeuse","شرائح ليمون للمياه الغازية"],
   ["Avocado (for avocado street…)","Avocat (pour avocado street…)","أفوكادو (لـ avocado street…)"],
   ["Mango juice","Jus de mangue","عصير المانغو"],
   ["Strawberry juice","Jus de fraise","عصير الفراولة"],
   ["Fruit dice for Habib cocktail (red & green apple); strawberry and kiwi on the spot","Dés de fruits pour le cocktail Habib (pomme rouge et verte) ; fraise et kiwi à la minute","مكعبات فواكه لكوكتيل حبيب (تفاح أحمر وأخضر)؛ الفراولة والكيوي عند الطلب"],
   ["Squeeze lemon for lemon juice and for lemonade","Presser les citrons pour le jus de citron et la limonade","عصر الليمون لعصير الليمون والليموناضة"],
   ["Lemonade","Limonade","ليموناضة"],
   ["Mint leaves to blend","Feuilles de menthe à mixer","أوراق نعناع للخلط"],
   ["Mint for garnish","Menthe pour la décoration","نعناع للتزيين"],
   ["Lemon peel for Habib Beirut stamp","Zeste de citron pour le tampon Habib Beirut","قشر ليمون لختم حبيب بيروت"],
   ["Squeeze orange","Presser les oranges","عصر البرتقال"],
   ["Pineapple slices for juice","Tranches d'ananas pour le jus","شرائح أناناس للعصير"],
   ["Watermelon balls for garnish","Billes de pastèque pour la décoration","كرات بطيخ للتزيين"],
   ["Watermelon juice","Jus de pastèque","عصير البطيخ"],
   ["Clean and fill the straw bucket","Nettoyer et remplir le pot à pailles","تنظيف وتعبئة وعاء القش"],
   ["Clean and fill the sugar holder","Nettoyer et remplir le sucrier","تنظيف وتعبئة وعاء السكر"],
   ["Clean and fill the sugar & coffee jars for Turkish coffee","Nettoyer et remplir les pots de sucre et de café pour le café turc","تنظيف وتعبئة أوعية السكر والبن للقهوة التركية"],
   ["Clean and fill the honey squeeze bottle","Nettoyer et remplir le flacon de miel","تنظيف وتعبئة قنينة العسل"],
   ["Clean and fill the crushed pistachio container","Nettoyer et remplir le pot de pistaches concassées","تنظيف وتعبئة وعاء الفستق المطحون"],
   ["Clean and fill the sugar syrup squeeze bottle","Nettoyer et remplir le flacon de sirop de sucre","تنظيف وتعبئة قنينة القطر"]]},
  sweet:{label:"cSweet",items:[
   ["Refill the sugar syrup squeezer","Remplir le flacon de sirop de sucre","تعبئة قنينة القطر"],
   ["Refill the cotton candy bucket","Remplir le bac de barbe à papa","تعبئة وعاء غزل البنات"],
   ["Refill the osmaliyeh sheet bucket","Remplir le bac de feuilles d'osmaliyeh","تعبئة وعاء شعيرية العثملية"],
   ["Refill the tahina squeezer","Remplir le flacon de tahina","تعبئة قنينة الطحينة"],
   ["Refill the debes squeezer","Remplir le flacon de debes","تعبئة قنينة الدبس"],
   ["Refill the sesame seed jar","Remplir le pot de graines de sésame","تعبئة وعاء السمسم"],
   ["Refill the blossom jam jar","Remplir le pot de confiture de fleurs","تعبئة وعاء مربى الزهر"],
   ["Refill the strawberry coulis for pannacotta","Remplir le coulis de fraise pour la pannacotta","تعبئة كولي الفراولة للباناكوتا"],
   ["Refill the osmaliyeh cream","Remplir la crème pour l'osmaliyeh","تعبئة قشطة العثملية"]]},
  close:{label:"cClose",items:[
   ["Double check all labels and expiry dates for all bar items and sweets","Revérifier toutes les étiquettes et dates d'expiration des articles du bar et des desserts","إعادة فحص جميع الملصقات وتواريخ الصلاحية لأصناف البار والحلويات"],
   ["Refill all fridges and make sure to follow FIFO","Remplir tous les frigos en respectant le FIFO","تعبئة جميع البرادات مع اتباع قاعدة FIFO"],
   ["Transfer all the prepared items to clean and suitable containers","Transférer toutes les préparations dans des contenants propres et adaptés","نقل جميع التحضيرات إلى أوعية نظيفة ومناسبة"],
   ["Clean the fridge doors inside and out, and the table top as well","Nettoyer les portes des frigos (intérieur et extérieur) ainsi que le plan de travail","تنظيف أبواب البرادات من الداخل والخارج وسطح الطاولة"],
   ["Sanitize and clean all machines and the cutting board as well","Désinfecter et nettoyer toutes les machines ainsi que la planche à découper","تعقيم وتنظيف جميع الآلات ولوح التقطيع"],
   ["Check the temperature of all fridges and freezers","Relever la température de tous les frigos et congélateurs","فحص حرارة جميع البرادات والفريزرات"],
   ["Clean the ice maker and make sure it is working properly","Nettoyer la machine à glaçons et vérifier qu'elle fonctionne","تنظيف آلة الثلج والتأكد من أنها تعمل جيداً"],
   ["Make sure all containers, jars and buckets are well covered and labeled","Vérifier que tous les contenants, pots et bacs sont bien couverts et étiquetés","التأكد من أن جميع الأوعية والمرطبانات مغطاة وعليها ملصقات"],
   ["Clean the bar top, the shelves and the sink","Nettoyer le comptoir du bar, les étagères et l'évier","تنظيف سطح البار والرفوف والمجلى"],
   ["Make sure that you have made the order for the next day","Vérifier que la commande du lendemain a été passée","التأكد من إرسال طلبية اليوم التالي"],
   ["Make sure that coffee machine, blender, coffee grinder and juicer are off","Vérifier que la machine à café, le blender, le moulin à café et la centrifugeuse sont éteints","التأكد من إطفاء آلة القهوة والخلاط ومطحنة القهوة والعصّارة"]]}
};
const chairs=["Chairs are clean and free of spills or food crumbs","Les chaises sont propres, sans taches ni miettes","الكراسي نظيفة وخالية من البقع أو فتات الطعام"];
const REST=[
 ["Tables are clean and free of spills or food crumbs","Les tables sont propres, sans taches ni miettes","الطاولات نظيفة وخالية من البقع أو فتات الطعام"],
 ["Tables are set according to Karam plan or reservation","Les tables sont dressées selon le plan Karam ou les réservations","الطاولات مجهّزة حسب خطة كرم أو الحجوزات"],
 ["Tables setup is ready according to standard: tables are on the same line and the same distance apart","La mise en place respecte le standard : tables alignées et à égale distance","ترتيب الطاولات مطابق للمعيار: على خط واحد وبمسافة متساوية بينها"],
 ["Niche table on the same line and the same distance","Table de la niche alignée et à la même distance","طاولة الزاوية (niche) على الخط نفسه وبالمسافة نفسها"],
 ["Tables are in good condition and steady","Les tables sont en bon état et stables","الطاولات بحالة جيدة وثابتة"],
 ["Chairs are steady and very well adjusted to the tables","Les chaises sont stables et bien alignées avec les tables","الكراسي ثابتة ومرتّبة جيداً مع الطاولات"],
 chairs,
 ["Plant pots, jars and antika instruments are clean from dust","Pots de plantes, jarres et objets anciens (antika) dépoussiérés","أحواض النباتات والجرار وقطع الأنتيكا خالية من الغبار"],
 ["Display screens are on and in good condition","Les écrans sont allumés et en bon état","الشاشات مشغّلة وبحالة جيدة"],
 ["Check all salt, pepper and condiment boxes on the tables","Vérifier sel, poivre et boîtes à condiments sur les tables","فحص الملح والبهار وعلب التوابل على الطاولات"],
 ["AC is turned on when necessary","La climatisation est allumée si nécessaire","المكيّف مشغّل عند الحاجة"],
 ["AC is functioning properly","La climatisation fonctionne correctement","المكيّف يعمل جيداً"],
 ["Check that all the lighting is turned on and working properly","Vérifier que tous les éclairages sont allumés et fonctionnent","التأكد من أن كل الإضاءة مشغّلة وتعمل جيداً"],
 ["Music is on and volume is suitable","La musique est allumée, à un volume adapté","الموسيقى مشغّلة والصوت مناسب"],
 ["Bread basket and dessert pass are prepared, clean and well organized","Corbeilles à pain et passe desserts prêts, propres et bien rangés","سلال الخبز وباس الحلويات جاهزة ونظيفة ومرتّبة"],
 ["Pass area is clean","Le passe est propre","منطقة الباس نظيفة"],
 ["Debarras section is clean and all the items are in the dishwasher","La zone de débarrassage est propre et tout est au lave-vaisselle","قسم رفع الأطباق نظيف وكل الأغراض في غسّالة الصحون"],
 ["Restaurant shelves are clean and free of dust","Les étagères du restaurant sont propres et sans poussière","رفوف المطعم نظيفة وخالية من الغبار"],
 ["Check for cigarette butts, paper…","Vérifier l'absence de mégots, papiers…","التأكد من عدم وجود أعقاب سجائر أو أوراق…"],
 ["Clean the extinguisher from dust","Dépoussiérer l'extincteur","تنظيف طفاية الحريق من الغبار"],
 ["Windows are clean","Les vitres sont propres","النوافذ نظيفة"],
 ["Doors are not squeaking","Les portes ne grincent pas","الأبواب لا تصدر صريراً"],
 chairs,
 ["Ashtrays on the tables are the same size and not broken","Cendriers sur les tables, de même taille et non cassés","منافض السجائر على الطاولات بالحجم نفسه وغير مكسورة"],
 ["Glass is clean and shiny","Les vitres sont propres et brillantes","الزجاج نظيف ولامع"],
 ["Check all salt, pepper and napkin holders on the tables","Vérifier sel, poivre et porte-serviettes sur les tables","فحص الملح والبهار وحاملات المحارم على الطاولات"],
 ["Cutlery on the same level on all the tables and facing each other","Couverts alignés sur toutes les tables et placés face à face","أدوات المائدة على مستوى واحد على كل الطاولات ومتقابلة"],
 ["Umbrellas are open and clean","Les parasols sont ouverts et propres","المظلات مفتوحة ونظيفة"],
 ["Plant pots are clean from dust","Les pots de plantes sont dépoussiérés","أحواض النباتات خالية من الغبار"]];
const REST_HEADS={0:["Indoor","Intérieur","الداخل"],22:["Terrace","Terrasse","التراس"]};
const CHECK=Object.assign({restAm:{label:"cRestAm",items:REST,heads:REST_HEADS},restPm:{label:"cRestPm",items:REST,heads:REST_HEADS}},CHECK0);
const STOCK=[
  [["Drinks","Boissons","المشروبات"],[
   ["espresso beans","café en grains (espresso)","حبوب إسبريسو"],["fresh milk","lait frais","حليب طازج"],["almond milk","lait d'amande","حليب اللوز"],["coconut milk","lait de coco","حليب جوز الهند"],["tea bags","sachets de thé","أكياس شاي"],["chocolate powder","chocolat en poudre","بودرة الشوكولا"],["lebanese coffee","café libanais","قهوة لبنانية"],["Coca-Cola / Zero","Coca-Cola / Zero","كوكا كولا / زيرو"],["Sprite","Sprite","سبرايت"],["Fanta","Fanta","فانتا"],["ice tea","ice tea","آيس تي"],["soda","soda","صودا"],["red bull","Red Bull","ريد بُل"],["ginger ale","ginger ale","جنجر إيل"],["non alcoholic beer","bière sans alcool","بيرة بدون كحول"],["water big","eau grande","مياه كبيرة"],["water small","eau petite","مياه صغيرة"],["sparkling water 1/2","eau gazeuse 1/2","مياه غازية 1/2"],["sparkling water 1","eau gazeuse 1","مياه غازية 1"]]],
  [["Fruit and mixes","Fruits et préparations","الفواكه والخلطات"],[
   ["avocado","avocat","أفوكادو"],["mango","mangue","مانغو"],["strawberry","fraise","فراولة"],["red apple","pomme rouge","تفاح أحمر"],["green apple","pomme verte","تفاح أخضر"],["lemon / orange","citron / orange","ليمون / برتقال"],["banana / kiwi","banane / kiwi","موز / كيوي"],["pineapple","ananas","أناناس"],["watermelon","pastèque","بطيخ"],["pomegranate","grenade","رمان"],["flavored syrups","sirops aromatisés","شرابات منكّهة"],["blueberry thrill","blueberry thrill","blueberry thrill"],["bullet proof","bullet proof","bullet proof"],["brazilian acai","açaï brésilien","أساي برازيلي"],["oreo biscuit / chocolate sauce","biscuit oreo / sauce chocolat","بسكويت أوريو / صوص شوكولا"],["ice cream","glace","بوظة"]]],
  [["Sweets","Desserts","الحلويات"],[
   ["maamoul bl ghazel","maamoul bl ghazel","معمول بالغزل"],["oum ali / habib osmaliyeh","oum ali / habib osmaliyeh","أم علي / عثملية حبيب"],["mayel ya ghzayel","mayel ya ghzayel","مايل يا غزيّل"],["tarte debes / almond tarte","tarte debes / tarte aux amandes","تارت دبس / تارت لوز"],["mafrouke & pistachio","mafrouke & pistache","مفروكة وفستق"],["halawet el jeben","halawet el jeben","حلاوة الجبن"],["fondant","fondant","فوندان"],["cheese knefe","knefe au fromage","كنافة بالجبن"]]]
];
const STOCK_FLAT=[];STOCK.forEach((grp,gi)=>grp[1].forEach((n,ii)=>STOCK_FLAT.push(["k"+gi+"_"+ii,n])));
const CLEAN={cuisine:["Kitchen","Cuisine","المطبخ"],toilettes:["Toilets","Toilettes","الحمّامات"]};
const VIEWS=["today","temperatures","bar","cleaning","cash","meals","history"];
const ROLLOVER_H=5; /* a service day runs until 05:00, so a closing done after midnight stays on the right day */

/* ---------- small helpers ---------- */
const $=id=>document.getElementById(id);
const esc=s=>String(s==null?"":s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const pad=n=>String(n).padStart(2,"0");
const clone=o=>JSON.parse(JSON.stringify(o||{}));
const ymd=d=>d.getFullYear()+"-"+pad(d.getMonth()+1)+"-"+pad(d.getDate());
const serviceDay=()=>ymd(new Date(Date.now()-ROLLOVER_H*3600e3));
const parse=s=>{const p=s.split("-").map(Number);return new Date(p[0],p[1]-1,p[2]);};
const shift=(s,n)=>{const d=parse(s);d.setDate(d.getDate()+n);return ymd(d);};
const nice=s=>{try{return parse(s).toLocaleDateString(LOCALE[LI],{weekday:"long",day:"numeric",month:"long"});}catch(e){return s;}};
const hm=iso=>{if(!iso)return"";const d=new Date(iso);return isNaN(d)?"":pad(d.getHours())+":"+pad(d.getMinutes());};
const at=(date,h)=>{const d=parse(date);d.setHours(h,0,0,0);return d.getTime();};
const g=(o,...p)=>{for(const k of p){if(o==null||typeof o!=="object")return undefined;o=o[k];}return o==null?undefined:o;};
function merge(a,s){for(const k in s){const v=s[k];if(v&&typeof v==="object"&&!Array.isArray(v)){a[k]=merge(a[k]&&typeof a[k]==="object"?a[k]:{},v);}else a[k]=v;}return a;}
const inRange=(kind,v)=>v>=LIMIT[kind].min&&v<=LIMIT[kind].max;
const deg=v=>String(v).replace("-","−");
const ltr=s=>'<bdi dir="ltr">'+s+'</bdi>';
const slotL=s=>LI===0?s+" h":LI===1?s+" h":s+":00";
const who=e=>esc((e&&e.by)||"");

/* ---------- state ---------- */
const CFG=window.HB_CONFIG||{};
let today=serviceDay(), viewDate=today, day={}, view="today";
let sub={temperatures:"bar",bar:"open",cleaning:"cuisine"};
let name="", mode="loading", cantSave=false, slow=false, online=true, loginBusy=false, loginErr="";
let sb=null, chan=null, slowTimer=null, retryTimer=null, flushing=false, queue={};
let hist=null, sheetSave=null, afterName=null, mem={};
try{name=localStorage.getItem("hb:name")||"";}catch(e){}
try{queue=JSON.parse(localStorage.getItem("hb:queue")||"{}")||{};}catch(e){queue={};}
const readOnly=()=>viewDate!==today||cantSave||mode!=="cloud";
function applyLang(){document.documentElement.lang=LANGS[LI];document.documentElement.dir=LI===2?"rtl":"ltr";}

/* ---------- storage: Supabase database, with a copy on this device for offline use ----------
   Every change is put in a queue first (kept on the phone), then sent to the database.
   If the wifi drops, the queue is sent again automatically when it comes back. */
function localGet(date){try{return JSON.parse(localStorage.getItem("hb:day:"+date)||"null")||{};}catch(e){return clone(mem[date]);}}
function localPut(date,d){mem[date]=clone(d);try{localStorage.setItem("hb:day:"+date,JSON.stringify(d));}catch(e){}}
const saveQueue=()=>{try{localStorage.setItem("hb:queue",JSON.stringify(queue));}catch(e){}};
const queued=()=>Object.keys(queue).length;
function useServer(date,data){ /* server copy + anything not yet sent from this phone */
  const d=merge(clone(data||{}),clone(queue[date]||{}));localPut(date,data||{});return d;
}
async function fetchDay(date){
  const r=await sb.from("days").select("data").eq("day",date).maybeSingle();
  if(r.error)throw r.error;
  return r.data&&r.data.data?r.data.data:{};
}
async function loadDay(){
  if(chan&&sb){sb.removeChannel(chan);chan=null;}
  clearTimeout(slowTimer);slow=false;
  const date=viewDate;
  day=merge(localGet(date),clone(queue[date]||{}));render();
  if(mode!=="cloud")return;
  slowTimer=setTimeout(()=>{slow=true;render();},10000);
  /* live updates: when someone else saves this day, show it here too */
  chan=sb.channel("day-"+date).on("postgres_changes",{event:"*",schema:"public",table:"days",filter:"day=eq."+date},pl=>{
    if(date!==viewDate||flushing||!pl.new||!pl.new.data)return;
    day=useServer(date,pl.new.data);render();
  }).subscribe();
  try{const data=await fetchDay(date);if(date!==viewDate)return;clearTimeout(slowTimer);slow=false;online=true;if(!flushing)day=useServer(date,data);}
  catch(e){if(date!==viewDate)return;clearTimeout(slowTimer);slow=true;}
  render();
}
async function refresh(){ /* safety net if live updates are missed */
  if(mode!=="cloud"||flushing||!$("sheet").hidden)return;
  const date=viewDate;
  try{const data=await fetchDay(date);if(date===viewDate&&!flushing){day=useServer(date,data);slow=false;online=true;render();}}catch(e){}
}
function patch(p){
  if(readOnly())return;
  merge(day,p);
  queue[viewDate]=merge(clone(queue[viewDate]||{}),clone(p));saveQueue();
  render();flush();
}
async function flush(){
  if(flushing||mode!=="cloud"||!queued())return;
  flushing=true;clearTimeout(retryTimer);
  try{
    for(const date of Object.keys(queue)){
      const p=queue[date];
      const r=await sb.rpc("merge_day",{p_day:date,p_patch:p});
      if(r.error)throw r.error;
      if(queue[date]===p)delete queue[date];
      saveQueue();localPut(date,r.data||{});
      if(date===viewDate)day=merge(clone(r.data||{}),clone(queue[date]||{}));
    }
    online=true;
  }catch(e){
    online=false;
    if(e&&e.code==="42501"){cantSave=true;toast(t("cantSave"));}
    retryTimer=setTimeout(flush,15000);
  }finally{flushing=false;render();if(online&&queued())flush();}
}
const stamp=()=>({by:name,at:new Date().toISOString()});

/* ---------- sign in (one shared restaurant account) ---------- */
async function signIn(){
  const pw=($("f-pass")||{}).value||"";
  if(!pw){loginErr=t("wrongPass");render();return;}
  loginBusy=true;loginErr="";render();
  const r=await sb.auth.signInWithPassword({email:CFG.staffEmail,password:pw});
  loginBusy=false;
  if(r.error){loginErr=r.error.status===400?t("wrongPass"):t("noNet");render();return;}
  startCloud();
}
function startCloud(){mode="cloud";loadDay();flush();if(view==="history")loadHistory();if(!name)nameSheet();}
async function signOut(){closeSheet();try{await sb.auth.signOut();}catch(e){}mode="login";if(chan){sb.removeChannel(chan);chan=null;}render();}
function vLogin(){
  return '<h2>'+esc(t("loginTitle"))+'</h2><p class="sub">'+esc(t("loginHint"))+'</p><div class="card login">'+
   '<label for="f-pass">'+esc(t("password"))+'</label><input type="password" id="f-pass" autocomplete="current-password">'+
   (loginErr?'<p class="err">'+esc(loginErr)+'</p>':"")+
   '<button class="btn" data-act="signin"'+(loginBusy?" disabled":"")+'>'+esc(loginBusy?t("signingIn"):t("signIn"))+'</button></div>';
}
function vSetup(){return '<h2>'+esc(t("setupTitle"))+'</h2><div class="banner warn">'+esc(t("setupHint"))+'</div>';}

/* ---------- counts ---------- */
function tempStats(d,area){
  const out={filled:0,total:TEMP[area].eq.length*SLOTS.length,alerts:[],open:[]};
  for(const [id,nm,kind] of TEMP[area].eq){
    let bad=false;
    for(const s of SLOTS){const v=g(d,"temp",area,id,"s"+s,"v");if(typeof v==="number"){out.filled++;if(!inRange(kind,v)){bad=true;out.alerts.push({id,nm,s,v});}}}
    if(bad&&!g(d,"temp",area,id,"obs"))out.open.push(id);
  }
  return out;
}
const checkDone=(d,key)=>CHECK[key].items.filter((_,i)=>g(d,"check",key,"i"+i,"at")).length;
function stockStats(d){const r={n:0,low:[],out:[]};for(const [id,nm] of STOCK_FLAT){const s=g(d,"stock",id,"s");if(s){r.n++;if(s==="low")r.low.push(L(nm));if(s==="out")r.out.push(L(nm));}}return r;}
const cleanDone=(d,area)=>HOURS.filter(h=>g(d,"clean",area,"h"+h,"at")).length;
const isPast=(date,h,graceMin)=>date!==today||Date.now()>at(date,h)+graceMin*60e3;
const isOpen=(date,h,leadMin)=>date!==today||Date.now()>=at(date,h)-leadMin*60e3;

/* ---------- rendering ---------- */
function render(){
  const seg=document.querySelector(".seg"),sl=seg?seg.scrollLeft:0;
  renderHead();
  const b=[];
  if(mode==="loading")b.push('<div class="banner">'+esc(t("connecting"))+'</div>');
  if(mode==="cloud"&&!online&&queued())b.push('<div class="banner warn">'+esc(t("unsent"))+'</div>');
  if(slow)b.push('<div class="banner warn">'+esc(t("slow"))+'</div>');
  if(cantSave)b.push('<div class="banner crit">'+esc(t("cantSave"))+'</div>');
  if(viewDate!==today&&view!=="history")b.push('<div class="banner">'+esc(t("viewingPast",nice(viewDate)))+'</div>');
  const body=mode==="login"?vLogin():mode==="setup"?vSetup():view==="temperatures"?vTemp():view==="bar"?vBar():view==="cleaning"?vClean():view==="cash"?vCash():view==="meals"?vMeals():view==="history"?vHistory():vToday();
  $("main").innerHTML=b.join("")+body+'<p class="foot copy" dir="ltr">App © 2026 Sinette · Habib Beirut</p>';
  const seg2=document.querySelector(".seg");if(seg2)seg2.scrollLeft=sl;
  renderTabs();
}
function renderHead(){
  const rtl=LI===2;
  $("head").innerHTML=
  '<div class="brandrow"><div class="brand">Habib Beirut<small>'+esc(t("tagline"))+'</small></div><div class="hbtns">'+
  '<button class="who lang" data-act="lang" aria-label="'+esc(t("language"))+'">'+LANGTAG[LI]+'</button>'+
  '<button class="who'+(name?'':' unset')+'" data-act="name">'+(name?esc(name):esc(t("setName")))+'</button></div></div>'+
  '<div class="daterow"><button data-act="prev" aria-label="'+esc(t("prevDay"))+'">'+(rtl?"›":"‹")+'</button>'+
  '<div class="day">'+esc(nice(viewDate))+'<span>'+esc(viewDate===today?t("today"):t("pastRO"))+'</span></div>'+
  (viewDate===today?'':'<button class="tod" data-act="tod">'+esc(t("today"))+'</button>')+
  '<button data-act="next" aria-label="'+esc(t("nextDay"))+'"'+(viewDate>=today?" disabled":"")+'>'+(rtl?"‹":"›")+'</button></div>';
}
const ICON={today:'<path d="M4 6h16M4 12h10M4 18h13"/><circle cx="19" cy="12" r="1.6"/>',
 temperatures:'<path d="M10 4a2 2 0 0 1 4 0v9.5a4 4 0 1 1-4 0z"/><path d="M12 9v7"/>',
 bar:'<path d="M10 6h10M10 12h10M10 18h10"/><path d="M3.5 6l1.2 1.2L7 5M3.5 12l1.2 1.2L7 11M3.5 18l1.2 1.2L7 17"/>',
 meals:'<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3.5"/>',
 cleaning:'<path d="M12 3l1.8 4.6L18 9l-4.2 1.4L12 15l-1.8-4.6L6 9l4.2-1.4z"/><path d="M18 15l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z"/>',
 cash:'<rect x="3" y="6.5" width="18" height="11" rx="2"/><circle cx="12" cy="12" r="2.4"/><path d="M6.5 9.5v5M17.5 9.5v5"/>',
 history:'<circle cx="12" cy="12" r="8"/><path d="M12 8v4l3 2"/>'};
const TABKEY={today:"tabToday",temperatures:"tabTemp",bar:"tabBar",cleaning:"tabClean",cash:"tabCash",meals:"tabMeals",history:"tabHist"};
function renderTabs(){$("tabs").innerHTML=VIEWS.filter(v=>v!=="history").map(v=>'<a href="#'+v+'"'+(v===view?' aria-current="page"':'')+'><svg viewBox="0 0 24 24" aria-hidden="true">'+ICON[v]+'</svg>'+esc(t(TABKEY[v]))+'</a>').join("");}
const segHtml=(key,opts)=>'<div class="seg" role="group">'+opts.map(o=>'<button data-act="sub" data-k="'+key+'" data-v="'+o[0]+'" aria-pressed="'+(sub[key]===o[0])+'">'+esc(o[1])+'<span class="n num">'+ltr(o[2])+'</span></button>').join("")+'</div>';

function attention(d,date){
  const a=[];
  for(const area in TEMP){
    const st=tempStats(d,area),al0=L(TEMP[area].label);
    for(const al of st.alerts)a.push({c:"crit",t:t("readAt",L(al.nm),deg(al.v),slotL(al.s)),s:st.open.includes(al.id)?t("outNeed"):t("outNoted"),go:["temperatures",area]});
    for(const s of SLOTS){if(!isPast(date,s,60))continue;const miss=TEMP[area].eq.filter(e=>typeof g(d,"temp",area,e[0],"s"+s,"v")!=="number").length;
      if(miss)a.push({c:"",t:t("missRead",al0,slotL(s)),s:t("nOfM",miss,TEMP[area].eq.length),go:["temperatures",area]});}
  }
  for(const area in CLEAN){const miss=HOURS.filter(h=>isPast(date,h,60)&&!g(d,"clean",area,"h"+h,"at"));
    if(miss.length)a.push({c:"",t:t("cleanMiss",L(CLEAN[area])),s:miss.map(h=>h+":00").join(", "),go:["cleaning",area]});}
  const sk=stockStats(d);
  if(sk.out.length)a.push({c:"crit",t:t("outStock"),s:sk.out.join(", "),go:["bar","stock"]});
  if(sk.low.length)a.push({c:"",t:t("lowStock"),s:sk.low.join(", "),go:["bar","stock"]});
  const mw=mealWaiting(d);if(mw)a.push({c:"",t:t("mealWait",mw),s:t("modSign"),go:["meals",""]});
  const cs=cashStats(d);
  if(cs.gap!==null&&cs.gap!==0)a.push({c:"crit",t:t("gapAlert",moneyT(cs.gap)),s:t("gapSub"),go:["cash",""]});
  return a;
}
function tile(title,n,total,go,alert){
  const done=n>=total;
  return '<button class="tile'+(done?" done":"")+(alert?" alert":"")+'" data-act="go" data-view="'+go[0]+'" data-sub="'+go[1]+'"><span class="t">'+esc(title)+'</span>'+
  '<span class="c num">'+t("of","<b>"+n+"</b>",total)+(done?" · "+esc(t("complete")):"")+'</span><span class="bar"><i style="width:'+Math.round(100*n/total)+'%"></i></span></button>';
}
function vToday(){
  const a=attention(day,viewDate),tb=tempStats(day,"bar"),tc=tempStats(day,"cuisine"),sk=stockStats(day);
  let h='<h2>'+esc(viewDate===today?t("glance"):t("daySum"))+'</h2>';
  h+='<h3>'+esc(t("attention"))+'</h3><div class="card list">';
  if(!a.length)h+='<div class="attn"><span class="dot ok"></span><span>'+esc(t("allGood"))+'</span></div>';
  else h+=a.map(x=>'<button class="attn" data-act="go" data-view="'+x.go[0]+'" data-sub="'+x.go[1]+'"><span class="dot '+x.c+'"></span><span>'+esc(x.t)+'<small>'+esc(x.s)+'</small></span></button>').join("");
  h+='</div><h3>'+esc(t("sheets"))+'</h3><div class="tiles">'+
    tile(t("tTemp",L(TEMP.bar.label)),tb.filled,tb.total,["temperatures","bar"],tb.open.length)+
    tile(t("tTemp",L(TEMP.cuisine.label)),tc.filled,tc.total,["temperatures","cuisine"],tc.open.length)+
    Object.keys(CHECK).map(k=>tile(t("tCheck",t(CHECK[k].label)),checkDone(day,k),CHECK[k].items.length,["bar",k])).join("")+
    tile(t("tStock"),sk.n,STOCK_FLAT.length,["bar","stock"])+
    Object.keys(CLEAN).map(k=>tile(t("tClean",L(CLEAN[k])),cleanDone(day,k),HOURS.length,["cleaning",k])).join("")+
    (c=>tile(t("tCash"),c.filled,6,["cash",""],c.gap!==null&&c.gap!==0))(cashStats(day))+
    '<button class="tile" data-act="go" data-view="meals" data-sub=""><span class="t">'+esc(t("tMeals"))+'</span><span class="c num">'+t("mealCount","<b>"+mealList(day).length+"</b>")+'</span></button>'+
  '</div><button class="btn ghost" data-act="copy">'+esc(t("copy"))+'</button><a class="btn ghost" href="#history">'+esc(t("histBtn"))+'</a>';
  return h;
}
function signRow(key,labelKey){
  const s=g(day,"sign",key),on=s&&s.at;
  return '<div class="card sign"><p><b>'+esc(t(labelKey||"resp"))+'</b>'+esc(on?t("signedBy",s.by||"",hm(s.at)):t("notSigned"))+'</p>'+
  (readOnly()?"":'<button class="btn sm'+(on?" ghost":"")+'" data-act="sign" data-key="'+key+'">'+esc(on?t("remove"):t("sign"))+'</button>')+'</div>';
}
function vTemp(){
  const area=sub.temperatures,ro=readOnly();
  let h='<h2>'+esc(t("tempTitle"))+'</h2>'+segHtml("temperatures",Object.keys(TEMP).map(k=>{const s=tempStats(day,k);return[k,L(TEMP[k].label),s.filled+"/"+s.total];}));
  h+='<div class="card list">';
  for(const [id,nm,kind] of TEMP[area].eq){
    let bad=false;
    const cells=SLOTS.map(s=>{
      const e=g(day,"temp",area,id,"s"+s),v=e&&typeof e.v==="number"?e.v:null,open=isOpen(viewDate,s,60);
      let cls="slot";if(v!==null){if(inRange(kind,v))cls+=" ok";else{cls+=" bad";bad=true;}}else if(isPast(viewDate,s,60))cls+=" due";
      return '<button class="'+cls+'" data-act="temp" data-eq="'+id+'" data-slot="'+s+'"'+((ro||!open)?" disabled":"")+' aria-label="'+esc(L(nm))+" "+slotL(s)+'"><span class="h">'+ltr(slotL(s))+'</span><span class="v num">'+(v!==null?ltr(deg(v)+"<small>°C</small>"):"–")+'</span><span class="m">'+(v!==null?who(e)+" "+hm(e.at):esc(open?t("tap"):t("later")))+'</span></button>';
    }).join("");
    const obs=g(day,"temp",area,id,"obs");
    h+='<div class="eq"><div class="eqhead"><b>'+esc(L(nm))+'</b><span>'+esc(t(LIMIT[kind].text))+'</span></div><div class="slots">'+cells+'</div>'+
      ((obs||bad||!ro)?'<button class="obs'+(obs?" has":bad?" need":"")+'" data-act="obs" data-eq="'+id+'"'+(ro?" disabled":"")+'>'+esc(obs?obs:bad?t("obsNeed"):t("obs"))+'</button>':"")+'</div>';
  }
  return h+'</div>'+signRow("temp_"+area)+'<p class="foot">'+esc(t("tempFoot"))+'</p>';
}
function vBar(){
  const k=sub.bar,ro=readOnly(),sk=stockStats(day);
  let h='<h2>'+esc(t("barTitle"))+'</h2>'+segHtml("bar",Object.keys(CHECK).map(x=>[x,t(CHECK[x].label),checkDone(day,x)+"/"+CHECK[x].items.length]).concat([["stock",t("cStock"),sk.n+"/"+STOCK_FLAT.length]]));
  if(k==="stock"){
    let n=0;
    for(const [grp,items] of STOCK){
      h+='<h3>'+esc(L(grp))+'</h3><div class="card list">';
      for(const nm of items){const id=STOCK_FLAT[n++][0],e=g(day,"stock",id)||{};
        h+='<div class="row stock"><button class="body" data-act="stocknote" data-id="'+id+'"'+(ro?" disabled":"")+'>'+esc(L(nm))+(e.note?'<span class="note">'+esc(e.note)+'</span>':"")+'</button><div class="tri">'+
        [["ok","sOk"],["low","sLow"],["out","sOut"]].map(o=>'<button class="s-'+o[0]+'" data-act="stock" data-id="'+id+'" data-s="'+o[0]+'" aria-pressed="'+(e.s===o[0])+'"'+(ro?" disabled":"")+'>'+esc(t(o[1]))+'</button>').join("")+'</div></div>';}
      h+='</div>';
    }
    return h+'<p class="foot">'+esc(t("stockFoot"))+'</p>';
  }
  const hd=CHECK[k].heads;h+=(hd?"":'<div class="card list">')+CHECK[k].items.map((tx,i)=>{const e=g(day,"check",k,"i"+i)||{};const on=!!e.at,lab=esc(L(tx));
    return (hd&&hd[i]?(i?"</div>":"")+'<h3>'+esc(L(hd[i]))+'</h3><div class="card list">':"")+'<div class="row'+(on?" on":"")+'"><button class="chk" data-act="check" data-id="i'+i+'" aria-pressed="'+on+'" aria-label="'+lab+'"'+(ro?" disabled":"")+'><svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></button>'+
    '<button class="body" data-act="check" data-id="i'+i+'"'+(ro?" disabled":"")+'><span class="tx">'+lab+'</span>'+(on?'<span class="meta">'+who(e)+" · "+hm(e.at)+'</span>':"")+(e.note?'<span class="note">'+esc(e.note)+'</span>':"")+'</button>'+
    (ro?"":'<button class="mini" data-act="checknote" data-id="i'+i+'">'+esc(t("note"))+'</button>')+'</div>';}).join("")+'</div>';
  return h;
}
function vClean(){
  const area=sub.cleaning,ro=readOnly();
  let h='<h2>'+esc(t("cleanTitle"))+'</h2>'+segHtml("cleaning",Object.keys(CLEAN).map(k=>[k,L(CLEAN[k]),cleanDone(day,k)+"/"+HOURS.length]));
  h+='<div class="card list">'+HOURS.map(hr=>{const e=g(day,"clean",area,"h"+hr)||{},done=!!e.at,open=isOpen(viewDate,hr,30),miss=!done&&isPast(viewDate,hr,60);
    return '<div class="hr'+(miss?" miss":"")+'"><span class="time num">'+hr+':00</span><span class="st">'+
    (done?'<b>'+esc(t("cleaned"))+'</b>'+who(e)+" · "+hm(e.at):esc(miss?t("notRec"):open?t("todo"):t("laterToday")))+(e.note?'<span class="note">'+esc(e.note)+'</span>':"")+'</span>'+
    (ro?"":done?'<button class="mini" data-act="cleannote" data-h="'+hr+'">'+esc(t("note"))+'</button><button class="mini" data-act="cleanundo" data-h="'+hr+'">'+esc(t("undo"))+'</button>':'<button class="btn sm" data-act="clean" data-h="'+hr+'"'+(open?"":" disabled")+'>'+esc(t("markClean"))+'</button>')+'</div>';}).join("")+'</div>';
  return h+signRow("clean_"+area)+'<p class="foot">'+esc(t("cleanFoot"))+'</p>';
}
function daySummary(d,date){
  let tf=0,tt=0,al=0;for(const a in TEMP){const s=tempStats(d,a);tf+=s.filled;tt+=s.total;al+=s.alerts.length;}
  let cd=0,ct=0;for(const k in CHECK){cd+=checkDone(d,k);ct+=CHECK[k].items.length;}
  let cl=0;for(const a in CLEAN)cl+=cleanDone(d,a);
  return '<button class="hrow" data-act="open" data-date="'+esc(date)+'"><b>'+esc(nice(date))+'</b><span class="chips num">'+
   '<span class="chip'+(tf>=tt?" ok":"")+'">'+esc(t("hTemp"))+' '+ltr(tf+'/'+tt)+'</span><span class="chip'+(cd>=ct?" ok":"")+'">'+esc(t("hCheck"))+' '+ltr(cd+'/'+ct)+'</span>'+
   '<span class="chip'+(cl>=HOURS.length*2?" ok":"")+'">'+esc(t("hClean"))+' '+ltr(cl+'/'+HOURS.length*2)+'</span>'+(al?'<span class="chip crit">'+esc(t("hOut",al))+'</span>':"")+'</span></button>';
}
function vHistory(){
  let h='<h2>'+esc(t("histTitle"))+'</h2><p class="sub">'+esc(t("histSub"))+'</p>';
  if(hist===null)return h+'<div class="banner">'+esc(t("histLoad"))+'</div>';
  if(hist==="error")return h+'<div class="banner warn">'+esc(t("histErr"))+'</div><button class="btn ghost" data-act="reload">'+esc(t("retry"))+'</button>';
  if(!hist.length)return h+'<div class="card"><div class="attn"><span class="dot ok"></span><span>'+esc(t("histNone"))+'<small>'+esc(t("histNoneSub"))+'</small></span></div></div>';
  return h+'<div class="card list">'+hist.map(x=>daySummary(x.d,x.date)).join("")+'</div>';
}
async function loadHistory(){
  hist=null;render();
  if(mode!=="cloud")return;
  try{
    const r=await sb.from("days").select("day,data").order("day",{ascending:false}).limit(60);
    if(r.error)throw r.error;
    hist=r.data.map(x=>({date:x.day,d:x.data||{}}));
  }catch(e){hist="error";}
  render();
}
function report(){
  const R=["Habib Beirut · "+nice(viewDate),""];
  const sg=k=>{const s=g(day,"sign",k);return "  "+t("resp")+": "+(s&&s.at?(s.by||"")+" "+hm(s.at):t("notSigned"));};
  for(const a in TEMP){R.push(t("tTemp",L(TEMP[a].label)).toUpperCase()+" (°C)  "+SLOTS.map(slotL).join(" / "));
    for(const [id,nm] of TEMP[a].eq){R.push("  "+L(nm)+": "+SLOTS.map(s=>{const v=g(day,"temp",a,id,"s"+s,"v");return typeof v==="number"?v:"–";}).join(" / ")+(g(day,"temp",a,id,"obs")?"  | "+g(day,"temp",a,id,"obs"):""));}
    R.push(sg("temp_"+a),"");}
  for(const k in CHECK){R.push(t("tCheck",t(CHECK[k].label)).toUpperCase()+" ("+checkDone(day,k)+"/"+CHECK[k].items.length+")");
    CHECK[k].items.forEach((tx,i)=>{const e=g(day,"check",k,"i"+i)||{};R.push("  ["+(e.at?"x":" ")+"] "+L(tx)+(e.at?" ("+(e.by||"")+" "+hm(e.at)+")":"")+(e.note?" | "+e.note:""));});R.push("");}
  const sk=stockStats(day);R.push(t("cStock").toUpperCase()+": "+t("rChecked",sk.n,STOCK_FLAT.length),"  "+t("outStock")+": "+(sk.out.join(", ")||t("rNone")),"  "+t("lowStock")+": "+(sk.low.join(", ")||t("rNone")),"");
  for(const a in CLEAN){R.push(t("tClean",L(CLEAN[a])).toUpperCase());
    for(const h of HOURS){const e=g(day,"clean",a,"h"+h)||{};R.push("  "+h+":00  "+(e.at?(e.by||"")+" "+hm(e.at):"–")+(e.note?" | "+e.note:""));}
    R.push(sg("clean_"+a),"");}
  mealReport(R);cashReport(R);R.push(sg("cash"));
  return R.join("\n");
}

/* ---------- cash closing sheet ---------- */
const PAY=[["cb","pCb"],["tr","pTr"],["amex","pAmex"],["esp","pEsp"]];
const BRANCH=[["malakoff","Habib Beirut Malakoff"],["bistro","Habib Beirut Bistro"]];
const isNum=v=>typeof v==="number"&&isFinite(v);
const r2=x=>Math.round(x*100)/100;
const moneyT=v=>v.toLocaleString(LOCALE[LI],{minimumFractionDigits:2,maximumFractionDigits:2})+" €";
const money=v=>ltr(esc(moneyT(v)));
function cashStats(d){
  const c=(d&&d.cash)||{},s={c,filled:0,total:0,buys:[],totalBuy:0};
  for(const [id] of PAY){const a=g(c,"pay",id,"a");if(isNum(a)){s.filled++;s.total+=a;}}
  const b=c.buys||{};for(const id in b){if(b[id]&&isNum(b[id].amt)){s.buys.push(Object.assign({id},b[id]));s.totalBuy+=b[id].amt;}}
  s.buys.sort((x,y)=>String(x.at)<String(y.at)?-1:1);
  s.total=r2(s.total);s.totalBuy=r2(s.totalBuy);s.after=r2(s.total-s.totalBuy);
  s.open=g(c,"open","v");s.close=g(c,"close","v");
  if(isNum(s.open))s.filled++;if(isNum(s.close))s.filled++;
  const esp=g(c,"pay","esp","a");
  s.exp=isNum(s.open)?r2(s.open+(isNum(esp)?esp:0)-s.totalBuy):null;
  s.gap=isNum(s.close)&&s.exp!==null?r2(s.close-s.exp):null;
  return s;
}
function vCash(){
  const ro=readOnly(),s=cashStats(day),c=s.c,dis=ro?" disabled":"";
  const amt=(v,cls)=>isNum(v)?'<span class="amt num '+(cls||"")+'">'+money(v)+'</span>':'<span class="amt empty">'+(ro?"–":esc(t("tap")))+'</span>';
  let h='<h2>'+esc(t("cashTitle"))+'</h2><h3>'+esc(t("branch"))+'</h3><div class="seg" role="group">'+
    BRANCH.map(b=>'<button data-act="branch" data-v="'+b[0]+'" aria-pressed="'+(c.branch===b[0])+'"'+dis+'>'+esc(b[1])+'</button>').join("")+'</div>';
  h+='<h3>'+esc(t("payTitle"))+'</h3><div class="card list">'+PAY.map(p=>{const e=g(c,"pay",p[0])||{};
    return '<button class="crow" data-act="pay" data-id="'+p[0]+'"'+dis+'><span>'+esc(t(p[1]))+(isNum(e.n)?'<small>'+esc(t("nTx",e.n))+'</small>':"")+'</span>'+amt(e.a)+'</button>';}).join("")+
    '<div class="crow total"><b>'+esc(t("totalPay"))+'</b><span class="amt num">'+money(s.total)+'</span></div></div>';
  h+='<h3>'+esc(t("floatTitle"))+'</h3><div class="card list">'+
    '<button class="crow" data-act="float" data-k="open"'+dis+'><span>'+esc(t("fOpen"))+'</span>'+amt(s.open)+'</button>'+
    '<button class="crow" data-act="float" data-k="close"'+dis+'><span>'+esc(t("fClose"))+'</span>'+amt(s.close)+'</button>'+
    '<div class="crow"><span>'+esc(t("fExp"))+'<small>'+esc(t("fExpHint"))+'</small></span><span class="amt num">'+(s.exp!==null?money(s.exp):"–")+'</span></div>'+
    '<div class="crow total"><span><b>'+esc(t("fGap"))+'</b><small>'+esc(t("fGapHint"))+'</small></span><span class="amt num '+(s.gap===null?"":s.gap===0?"good":"bad")+'">'+(s.gap!==null?money(s.gap):"–")+'</span></div></div>';
  h+='<h3>'+esc(t("buyTitle"))+'</h3><div class="card list">'+
    (s.buys.length?s.buys.map(b=>'<button class="crow" data-act="buy" data-id="'+esc(b.id)+'"'+dis+'><span>'+esc(b.label||"")+'<small>'+who(b)+" · "+hm(b.at)+'</small></span><span class="amt num">'+money(b.amt)+'</span></button>').join(""):'<div class="crow"><span class="mut">'+esc(t("buyNone"))+'</span></div>')+
    '<div class="crow total"><b>'+esc(t("totalBuy"))+'</b><span class="amt num">'+money(s.totalBuy)+'</span></div>'+
    '<div class="crow total"><span><b>'+esc(t("totalAfter"))+'</b><small>'+esc(t("totalAfterHint"))+'</small></span><span class="amt num">'+money(s.after)+'</span></div></div>'+
    (ro?"":'<button class="btn ghost" data-act="buy" data-id="">'+esc(t("buyAdd"))+'</button>');
  return h+signRow("cash");
}
const field=(id,label,val,mode)=>'<label for="'+id+'">'+esc(label)+'</label><input type="text" id="'+id+'" dir="'+(mode?"ltr":"auto")+'"'+(mode?' inputmode="'+mode+'"':"")+' autocomplete="off" maxlength="80" value="'+esc(val==null?"":val)+'">';
function paySheet(id){
  const e=g(day,"cash","pay",id)||{};sheetSave={id};
  openSheet('<h4>'+esc(t(PAY.find(p=>p[0]===id)[1]))+'</h4>'+field("f-amt",t("amount"),e.a,"decimal")+field("f-n",t("txCount"),e.n,"numeric")+acts("savepay",t("save")));
}
function floatSheet(k){
  sheetSave={k};
  openSheet('<h4>'+esc(t(k==="open"?"fOpen":"fClose"))+'</h4>'+field("f-amt",t("amount"),g(day,"cash",k,"v"),"decimal")+acts("savefloat",t("save")));
}
function buySheet(id){
  const e=(id&&g(day,"cash","buys",id))||{};sheetSave={id:id||""};
  openSheet('<h4>'+esc(t("buyTitle"))+'</h4>'+field("f-label",t("buyLabel"),e.label,"")+field("f-amt",t("amount"),e.amt,"decimal")+
   '<div class="acts">'+(id?'<button class="btn danger" data-act="delbuy">'+esc(t("del"))+'</button>':'<button class="btn ghost" data-act="cancel">'+esc(t("cancel"))+'</button>')+'<button class="btn" data-act="savebuy">'+esc(t("save"))+'</button></div>');
}
/* "" = left empty, null = not a valid amount */
const readAmt=()=>{const s=($("f-amt").value||"").trim().replace(/\s/g,"").replace(",",".").replace("€","");if(s==="")return"";const v=Number(s);return isNaN(v)||v<0||v>1e7?null:r2(v);};
function cashAct(a,d){
  if(a==="branch")withName(()=>patch({cash:{branch:g(day,"cash","branch")===d.v?null:d.v}}));
  else if(a==="pay")withName(()=>paySheet(d.id));
  else if(a==="float")withName(()=>floatSheet(d.k));
  else if(a==="buy")withName(()=>buySheet(d.id));
  else if(a==="savepay"){const s=sheetSave,v=readAmt(),ns=($("f-n").value||"").trim(),n=ns===""?null:parseInt(ns,10);
    if(v===null||(n!==null&&(isNaN(n)||n<0))){toast(t("tAmount"));return;}
    closeSheet();patch({cash:{pay:{[s.id]:v===""&&n===null?{a:null,n:null,by:null,at:null}:Object.assign({a:v===""?null:v,n},stamp())}}});}
  else if(a==="savefloat"){const s=sheetSave,v=readAmt();if(v===null){toast(t("tAmount"));return;}closeSheet();patch({cash:{[s.k]:v===""?null:Object.assign({v},stamp())}});}
  else if(a==="savebuy"){const s=sheetSave,v=readAmt(),label=$("f-label").value.trim();
    if(!label){$("f-label").focus();return;}if(v===null||v===""){toast(t("tAmount"));return;}
    closeSheet();patch({cash:{buys:{[s.id||"b"+Date.now().toString(36)]:Object.assign({label,amt:v},stamp())}}});}
  else if(a==="delbuy"){const s=sheetSave;closeSheet();patch({cash:{buys:{[s.id]:null}}});}
  else return false;
  return true;
}
function cashReport(R){
  const s=cashStats(day),c=s.c,m=v=>isNum(v)?moneyT(v):"–",br=BRANCH.find(b=>b[0]===c.branch);
  R.push(t("cashTitle").toUpperCase()+(br?" · "+br[1]:""));
  for(const p of PAY){const e=g(c,"pay",p[0])||{};R.push("  "+t(p[1])+": "+m(e.a)+(isNum(e.n)?" ("+t("nTx",e.n)+")":""));}
  R.push("  "+t("totalPay")+": "+m(s.total),"  "+t("fOpen")+": "+m(s.open),"  "+t("fClose")+": "+m(s.close),"  "+t("fExp")+": "+m(s.exp),"  "+t("fGap")+": "+m(s.gap));
  for(const b of s.buys)R.push("  "+t("buyTitle")+": "+(b.label||"")+" "+m(b.amt));
  R.push("  "+t("totalBuy")+": "+m(s.totalBuy),"  "+t("totalAfter")+": "+m(s.after));
}

/* ---------- staff meal sheet ---------- */
function mealList(d){const m=(d&&d.meals)||{},out=[];for(const id in m){if(m[id]&&m[id].item)out.push(Object.assign({id},m[id]));}return out.sort((x,y)=>String(x.at)<String(y.at)?-1:1);}
const mealWaiting=d=>mealList(d).filter(m=>!g(m,"mod","at")).length;
function vMeals(){
  const ro=readOnly(),list=mealList(day);
  let h='<h2>'+esc(t("mealTitle"))+'</h2><div class="card list">'+
   (list.length?list.map(m=>{const mod=g(m,"mod","at");
     return '<div class="mrow"><button class="body" data-act="meal" data-id="'+esc(m.id)+'"'+(ro?" disabled":"")+'>'+esc(m.item)+' <b class="num">× '+esc(m.qty)+'</b><small>'+esc(m.emp||"")+" · "+hm(m.at)+'</small></button>'+
     (mod?'<button class="chip ok" data-act="mealmod" data-id="'+esc(m.id)+'"'+(ro?" disabled":"")+'>'+esc(t("modBy",m.mod.by||"",hm(m.mod.at)))+'</button>':ro?"":'<button class="btn sm" data-act="mealmod" data-id="'+esc(m.id)+'">'+esc(t("modSign"))+'</button>')+'</div>';}).join("")
    :'<div class="crow"><span class="mut">'+esc(t("mealNone"))+'</span></div>')+'</div>'+
   (ro?"":'<button class="btn ghost" data-act="meal" data-id="">'+esc(t("mealAdd"))+'</button>');
  return h+signRow("meal_chef","headChef")+signRow("meal_mgr","manager")+'<p class="foot">'+esc(t("mealFoot"))+'</p>';
}
function mealSheet(id){
  const e=(id&&g(day,"meals",id))||{};sheetSave={id:id||""};
  openSheet('<h4>'+esc(t("mealTitle"))+'</h4>'+field("f-item",t("mealItem"),e.item,"")+field("f-qty",t("mealQty"),e.qty==null?1:e.qty,"numeric")+field("f-emp",t("mealEmp"),e.emp==null?name:e.emp,"")+
   '<div class="acts">'+(id?'<button class="btn danger" data-act="delmeal">'+esc(t("del"))+'</button>':'<button class="btn ghost" data-act="cancel">'+esc(t("cancel"))+'</button>')+'<button class="btn" data-act="savemeal">'+esc(t("save"))+'</button></div>');
}
function mealAct(a,d){
  if(a==="meal")withName(()=>mealSheet(d.id));
  else if(a==="mealmod")withName(()=>{const on=!!g(day,"meals",d.id,"mod","at");patch({meals:{[d.id]:{mod:on?{by:null,at:null}:stamp()}}});});
  else if(a==="savemeal"){const s=sheetSave,item=$("f-item").value.trim(),qty=Number(($("f-qty").value||"").trim().replace(",",".")),emp=$("f-emp").value.trim()||name;
    if(!item||!(qty>=1)||qty>999){toast(t("tQty"));return;}
    closeSheet();patch({meals:{[s.id||"m"+Date.now().toString(36)]:Object.assign({item,qty,emp,mod:{by:null,at:null}},stamp())}});}
  else if(a==="delmeal"){const s=sheetSave;closeSheet();patch({meals:{[s.id]:null}});}
  else return false;
  return true;
}
function mealReport(R){
  R.push(t("mealTitle").toUpperCase());
  for(const m of mealList(day))R.push("  "+m.item+" × "+m.qty+" · "+(m.emp||"")+" "+hm(m.at)+" · "+(g(m,"mod","at")?t("modBy",m.mod.by||"",hm(m.mod.at)):t("modSign")+": –"));
  for(const k of [["meal_chef","headChef"],["meal_mgr","manager"]]){const s=g(day,"sign",k[0]);R.push("  "+t(k[1])+": "+(s&&s.at?(s.by||"")+" "+hm(s.at):t("notSigned")));}
  R.push("");
}

/* ---------- sheets (dialogs) ---------- */
function openSheet(html){$("panel").innerHTML=html;$("sheet").hidden=false;const f=$("panel").querySelector("input,textarea");if(f){f.focus();if(f.id==="f-name")f.select();}}
function closeSheet(){$("sheet").hidden=true;$("panel").innerHTML="";sheetSave=null;}
function toast(m){const el=$("toast");el.textContent=m;el.hidden=false;clearTimeout(toast.t);toast.t=setTimeout(()=>{el.hidden=true;},3200);}
const acts=(saveAct,saveLabel)=>'<div class="acts"><button class="btn ghost" data-act="cancel">'+esc(t("cancel"))+'</button><button class="btn" data-act="'+saveAct+'">'+esc(saveLabel)+'</button></div>';
function nameSheet(){
  openSheet('<h4>'+esc(t("nameTitle"))+'</h4><p>'+esc(t("nameHint"))+'</p>'+
   '<input type="text" id="f-name" autocomplete="name" maxlength="40" value="'+esc(name)+'" placeholder="'+esc(t("firstName"))+'">'+acts("savename",t("save"))+(mode==="cloud"?'<button class="btn danger" data-act="signout">'+esc(t("signOut"))+'</button>':""));
}
function langSheet(){
  openSheet('<h4>'+esc(t("language"))+'</h4><div class="langs">'+LANGS.map((c,i)=>'<button class="btn'+(i===LI?"":" ghost")+'" data-act="setlang" data-i="'+i+'" lang="'+c+'">'+LANGNAME[i]+'</button>').join("")+'</div>');
}
function withName(fn){if(readOnly())return;if(name){fn();return;}afterName=fn;nameSheet();}
function noteSheet(title,hint,value,save){
  sheetSave=save;
  openSheet('<h4>'+esc(title)+'</h4>'+(hint?'<p>'+esc(hint)+'</p>':"")+'<textarea id="f-note" maxlength="400" dir="auto">'+esc(value||"")+'</textarea>'+acts("savenote",t("save")));
}
function tempSheet(area,id,slot){
  const eq=TEMP[area].eq.find(e=>e[0]===id),kind=eq[2],cur=g(day,"temp",area,id,"s"+slot,"v"),has=typeof cur==="number";
  sheetSave={area,id,slot,kind,nm:L(eq[1])};
  openSheet('<h4>'+esc(L(eq[1]))+' · '+ltr(slotL(slot))+'</h4><p>'+esc(t("tempHint",t(LIMIT[kind].text)))+'</p>'+
   '<div class="stepper" dir="ltr"><button data-act="step" data-d="-1" aria-label="'+esc(t("colder"))+'">−</button><input type="text" id="f-temp" inputmode="decimal" autocomplete="off" value="'+(has?cur:"")+'" placeholder="°C"><button data-act="step" data-d="1" aria-label="'+esc(t("warmer"))+'">+</button></div>'+
   '<div class="quick num" dir="ltr">'+LIMIT[kind].quick.map(q=>'<button data-act="quick" data-v="'+q+'">'+deg(q)+'</button>').join("")+'</div>'+
   '<div class="acts">'+(has?'<button class="btn danger" data-act="cleartemp">'+esc(t("clear"))+'</button>':'<button class="btn ghost" data-act="cancel">'+esc(t("cancel"))+'</button>')+'<button class="btn" data-act="savetemp">'+esc(t("saveRead"))+'</button></div>');
}
const readTemp=()=>{const s=($("f-temp").value||"").trim().replace(",",".").replace("−","-");if(s===""||isNaN(Number(s)))return null;return Math.round(Number(s)*10)/10;};
function obsSheet(area,id,hint){
  const nm=L(TEMP[area].eq.find(e=>e[0]===id)[1]);
  noteSheet(t("obs")+" · "+nm,hint||t("obsHint"),g(day,"temp",area,id,"obs"),v=>patch({temp:{[area]:{[id]:{obs:v||null}}}}));
}

/* ---------- actions ---------- */
function setDate(d){if(d>today)return;viewDate=d;loadDay();}
function go(v,s){if(s&&sub[v]!==undefined)sub[v]=s;if(location.hash!=="#"+v)location.hash=v;else{view=v;render();}window.scrollTo(0,0);}
document.addEventListener("click",ev=>{
  const el=ev.target.closest("[data-act]");
  if(!el){if(ev.target.id==="sheet"){afterName=null;closeSheet();}return;}
  if(el.disabled)return;
  const a=el.dataset.act,d=el.dataset;
  if(a==="prev")setDate(shift(viewDate,-1));
  else if(a==="next")setDate(shift(viewDate,1));
  else if(a==="tod")setDate(today);
  else if(a==="name")nameSheet();
  else if(a==="signin")signIn();
  else if(a==="signout")signOut();
  else if(a==="lang")langSheet();
  else if(a==="setlang"){LI=Number(d.i);try{localStorage.setItem("hb:lang",LANGS[LI]);}catch(e){}applyLang();closeSheet();render();}
  else if(a==="cancel"){afterName=null;closeSheet();}
  else if(a==="savename"){const v=$("f-name").value.trim();if(!v){$("f-name").focus();return;}name=v;try{localStorage.setItem("hb:name",v);}catch(e){}const fn=afterName;afterName=null;closeSheet();render();if(fn)fn();}
  else if(a==="sub"){sub[d.k]=d.v;render();}
  else if(a==="go")go(d.view,d.sub);
  else if(a==="open"){viewDate=d.date;loadDay();go("today");}
  else if(a==="reload")loadHistory();
  else if(a==="copy"){const txt=report();(navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(txt):Promise.reject()).then(()=>toast(t("tCopied")),()=>toast(t("tNoCopy")));}
  else if(cashAct(a,d)||mealAct(a,d)){}
  else if(a==="temp")withName(()=>tempSheet(sub.temperatures,d.eq,Number(d.slot)));
  else if(a==="step"){const s=sheetSave,v=readTemp();$("f-temp").value=v===null?(s.kind==="neg"?-18:3):Math.round((v+Number(d.d))*10)/10;}
  else if(a==="quick"){$("f-temp").value=d.v;}
  else if(a==="savetemp"){const s=sheetSave,v=readTemp();if(v===null||v<-60||v>60){toast(t("tNumber"));return;}
    closeSheet();patch({temp:{[s.area]:{[s.id]:{["s"+s.slot]:Object.assign({v},stamp())}}}});
    if(!inRange(s.kind,v)&&!g(day,"temp",s.area,s.id,"obs"))obsSheet(s.area,s.id,t("obsAlert",deg(v),s.nm));}
  else if(a==="cleartemp"){const s=sheetSave;closeSheet();patch({temp:{[s.area]:{[s.id]:{["s"+s.slot]:null}}}});}
  else if(a==="obs")withName(()=>obsSheet(sub.temperatures,d.eq));
  else if(a==="savenote"){const fn=sheetSave,v=$("f-note").value.trim();closeSheet();if(fn)fn(v);}
  else if(a==="check")withName(()=>{const k=sub.bar,on=!!g(day,"check",k,d.id,"at");patch({check:{[k]:{[d.id]:on?{by:null,at:null}:stamp()}}});});
  else if(a==="checknote")withName(()=>{const k=sub.bar,id=d.id;noteSheet(t("note"),L(CHECK[k].items[Number(id.slice(1))]),g(day,"check",k,id,"note"),v=>patch({check:{[k]:{[id]:{note:v||null}}}}));});
  else if(a==="stock")withName(()=>{const cur=g(day,"stock",d.id,"s");patch({stock:{[d.id]:cur===d.s?{s:null,by:null,at:null}:Object.assign({s:d.s},stamp())}});});
  else if(a==="stocknote")withName(()=>{const id=d.id,nm=L(STOCK_FLAT.find(x=>x[0]===id)[1]);noteSheet(t("noteFor",nm),t("stockHint"),g(day,"stock",id,"note"),v=>patch({stock:{[id]:{note:v||null}}}));});
  else if(a==="clean")withName(()=>patch({clean:{[sub.cleaning]:{["h"+d.h]:stamp()}}}));
  else if(a==="cleanundo")withName(()=>patch({clean:{[sub.cleaning]:{["h"+d.h]:{by:null,at:null,note:null}}}}));
  else if(a==="cleannote")withName(()=>{const ar=sub.cleaning,h=d.h;noteSheet(L(CLEAN[ar])+" · "+h+":00",t("cleanHint"),g(day,"clean",ar,"h"+h,"note"),v=>patch({clean:{[ar]:{["h"+h]:{note:v||null}}}}));});
  else if(a==="sign")withName(()=>{const on=!!g(day,"sign",d.key,"at");patch({sign:{[d.key]:on?{by:null,at:null}:stamp()}});});
});
document.addEventListener("keydown",e=>{if(e.key==="Enter"&&e.target&&e.target.id==="f-pass"){signIn();return;}if(e.key==="Escape"&&!$("sheet").hidden){afterName=null;closeSheet();}});
function route(){const h=location.hash.slice(1);view=VIEWS.includes(h)?h:"today";if(view==="history")loadHistory();else render();}
window.addEventListener("hashchange",route);

/* keep the clock-dependent parts fresh: unlock slots, roll over to the next service day */
setInterval(()=>{const n=serviceDay();if(n!==today){const was=viewDate===today;today=n;if(was){viewDate=n;loadDay();return;}}if($("sheet").hidden&&view!=="history"){render();refresh();}},60000);
window.addEventListener("online",()=>{flush();refresh();});
document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="visible"){flush();refresh();}});
/* ---------- start ---------- */
applyLang();
day=merge(localGet(viewDate),clone(queue[viewDate]||{}));
route();
(async()=>{
  if(!window.supabase||!CFG.supabaseUrl||/YOUR|xxxx/i.test(CFG.supabaseUrl+CFG.supabaseKey)){mode="setup";render();return;}
  sb=window.supabase.createClient(CFG.supabaseUrl,CFG.supabaseKey);
  sb.auth.onAuthStateChange(ev=>{if(ev==="SIGNED_OUT"&&mode==="cloud"){mode="login";render();}});
  let s=null;try{s=(await sb.auth.getSession()).data.session;}catch(e){}
  if(s)startCloud();else{mode="login";render();}
})();
if("serviceWorker" in navigator&&location.protocol==="https:")navigator.serviceWorker.register("sw.js").catch(()=>{});
})();
