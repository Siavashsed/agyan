/* tools.js - widget logic for affirmations, journal, mood, breath, sun-sign.
   All client-side, all per-device via localStorage. */

/* =========================================================
   1. Affirmation data (30 short for daily, 60 categorised)
   ========================================================= */
const DAILY_AFFIRMATIONS = {
  fa: [
    "امروز نفس می‌کشم و این کافی است.",
    "بدنم خانهٔ من است، نه دشمنم.",
    "آنچه را که نمی‌توانم تغییر دهم، رها می‌کنم.",
    "صبر یک مهارت است، نه یک ضعف.",
    "من کسی هستم که از خودش مراقبت می‌کند.",
    "هر کلمهٔ مهربان به خودم، یک ریشه است.",
    "اجازه می‌دهم آرام باشم بدون عذر خواهی.",
    "گذشته‌ام معلم من است، نه قفس من.",
    "اگر امروز فقط نفس بکشم، باز هم زندگی کرده‌ام.",
    "اشک، آب پاک‌کننده است، نه ضعف.",
    "به اندازهٔ امروزِ من، کافی‌ام.",
    "بدنم پیامش را به وقتش می‌رساند.",
    "من با نیاکانم ایستاده‌ام، نه تنها.",
    "نه گفتن، یک نوع عشق به خود است.",
    "آرامش، یک تمرین است، نه یک هدیه.",
    "هر روز یک فصل نیست؛ گاهی فقط یک پاراگراف.",
    "خودم را همان‌طور می‌بینم که هستم، نه آن‌طور که می‌ترسم.",
    "زمین زیر پایم، کیهان بالای سرم، و من در میان.",
    "خشمم پیام دارد؛ گوش می‌دهم بدون عمل عجولانه.",
    "تنهایی با خودبودن، فرق دارد.",
    "وقتی ساکتم، عمیق‌تر می‌شنوم.",
    "خواب کافی، یک عبادت است.",
    "نگرانی، پیشگویی نیست.",
    "بدنم نشانه‌ها را می‌فرستد؛ من احترام می‌گذارم.",
    "نور و سایه، هر دو در منند.",
    "از کسی نمی‌خواهم چیزی را که می‌توانم به خودم بدهم.",
    "حضور بهتر از کمال است.",
    "هر روز، یک شروع کوچک کافی است.",
    "آرامش من، هدیه‌ای است که به دیگران می‌دهم.",
    "ریشه‌ام در مهاباد است، شاخه‌ام در هر کجا."
  ],
  en: [
    "Today I am breathing, and that is enough.",
    "My body is my home, not my enemy.",
    "What I cannot change, I release.",
    "Patience is a skill, not a weakness.",
    "I am someone who takes care of herself.",
    "Every kind word to myself is a root.",
    "I allow myself to rest without apology.",
    "My past is my teacher, not my cage.",
    "If today I only breathe, I have still lived.",
    "Tears are cleansing water, not weakness.",
    "I am enough for the size of today.",
    "My body delivers its message in its own time.",
    "I stand with my ancestors, not alone.",
    "Saying no is a form of self-love.",
    "Calm is a practice, not a gift.",
    "Not every day is a chapter; some are a paragraph.",
    "I see myself as I am, not as I fear.",
    "Earth under my feet, sky above my head, me in between.",
    "My anger has a message; I listen without rushing to act.",
    "Solitude and loneliness are not the same.",
    "When I am quiet, I hear deeper.",
    "Enough sleep is a kind of prayer.",
    "Worry is not prophecy.",
    "My body sends signals; I respect them.",
    "Both light and shadow live in me.",
    "I do not ask from others what I can give myself.",
    "Presence is better than perfection.",
    "Each day, one small beginning is enough.",
    "My calm is a gift I offer others.",
    "My roots are in Mahabad, my branches reach everywhere."
  ],
  ckb: [
    "ئەمڕۆ هەناسە دەکێشم، و ئەمە بەسە.",
    "لەشم ماڵمە، نەک دوژمنم.",
    "ئەوەی ناتوانم بیگۆڕم، وازی لێ دەهێنم.",
    "ئارامی شارەزایییە، نەک لاوازی.",
    "من ئەو کەسەم کە خۆی پارێزگاری دەکات.",
    "هەر ووشەیەکی نەرم بۆ خۆم، ڕەگێکە.",
    "ڕێگەی پشوو دەدەم بێ داوای لێبوردن.",
    "ڕابردووم مامۆستامە، نەک قەفەسم.",
    "ئەگەر ئەمڕۆ تەنیا هەناسە بکێشم، ژیاوم.",
    "فرمێسک ئاوی پاککەرەوەیە، نەک لاوازی.",
    "بەقەد ئەمڕۆی خۆم، بەسم.",
    "لەشم پەیامەکەی لە کاتی خۆیدا دەگەیەنێ.",
    "لەگەڵ پێشینانمدا ڕاوەستاوم.",
    "نا ووتن جۆرێکە لە خۆشەویستی بۆ خۆ.",
    "ئارامی تەمرینە، نەک دیاری.",
    "هەموو ڕۆژێک بەش نییە؛ هەندێ جار تەنیا بەندە.",
    "خۆم وەکو ئەوەی هەم دەبینم، نەک ئەوەی دەترسم.",
    "زەوی لە ژێر پێم، ئاسمان لە سەرم، و من لە ناوەند.",
    "تووڕەییم پەیامی هەیە؛ گوێ دەگرم بێ هەڵپە.",
    "تەنیایی و بێکەسی وەک یەک نین.",
    "کاتێک هێمنم، قووڵتر دەبیستم.",
    "خەوی پێویست جۆرێکە لە نوێژ.",
    "نیگەرانی پێشبینی نییە.",
    "لەشم نیشانە دەنێرێت؛ ڕێزی لێ دەگرم.",
    "هەردوو ڕووناکی و سێبەر لە مندان.",
    "لە کەس داوای ئەوە ناکەم کە دەتوانم بۆ خۆم بدەم.",
    "ئامادەبوون لە تەواوی باشترە.",
    "هەر ڕۆژێک، یەک دەستپێکی بچووک بەسە.",
    "ئارامی من دیارییە بۆ ئەوانی تر.",
    "ڕەگم لە مەهابادە، چڵم بۆ هەموو شوێنێک."
  ]
};

