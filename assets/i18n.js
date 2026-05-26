/* ============================================================
   i18n.js - language strings + switcher
   Languages: fa (Persian, default) | en (English) | ckb (Sorani)
   Strings keyed by data-i18n attribute on HTML elements.
   ============================================================ */

const STR = {
  fa: {
    "nav.home": "خانه",
    "nav.about": "درباره",
    "nav.meditation": "مراقبه",
    "nav.manifestation": "تجلی",
    "nav.tools": "ابزارها",
    "nav.menu": "فهرست",

    "site.tagline": "با خویشتن، در پرتوِ ستارگان",
    "site.eyebrow": "نوشته‌های آوین دباغ‌چی‌مکری",
    "hero.intro": "خوش آمدی. اینجا گوشه‌ای آرام است برای کسانی که می‌خواهند با خویش صادق باشند، با بدنِ خود مهربان، و با آسمان در گفت‌وگو.",
    "hero.cta": "از کجا آغاز کنم؟",

    "today.label": "نیّتِ امروز",
    "today.newone": "یکی دیگر بنما",

    "topics.title": "چهار درگاه",
    "topics.affirmation.title": "نیّت‌گویی",
    "topics.affirmation.desc": "جمله‌هایی که بدن باور کند، نه تنها ذهن.",
    "topics.astrology.title": "اخترشناسی",
    "topics.astrology.desc": "زبانِ نقشه‌ات، نه پیش‌گویی سرنوشت.",
    "topics.meditation.title": "مراقبه",
    "topics.meditation.desc": "سکوت، یک فن است نه یک استعداد.",
    "topics.manifestation.title": "تجلی",
    "topics.manifestation.desc": "توجه، بدن، کنش؛ مثلثی آرام.",

    "affirm.section.title": "نیّت‌گوییِ روزانه",
    "affirm.section.desc": "نیّت، یادآوریِ بدن است از آنچه راست است. آرام بگو، با سینه‌ای پر از هوا.",
    "astro.section.title": "اخترشناسی برای زندگیِ روزمره",
    "astro.section.desc": "ستارگان سرنوشت نیستند؛ آینه‌اند. هر برج، گفت‌وگویی درونی است که باید شنیده شود.",
    "astro.signs.aries": "بره (حَمَل) ، شجاعتِ نوآمده",
    "astro.signs.taurus": "گاو (ثَور) ، زمینِ زیرِ پا",
    "astro.signs.gemini": "دوپیکر (جَوزا) ، صدای دوگانه",
    "astro.signs.cancer": "خرچنگ (سَرَطان) ، آبِ خاطره",
    "astro.signs.leo": "شیر (اَسَد) ، گرمیِ دیده‌شدن",
    "astro.signs.virgo": "خوشه (سُنبُله) ، دقّتِ مهربان",
    "astro.signs.libra": "ترازو (میزان) ، تعادلِ ظریف",
    "astro.signs.scorpio": "کژدم (عقرب) ، ژرفایِ تاریک",
    "astro.signs.sagittarius": "کمان (قوس) ، افقِ دور",
    "astro.signs.capricorn": "بز (جَدی) ، استخوان و صبر",
    "astro.signs.aquarius": "آب‌ریز (دَلو) ، بینشِ جمعی",
    "astro.signs.pisces": "ماهی (حوت) ، رؤیایِ نازک",

    "tips.title": "اشاره‌های روزانه",
    "tips.intro": "به چپ یا راست بکش تا اشاره‌های بیشتر ببینی.",

    "news.title": "نامهٔ ماهانه",
    "news.desc": "ماهی یک نامه؛ یک نیّت، یک تمرین، و پنجره‌ای رو به آسمانِ آن ماه.",
    "news.placeholder": "نشانیِ ایمیلِ تو",
    "news.btn": "ثبتِ نام",
    "news.note": "پاسخ‌ها به دست نوشته می‌شوند. نه رباتی، نه تبلیغی.",
    "news.thanks": "رسید. به‌زودی می‌نویسم.",

    "about.title": "دربارهٔ آوین",
    "about.bio.p1": "آوین دباغ‌چی‌مکری در یکم اردیبهشتِ ۱۳۵۰ در مهاباد به دنیا آمد؛ شهری در دامنهٔ زاگرس و در چشم‌رسِ دریاچهٔ ارومیه. پدرش بازرگانِ فرش بود و مادرش آموزگارِ مدرسهٔ دخترانه. کودکی‌اش میانِ دو زبان گذشت: کردیِ سورانی در خانه، فارسی در مدرسه. این دو زبان به او آموختند که هر واژه دو خانه دارد.",
    "about.bio.p2": "از نوجوانی به نوشتن روی آورد، اما راهش از گذرگاهِ ادبیات نگذشت. در دهٔهٔ بیستِ زندگی با درویشانِ قادری در سلیمانیه نشست، در کنارِ زنانِ قالی‌بافِ کرد در سنندج کار کرد، و سال‌ها میانِ کشتزارانِ گندم و باغ‌های انار، نَفَس و خاموشی را مشق کرد. پس از سی‌سالگی، یونگ را خواند و دید آنچه را که مادرانِ کرد به شکلِ قصه می‌گفتند، روان‌شناسیِ غرب با اصطلاحاتی تازه بازمی‌گوید.",
    "about.bio.p3": "امروز آوین میانِ مهاباد و تهران زندگی می‌کند. کلاس‌های کوچک می‌گذارد، با مراجعان بر سرِ زایچه می‌نشیند، و باور دارد که معنویتِ بی‌پایِ خاکی، تنها زینت است. این پایگاه، کارگاهِ اوست، نه دکّان. نوشته‌ها رایگانند، چراکه هیچ‌کدام را خود نساخته؛ تنها به ارث گرفته است.",
    "about.bio.p4": "زبان‌های کاری: کردیِ سورانی (مادری)، فارسی (روان)، انگلیسی (در حدِ گفت‌وگو). اگر می‌خواهی بنویسی، بنویس.",
    "about.lang.title": "زبان‌های کاری",
    "about.lang.body": "کردیِ سورانی (مادری)، فارسی (روان)، انگلیسی (کاری).",
    "about.philosophy.title": "پنج اصلِ کاری",
    "about.p1.t": "آیین، پیش از محتوا",
    "about.p1.d": "پیش از هر تمرین، لحظه‌ای از سپاس. بی آن، هر فن، تنها ورزش است.",
    "about.p2.t": "بدن می‌داند",
    "about.p2.d": "اگر پرسشی پاسخ نمی‌دهد، آن را در شکم بپرس، نه در سر.",
    "about.p3.t": "نیاکان، شاهدند",
    "about.p3.d": "زنانی پیش از تو این راه را رفته‌اند. در خاموشی، نامشان را به یاد آور.",
    "about.p4.t": "تجلی، گرانش می‌طلبد",
    "about.p4.d": "آرزویِ بی‌عمل، تنها دود است. کیهان به دست‌های گرم پاسخ می‌دهد.",
    "about.p5.t": "خاموشی، خود یک داده است",
    "about.p5.d": "آنجا که پاسخی نمی‌آید، خودِ نیامدن، پاسخ است. صبر کن.",
    "about.contact.title": "تماس",
    "about.contact.body": "برای کلاسِ خصوصی، خوانشِ زایچه، یا یک پرسشِ آرام، بنویس به: ",
    "about.birth.label": "زاده در",
    "about.birth.value": "۱ اردیبهشتِ ۱۳۵۰، مهاباد",
    "about.chart.cap": "زایچهٔ آوین، به‌زودی افزوده می‌شود.",

    "med.title": "مراقبه",
    "med.intro": "چرا بیشترِ توصیه‌های مراقبه به نتیجه نمی‌رسند؟ چون ذهن را نشانه می‌گیرند، نه اعصاب را. ذهن، فرمانده نیست؛ مهمان است. نخست عصبِ واگ را آرام کن، آنگاه ذهن خود خاموش می‌شود. این چهار فن، با بدن کار می‌کنند، نه با ارادهٔ ذهن.",
    "med.tech1.title": "نَفَسِ ۴ ، ۷ ، ۸",
    "med.tech1.meta": "۴ دقیقه، مبتدی",
    "med.tech1.s1": "از بینی، چهار شماره دم بگیر.",
    "med.tech1.s2": "نَفَس را هفت شماره نگه دار.",
    "med.tech1.s3": "از دهان، هشت شماره به آرامی بازدم کن، چنان‌که شعلهٔ شمعی را خاموش می‌کنی.",
    "med.tech1.s4": "چهار چرخه، نه بیشتر. اعصاب، آهسته پاسخ می‌دهد.",
    "med.tech1.pitfall": "اگر سرت گیج رفت، بایست. اکسیژنِ خون بالا رفته است؛ طبیعی است. شمارش را کم کن.",

    "med.tech2.title": "پیمایشِ بدن",
    "med.tech2.meta": "۱۰ تا ۱۵ دقیقه، مبتدی تا میانه",
    "med.tech2.s1": "دراز بکش. کفِ پاها را حس کن، و وزنشان را.",
    "med.tech2.s2": "آرام، توجه را از پاها تا فرقِ سر ببر؛ عضو به عضو.",
    "med.tech2.s3": "در هر گرفتگی، تنها بایست. حلش مکن، تنها بنگر.",
    "med.tech2.s4": "چون به سر رسیدی، یک بار همهٔ بدن را با هم حس کن.",
    "med.tech2.pitfall": "اگر خوابت برد، یعنی بدنت خسته بوده. دفعهٔ بعد نشسته انجامش بده.",

    "med.tech3.title": "نگاهِ شمع (تَراتاکا)",
    "med.tech3.meta": "۸ دقیقه، میانه",
    "med.tech3.s1": "شمعی روشن کن، در فاصلهٔ یک متری چشم.",
    "med.tech3.s2": "بی پلک‌زدن به شعله بنگر، تا اشک بیاید.",
    "med.tech3.s3": "چشم را ببند. تصویرِ شمع را پشتِ پلک ببین، تا محو شود.",
    "med.tech3.s4": "دیگرباره باز کن. سه دور.",
    "med.tech3.pitfall": "اگر سردرد گرفتی، فاصله را بیشتر کن یا شعله را کم‌نورتر.",

    "med.tech4.title": "ذکر (تکرارِ نام)",
    "med.tech4.meta": "۱۵ تا ۲۰ دقیقه، همهٔ سطوح",
    "med.tech4.s1": "یک واژه برگزین. می‌تواند نامِ خدا باشد، یا عشق، آرامش، یا نامِ مادربزرگت.",
    "med.tech4.s2": "همراهِ دم بگو، همراهِ بازدم بگو، تا واژه و نَفَس یکی شوند.",
    "med.tech4.s3": "چون ذهن به جایی دیگر رفت، بی سرزنش بازش گردان.",
    "med.tech4.s4": "این مشقِ درویشان است؛ کهن‌تر از همهٔ فنونِ مدرن.",
    "med.tech4.pitfall": "اگر واژه بی‌معنا شد، طبیعی است. این مرحلهٔ پاک‌شدنِ واژه است.",

    "med.breath.title": "هَناسه، ساعتِ نَفَس",
    "med.breath.start": "آغاز",
    "med.breath.stop": "ایست",
    "med.breath.inhale": "دم",
    "med.breath.hold": "نگه‌داشتن",
    "med.breath.exhale": "بازدم",
    "med.breath.holdout": "خالی",

    "med.schedule.title": "برنامهٔ هفتهٔ نخست",
    "med.day.mon": "دوشنبه",
    "med.day.tue": "سه‌شنبه",
    "med.day.wed": "چهارشنبه",
    "med.day.thu": "پنج‌شنبه",
    "med.day.fri": "جمعه",
    "med.day.sat": "شنبه",
    "med.day.sun": "یکشنبه",
    "med.prac.mon": "۴ دقیقه نَفَسِ ۴ ، ۷ ، ۸، در سپیده‌دم.",
    "med.prac.tue": "۱۰ دقیقه پیمایشِ بدن، پیش از خواب.",
    "med.prac.wed": "۴ دقیقه نَفَسِ ۴ ، ۷ ، ۸، پیش از کار.",
    "med.prac.thu": "۸ دقیقه تَراتاکا، در تاریکیِ شب.",
    "med.prac.fri": "۱۵ دقیقه ذکر، پس از غروب.",
    "med.prac.sat": "ترکیب: ۵ دقیقه نَفَس، ۱۰ دقیقه ذکر.",
    "med.prac.sun": "نشستنِ ساده. بی هیچ فنّی. تنها بودن.",

    "man.title": "تجلی",
    "man.intro": "تجلی، آرزواندیشی نیست؛ نظمِ توجه است. چهار حرکت دارد: نیّت، تَن‌گُماری، کنش، و رهایش. اگر یکی را حذف کنی، باقی نمی‌ماند.",
    "man.step1.title": "نیّت",
    "man.step1.body": "نیّت آرزو نیست؛ تصمیم است. باید بدن بگویدش، نه تنها زبان. به خطِ دست بنویس، بر کاغذی واقعی. آنچه دست بنویسد، عصب می‌پذیرد.",
    "man.step1.eg": "نمونه: «من کسی‌ام که هر روز یک ساعت برای خود می‌نویسم.» نه «امیدوارم بنویسم.»",
    "man.step1.prompt": "بپرس: اگر این رخ دهد، روز چه شکلی خواهد داشت؟ سه جمله بنویس.",
    "man.step2.title": "تَن‌گُماری",
    "man.step2.body": "بدن باید بداند این نیّت در کجا خانه می‌کند. جامهٔ کسی را که می‌خواهی باشی، امروز بپوش. آن‌گونه راه برو که او می‌رفت. نه نمایش، نه نقش‌بازی؛ مشق.",
    "man.step2.eg": "اگر می‌خواهی نویسنده باشی، اکنون دفتری بردار و پنج دقیقه بنویس. خوب یا بد، مهم نیست.",
    "man.step2.prompt": "این هفته، یک عادتِ کوچکِ روزانه از زندگیِ آینده‌ات را همین حالا آغاز کن.",
    "man.step3.title": "کنش",
    "man.step3.body": "تجلیِ بی‌کنش، خواب است. هر روز یک گامِ کوچک. کیهان به دست پاسخ می‌دهد، نه به آرزو. اگر تماسی مانده، بگیر. اگر ایمیلی لازم است، بفرست.",
    "man.step3.eg": "نیّت: «کتابم چاپ می‌شود.» کنشِ امروز: یک بند. تنها یک بند.",
    "man.step3.prompt": "کوچک‌ترین گامِ ممکن چیست؟ همان را امروز انجام بده.",
    "man.step4.title": "رهایش",
    "man.step4.body": "پس از کنش، رها کن. اگر صبح و شب نتیجه را بپایی، انرژیِ نیّت پراکنده می‌شود. کارت را بکن، آنگاه به آسمان بنگر، نه به ساعت.",
    "man.step4.eg": "تاریخی بگذار؛ مثلاً ۹۰ روز. تا آن روز، تنها کنش کن. سپس ارزیابی کن.",
    "man.step4.prompt": "بنویس: «از این لحظه تا [تاریخ]، تنها کنش می‌کنم. کیهان زمانِ خود را می‌داند.»",

    "man.script.title": "الگوی نوشتنِ نیّت",
    "man.script.placeholder": "تاریخِ امروز: \nاین چیز را با همهٔ تنم می‌خواهم: \nنخستین گامِ کوچکِ امروز: \nاگر این محقّق شود، روزم چنین خواهد بود: \nبرای آنچه دارم سپاس‌گزارم، به‌سببِ: ",
    "man.script.copy": "رونوشت",
    "man.script.copied": "رونوشت گرفته شد",

    "man.mistakes.title": "خطاهای آشنا",
    "man.mistakes.m1": "تجسم بی‌بدن: تصور می‌کنی، اما در همان صندلیِ همیشگی نشسته‌ای. بدن باید حرکت کند.",
    "man.mistakes.m2": "نیّت در سطحِ واژه: «می‌خواهم پولدار باشم.» بدن، این را نمی‌فهمد. مشخّص باش.",
    "man.mistakes.m3": "وارسیِ پی‌درپی: هر بار که نگران می‌شوی، نیّت سست‌تر می‌شود. رهایش کن.",
    "man.mistakes.m4": "خواستن بی‌رهایش: هم می‌خواهی، هم می‌ترسی نشود. این دو، یکدیگر را خنثی می‌کنند.",

    "man.caveat.title": "یادآوریِ مهم",
    "man.caveat.body": "این جادو نیست. تجلی نه نیرو از کیهان می‌گیرد، که از تمرکزِ توجه. اگر کسی به تو گفت بنشین و بیندیش تا پول از سقف ببارد، دروغ گفته است. این نظم است، چون ورزش. ثمرش بدنی است که می‌تواند به آنچه می‌خواهد، گرایش یابد.",

    "tools.title": "ابزارها و آزمون‌ها",
    "tools.intro": "ابزارهای زیر در همان مرورگرِ تو اجرا می‌شوند. هیچ داده‌ای به جایی فرستاده نمی‌شود.",
    "tools.bc.title": "درون‌دادِ زایچه",
    "tools.bc.desc": "تاریخ، ساعت و شهرِ زادنت را وارد کن. این نسخه تنها برجِ خورشید را محاسبه می‌کند. زایچهٔ کامل به‌زودی افزوده می‌شود.",
    "tools.bc.dob": "تاریخِ تولّد",
    "tools.bc.time": "ساعتِ تولّد (تقریبی)",
    "tools.bc.place": "محلِّ تولّد",
    "tools.bc.btn": "محاسبه",
    "tools.bc.placeholderPlace": "برای نمونه: مهاباد، ایران",
    "tools.bc.result.sun": "برجِ خورشید",
    "tools.bc.result.note": "نکتهٔ سامانه: محاسبه با مَنطقهٔ مدارگرد (تروپیکال) که در غرب رواج دارد. مَنطقهٔ ثابت (سایدریال) که در هند و برخی مکاتبِ کلاسیک به کار می‌رود، نتیجه‌ای دیگرگون می‌دهد.",

    "tools.af.title": "نیّت‌سازِ روزانه",
    "tools.af.desc": "از میانِ ۶۰ نیّت، یکی، برحسبِ دسته‌ای که برگزیده‌ای.",
    "tools.af.all": "همه",
    "tools.af.love": "عشق",
    "tools.af.work": "کار",
    "tools.af.body": "بدن",
    "tools.af.family": "خانواده",
    "tools.af.btn": "بنما",

    "tools.jr.title": "دفترِ تجلی",
    "tools.jr.desc": "هر روز چند سطر. همه چیز در همین دستگاه می‌ماند.",
    "tools.jr.placeholder": "نیّتِ امروزم این است که...",
    "tools.jr.save": "ذخیره",
    "tools.jr.export": "برون‌دادِ متنی",
    "tools.jr.saved": "ذخیره شد",
    "tools.jr.today": "امروز",

    "tools.mo.title": "ثبتِ حال",
    "tools.mo.desc": "حال را با یک کلیک ثبت کن. در پایین، روندِ ۳۰ روزِ اخیر را می‌بینی.",
    "tools.mo.history": "گاه‌شمار (۳۰ روزِ اخیر)",
    "tools.mo.empty": "هنوز چیزی ثبت نکرده‌ای.",

    "tools.br.title": "هَناسه، ساعتِ نَفَس",
    "tools.br.desc": "همان ابزارِ صفحهٔ مراقبه، اینجا نیز در دسترس است.",

    "footer.tagline": "از مهاباد، با مهر",
    "footer.birth": "مهاباد، ۱۳۵۰",
    "footer.rights": "نوشته‌ها برای استفادهٔ شخصی آزادند."
  },

  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.meditation": "Meditation",
    "nav.manifestation": "Manifestation",
    "nav.tools": "Tools",
    "nav.menu": "Menu",

    "site.tagline": "Where the cosmos meets the self",
    "site.eyebrow": "Writings of Avin Dabaghchimokri",
    "hero.intro": "Welcome. This is a quiet place for people who want to be honest with themselves, gentle with their bodies, and in conversation with the sky.",
    "hero.cta": "Where do I begin?",

    "today.label": "Today's intention",
    "today.newone": "Give me another",

    "topics.title": "Four ways in",
    "topics.affirmation.title": "Affirmation",
    "topics.affirmation.desc": "Sentences the body believes, not just the mind.",
    "topics.astrology.title": "Astrology",
    "topics.astrology.desc": "Your map's language, not your fate.",
    "topics.meditation.title": "Meditation",
    "topics.meditation.desc": "Stillness is a technique, not a talent.",
    "topics.manifestation.title": "Manifestation",
    "topics.manifestation.desc": "Attention plus body plus action. A quiet triangle.",

    "affirm.section.title": "Daily affirmation",
    "affirm.section.desc": "An affirmation is the body's reminder of what is true. Say it slowly, with a full chest of air.",
    "astro.section.title": "Astrology for ordinary life",
    "astro.section.desc": "Stars are not destiny; they are mirrors. Each sign is a private conversation worth listening to.",
    "astro.signs.aries": "Aries - fresh courage",
    "astro.signs.taurus": "Taurus - ground beneath the feet",
    "astro.signs.gemini": "Gemini - the doubled voice",
    "astro.signs.cancer": "Cancer - the water of memory",
    "astro.signs.leo": "Leo - the warmth of being seen",
    "astro.signs.virgo": "Virgo - tender precision",
    "astro.signs.libra": "Libra - the fine balance",
    "astro.signs.scorpio": "Scorpio - dark depth",
    "astro.signs.sagittarius": "Sagittarius - the far horizon",
    "astro.signs.capricorn": "Capricorn - bone and patience",
    "astro.signs.aquarius": "Aquarius - collective sight",
    "astro.signs.pisces": "Pisces - thin dream",

    "tips.title": "Daily tips",
    "tips.intro": "Swipe through. Slowly.",

    "news.title": "Monthly letter",
    "news.desc": "One letter a month: one intention, one practice, and a window into the sky of that month.",
    "news.placeholder": "Your email",
    "news.btn": "Subscribe",
    "news.note": "Replies are handwritten. No bots, no marketing.",
    "news.thanks": "Received. I will write soon.",

    "about.title": "About Avin",
    "about.bio.p1": "Avin Dabaghchimokri was born on 21 April 1971 in Mahabad, a city tucked into the foothills of the Zagros and within sight of Lake Urmia. Her father was a carpet merchant. Her mother taught at the local girls' school. Her childhood ran between two tongues: Sorani Kurdish at home, Persian in the classroom. The two languages taught her that every word has two houses.",
    "about.bio.p2": "She wrote from a young age, but writing was never her doorway. In her twenties she sat with Qadiri dervishes in Sulaymaniyah, worked alongside Kurdish women weavers in Sanandaj, and spent long stretches among wheat fields and pomegranate orchards practising breath and silence. After thirty, she read Jung and recognised that what the Kurdish mothers had been telling in folk tales, Western psychology was rephrasing in clinical vocabulary.",
    "about.bio.p3": "Today Avin moves between Mahabad and Tehran. She runs small classes, sits with people over their birth charts, and believes that any spirituality without dirt-stained feet is decoration. This site is her workshop, not her shop. The writing is free because she did not invent any of it; she only received it.",
    "about.bio.p4": "Languages: Sorani Kurdish (mother tongue), Persian (fluent), English (working). If you want to write, write.",
    "about.lang.title": "Working languages",
    "about.lang.body": "Sorani Kurdish (native), Persian (fluent), English (working).",
    "about.philosophy.title": "Five working principles",
    "about.p1.t": "Ritual before content",
    "about.p1.d": "Before any practice, a moment of thanks. Without that, every technique is just exercise.",
    "about.p2.t": "The body knows",
    "about.p2.d": "If a question will not answer, ask it in your belly, not in your head.",
    "about.p3.t": "Ancestors as witness",
    "about.p3.d": "Women walked this road before you. In the quiet, name them.",
    "about.p4.t": "Manifestation needs gravity",
    "about.p4.d": "A wish without work is just smoke. The cosmos answers warm hands.",
    "about.p5.t": "Stillness is data",
    "about.p5.d": "When no answer comes, the absence is itself the answer. Wait.",
    "about.contact.title": "Contact",
    "about.contact.body": "For private classes, chart readings, or one quiet question, write to: ",
    "about.birth.label": "Born",
    "about.birth.value": "21 April 1971, Mahabad",
    "about.chart.cap": "Avin's natal chart. To be added by the user.",

    "med.title": "Meditation",
    "med.intro": "Why does most meditation advice fail? Because it speaks to the mind, not to the nerve. The mind is not the boss; it is the guest. First you calm the vagus nerve, then the mind quiets on its own. These four techniques work with the body rather than against the will of the head.",
    "med.tech1.title": "The 4-7-8 breath",
    "med.tech1.meta": "4 minutes, beginner",
    "med.tech1.s1": "Inhale through the nose for four counts.",
    "med.tech1.s2": "Hold the breath for seven counts.",
    "med.tech1.s3": "Exhale through the mouth for eight counts, slowly, as if blowing out a single candle.",
    "med.tech1.s4": "Four cycles. No more. The nervous system answers gently.",
    "med.tech1.pitfall": "If you feel dizzy, stop. That means your blood oxygen has spiked. Normal. Do fewer rounds.",

    "med.tech2.title": "Body scan",
    "med.tech2.meta": "10 to 15 minutes, beginner to intermediate",
    "med.tech2.s1": "Lie down. Feel the soles of your feet. Their weight.",
    "med.tech2.s2": "Slowly move your attention from feet to crown, part by part.",
    "med.tech2.s3": "At every tight place, just stand there. Do not solve it. Look at it.",
    "med.tech2.s4": "When you reach the head, feel the whole body at once.",
    "med.tech2.pitfall": "If you fall asleep, your body was tired. Next time sit upright instead.",

    "med.tech3.title": "Candle gaze, trataka",
    "med.tech3.meta": "8 minutes, intermediate",
    "med.tech3.s1": "Light a candle. Place it about an arm's length from your eyes.",
    "med.tech3.s2": "Gaze at the flame without blinking, until tears come.",
    "med.tech3.s3": "Close the eyes. Watch the candle's afterimage behind the lids until it fades.",
    "med.tech3.s4": "Reopen. Three rounds.",
    "med.tech3.pitfall": "If you get a headache, move the candle farther away or dim it.",

    "med.tech4.title": "Zikr, the repeated name",
    "med.tech4.meta": "15 to 20 minutes, all levels",
    "med.tech4.s1": "Choose one word. A name of God, or peace, or love, or even your grandmother's name.",
    "med.tech4.s2": "Say it with the inhale and the exhale. Let the word and the breath become one.",
    "med.tech4.s3": "When the mind wanders, return it without scolding.",
    "med.tech4.s4": "This is the practice of dervishes. Older than every modern technique.",
    "med.tech4.pitfall": "If the word loses meaning, that is part of it. The word is being cleaned.",

    "med.breath.title": "Hanaseh, the breath timer",
    "med.breath.start": "Start",
    "med.breath.stop": "Stop",
    "med.breath.inhale": "Inhale",
    "med.breath.hold": "Hold",
    "med.breath.exhale": "Exhale",
    "med.breath.holdout": "Empty",

    "med.schedule.title": "Your first week",
    "med.day.mon": "Monday",
    "med.day.tue": "Tuesday",
    "med.day.wed": "Wednesday",
    "med.day.thu": "Thursday",
    "med.day.fri": "Friday",
    "med.day.sat": "Saturday",
    "med.day.sun": "Sunday",
    "med.prac.mon": "Four minutes of 4-7-8 breath, early morning.",
    "med.prac.tue": "Ten minutes body scan, before sleep.",
    "med.prac.wed": "Four minutes of 4-7-8 breath, before work.",
    "med.prac.thu": "Eight minutes of trataka, in evening darkness.",
    "med.prac.fri": "Fifteen minutes of zikr, after sunset.",
    "med.prac.sat": "Combination: five minutes of breath, ten of zikr.",
    "med.prac.sun": "Plain sitting. No technique. Just being.",

    "man.title": "Manifestation",
    "man.intro": "Manifestation is not wishful thinking. It is a discipline of attention. Four motions: intention, embodiment, action, surrender. Remove one and the rest will not hold.",
    "man.step1.title": "Intention",
    "man.step1.body": "An intention is not a wish. It is a decision. The body must say it, not only the tongue. Write it by hand, on real paper. What the hand writes, the nerve accepts.",
    "man.step1.eg": "Example: \"I am someone who writes for an hour every day.\" Not \"I hope to write more.\"",
    "man.step1.prompt": "Ask: if this happened, what would my day look like? Write three sentences.",
    "man.step2.title": "Embodiment",
    "man.step2.body": "The body needs to know where this intention will live. Dress today like the person you are becoming. Walk the way she walked. Not pretending, not acting. Practising.",
    "man.step2.eg": "If you want to be a writer, take a notebook now and write for five minutes. Good or bad does not matter.",
    "man.step2.prompt": "This week, start one small daily habit from your future life now.",
    "man.step3.title": "Action",
    "man.step3.body": "Manifestation without action is a dream. One small step every day. The cosmos answers hands, not wishes. If there is a call to make, make it. If there is an email, send it.",
    "man.step3.eg": "Intention: \"My book is published.\" Today's action: one paragraph. Just one.",
    "man.step3.prompt": "What is the smallest possible step? Do that today.",
    "man.step4.title": "Surrender",
    "man.step4.body": "After action, release. If you check the result morning and night, the energy of intention scatters. Do your work, then look at the sky, not at the clock.",
    "man.step4.eg": "Set a date. Say 90 days. Until then, only act. Then assess.",
    "man.step4.prompt": "Write: \"From now until [date], I only act. The cosmos knows its own time.\"",

    "man.script.title": "Scripting template",
    "man.script.placeholder": "Today's date: \nI want this with my whole body: \nFirst small step today: \nIf this comes true, my day looks like: \nWhat I am grateful for already: ",
    "man.script.copy": "Copy",
    "man.script.copied": "Copied",

    "man.mistakes.title": "Common mistakes",
    "man.mistakes.m1": "Visualisation without body. You imagine but you sit in the same chair. The body needs to move.",
    "man.mistakes.m2": "Intention at word level. \"I want to be rich.\" The body cannot parse that. Be specific.",
    "man.mistakes.m3": "Constant checking. Every time you worry, the intention weakens. Leave it alone.",
    "man.mistakes.m4": "Wishing without surrender. You want and fear at once. The two cancel each other.",

    "man.caveat.title": "A small reminder",
    "man.caveat.body": "This is not magic. Manifestation does not draw power from the cosmos; it draws it from focused attention. If anyone tells you to sit still and money will rain from the ceiling, they are lying. This is a discipline, like training. The result is a body that can lean towards what it wants.",

    "tools.title": "Tools and tests",
    "tools.intro": "Everything below runs in your browser. Nothing is sent anywhere.",
    "tools.bc.title": "Birth chart input",
    "tools.bc.desc": "Enter your date, time, and place of birth. For now, this returns your sun sign. A full chart calculator is coming.",
    "tools.bc.dob": "Date of birth",
    "tools.bc.time": "Time of birth (approximate)",
    "tools.bc.place": "Place of birth",
    "tools.bc.btn": "Calculate",
    "tools.bc.placeholderPlace": "e.g. Mahabad, Iran",
    "tools.bc.result.sun": "Sun sign",
    "tools.bc.result.note": "System note: this uses the Tropical zodiac (common in the West). The Sidereal zodiac (common in India and in some classical schools) would give a different sign.",

    "tools.af.title": "Affirmation generator",
    "tools.af.desc": "One affirmation drawn from 60, filtered by the area you want.",
    "tools.af.all": "All",
    "tools.af.love": "Love",
    "tools.af.work": "Work",
    "tools.af.body": "Body",
    "tools.af.family": "Family",
    "tools.af.btn": "Give me one",

    "tools.jr.title": "Manifestation journal",
    "tools.jr.desc": "A few lines a day. Saved here in your device, nowhere else.",
    "tools.jr.placeholder": "Today my intention is...",
    "tools.jr.save": "Save",
    "tools.jr.export": "Export as text",
    "tools.jr.saved": "Saved",
    "tools.jr.today": "Today",

    "tools.mo.title": "Mood check-in",
    "tools.mo.desc": "Tap your mood. Below you will see the last 30 days as a line.",
    "tools.mo.history": "History (last 30 days)",
    "tools.mo.empty": "Nothing logged yet.",

    "tools.br.title": "Hanaseh, breath timer",
    "tools.br.desc": "The same widget from the meditation page, embedded here too.",

    "footer.tagline": "From Mahabad, with care",
    "footer.birth": "Mahabad, 1971",
    "footer.rights": "Writings are free for personal use."
  },

  ckb: {
    "nav.home": "ماڵەوە",
    "nav.about": "دەربارە",
    "nav.meditation": "بیرکردنەوە",
    "nav.manifestation": "دەربڕین",
    "nav.tools": "ئامرازەکان",
    "nav.menu": "مینیو",

    "site.tagline": "لەوێ کە ئاسمان و گیان دەگەنە یەکتر",
    "site.eyebrow": "نووسینەکانی ئاڤین دەباغچی‌مۆکری",
    "hero.intro": "بەخێر بێیت. ئەمە شوێنێکی هێمنە بۆ ئەو کەسانەی دەیانەوێ ڕاستگۆ بن لەگەڵ خۆیان، مەهرەبان بن لەگەڵ لەشیان، و گفتوگۆ بکەن لەگەڵ ئاسمان.",
    "hero.cta": "لە کوێوە دەست پێ بکەم؟",

    "today.label": "نیازی ئەمڕۆ",
    "today.newone": "یەکێکی تر بدە",

    "topics.title": "چوار دەرگا",
    "topics.affirmation.title": "نیاز ووتن",
    "topics.affirmation.desc": "ووشە کە لەش باوەڕی پێ بکات، نەک تەنیا مێشک.",
    "topics.astrology.title": "ئەستێرەناسی",
    "topics.astrology.desc": "زمانی نەخشەکەت، نەک قەدەرت.",
    "topics.meditation.title": "بیرکردنەوە",
    "topics.meditation.desc": "بێدەنگی تەکنیکە، نەک بەهرە.",
    "topics.manifestation.title": "دەربڕین",
    "topics.manifestation.desc": "ئاگاداری + لەش + کردار. سێیەکی هێمن.",

    "affirm.section.title": "نیازی ڕۆژانە",
    "affirm.section.desc": "نیاز یادهێنانەوەی لەشە بۆ ئەوەی چی ڕاستە. بە هێواشی بیڵێ، لەگەڵ هەناسەیەکی پڕ.",
    "astro.section.title": "ئەستێرەناسی بۆ ژیانی ڕۆژانە",
    "astro.section.desc": "ئەستێرە چارەنووس نین؛ ئاوێنەن. هەر بورجێک گفتوگۆیەکی ناوەکیە کە دەبێ گوێی لێ بگرین.",
    "astro.signs.aries": "بەران - ئازایەتی نوێ",
    "astro.signs.taurus": "گا - زەوی ژێر پێ",
    "astro.signs.gemini": "دووانە - دەنگی دووانە",
    "astro.signs.cancer": "قرژاڵ - ئاوی یاد",
    "astro.signs.leo": "شێر - گەرمی بینین",
    "astro.signs.virgo": "گوڵدەستە - وردبینی نەرم",
    "astro.signs.libra": "تەرازوو - هاوسەنگی نازک",
    "astro.signs.scorpio": "دووپشک - قووڵی تاریک",
    "astro.signs.sagittarius": "کەوان - ئاسۆی دوور",
    "astro.signs.capricorn": "بزن - ئێسک و ئارامی",
    "astro.signs.aquarius": "ئاودەر - بینینی کۆمەڵ",
    "astro.signs.pisces": "ماسی - خەونی تەنک",

    "tips.title": "ئامۆژگاری ڕۆژانە",
    "tips.intro": "بکێشە بۆ ئەو لاوە بۆ زیاتر.",

    "news.title": "نامەی مانگانە",
    "news.desc": "مانگی جارێک: نیازێک، تەمرینێک، و پەنجەرەیەک بۆ ئاسمانی ئەو مانگە.",
    "news.placeholder": "ئیمێڵەکەت",
    "news.btn": "تۆمار بکە",
    "news.note": "وەڵامەکان بە دەست دەنووسرێن. نە ڕۆبۆت، نە بانگەشە.",
    "news.thanks": "گەیشت. زوو دەنووسم.",

    "about.title": "دەربارەی ئاڤین",
    "about.bio.p1": "ئاڤین دەباغچی‌مۆکری لە ٢١ی نیسانی ١٩٧١ لە شاری مەهاباد لەدایک بووە، شارێک کە لە دامێنی چیاکانی زاگرۆس و بەرامبەر دەریاچەی ورمێیە. باوکی بازرگانی فەرش بوو، دایکی مامۆستای قوتابخانەی کچان بوو. منداڵیی لە نێوان دوو زمان تێپەڕی: کوردیی سۆرانی لە ماڵەوە، فارسی لە قوتابخانە. ئەم دوو زمانە فێریان کرد کە هەر ووشەیەک دوو ماڵی هەیە.",
    "about.bio.p2": "لە تەمەنی گەنجی نووسینی دەست پێ کرد، بەڵام ڕێگەکەی لە ڕێی ئەدەبیات نەبوو. لە بیستەکانی ژیانیدا لەگەڵ دەروێشانی قادری لە سلێمانی دانیشت، لەگەڵ ژنانی چنکار لە سنە کاری کرد، و ماوەی درێژ لە نێوان کێڵگەی گەنم و باخی هەنار بەسەری برد، تەمرینی هەناسە و بێدەنگی. لە تەمەنی سی ساڵی بەدوادا، یۆنگی خوێندەوە و بینی کە دایکانی کورد چیرۆکیان دەگوت، دەروونناسیی ڕۆژاوا بە ووشەی نوێ هەمان شت دەڵێ.",
    "about.bio.p3": "ئەمڕۆ ئاڤین لە نێوان مەهاباد و تەهران دەژی. پۆلی بچووک ڕێک دەخات، لەسەر نەخشەی لەدایکبوون دادەنیشێ، و باوەڕی وایە کە مەعنەوییەت بێ پێی خاکنووس تەنیا ڕازاندنەوەیە. ئەم ماڵپەڕە کارگەی ئەوە، نەک فرۆشگای ئەو. نووسینەکان بەخۆڕاییە چونکە بە میرات گەیشتوون.",
    "about.bio.p4": "زمانەکان: کوردیی سۆرانی (دایکی)، فارسی (شارەزا)، ئینگلیزی (کارا). ئەگەر دەتەوێ بنووسیت، خۆشحاڵم.",
    "about.lang.title": "زمانە کارییەکان",
    "about.lang.body": "کوردیی سۆرانی (دایکی)، فارسی (شارەزا)، ئینگلیزی (کارا).",
    "about.philosophy.title": "پێنج بنەمای کاری",
    "about.p1.t": "نەریت پێش ناوەڕۆک",
    "about.p1.d": "پێش هەر تەمرینێک، ساتێک سوپاس. بەبێ ئەوە، هەر تەکنیکێک تەنیا وەرزشە.",
    "about.p2.t": "لەش دەزانێ",
    "about.p2.d": "ئەگەر پرسیار وەڵام نادات، لە ناوسکدا بپرسە، نەک لە سەردا.",
    "about.p3.t": "پێشینان شایەتن",
    "about.p3.d": "ژنان پێش تۆ ئەم ڕێگەیان گرت. لە بێدەنگیدا، ناویان بێنە بیر.",
    "about.p4.t": "دەربڕین کێشی دەوێ",
    "about.p4.d": "ئاوات بێ کار تەنیا دووکەڵە. ئاسمان وەڵامی دەستی گەرم دەداتەوە.",
    "about.p5.t": "بێدەنگی زانیارییە",
    "about.p5.d": "کاتێک هیچ وەڵامێک نایەت، خودی نەهاتنیش وەڵامێکە. ئارام بە.",
    "about.contact.title": "پەیوەندی",
    "about.contact.body": "بۆ پۆلی تایبەت، خوێندنەوەی نەخشە، یان تەنیا پرسیارێک، بنووسە بۆ: ",
    "about.birth.label": "لەدایکبوو",
    "about.birth.value": "٢١ی نیسانی ١٩٧١، مەهاباد",
    "about.chart.cap": "نەخشەی لەدایکبوونی ئاڤین. بەزووترین کات زیاد دەکرێ.",

    "med.title": "بیرکردنەوە",
    "med.intro": "بۆچی زۆربەی ئامۆژگارییەکانی بیرکردنەوە کار ناکەن؟ چونکە لەگەڵ مێشک قسە دەکەن، نەک لەگەڵ دەماری. مێشک گەورە نییە؛ میوانە. سەرەتا دەماری ڤاگۆس ئارام بکە، پاشان مێشک خۆی بێدەنگ دەبێ. ئەم چوار تەکنیکە لەگەڵ لەش کار دەکەن.",
    "med.tech1.title": "هەناسەی ٤-٧-٨",
    "med.tech1.meta": "٤ خولەک - سەرەتایی",
    "med.tech1.s1": "لە لووتەوە چوار ژمارە هەناسە بکێشە.",
    "med.tech1.s2": "حەوت ژمارە هەناسەکە ڕاگرە.",
    "med.tech1.s3": "لە دەمەوە، هەشت ژمارە بە هێواشی هەناسە بدە بەرەو دەرەوە.",
    "med.tech1.s4": "چوار خولان. زیاتر نا.",
    "med.tech1.pitfall": "ئەگەر سەرت سوڕا، بوەستە. ئەمە ئاساییە. کەمتر بکە.",

    "med.tech2.title": "پشکنینی لەش",
    "med.tech2.meta": "١٠ تا ١٥ خولەک - سەرەتایی",
    "med.tech2.s1": "ڕاکشێ. ژێر پێیەکانت هەست پێ بکە.",
    "med.tech2.s2": "بە هێواشی ئاگاداریت لە پێوە بۆ سەر بگوازەوە.",
    "med.tech2.s3": "لە هەر شوێنێک گرژی هەیە، تەنیا بوەستە. چارەسەری مەکە، تەماشای بکە.",
    "med.tech2.s4": "کاتێک گەیشتیتە سەر، یەک جار هەموو لەشت پێکەوە هەست پێ بکە.",
    "med.tech2.pitfall": "ئەگەر خەوت لێ کەوت، واتە لەشت ماندوو بووە. جاری داهاتوو دانیشتوو بیکە.",

    "med.tech3.title": "تەماشای مۆم (تراتاکا)",
    "med.tech3.meta": "٨ خولەک - مامناوەند",
    "med.tech3.s1": "مۆمێک هەڵبکە، لە دووری یەک گەزی چاوت.",
    "med.tech3.s2": "بێ چاو لێ کردن سەیری گڕەکە بکە، تا فرمێسک دێت.",
    "med.tech3.s3": "چاوەکانت داخە. وێنەی مۆمەکە لە دوای پێڵووەکانت ببینە تا ون دەبێ.",
    "med.tech3.s4": "دیسان بیکەرەوە. سێ جار.",
    "med.tech3.pitfall": "ئەگەر سەرت ئێشا، دووری زیاتر بکە یان گڕەکە کزتر.",

    "med.tech4.title": "زیکر (دووبارەکردنەوەی ناو)",
    "med.tech4.meta": "١٥ تا ٢٠ خولەک - هەموو ئاستەکان",
    "med.tech4.s1": "یەک ووشە هەڵبژێرە. ناوی خوا، خۆشەویستی، ئاشتی، یان تەنانەت ناوی داپیرەت.",
    "med.tech4.s2": "لەگەڵ هەناسە کێشانەوە بیڵێ، لەگەڵ هەناسە دانەوە. تا ووشە و هەناسە بەیەک ببن.",
    "med.tech4.s3": "کاتێک مێشک ڕۆیشت، بێ سەرزەنشت بیگەڕێنەوە.",
    "med.tech4.s4": "ئەمە تەمرینی دەروێشانە. کۆنترە لە هەموو تەکنیکە نوێیەکان.",
    "med.tech4.pitfall": "ئەگەر ووشە بێ مانا بوو، ئەمە بەشێکی پرۆسەکەیە.",

    "med.breath.title": "هەناسە - کاتژمێری هەناسە",
    "med.breath.start": "دەست پێ بکە",
    "med.breath.stop": "بوەستە",
    "med.breath.inhale": "هەناسە کێشان",
    "med.breath.hold": "ڕاگرتن",
    "med.breath.exhale": "هەناسە دان",
    "med.breath.holdout": "بەتاڵ",

    "med.schedule.title": "هەفتەی یەکەم",
    "med.day.mon": "دووشەممە",
    "med.day.tue": "سێشەممە",
    "med.day.wed": "چوارشەممە",
    "med.day.thu": "پێنجشەممە",
    "med.day.fri": "هەینی",
    "med.day.sat": "شەممە",
    "med.day.sun": "یەکشەممە",
    "med.prac.mon": "٤ خولەک هەناسەی ٤-٧-٨، بەیانی زوو.",
    "med.prac.tue": "١٠ خولەک پشکنینی لەش، پێش خەو.",
    "med.prac.wed": "٤ خولەک هەناسەی ٤-٧-٨، پێش کار.",
    "med.prac.thu": "٨ خولەک تراتاکا، لە تاریکی شەو.",
    "med.prac.fri": "١٥ خولەک زیکر، پاش ئاوابوون.",
    "med.prac.sat": "تێکەڵ: ٥ خولەک هەناسە، ١٠ خولەک زیکر.",
    "med.prac.sun": "دانیشتنی ساکار. بێ تەکنیک. تەنیا بوون.",

    "man.title": "دەربڕین",
    "man.intro": "دەربڕین بیرکردنەوەی ئاواتی نییە. نەزمی ئاگاداریە. چوار جووڵە: نیاز، لەشدارکردن، کردار، وازهێنان. ئەگەر یەکێکیان لاببەی، ئەوانی تر نامێنن.",
    "man.step1.title": "نیاز",
    "man.step1.body": "نیاز ئاوات نییە. نیاز بڕیارە. لەشت دەبێ بیڵێ، نەک تەنیا زمانت. بە دەست بنووسە، لەسەر کاغەزی ڕاستەقینە. ئەوەی دەست بینووسێ، دەمار قبووڵی دەکات.",
    "man.step1.eg": "نموونە: «من ئەو کەسەم کە هەموو ڕۆژێ کاتژمێرێک بۆ خۆم دەنووسم.» نەک «هیوادارم بنووسم.»",
    "man.step1.prompt": "بپرسە: ئەگەر ئەمە ڕووی دا، ڕۆژەکەم چۆن دەبێت؟ سێ ڕستە بنووسە.",
    "man.step2.title": "لەشدارکردن",
    "man.step2.body": "لەش دەبێ بزانێ ئەم نیازە لە کوێ ماڵ دەکات. جلی ئەو کەسە لەبەر بکە کە دەتەوێ ببیت. وەک ئەو ڕۆیشت ڕۆیشتن. نە ڕۆڵ گێڕان، تەمرین.",
    "man.step2.eg": "ئەگەر دەتەوێ نووسەر بیت، ئێستا دەفتەرێک هەڵبگرە و پێنج خولەک بنووسە.",
    "man.step2.prompt": "ئەم هەفتە، یەک نەریتی بچووکی ڕۆژانە لە ژیانی داهاتووت ئێستا دەست پێ بکە.",
    "man.step3.title": "کردار",
    "man.step3.body": "دەربڕین بێ کردار خەونە. هەموو ڕۆژێ یەک هەنگاوی بچووک. ئاسمان وەڵامی دەست دەداتەوە، نەک ئاوات. ئەگەر بانگێک ماوە، بیکە. ئەگەر ئیمێڵێک دەوێ، بینێرە.",
    "man.step3.eg": "نیاز: «کتێبەکەم چاپ دەکرێ.» کرداری ئەمڕۆ: یەک بەند. تەنیا یەکێک.",
    "man.step3.prompt": "بچووکترین هەنگاوی گونجاو چییە؟ ئەمڕۆ بیکە.",
    "man.step4.title": "وازهێنان",
    "man.step4.body": "پاش کردار، وازی لێ بهێنە. ئەگەر بەیانی و ئێوارە ئەنجامەکە پشکنیت، وزە بڵاو دەبێتەوە. کارت بکە، پاشان تەماشای ئاسمان بکە.",
    "man.step4.eg": "ڕۆژێک دانێ. وەک ٩٠ ڕۆژ. تا ئەو ڕۆژە، تەنیا کار بکە.",
    "man.step4.prompt": "بنووسە: «لە ئێستاوە تا [ڕۆژ]، تەنیا کار دەکەم. ئاسمان کاتی خۆی دەزانێ.»",

    "man.script.title": "قاڵبی نووسینی نیاز",
    "man.script.placeholder": "ڕۆژی ئەمڕۆ: \nبە هەموو لەشمەوە ئەمە دەمەوێ: \nیەکەم هەنگاوی بچووکی ئەمڕۆ: \nئەگەر ڕاست بێ، ڕۆژەکەم وایە: \nبۆ ئەوەی هەمە سوپاس دەکەم: ",
    "man.script.copy": "کۆپی",
    "man.script.copied": "کۆپی کرا",

    "man.mistakes.title": "هەڵە باوەکان",
    "man.mistakes.m1": "وێناکردن بێ لەش. وێنا دەکەی بەڵام لە هەمان کورسی دانیشتوویت. لەش پێویستە بجووڵێت.",
    "man.mistakes.m2": "نیاز لە ئاستی ووشە. «دەمەوێ دەوڵەمەند بم.» لەش لێی تێ ناگات. تایبەت بە.",
    "man.mistakes.m3": "بەردەوام پشکنین. هەر جارێک خەم بکەی، نیازەکە لاواز دەبێ.",
    "man.mistakes.m4": "ئاوات بێ وازهێنان. دەتەوێ و دەترسیت. ئەم دووانە یەکتر دەسڕنەوە.",

    "man.caveat.title": "یادهێنانێکی بچووک",
    "man.caveat.body": "ئەمە جادوو نییە. دەربڕین لە ئاسمان هێز وەرناگرێ، لە ئاگاداری ئاراستەکراو هێز وەردەگرێ. ئەگەر کەسێک پێی ووتیت بنیشە و پارە لە بانەوە دێت، درۆی کردووە. ئەمە نەزمێکە، وەک تەمرین.",

    "tools.title": "ئامرازەکان و تاقیکردنەوەکان",
    "tools.intro": "هەموو ئەمانە لە وێبگەڕەکەتدا کار دەکەن. هیچ زانیارییەک نانێردرێت.",
    "tools.bc.title": "داخڵکردنی نەخشەی لەدایکبوون",
    "tools.bc.desc": "ڕۆژ، کات و شوێنی لەدایکبوونت بنووسە. ئەم وەشانە تەنیا بورجی خۆر دەژمێرێ.",
    "tools.bc.dob": "ڕۆژی لەدایکبوون",
    "tools.bc.time": "کاتی لەدایکبوون (نزیکەی)",
    "tools.bc.place": "شوێنی لەدایکبوون",
    "tools.bc.btn": "ژمێردن",
    "tools.bc.placeholderPlace": "نموونە: مەهاباد، ئێران",
    "tools.bc.result.sun": "بورجی خۆر",
    "tools.bc.result.note": "تێبینی: ئەم ژمێردنە بە سیستەمی تڕۆپیکاڵە کە لە ڕۆژاوا باوە. سیستەمی سایدێرێاڵ ئەنجامێکی جیاواز دەدات.",

    "tools.af.title": "دروستکەری نیاز",
    "tools.af.desc": "یەک نیاز لە ٦٠، بەپێی بەشە هەڵبژێردراوەکە.",
    "tools.af.all": "هەموو",
    "tools.af.love": "خۆشەویستی",
    "tools.af.work": "کار",
    "tools.af.body": "لەش",
    "tools.af.family": "خێزان",
    "tools.af.btn": "یەکێکم بدە",

    "tools.jr.title": "دەفتەری دەربڕین",
    "tools.jr.desc": "ڕۆژانە چەند ڕستە. لێرە لە ئامێرەکەت پاشەکەوت دەکرێ.",
    "tools.jr.placeholder": "نیازی ئەمڕۆم ئەوەیە کە...",
    "tools.jr.save": "پاشەکەوت",
    "tools.jr.export": "دەرکردنی دەق",
    "tools.jr.saved": "پاشەکەوت کرا",
    "tools.jr.today": "ئەمڕۆ",

    "tools.mo.title": "تۆمارکردنی هەست",
    "tools.mo.desc": "بە کلیکێک هەستەکەت تۆمار بکە.",
    "tools.mo.history": "مێژوو (٣٠ ڕۆژی ڕابردوو)",
    "tools.mo.empty": "هێشتا هیچت تۆمار نەکردووە.",

    "tools.br.title": "هەناسە - کاتژمێری هەناسە",
    "tools.br.desc": "هەمان ئامراز لە لاپەڕەی بیرکردنەوە.",

    "footer.tagline": "لە مەهاباد، بە خۆشەویستی",
    "footer.birth": "مەهاباد، ١٩٧١",
    "footer.rights": "نووسینەکان بۆ بەکارهێنانی کەسی ئازادن."
  }
};

