(function () {
  "use strict";

  var STORAGE_KEY = "cwa_language";
  var WA_NUMBER = "96176540195";
  var currentLanguage = "en";
  var textItems = [];

  var AR = {
    "Summer intake now open —": "التسجيل للدورة الصيفية مفتوح الآن —",
    "starts August 1": "تبدأ في 1 أغسطس",
    "· online · ages 10–16 · seats are limited": "· عبر الإنترنت · للأعمار 10–16 · المقاعد محدودة",
    "Code with Abdulhamid": "البرمجة مع عبد الحميد",
    "Why Python": "لماذا بايثون؟",
    "Course": "الدورة",
    "Weekly plan": "الخطة الأسبوعية",
    "Projects": "المشاريع",
    "Your tutor": "مدرّسك",
    "FAQ": "الأسئلة الشائعة",
    "Reserve a seat": "احجز مقعداً",
    "Enrollment open · starts August 1": "التسجيل مفتوح · تبدأ في 1 أغسطس",
    "Help your child": "ساعد طفلك على",
    "start coding": "بدء البرمجة",
    "with Python this August": "باستخدام بايثون هذا الصيف",
    "A beginner-friendly, paid online course for ages 10–16. Small steps, fun projects, and patient teaching in English + Arabic — no coding experience needed.": "دورة مدفوعة عبر الإنترنت ومناسبة للمبتدئين من عمر 10 إلى 16 عاماً. خطوات صغيرة، ومشاريع ممتعة، وشرح صبور باللغتين الإنجليزية والعربية — ولا حاجة لأي خبرة سابقة في البرمجة.",
    "Reserve a Seat on WhatsApp": "احجز مقعداً عبر واتساب",
    "View Course Details": "اطّلع على تفاصيل الدورة",
    "Ages 10–16": "الأعمار 10–16",
    "Aug 1 – Sep 1": "1 أغسطس – 1 سبتمبر",
    "3 hrs / week": "3 ساعات أسبوعياً",
    "100% online": "عبر الإنترنت بالكامل",
    "Certificate included": "الشهادة مشمولة",
    "Certificate of appreciation": "شهادة تقدير",
    "Two languages": "لغتان",
    "Taught in English + Arabic": "التدريس بالإنجليزية والعربية",
    "years of tutoring": "سنوات من التدريس الخصوصي",
    "students taught 1-on-1": "طلاب تلقّوا دروساً فردية",
    "3rd": "السنة الثالثة",
    "year Computer Science student": "طالب علوم حاسوب",
    "languages — English & Arabic": "لغتان — الإنجليزية والعربية",
    "The friendliest first language for young coders": "أفضل لغة أولى للمبرمجين الصغار",
    "Python reads almost like English, which makes it the language schools and universities worldwide choose for beginners.": "تُقرأ بايثون بطريقة قريبة من اللغة العادية، ولذلك تختارها المدارس والجامعات حول العالم لتعليم المبتدئين.",
    "Easy to read": "سهلة القراءة",
    "Python code looks like plain sentences, so kids focus on ideas instead of confusing symbols.": "تبدو شيفرة بايثون كجمل بسيطة، فيركّز الأطفال على الأفكار بدلاً من الرموز المعقّدة.",
    "Used in the real world": "مستخدمة في العالم الحقيقي",
    "The same language powers YouTube, Instagram, NASA tools, and modern AI systems.": "تُستخدم اللغة نفسها في يوتيوب وإنستغرام وأدوات ناسا وأنظمة الذكاء الاصطناعي الحديثة.",
    "Builds thinking skills": "تنمّي مهارات التفكير",
    "Coding teaches logic, patience, and step-by-step problem-solving — skills that help in school too.": "تعلّم البرمجة المنطق والصبر وحل المشكلات خطوة بخطوة — وهي مهارات مفيدة في الدراسة أيضاً.",
    "A launchpad": "نقطة انطلاق",
    "The first step toward AI, game development, apps, robotics, and strong school projects.": "الخطوة الأولى نحو الذكاء الاصطناعي وتطوير الألعاب والتطبيقات والروبوتات والمشاريع المدرسية المميزة.",
    "Course details": "تفاصيل الدورة",
    "Everything parents need to know": "كل ما يحتاج الأهل إلى معرفته",
    "beginner friendly, no experience needed": "مناسبة للمبتدئين، ولا تحتاج إلى خبرة",
    "Aug 1 → Sep 1": "1 أغسطس ← 1 سبتمبر",
    "one focused summer month": "شهر صيفي واحد ومركّز",
    "Mon · Wed · Fri": "الاثنين · الأربعاء · الجمعة",
    "1 hour per day, 3 hours per week": "ساعة يومياً، 3 ساعات أسبوعياً",
    "Fully online": "عبر الإنترنت بالكامل",
    "join from home — laptop required": "المشاركة من المنزل — يلزم جهاز لابتوب",
    "Certificate": "الشهادة",
    "certificate of appreciation at the end": "شهادة تقدير في نهاية الدورة",
    "English + Arabic": "الإنجليزية + العربية",
    "explained in whichever is easier": "الشرح باللغة الأسهل للطالب",
    "$30 full course": "30$ للدورة كاملة",
    "paid via Whish Money · 15+ seats available": "الدفع عبر Whish Money · يتوفر أكثر من 15 مقعداً",
    "Curriculum": "المنهج",
    "What your child will learn": "ما سيتعلّمه طفلك",
    "Step by step, with examples and mini challenges in every lesson — never just theory.": "خطوة بخطوة، مع أمثلة وتحديات صغيرة في كل درس — وليس مجرد شرح نظري.",
    "How programming works": "كيف تعمل البرمجة",
    "What code is, how Python runs it, and writing a first program.": "ما هي الشيفرة، وكيف تشغّلها بايثون، وكتابة أول برنامج.",
    "Variables & input/output": "المتغيّرات والإدخال/الإخراج",
    "Numbers, text, and programs that talk back to you.": "الأرقام والنصوص وبرامج تتفاعل مع المستخدم.",
    "Conditions: if / else": "الشروط: if / else",
    "Teaching programs to make decisions, just like we do.": "تعليم البرامج كيفية اتخاذ القرارات كما نفعل نحن.",
    "Loops: for & while": "الحلقات: for و while",
    "Making the computer repeat work — the fun part of coding.": "جعل الحاسوب يكرّر المهام — أحد الأجزاء الممتعة في البرمجة.",
    "Lists & simple data": "القوائم والبيانات البسيطة",
    "Storing collections of things and working with them.": "تخزين مجموعات من العناصر والعمل عليها.",
    "Functions": "الدوال",
    "Writing reusable code blocks like a real developer.": "كتابة مقاطع شيفرة قابلة لإعادة الاستخدام مثل المطوّرين.",
    "Debugging": "تصحيح الأخطاء",
    "Finding and fixing mistakes calmly — a superpower for life.": "اكتشاف الأخطاء وإصلاحها بهدوء — مهارة قوية تفيد في الحياة.",
    "Mini projects & final project": "مشاريع صغيرة ومشروع نهائي",
    "Games and challenges, ending with a project they proudly own.": "ألعاب وتحديات تنتهي بمشروع ينجزه الطالب ويفتخر به.",
    "Learning journey": "رحلة التعلّم",
    "The 4-week plan": "خطة الأسابيع الأربعة",
    "Every Monday, Wednesday, and Friday — one focused hour that builds on the last.": "كل اثنين وأربعاء وجمعة — ساعة مركّزة تبني على الدرس السابق.",
    "First steps": "الخطوات الأولى",
    "What programming is, Python setup, variables, and programs with input & output.": "ما هي البرمجة، وتجهيز بايثون، والمتغيّرات، وبرامج الإدخال والإخراج.",
    "Logic & loops": "المنطق والحلقات",
    "If/else decisions, for & while loops, and beginner problem-solving challenges.": "قرارات if/else وحلقات for وwhile وتحديات بسيطة لحل المشكلات.",
    "Building blocks": "لبنات البناء",
    "Lists, functions, cleaner code, and the first real mini projects.": "القوائم والدوال وكتابة شيفرة أوضح وأول مشاريع صغيرة حقيقية.",
    "Final project": "المشروع النهائي",
    "A complete project of their own, review of everything, and a confidence boost to keep going.": "مشروع كامل من إنجاز الطالب، مع مراجعة شاملة وتعزيز الثقة للاستمرار.",
    "Real things your child will build": "مشاريع حقيقية سيبنيها طفلك",
    "Guess the Number game": "لعبة تخمين الرقم",
    "loops + logic": "الحلقات + المنطق",
    "Simple Calculator": "آلة حاسبة بسيطة",
    "variables + math": "المتغيّرات + الحساب",
    "Quiz Game": "لعبة أسئلة",
    "conditions + score": "الشروط + النقاط",
    "Password Generator": "منشئ كلمات مرور",
    "strings + randomness": "النصوص + العشوائية",
    "Grade Checker": "مدقّق العلامات",
    "lists + functions": "القوائم + الدوال",
    "Final Mini Project": "المشروع المصغّر النهائي",
    "their own idea, built for real": "فكرتهم الخاصة، ينفّذونها بأنفسهم",
    "Python Tutor for Young Beginners": "مدرّس بايثون للمبتدئين الصغار",
    "5+ years tutoring": "أكثر من 5 سنوات في التدريس",
    "Computer Science student": "طالب علوم حاسوب",
    "Lebanese University": "الجامعة اللبنانية",
    "Meet your tutor": "تعرّف إلى مدرّسك",
    "My story": "قصتي",
    "I've been tutoring for over five years, working one-on-one with more than ten students — guiding them through their school agendas, preparing them for exams, and watching their grades and confidence climb together. What I've learned in those years is simple: every student can succeed when someone explains things patiently, in a way that finally clicks.": "أعمل في التدريس الخصوصي منذ أكثر من خمس سنوات، وقد درّست أكثر من عشرة طلاب بشكل فردي — ساعدتهم في متابعة مناهجهم المدرسية والاستعداد للامتحانات، وشاهدت تحسّن علاماتهم وثقتهم بأنفسهم معاً. وما تعلّمته خلال هذه السنوات بسيط: يستطيع كل طالب أن ينجح عندما يجد من يشرح له بصبر وبطريقة تجعله يفهم الفكرة فعلاً.",
    "I'm a university student at the Lebanese University, ranked top of my class — and I got there the same way I teach: by breaking big, scary topics into small, clear steps. Programming is where that approach shines the most.": "أنا طالب جامعي في الجامعة اللبنانية، وقد حصلت على المرتبة الأولى في صفي. وصلت إلى ذلك بالطريقة نفسها التي أدرّس بها: تقسيم المواضيع الكبيرة والمخيفة إلى خطوات صغيرة وواضحة. وتظهر فاعلية هذه الطريقة بشكل خاص في تعلّم البرمجة.",
    "“Coding isn't scary. It's creative, logical, and honestly fun — my job is to help your child discover that in their very first week.”": "«البرمجة ليست مخيفة؛ بل هي إبداعية ومنطقية وممتعة فعلاً — ومهمتي أن أساعد طفلك على اكتشاف ذلك منذ أسبوعه الأول.»",
    "In this course, your child won't just watch — they'll type, experiment, make mistakes safely, and build real small programs from day one. In English, in Arabic, or both, whichever helps them learn best.": "في هذه الدورة لن يكتفي طفلك بالمشاهدة — بل سيكتب ويجرّب ويخطئ ضمن بيئة آمنة ويبني برامج صغيرة حقيقية منذ اليوم الأول، بالإنجليزية أو العربية أو كلتيهما، بحسب ما يساعده على الفهم بصورة أفضل.",
    "Who this course is for": "لمن تناسب هذه الدورة؟",
    "Kids aged 10–16 who are curious about technology": "للأطفال من عمر 10 إلى 16 عاماً المهتمين بالتكنولوجيا",
    "Students who enjoy games, puzzles, or problem-solving": "للطلاب الذين يحبون الألعاب والألغاز وحل المشكلات",
    "Complete beginners — zero coding experience required": "للمبتدئين تماماً — لا حاجة لأي خبرة برمجية",
    "Parents who want their child to build future-ready skills over the summer": "للأهل الذين يريدون لأطفالهم اكتساب مهارات المستقبل خلال الصيف",
    "What parents can expect": "ما الذي يمكن أن يتوقّعه الأهل؟",
    "Patient, beginner-friendly explanations — no question is silly": "شرح صبور ومناسب للمبتدئين — لا يوجد سؤال غير مهم",
    "Personal attention — seats are limited so nobody gets lost": "اهتمام شخصي — المقاعد محدودة كي يحصل كل طالب على المتابعة",
    "Practice-based learning — kids code in every single session": "تعلّم قائم على التطبيق — يكتب الطلاب الشيفرة في كل حصة",
    "A safe, respectful, encouraging environment": "بيئة آمنة ومحترمة ومشجّعة",
    "Progress updates so you always know how it's going": "تحديثات عن التقدّم لتبقى على اطلاع دائم",
    "Questions parents ask": "أسئلة يطرحها الأهل",
    "Does my child need previous coding experience?": "هل يحتاج طفلي إلى خبرة سابقة في البرمجة؟",
    "Not at all. The course is designed for complete beginners — we start from “what is code?” and build up slowly.": "أبداً. صُمّمت الدورة للمبتدئين تماماً — نبدأ من سؤال «ما هي الشيفرة؟» ثم نتقدّم تدريجياً.",
    "Does my child need a laptop?": "هل يحتاج طفلي إلى جهاز لابتوب؟",
    "Yes — a laptop is required, since students write and run real Python code in every session. Any regular laptop works; no special specs needed.": "نعم، يلزم جهاز لابتوب لأن الطلاب سيكتبون شيفرة بايثون حقيقية ويشغّلونها في كل حصة. يكفي أي جهاز عادي، ولا نحتاج إلى مواصفات خاصة.",
    "Is the course online or in person?": "هل الدورة عبر الإنترنت أم حضورياً؟",
    "Fully online — your child joins from home on Monday, Wednesday, and Friday, one hour per day.": "الدورة عبر الإنترنت بالكامل — ينضم طفلك من المنزل أيام الاثنين والأربعاء والجمعة، لمدة ساعة يومياً.",
    "What language is the course taught in?": "بأي لغة تُدرَّس الدورة؟",
    "Both English and Arabic. Concepts are explained in whichever language helps your child understand fastest.": "باللغتين الإنجليزية والعربية. تُشرح المفاهيم باللغة التي تساعد طفلك على الفهم بشكل أسرع.",
    "How many students are in the class?": "كم عدد الطلاب في الصف؟",
    "There are 15+ seats for this intake, and the group is kept small enough that every student gets personal attention.": "يتوفر أكثر من 15 مقعداً لهذه الدورة، مع الحفاظ على مجموعة تتيح لكل طالب الحصول على اهتمام ومتابعة شخصية.",
    "How do I reserve a seat?": "كيف أحجز مقعداً؟",
    "Tap any “Reserve on WhatsApp” button on this page — it opens a chat with me directly, and I'll send you the full details and confirm your child's seat.": "اضغط على أي زر «احجز عبر واتساب» في هذه الصفحة — ستُفتح محادثة مباشرة معي، وسأرسل لك التفاصيل الكاملة وأؤكد مقعد طفلك.",
    "Is the course paid? How much?": "هل الدورة مدفوعة؟ وكم تكلفتها؟",
    "Yes — the full one-month course is $30, paid via Whish Money. That covers all 12+ live hours, materials, and the certificate.": "نعم — تكلفة الدورة الكاملة لمدة شهر هي 30$، والدفع عبر Whish Money. يشمل السعر أكثر من 12 ساعة مباشرة والمواد التعليمية والشهادة.",
    "What will my child be able to do after the course?": "ماذا سيتمكن طفلي من إنجازه بعد الدورة؟",
    "Write real Python programs on their own — games, calculators, quizzes — understand core programming logic, and have a finished final project plus a certificate of appreciation.": "سيتمكن من كتابة برامج بايثون حقيقية بنفسه — مثل الألعاب والآلات الحاسبة والاختبارات — وفهم أساسيات المنطق البرمجي، مع إنجاز مشروع نهائي والحصول على شهادة تقدير.",
    "Limited seats · starts August 1": "مقاعد محدودة · تبدأ في 1 أغسطس",
    "Ready to reserve a seat?": "هل أنت مستعد لحجز مقعد؟",
    "Message me on WhatsApp and I'll send you the full details — schedule, payment via Whish Money, and everything your child needs for day one.": "راسلني عبر واتساب وسأرسل لك التفاصيل الكاملة — الجدول، وطريقة الدفع عبر Whish Money، وكل ما يحتاجه طفلك لليوم الأول.",
    "Reserve on WhatsApp": "احجز عبر واتساب",
    "Replies personally — usually within a few hours.": "أردّ شخصياً — عادةً خلال بضع ساعات.",
    "WhatsApp: +961 76 540 195": "واتساب: +961 76 540 195",
    "© 2026 Abdulhamid Al Ghali · Introduction to Python Programming for Kids": "© 2026 عبد الحميد الغالي · مقدمة في برمجة بايثون للأطفال",
    "Online · Ages 10–16 · August 1 – September 1": "عبر الإنترنت · الأعمار 10–16 · 1 أغسطس – 1 سبتمبر",
    "What's included": "ما الذي تشمله الدورة",
    "Everything the $30 covers": "كل ما يشمله مبلغ 30$",
    "12+ live online lessons": "أكثر من 12 حصة مباشرة عبر الإنترنت",
    "Monday, Wednesday & Friday — one focused hour each.": "الاثنين والأربعاء والجمعة — ساعة مركّزة في كل حصة.",
    "Hands-on practice every session": "تطبيق عملي في كل حصة",
    "Mini challenges and real typing — never just watching.": "تحديات صغيرة وكتابة شيفرة حقيقية — وليس مجرّد مشاهدة.",
    "Guided mini projects + final project": "مشاريع صغيرة موجّهة + مشروع نهائي",
    "Games and programs your child builds and keeps.": "ألعاب وبرامج يبنيها طفلك وتبقى له.",
    "QR-verified certificate": "شهادة موثّقة برمز QR",
    "A personalized certificate of appreciation at the end of the course.": "شهادة تقدير شخصية في نهاية الدورة.",
    "Progress updates for parents": "تحديثات عن التقدّم للأهل",
    "You'll always know how your child is doing.": "ستبقى دائماً على اطلاع على مستوى طفلك.",
    "WhatsApp support between lessons": "دعم عبر واتساب بين الحصص",
    "Questions between sessions? Just send a message.": "لديك سؤال بين الحصص؟ أرسل رسالة فحسب.",
    "Certificate": "الشهادة",
    "For parents": "للأهل",
    "A real achievement they can show": "إنجاز حقيقي يفتخرون به",
    "At the end of the course, every student receives a personalized certificate of appreciation — a real document that celebrates their first steps in coding.": "في نهاية الدورة، يحصل كل طالب على شهادة تقدير شخصية باسمه — وثيقة حقيقية تحتفي بخطواته الأولى في عالم البرمجة.",
    "Personalized with your child's name": "شخصية وتحمل اسم طفلك",
    "A QR code on the certificate opens a celebration page made just for them": "رمز QR على الشهادة يفتح صفحة تهنئة خاصة به",
    "A keepsake that boosts confidence and motivates them to keep coding": "تذكار يعزّز الثقة ويشجّع على متابعة البرمجة",
    "Sample certificate — every student receives their own personalized version.": "نموذج عن الشهادة — يحصل كل طالب على نسخته الشخصية.",
    "Education": "التحصيل العلمي",
    "Computer Science at the Lebanese University — ranked top of class": "علوم الحاسوب في الجامعة اللبنانية — الأول على صفّه",
    "Experience": "الخبرة",
    "5+ years of one-on-one tutoring and exam preparation": "أكثر من 5 سنوات من التدريس الفردي والتحضير للامتحانات",
    "Specialty": "التخصّص",
    "Making coding simple for complete beginners aged 10–16": "تبسيط البرمجة للمبتدئين تماماً من عمر 10 إلى 16",
    "Teaching languages": "لغات التدريس",
    "English & Arabic — whichever suits your child best": "الإنجليزية والعربية — بحسب ما يناسب طفلك"
  };

  var META = {
    en: {
      title: "Python for Kids — Online Summer Course | Abdulhamid Al Ghali",
      description: "Beginner-friendly online Python programming course for kids aged 10–16. August 1 to September 1, 3 hours/week, taught in English + Arabic by Abdulhamid Al Ghali. Reserve a seat on WhatsApp."
    },
    ar: {
      title: "دورة بايثون للأطفال — دورة صيفية عبر الإنترنت | عبد الحميد الغالي",
      description: "دورة برمجة بايثون عبر الإنترنت ومناسبة للمبتدئين من عمر 10 إلى 16 عاماً، من 1 أغسطس إلى 1 سبتمبر، بمعدل 3 ساعات أسبوعياً، باللغتين العربية والإنجليزية مع عبد الحميد الغالي."
    }
  };

  var ATTRS = {
    en: {
      logo: "Code with Abdulhamid — home",
      nav: "Main navigation",
      menuOpen: "Open menu",
      menuClose: "Close menu",
      hero: "Introduction",
      editor: "Example of simple Python code students will write",
      strip: "Tutor highlights",
      backToTop: "Back to top",
      waFloat: "Chat on WhatsApp"
    },
    ar: {
      logo: "البرمجة مع عبد الحميد — الصفحة الرئيسية",
      nav: "القائمة الرئيسية",
      menuOpen: "فتح القائمة",
      menuClose: "إغلاق القائمة",
      hero: "مقدمة الدورة",
      editor: "مثال على شيفرة بايثون بسيطة سيكتبها الطلاب",
      strip: "نبذة عن المدرّس",
      backToTop: "العودة إلى الأعلى",
      waFloat: "تواصل عبر واتساب"
    }
  };

  function normalize(value) {
    return value.replace(/\s+/g, " ").trim();
  }

  function collectTextNodes() {
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        if (!normalize(node.nodeValue || "")) return NodeFilter.FILTER_REJECT;
        var parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;
        if (parent.closest("script, style, svg, .editor, .language-modal, #languageToggle")) {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var node;
    while ((node = walker.nextNode())) {
      textItems.push({ node: node, original: node.nodeValue, key: normalize(node.nodeValue) });
    }
  }

  function translatedValue(item, lang) {
    if (lang !== "ar" || !AR[item.key]) return item.original;
    var leading = (item.original.match(/^\s*/) || [""])[0];
    var trailing = (item.original.match(/\s*$/) || [""])[0];
    return leading + AR[item.key] + trailing;
  }

  function updateWhatsApp(lang) {
    var message = lang === "ar" ? [
      "مرحباً عبد الحميد، أنا مهتم/ة بدورة مقدمة في برمجة بايثون للأطفال.",
      "",
      "اسم الطالب/ة:",
      "عمر الطالب/ة:"
    ].join("\n") : [
      "Hello Abdulhamid, I’m interested in the Introduction to Python Programming course for kids.",
      "",
      "Student name:",
      "Student age:"
    ].join("\n");
    var href = "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(message);
    document.querySelectorAll(".wa-btn").forEach(function (link) { link.href = href; });
  }

  function updateAttributes(lang) {
    var values = ATTRS[lang];
    var logo = document.querySelector(".logo");
    var nav = document.querySelector("header nav");
    var hero = document.querySelector(".hero");
    var editor = document.querySelector(".editor");
    var strip = document.querySelector(".strip");
    if (logo) logo.setAttribute("aria-label", values.logo);
    if (nav) nav.setAttribute("aria-label", values.nav);
    if (hero) hero.setAttribute("aria-label", values.hero);
    if (editor) editor.setAttribute("aria-label", values.editor);
    if (strip) strip.setAttribute("aria-label", values.strip);
    var burger = document.getElementById("hamburger");
    if (burger) burger.setAttribute("aria-label", burger.getAttribute("aria-expanded") === "true" ? values.menuClose : values.menuOpen);
    var toTopBtn = document.getElementById("backToTop");
    if (toTopBtn) toTopBtn.setAttribute("aria-label", values.backToTop);
    var waFloat = document.querySelector(".wa-float");
    if (waFloat) waFloat.setAttribute("aria-label", values.waFloat);
  }

  function applyLanguage(lang, save) {
    currentLanguage = lang === "ar" ? "ar" : "en";
    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = currentLanguage === "ar" ? "rtl" : "ltr";
    document.body.classList.toggle("rtl", currentLanguage === "ar");

    textItems.forEach(function (item) {
      item.node.nodeValue = translatedValue(item, currentLanguage);
    });

    document.title = META[currentLanguage].title;
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", META[currentLanguage].description);

    var toggleText = document.getElementById("languageToggleText");
    var toggle = document.getElementById("languageToggle");
    if (toggleText) toggleText.textContent = currentLanguage === "ar" ? "English" : "العربية";
    if (toggle) toggle.setAttribute("aria-label", currentLanguage === "ar" ? "Switch to English" : "التبديل إلى العربية");

    updateAttributes(currentLanguage);
    updateWhatsApp(currentLanguage);
    if (save) {
      try { localStorage.setItem(STORAGE_KEY, currentLanguage); } catch (e) {}
    }
  }

  function showLanguageModal() {
    var modal = document.getElementById("languageModal");
    if (!modal) return;
    modal.hidden = false;
    document.body.classList.add("language-modal-open");
    var first = modal.querySelector("button");
    window.setTimeout(function () { if (first) first.focus(); }, 80);
  }

  function hideLanguageModal() {
    var modal = document.getElementById("languageModal");
    if (modal) modal.hidden = true;
    document.body.classList.remove("language-modal-open");
  }

  collectTextNodes();

  var savedLanguage = null;
  try { savedLanguage = localStorage.getItem(STORAGE_KEY); } catch (e) {}
  applyLanguage(savedLanguage === "ar" ? "ar" : "en", false);
  if (!savedLanguage) showLanguageModal();

  document.querySelectorAll("[data-language-choice]").forEach(function (button) {
    button.addEventListener("click", function () {
      applyLanguage(button.getAttribute("data-language-choice"), true);
      hideLanguageModal();
    });
  });

  var languageToggle = document.getElementById("languageToggle");
  if (languageToggle) {
    languageToggle.addEventListener("click", function () {
      applyLanguage(currentLanguage === "ar" ? "en" : "ar", true);
    });
  }

  // Mobile menu
  var burger = document.getElementById("hamburger");
  var links = document.getElementById("navLinks");
  if (burger && links) {
    burger.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      burger.setAttribute("aria-label", open ? ATTRS[currentLanguage].menuClose : ATTRS[currentLanguage].menuOpen);
    });
    links.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        links.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
        burger.setAttribute("aria-label", ATTRS[currentLanguage].menuOpen);
      });
    });
  }

  // Keep one FAQ answer open at a time
  var faqs = document.querySelectorAll(".faq details");
  faqs.forEach(function (detail) {
    detail.addEventListener("toggle", function () {
      if (detail.open) {
        faqs.forEach(function (other) { if (other !== detail) other.open = false; });
      }
    });
  });

  // Reveal on scroll
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (element) { observer.observe(element); });
  } else {
    reveals.forEach(function (element) { element.classList.add("in"); });
  }

  // Back to top button
  var backToTopButton = document.getElementById("backToTop");
  if (backToTopButton) {
    var toggleBackToTop = function () {
      backToTopButton.classList.toggle("show", window.scrollY > 600);
    };
    window.addEventListener("scroll", toggleBackToTop, { passive: true });
    toggleBackToTop();
    backToTopButton.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
})();