const AFFIRMATIONS_CAT = {
  fa: {
    love: [
      "من شایستهٔ عشقی هستم که آرام بنشیند، نه عشقی که فریاد بزند.",
      "اول خودم را دوست دارم، تا بدانم چه چیزی به دیگران یاد بدهم.",
      "عشق سالم، فضا دارد، نه قید.",
      "از عشقی که التماس می‌خواهد، می‌گذرم.",
      "بدنم به من می‌گوید کدام رابطه امن است.",
      "عشق بدون مرز، فقط دلبستگی است.",
      "آنکه به ارزش من ندیده، در راه من نیست.",
      "خودم تنها رابطه‌ای هستم که تا آخر می‌ماند.",
      "محبت کردن، حماقت نیست؛ شجاعت است.",
      "من می‌توانم دوست داشته باشم بدون از دست دادن خودم.",
      "زخم‌های گذشته، عشق آینده را تعریف نمی‌کنند.",
      "هر رابطه یک معلم است، چه بماند چه نماند.",
      "حضور آرام، گرم‌تر از کلام پرشور است.",
      "من ارزش انتظار را دارم، اما نه برای کسی که نمی‌آید.",
      "عشق با خشونت، عشق نیست. نام دیگری دارد."
    ],
    work: [
      "کارم بازتاب ارزش من نیست؛ بخشی از من است.",
      "تلاش بدون استراحت، فرار است نه پشتکار.",
      "من اجازه دارم کارهای متوسط هم انجام دهم.",
      "ایده‌های من ارزش بیان شدن دارند، حتی اگر کامل نباشند.",
      "موفقیت آرام، بهتر از موفقیت خشمگین است.",
      "من رقیب کسی نیستم؛ مسیر خودم را دارم.",
      "نه گفتن به یک پروژه، بله گفتن به انرژی است.",
      "هر روز یک قدم کوچک، در یک سال یک مسیر طولانی است.",
      "ارزش من به ساعت‌های کارم وابسته نیست.",
      "من حق دارم برای کاری که می‌کنم پول مناسب بگیرم.",
      "اشتباه، داده است نه شکست.",
      "بازخورد دیگران اطلاعات است، نه حکم.",
      "حد من، یک ابزار است، نه یک ضعف.",
      "نوآوری از خستگی نمی‌آید؛ از سکوت می‌آید.",
      "من نه ماشینم، نه برند؛ یک انسانم با ساعت محدود."
    ],
    body: [
      "بدنم با من حرف می‌زند؛ من گوش می‌دهم.",
      "خوردن، یک عبادت است نه یک گناه.",
      "خواب کافی، تنبلی نیست؛ بازسازی است.",
      "بدنم را بدون قضاوت می‌بینم.",
      "حرکت برای من است، نه برای آینه.",
      "درد یک پیام است، نه یک شکست.",
      "نفس عمیق، اولین دارو است.",
      "من به بدنم برای هر روز که دوام آورد، شکر می‌کنم.",
      "آب، آرام‌ترین دوست بدن من است.",
      "بدنم لیاقت لمس مهربان دارد.",
      "بدنم نقشهٔ نیاکانم است؛ احترامش می‌گذارم.",
      "خستگی، یک علامت است؛ به آن گوش می‌دهم.",
      "زیبایی من، یک قانون نیست؛ یک حقیقت است.",
      "بدنم را با گرما لمس می‌کنم، نه با خشم.",
      "هر سلول من، یک نسل از مادران است."
    ],
    family: [
      "از مادرم چیزهای خوب را برمی‌دارم، چیزهای دردناک را زمین می‌گذارم.",
      "خانواده، خط نیست؛ شبکه است.",
      "می‌توانم خانواده‌ام را دوست داشته باشم، و باز هم حد بگذارم.",
      "نقش من در خانواده، فدا شدن نیست.",
      "هر نسل می‌تواند چیزی را قطع کند که نسل قبل نتوانست.",
      "صدای مادرم در سرم، نظر اوست نه حقیقت.",
      "از پدرم، آنچه را که سالم بود، نگه می‌دارم.",
      "بچه‌های من، بازتاب نگرانی‌های من نیستند.",
      "خواهر و برادر می‌توانند دور باشند و باز هم نزدیک.",
      "از خاندانم، با احترام جدا می‌شوم، نه با خشم.",
      "خانوادهٔ خونی، تنها خانواده نیست.",
      "من بار نسل‌های قبل را به دوش نمی‌کشم؛ من مسیر را تغییر می‌دهم.",
      "می‌توانم پدر و مادرم را ببخشم بدون اینکه با آنها زندگی کنم.",
      "نقش‌هایی که خانواده به من داد، تعریف من نیستند.",
      "من برای والدینم، یک پروژهٔ ناتمام نیستم."
    ]
  },
  en: {
    love: [
      "I deserve love that sits down calmly, not love that shouts.",
      "I love myself first so I know what to teach others.",
      "Healthy love has space, not chains.",
      "I walk past any love that begs.",
      "My body tells me which relationship is safe.",
      "Love without limits is only attachment.",
      "One who cannot see my worth is not on my path.",
      "I am the only relationship that lasts to the end.",
      "Kindness is not foolishness; it is courage.",
      "I can love without losing myself.",
      "Past wounds do not define future love.",
      "Every relationship is a teacher, whether it stays or not.",
      "A quiet presence is warmer than passionate words.",
      "I am worth waiting for, but not for someone who never comes.",
      "Love with violence is not love. It has another name."
    ],
    work: [
      "My work reflects part of me, not all of me.",
      "Effort without rest is fleeing, not stamina.",
      "I am allowed to make ordinary things.",
      "My ideas are worth voicing even if not perfect.",
      "Calm success is better than angry success.",
      "I am not competing; I have my own road.",
      "Saying no to one project is saying yes to energy.",
      "Small daily steps make a long road in a year.",
      "My value is not tied to my work hours.",
      "I deserve fair pay for the work I do.",
      "Mistakes are data, not failure.",
      "Other people's feedback is information, not verdict.",
      "My limit is a tool, not a weakness.",
      "Innovation does not come from exhaustion; it comes from silence.",
      "I am not a machine, not a brand; I am a human with limited hours."
    ],
    body: [
      "My body speaks to me; I listen.",
      "Eating is a kind of prayer, not a sin.",
      "Enough sleep is not laziness; it is repair.",
      "I see my body without judgement.",
      "Movement is for me, not for the mirror.",
      "Pain is a message, not a failure.",
      "A deep breath is the first medicine.",
      "I thank my body for each day it carries me.",
      "Water is the calmest friend my body has.",
      "My body deserves a kind touch.",
      "My body is a map of my ancestors; I respect it.",
      "Tiredness is a sign; I listen to it.",
      "My beauty is not a rule; it is a fact.",
      "I touch my body with warmth, not anger.",
      "Every cell of me carries generations of mothers."
    ],
    family: [
      "From my mother I take the good, the painful I set down.",
      "Family is not a line; it is a web.",
      "I can love my family and still set limits.",
      "My role in the family is not to sacrifice myself.",
      "Each generation can cut what the last could not.",
      "My mother's voice in my head is her opinion, not the truth.",
      "From my father I keep what was healthy.",
      "My children are not reflections of my worries.",
      "Siblings can be far and still close.",
      "I leave my lineage with respect, not anger.",
      "Blood family is not the only family.",
      "I do not carry the burden of past generations; I change the road.",
      "I can forgive my parents without living with them.",
      "The roles family gave me are not my definition.",
      "I am not an unfinished project for my parents."
    ]
  },
  ckb: {
    love: [
      "شایانی ئەو خۆشەویستییەم کە بە هێمنی دادەنیشێ.",
      "سەرەتا خۆم خۆشدەوێ، تا بزانم چی فێری ئەوانی تر بکەم.",
      "خۆشەویستی تەندروست بۆشایی هەیە، نەک زنجیر.",
      "تێپەڕ دەبم بەو خۆشەویستییەی کە داوای دەکات.",
      "لەشم پێم دەڵێ کام پەیوەندی بێ مەترسییە.",
      "خۆشەویستی بێ سنوور تەنیا گرێبەستە.",
      "ئەوەی نرخی من نابینێ، لە ڕێگەی مندا نییە.",
      "خۆم تاکە پەیوەندیمە کە تا کۆتایی دەمێنێ.",
      "نەرمی نادانی نییە؛ ئازایەتییە.",
      "دەتوانم خۆشم بوێ بێ ون کردنی خۆم.",
      "برینەکانی ڕابردوو، خۆشەویستی داهاتوو ناناسێنن.",
      "هەر پەیوەندییەک مامۆستایە، چ بمێنێ چ نا.",
      "ئامادەبوونی هێمن گەرمترە لە ووشەی پڕ هاوار.",
      "شایانی چاوەڕوانیم، بەڵام نەک بۆ ئەوەی نایەتەوە.",
      "خۆشەویستی بە توندوتیژی، خۆشەویستی نییە."
    ],
    work: [
      "کارم پارچەیەکی منە، نەک هەمووم.",
      "هەوڵ بێ پشوو ڕاکردنە، نەک خۆڕاگری.",
      "ڕێگەم پێ دراوە کارە ئاسایییەکانیش بکەم.",
      "بیرۆکەکانم شایانی ووتنن، تەنانەت ئەگەر تەواو نەبن.",
      "سەرکەوتنی هێمن لە سەرکەوتنی تووڕە باشترە.",
      "ڕکابەرم بۆ کەس نییە؛ ڕێگەی خۆم هەیە.",
      "نا ووتن بە یەک کار، بەڵێ ووتنە بە وزە.",
      "هەنگاوی بچووکی ڕۆژانە ڕێگەیەکی درێژ دروست دەکات.",
      "نرخی من بە کاتی کارم نییە.",
      "شایانی پارەی ڕاستەقینەم بۆ کارەکەم.",
      "هەڵە زانیارییە، نەک شکست.",
      "تێبینی ئەوانی تر زانیارییە، نەک حوکم.",
      "سنووری من ئامرازە، نەک لاوازی.",
      "داهێنان لە ماندوویەتی نایەت؛ لە بێدەنگییەوە دێت.",
      "نە مەکینەم، نە برەند؛ مرۆڤێکم بە کاتی سنووردار."
    ],
    body: [
      "لەشم لەگەڵم قسە دەکات؛ گوێ دەگرم.",
      "خواردن جۆرێکە لە نوێژ، نەک گوناه.",
      "خەوی بەسە تەمبەڵی نییە؛ چاککردنەوەیە.",
      "لەشم دەبینم بێ حوکم.",
      "جووڵە بۆ منە، نەک بۆ ئاوێنە.",
      "ئازار پەیامە، نەک شکست.",
      "هەناسەی قووڵ یەکەم دەرمانە.",
      "سوپاسی لەشم دەکەم بۆ هەر ڕۆژێک کە هەڵمدەگرێ.",
      "ئاو هێمنترین هاوڕێی لەشمە.",
      "لەشم شایانی پاڵنانی نەرمە.",
      "لەشم نەخشەی پێشینانمە؛ ڕێزی لێ دەگرم.",
      "ماندووبوون نیشانەیە؛ گوێی لێ دەگرم.",
      "جوانیم یاسا نییە؛ ڕاستییە.",
      "لەشم بە گەرمی دەست لێ دەنێم، نەک بە تووڕەیی.",
      "هەر خانەیەکم نەوەیەکی دایکانە."
    ],
    family: [
      "لە دایکمەوە چاکەکان دەبەم، ئازارەکان دادەنێم.",
      "خێزان هێڵ نییە؛ تۆڕە.",
      "دەتوانم خێزانم خۆش بوێ و سنووریش دانێم.",
      "ڕۆڵم لە خێزاندا، قوربانی کردنی خۆم نییە.",
      "هەر نەوەیەک دەتوانێ ئەوە ببڕێ کە نەوەی پێشوو نەی توانی.",
      "دەنگی دایکم لە سەرمدا، بۆچوونی ئەوە، نەک ڕاستی.",
      "لە باوکمەوە ئەوەی تەندروست بوو دەهێڵمەوە.",
      "منداڵەکانم نیگەرانییەکانی من نین.",
      "خوشک و برا دەتوانن دوور بن و نزیکیش.",
      "بە ڕێز لە بنەماڵەکەم جیا دەبمەوە.",
      "خێزانی خوێن تەنیا خێزان نییە.",
      "بارگرانیی نەوەکانی پێشوو هەڵناگرم؛ ڕێگەکە دەگۆڕم.",
      "دەتوانم لێبوردن لە دایک و باوکم بکەم بێ ئەوەی لەگەڵیان بژیم.",
      "ڕۆڵەکانی خێزان داوم، پێناسەی من نین.",
      "بۆ دایک و باوکم پڕۆژەی ناتەواو نیم."
    ]
  }
};