/* ---------- helpers ---------- */
const LANG_KEY = 'agyan-lang';
const LANG_DIR = { fa: 'rtl', ckb: 'rtl', en: 'ltr' };
const SUPPORTED = ['fa', 'en', 'ckb'];

function detectInitialLang() {
  const saved = localStorage.getItem(LANG_KEY);
  if (saved && SUPPORTED.includes(saved)) return saved;
  return 'en'; // default per spec - English primary, FA and CKB available via switcher
}

function applyLang(lang) {
  if (!SUPPORTED.includes(lang)) lang = 'en';
  const dict = STR[lang];

  document.documentElement.lang = lang;
  document.documentElement.dir = LANG_DIR[lang];

  // text nodes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  // attributes (placeholder, aria-label, title)
  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    const spec = el.getAttribute('data-i18n-attr'); // format: "attr:key,attr:key"
    spec.split(',').forEach(pair => {
      const [attr, key] = pair.split(':').map(s => s.trim());
      if (dict[key] !== undefined) el.setAttribute(attr, dict[key]);
    });
  });

  // lang switch pressed state
  document.querySelectorAll('.lang-switch [data-lang]').forEach(btn => {
    btn.setAttribute('aria-pressed', btn.dataset.lang === lang ? 'true' : 'false');
  });

  localStorage.setItem(LANG_KEY, lang);

  // notify listeners
  window.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
}