/* =========================================================
   2. Daily tips
   ========================================================= */
const TIPS = {
  fa: [
    "قبل از باز کردن گوشی صبح، سه نفس عمیق بکش. این کوچک‌ترین مرز روزانه‌ات است.",
    "آب را بخور قبل از قهوه. بدن قبل از مغز بیدار می‌شود.",
    "نام نیاکانت را بگو، حتی فقط در ذهنت. خاطره ریشه است.",
    "وقتی ناراحتی، دستت را روی قلبت بگذار. بدن می‌فهمد قبل از کلمات.",
    "یک بار در هفته، یک ساعت بدون صفحه. آسمان واقعی، نه تصویر آسمان.",
    "اگر نمی‌توانی بنویسی، فقط تاریخ را بنویس. آن کافی است.",
    "حد گذاشتن، خشونت نیست. عشق به خود است.",
    "اگر کسی به تو می‌گوید آرام باش، یعنی آرامش او بستگی به سکوت تو دارد.",
    "هر کاری را که ساعت سه نیمه‌شب نگران آنی، صبح فردا کوچک‌تر می‌شود.",
    "وقتی نمی‌دانی چه بگویی، یک کلمه کافی است: «می‌فهمم.»"
  ],
  en: [
    "Before opening your phone in the morning, take three slow breaths. The smallest daily boundary.",
    "Drink water before coffee. The body wakes before the brain does.",
    "Say your ancestors' names, even silently. Memory is root.",
    "When upset, put a hand on your chest. The body understands before words do.",
    "Once a week, an hour with no screens. Real sky, not its picture.",
    "If you cannot write, just write the date. That is enough.",
    "Setting a limit is not violence. It is self-love.",
    "If someone tells you to calm down, their calm depends on your silence.",
    "Whatever worries you at three in the morning will look smaller by breakfast.",
    "When you do not know what to say, one word is enough: \"I understand.\""
  ],
  ckb: [
    "پێش ئەوەی بەیانی مۆبایلت بکەیتەوە، سێ هەناسەی هێواش بکێشە.",
    "ئاو بخۆ پێش قاوە. لەش پێش مێشک بەخەبەر دێت.",
    "ناوی پێشینانت بڵێ، تەنانەت لە ناوسکدا. یاد ڕەگە.",
    "کاتێک خەمباریت، دەستت لەسەر سنگت دانێ. لەش پێش ووشە تێ دەگات.",
    "هەفتەی جارێک، کاتژمێرێک بێ ئامێر. ئاسمانی ڕاست، نەک وێنە.",
    "ئەگەر ناتوانیت بنووسیت، تەنیا ڕۆژەکە بنووسە. ئەمە بەسە.",
    "سنوور دانان توندوتیژی نییە. خۆشەویستییە بۆ خۆ.",
    "ئەگەر کەسێک پێت دەڵێ ئارام بە، ئارامیی ئەو بە بێدەنگیی تۆوەیە.",
    "هەرچی لە سێی شەو نیگەرانیتە، لە بەیانی بچووکتر دەبێ.",
    "کاتێک نازانیت چی بڵێیت، یەک ووشە بەسە: «تێ دەگەم.»"
  ]
};

/* =========================================================
   3. Daily-affirmation widget (homepage)
   ========================================================= */
function pickDailyAffirmation(lang) {
  const list = DAILY_AFFIRMATIONS[lang] || DAILY_AFFIRMATIONS.en;
  const today = new Date().toISOString().slice(0, 10);
  const key = `agyan-daily-${lang}`;
  const stored = JSON.parse(localStorage.getItem(key) || '{}');
  if (stored.date === today && typeof stored.idx === 'number') {
    return list[stored.idx % list.length];
  }
  const idx = Math.floor(Math.random() * list.length);
  localStorage.setItem(key, JSON.stringify({ date: today, idx }));
  return list[idx];
}

function rerollDailyAffirmation(lang) {
  const list = DAILY_AFFIRMATIONS[lang] || DAILY_AFFIRMATIONS.en;
  const idx = Math.floor(Math.random() * list.length);
  const today = new Date().toISOString().slice(0, 10);
  localStorage.setItem(`agyan-daily-${lang}`, JSON.stringify({ date: today, idx }));
  return list[idx];
}

function setupDailyAffirmation() {
  const target = document.getElementById('daily-affirm-text');
  const btn = document.getElementById('daily-affirm-new');
  if (!target) return;
  const render = () => {
    const lang = window.AgyanI18n.getLang();
    target.textContent = pickDailyAffirmation(lang);
  };
  render();
  if (btn) {
    btn.addEventListener('click', () => {
      const lang = window.AgyanI18n.getLang();
      target.textContent = rerollDailyAffirmation(lang);
    });
  }
  window.addEventListener('langchange', render);
}