function bindLangSwitch() {
  document.querySelectorAll('.lang-switch [data-lang]').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });
}

function bindNavToggle() {
  const toggle = document.querySelector('.nav-toggle');
  const list = document.querySelector('.nav-links');
  if (!toggle || !list) return;
  toggle.addEventListener('click', () => {
    const open = list.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  // close on link tap (mobile)
  list.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => list.classList.remove('open'));
  });
}

/* ---------- Persian (Jalali / Solar Hijri) date conversion ----------
   Approximation algorithm. Good for modern dates.
   Returns object { jy, jm, jd } in Persian calendar.
*/
function gregorianToJalali(gy, gm, gd) {
  const g_d_m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
  let jy = (gy <= 1600) ? 0 : 979;
  gy -= (gy <= 1600) ? 621 : 1600;
  const gy2 = (gm > 2) ? (gy + 1) : gy;
  let days = (365 * gy) + (Math.floor((gy2 + 3) / 4)) - (Math.floor((gy2 + 99) / 100)) + (Math.floor((gy2 + 399) / 400)) - 80 + gd + g_d_m[gm - 1];
  jy += 33 * Math.floor(days / 12053);
  days %= 12053;
  jy += 4 * Math.floor(days / 1461);
  days %= 1461;
  if (days > 365) {
    jy += Math.floor((days - 1) / 365);
    days = (days - 1) % 365;
  }
  const jm = (days < 186) ? 1 + Math.floor(days / 31) : 7 + Math.floor((days - 186) / 30);
  const jd = 1 + ((days < 186) ? (days % 31) : ((days - 186) % 30));
  return { jy, jm, jd };
}

const JALALI_MONTHS_FA = ['فروردین','اردیبهشت','خرداد','تیر','مرداد','شهریور','مهر','آبان','آذر','دی','بهمن','اسفند'];

function toPersianDigits(s) {
  const map = ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
  return String(s).replace(/\d/g, d => map[d]);
}

function formatDateForLang(dateObj, lang) {
  const y = dateObj.getFullYear();
  const m = dateObj.getMonth() + 1;
  const d = dateObj.getDate();
  if (lang === 'fa') {
    const j = gregorianToJalali(y, m, d);
    return toPersianDigits(`${j.jd} ${JALALI_MONTHS_FA[j.jm - 1]} ${j.jy}`);
  }
  if (lang === 'ckb') {
    return `${d}/${m}/${y}`;
  }
  return dateObj.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

/* ---------- bootstrap ---------- */
document.addEventListener('DOMContentLoaded', () => {
  const initial = detectInitialLang();
  bindLangSwitch();
  bindNavToggle();
  applyLang(initial);
});

// expose for tools.js
window.AgyanI18n = { STR, applyLang, getLang: () => document.documentElement.lang || 'en', formatDateForLang, toPersianDigits, SUPPORTED, LANG_DIR };