/* =========================================================
   4. Tips carousel render
   ========================================================= */
function renderTips() {
  const wrap = document.getElementById('tips-list');
  if (!wrap) return;
  const render = () => {
    const lang = window.AgyanI18n.getLang();
    const list = TIPS[lang] || TIPS.en;
    wrap.innerHTML = list.map((t, i) => {
      const n = lang === 'fa' ? window.AgyanI18n.toPersianDigits(i + 1) : (i + 1);
      return `<article class="tip"><div class="num">${n}</div><p>${escapeHtml(t)}</p></article>`;
    }).join('');
  };
  render();
  window.addEventListener('langchange', render);
}

/* =========================================================
   5. Newsletter (no-op, friendly note only)
   ========================================================= */
function setupNewsletter() {
  const form = document.getElementById('newsletter-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const note = form.querySelector('.note');
    if (note) {
      const lang = window.AgyanI18n.getLang();
      note.textContent = window.AgyanI18n.STR[lang]['news.thanks'];
      note.style.color = 'var(--rose-gold)';
    }
    form.querySelector('input[type="email"]').value = '';
  });
}

/* =========================================================
   6. Breath timer (used on meditation + tools)
   ========================================================= */
function setupBreathWidget() {
  const widget = document.querySelector('.breath-widget');
  if (!widget) return;
  const circle = widget.querySelector('.breath-circle');
  const phaseEl = widget.querySelector('.breath-phase');
  const startBtn = widget.querySelector('[data-act="start"]');
  const stopBtn = widget.querySelector('[data-act="stop"]');

  // 4-7-8 pattern: inhale 4s, hold 7s, exhale 8s, holdout 1s
  const PHASES = [
    { name: 'inhale', cls: 'inhale', ms: 4000, key: 'med.breath.inhale' },
    { name: 'hold', cls: 'hold', ms: 7000, key: 'med.breath.hold' },
    { name: 'exhale', cls: 'exhale', ms: 8000, key: 'med.breath.exhale' },
    { name: 'holdout', cls: 'holdout', ms: 1000, key: 'med.breath.holdout' }
  ];
  let timer = null;
  let idx = 0;

  function step() {
    const lang = window.AgyanI18n.getLang();
    const p = PHASES[idx % PHASES.length];
    circle.classList.remove('inhale', 'hold', 'exhale', 'holdout');
    void circle.offsetWidth; // reflow
    circle.classList.add(p.cls);
    phaseEl.textContent = window.AgyanI18n.STR[lang][p.key];
    idx++;
    timer = setTimeout(step, p.ms);
  }
  function start() {
    if (timer) return;
    idx = 0;
    step();
    startBtn.disabled = true;
    stopBtn.disabled = false;
  }
  function stop() {
    clearTimeout(timer);
    timer = null;
    idx = 0;
    circle.classList.remove('inhale', 'hold', 'exhale', 'holdout');
    phaseEl.textContent = '';
    startBtn.disabled = false;
    stopBtn.disabled = true;
  }
  if (startBtn) startBtn.addEventListener('click', start);
  if (stopBtn) {
    stopBtn.addEventListener('click', stop);
    stopBtn.disabled = true;
  }
}

/* =========================================================
   7. Manifestation scripting copy
   ========================================================= */
function setupScriptingCopy() {
  const btn = document.getElementById('script-copy');
  const area = document.getElementById('script-area');
  if (!btn || !area) return;
  btn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(area.value || area.placeholder);
      const lang = window.AgyanI18n.getLang();
      const orig = window.AgyanI18n.STR[lang]['man.script.copy'];
      btn.textContent = window.AgyanI18n.STR[lang]['man.script.copied'];
      setTimeout(() => { btn.textContent = orig; }, 1600);
    } catch (e) {
      area.select();
    }
  });
}

/* =========================================================
   8. Sun-sign calculator (Tropical)
   ========================================================= */
const SIGNS = [
  { key: 'astro.signs.capricorn', from: [12, 22], to: [1, 19] },
  { key: 'astro.signs.aquarius',  from: [1, 20], to: [2, 18] },
  { key: 'astro.signs.pisces',    from: [2, 19], to: [3, 20] },
  { key: 'astro.signs.aries',     from: [3, 21], to: [4, 19] },
  { key: 'astro.signs.taurus',    from: [4, 20], to: [5, 20] },
  { key: 'astro.signs.gemini',    from: [5, 21], to: [6, 20] },
  { key: 'astro.signs.cancer',    from: [6, 21], to: [7, 22] },
  { key: 'astro.signs.leo',       from: [7, 23], to: [8, 22] },
  { key: 'astro.signs.virgo',     from: [8, 23], to: [9, 22] },
  { key: 'astro.signs.libra',     from: [9, 23], to: [10, 22] },
  { key: 'astro.signs.scorpio',   from: [10, 23], to: [11, 21] },
  { key: 'astro.signs.sagittarius', from: [11, 22], to: [12, 21] }
];

function getSunSign(month, day) {
  for (const s of SIGNS) {
    const [fm, fd] = s.from;
    const [tm, td] = s.to;
    if (fm === tm) {
      if (month === fm && day >= fd && day <= td) return s.key;
    } else {
      if ((month === fm && day >= fd) || (month === tm && day <= td)) return s.key;
    }
  }
  return 'astro.signs.aries';
}

function setupBirthChart() {
  const form = document.getElementById('birth-form');
  if (!form) return;
  const dob = form.querySelector('input[name="dob"]');
  const result = document.getElementById('birth-result');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!dob.value) return;
    const d = new Date(dob.value);
    if (isNaN(d.getTime())) return;
    const signKey = getSunSign(d.getMonth() + 1, d.getDate());
    const lang = window.AgyanI18n.getLang();
    const sunLabel = window.AgyanI18n.STR[lang]['tools.bc.result.sun'];
    const signName = window.AgyanI18n.STR[lang][signKey];
    const note = window.AgyanI18n.STR[lang]['tools.bc.result.note'];
    result.innerHTML = `<p><strong>${escapeHtml(sunLabel)}:</strong> ${escapeHtml(signName)}</p><p style="margin:0;font-size:.85rem;color:var(--ink-faint)">${escapeHtml(note)}</p>`;
  });
}

/* =========================================================
   9. Affirmation generator (categorised)
   ========================================================= */
function setupAffirmGenerator() {
  const wrap = document.getElementById('affirm-gen');
  if (!wrap) return;
  const filter = wrap.querySelector('.cat-filter');
  const btn = wrap.querySelector('[data-act="gen"]');
  const out = wrap.querySelector('.result-box');
  let category = 'all';

  filter.querySelectorAll('button').forEach(b => {
    b.addEventListener('click', () => {
      filter.querySelectorAll('button').forEach(x => x.setAttribute('aria-pressed', 'false'));
      b.setAttribute('aria-pressed', 'true');
      category = b.dataset.cat;
    });
  });

  function pick() {
    const lang = window.AgyanI18n.getLang();
    const cats = AFFIRMATIONS_CAT[lang] || AFFIRMATIONS_CAT.en;
    let pool;
    if (category === 'all') {
      pool = [].concat(cats.love, cats.work, cats.body, cats.family);
    } else {
      pool = cats[category] || [];
    }
    if (pool.length === 0) return;
    out.textContent = pool[Math.floor(Math.random() * pool.length)];
  }
  btn.addEventListener('click', pick);
}

/* =========================================================
   10. Journal (save / export)
   ========================================================= */
function setupJournal() {
  const wrap = document.getElementById('journal');
  if (!wrap) return;
  const area = wrap.querySelector('textarea');
  const saveBtn = wrap.querySelector('[data-act="save"]');
  const expBtn = wrap.querySelector('[data-act="export"]');
  const meta = wrap.querySelector('.journal-meta');
  const KEY = 'agyan-journal';

  function todayStr(lang) {
    return window.AgyanI18n.formatDateForLang(new Date(), lang);
  }
  function renderMeta(savedAt) {
    const lang = window.AgyanI18n.getLang();
    const today = window.AgyanI18n.STR[lang]['tools.jr.today'];
    const saved = savedAt ? ' - ' + savedAt : '';
    meta.innerHTML = `<span>${escapeHtml(today)}: ${escapeHtml(todayStr(lang))}</span><span>${escapeHtml(saved)}</span>`;
  }

  function loadToday() {
    const all = JSON.parse(localStorage.getItem(KEY) || '{}');
    const isoToday = new Date().toISOString().slice(0, 10);
    if (all[isoToday]) {
      area.value = all[isoToday].text;
      renderMeta(window.AgyanI18n.STR[window.AgyanI18n.getLang()]['tools.jr.saved']);
    } else {
      renderMeta('');
    }
  }

  saveBtn.addEventListener('click', () => {
    const all = JSON.parse(localStorage.getItem(KEY) || '{}');
    const isoToday = new Date().toISOString().slice(0, 10);
    all[isoToday] = { text: area.value, ts: Date.now() };
    localStorage.setItem(KEY, JSON.stringify(all));
    renderMeta(window.AgyanI18n.STR[window.AgyanI18n.getLang()]['tools.jr.saved']);
  });

  expBtn.addEventListener('click', () => {
    const all = JSON.parse(localStorage.getItem(KEY) || '{}');
    const lines = Object.keys(all).sort().map(d => `# ${d}\n${all[d].text}\n`);
    const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'agyan-journal.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });

  loadToday();
  window.addEventListener('langchange', loadToday);
}

/* =========================================================
   11. Mood check-in + 30-day line chart
   ========================================================= */
const MOOD_KEY = 'agyan-mood';
const MOOD_VALUES = [
  { emoji: '😢', score: 1 },
  { emoji: '😕', score: 2 },
  { emoji: '😐', score: 3 },
  { emoji: '🙂', score: 4 },
  { emoji: '😊', score: 5 }
];

function setupMood() {
  const wrap = document.getElementById('mood');
  if (!wrap) return;
  const row = wrap.querySelector('.mood-row');
  const chart = wrap.querySelector('.mood-chart');
  const empty = wrap.querySelector('.mood-empty');

  row.innerHTML = MOOD_VALUES.map(m =>
    `<button class="mood-btn" data-score="${m.score}" aria-label="${m.emoji}">${m.emoji}</button>`
  ).join('');

  row.querySelectorAll('.mood-btn').forEach(b => {
    b.addEventListener('click', () => {
      const all = JSON.parse(localStorage.getItem(MOOD_KEY) || '{}');
      const iso = new Date().toISOString().slice(0, 10);
      all[iso] = parseInt(b.dataset.score, 10);
      localStorage.setItem(MOOD_KEY, JSON.stringify(all));
      flashLogged(b);
      renderChart();
    });
  });

  function flashLogged(btn) {
    row.querySelectorAll('.mood-btn').forEach(x => x.classList.remove('logged'));
    btn.classList.add('logged');
  }

  function renderChart() {
    const all = JSON.parse(localStorage.getItem(MOOD_KEY) || '{}');
    const keys = Object.keys(all).sort();
    if (keys.length === 0) {
      chart.innerHTML = '';
      empty.style.display = 'block';
      return;
    }
    empty.style.display = 'none';

    // Last 30 days
    const days = [];
    for (let i = 29; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const iso = d.toISOString().slice(0, 10);
      days.push({ iso, score: all[iso] || null });
    }

    const W = 600;
    const H = 120;
    const PAD = 16;
    const innerW = W - PAD * 2;
    const innerH = H - PAD * 2;

    const points = days.map((d, i) => {
      const x = PAD + (i / 29) * innerW;
      const y = d.score == null ? null : PAD + innerH - ((d.score - 1) / 4) * innerH;
      return { x, y, score: d.score };
    });

    // Build path between defined points
    let path = '';
    let started = false;
    points.forEach(p => {
      if (p.y == null) return;
      if (!started) { path += `M ${p.x.toFixed(1)} ${p.y.toFixed(1)}`; started = true; }
      else path += ` L ${p.x.toFixed(1)} ${p.y.toFixed(1)}`;
    });

    const dots = points
      .filter(p => p.y != null)
      .map(p => `<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="3" fill="#e6b9a6" />`)
      .join('');

    const gridLines = [1, 2, 3, 4, 5].map(s => {
      const y = PAD + innerH - ((s - 1) / 4) * innerH;
      return `<line x1="${PAD}" x2="${W - PAD}" y1="${y}" y2="${y}" stroke="rgba(230,185,166,0.12)" stroke-width="1" />`;
    }).join('');

    chart.innerHTML = `
      <svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mood chart">
        ${gridLines}
        <path d="${path}" fill="none" stroke="#e6b9a6" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
        ${dots}
      </svg>
    `;
  }

  renderChart();
  window.addEventListener('langchange', renderChart);
}

/* =========================================================
   utilities
   ========================================================= */
function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/* =========================================================
   bootstrap
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  // Ensure i18n is ready before we read STR
  setTimeout(() => {
    setupDailyAffirmation();
    renderTips();
    setupNewsletter();
    setupBreathWidget();
    setupScriptingCopy();
    setupBirthChart();
    setupAffirmGenerator();
    setupJournal();
    setupMood();
  }, 0);
});
