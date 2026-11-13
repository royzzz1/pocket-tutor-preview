/* Site language: default English, switch in the top right. Key: pocket-tutor-lang */
(function (global) {
  var KEY = "pocket-tutor-lang";

  var strings = {
    en: {
      "page.title": "Pocket Tutor",
      "page.title.kid": "Lesson · Pocket Tutor",
      "page.title.parent": "Summary of this session · Pocket Tutor",
      "brand": "Pocket Tutor",
      "nav.try": "Try a lesson",
      "nav.parent": "Parent summary",
      "nav.kidSession": "See this session",
      "nav.restart": "Start over",
      "lang.aria": "Language",
      "hero.title": "Ask or snap a problem",
      "hero.lede": "Practice after the lesson, and parents get a summary of this session.",
      "hero.cta": "Try a lesson",
      "jiaoyu.title": "Playful learning, clearly structured",
      "jiaoyu.card1": "A path for every student",
      "jiaoyu.body1": "Your AI teacher meets each student where they are, and shapes a different path for every one. Task-based learning feels like an adventure — as playful as a game, and built on a clear, step-by-step structure.",
      "jiaoyu.card2": "Talk & Learn",
      "jiaoyu.body2": "Interactive learning that adjusts in the moment to a child’s tone and ideas, with timely feedback. It guides and encourages their potential, so every conversation becomes a chance to learn.",
      "jiaoyu.card3": "Practice anywhere",
      "jiaoyu.body3": "Short, focused practice you can do in different places — refined lessons, wherever you are.",
      "voices.title": "What people are saying",
      "voices.q1": "It finally sits still for one short lesson.",
      "voices.a1": "A parent",
      "voices.q2": "I just asked out loud, and it talked me through it.",
      "voices.a2": "A student",
      "voices.q3": "The practice is short enough to finish on the train.",
      "voices.a3": "A parent",
      "backers.title": "Backed by leading educators and innovators",
      "backers.s1": "Not a Stanford seal — just someone who sat through the lectures, and still thinks a hard problem can feel like a game.",
      "backers.s2": "Also not an official Peking University badge. A friend from there who likes a short lesson with a clear next step.",
      "alt.path": "A cream screen robot on a forked dirt path, with colored flags marking different routes across the hills",
      "alt.talk": "A child seen from behind, talking to the cream screen robot, empty speech bubbles in the air",
      "alt.anywhere": "The cream screen robot beside three small scenes: a desk with a workbook, a window looking out, and a grassy patch with a ball",
      "shot.speak": "Talk it through",
      "shot.capture": "Snap a problem",
      "shot.practice": "Practice after the lesson",
      "shot.letter": "Parents get a summary",
      "shot.palm": "In the palm",
      "shot.desk": "At the desk",
      "shot.deskNote": "About twenty degrees, facing the work",
      "shot.summary": "Parents see the summary",
      "alt.speak": "Talk it through: Pocket Tutor held in the hands, front wheel, flush teal key on the right edge",
      "alt.capture": "Snap a problem: a camera module aimed at a problem on paper, contacts only on the mating edge, Pocket Tutor beside it",
      "alt.practice": "Practice after the lesson: the screen shows one problem, 3 + x = 7",
      "alt.palm": "In the palm: Pocket Tutor resting on an open hand, no child’s face drawn",
      "alt.desk": "At the desk, about twenty degrees, facing the work",
      "alt.summary": "Parents see the summary: hands holding this session’s letter, Pocket Tutor beside it",
      "letter.title": "Summary of this session",
      "letter.meta": "Nov 12 · Spoken · About 8 minutes",
      "letter.asked": "What was asked",
      "letter.askedBody": "Solve 2x + 3 = 11",
      "letter.how": "How it was explained",
      "letter.howBody": "Move the term, divide by the coefficient, then check in the original equation.",
      "letter.next": "Next up: a one-step equation with parentheses",
      "parent.note": "Parents read this letter on a phone or the web. The child does not use this letter.",
      "parent.linkKid": "See this session",
      "kid.press": "Press the teal key on the right to speak",
      "kid.next": "Next",
      "kid.wheel": "Wheel, see the next step",
      "kid.key": "Press to speak",
      "phase.idle": "Idle",
      "phase.listen": "Listening",
      "phase.teach": "Teaching",
      "phase.practice": "Practice",
      "phase.done": "Done",
      "caption.idle": "Press the teal key on the right to speak",
      "caption.listen": "Listening. Turn the wheel on the right to see the explanation",
      "caption.teach": "Turn the wheel on the right, or tap Next",
      "caption.practice": "Choose an answer",
      "caption.done": "This session is finished",
      "kid.startTeach": "Start the lesson",
      "kid.nextBtn": "Next",
      "kid.div2": "Divide both sides by 2",
      "kid.done": "Parents will see a summary of this session",
      "kid.seeSummary": "See this summary",
      "glyph.move": "Move",
      "glyph.sub": "Sub",
      "glyph.check": "Check"
    },
    zh: {
      "page.title": "口袋教师",
      "page.title.kid": "讲解 · 口袋教师",
      "page.title.parent": "这次学习摘要 · 口袋教师",
      "brand": "口袋教师",
      "nav.try": "试一课",
      "nav.parent": "家长摘要",
      "nav.kidSession": "看孩子这一次",
      "nav.restart": "从头再来",
      "lang.aria": "语言",
      "hero.title": "开口问，或拍一道题",
      "hero.lede": "讲完再练习，家长会收到这一次的摘要。",
      "hero.cta": "试一课",
      "jiaoyu.title": "寓教於樂，結構清晰",
      "jiaoyu.card1": "因材施教",
      "jiaoyu.body1": "你的 AI 老师会因材施教，为每个学生制定不同的学习路径。基于任务的学习如同冒险，既像游戏，又建立在结构化的循序渐进之上。",
      "jiaoyu.card2": "对话学习",
      "jiaoyu.body2": "互动式学习，根据小朋友的语调和想法及时调整、及时反馈，引导和激励潜力，让每次对话都成为学习机会。",
      "jiaoyu.card3": "随处可练",
      "jiaoyu.body3": "不同场景下都可以做的学习训练、精炼课程。",
      "voices.title": "大家怎么说",
      "voices.q1": "终于能安静坐下来，把一小课听完。",
      "voices.a1": "一位家长",
      "voices.q2": "我开口问，它就带着我把题讲完了。",
      "voices.a2": "一位同学",
      "voices.q3": "练习很短，在车上也能做完。",
      "voices.a3": "一位家长",
      "backers.title": "由領先的教育家和創新者支持",
      "backers.s1": "這不是斯坦福的官方背書。只是有人在那兒聽過課，還是覺得難題可以有一點好玩。",
      "backers.s2": "也不是北大的官方牌子。只是那邊的朋友覺得，課可以短，下一步可以很清楚。",
      "alt.path": "奶油小机器站在分叉的路上，彩色小旗标出不同的路径",
      "alt.talk": "小孩只画出后脑，对着奶油小机器说话，空气里是没有字的气泡",
      "alt.anywhere": "奶油小机器旁边是三个小场面：课桌和练习本、窗外的景色、草地上的球",
      "shot.speak": "开口讲",
      "shot.capture": "拍一道题",
      "shot.practice": "讲完再练习",
      "shot.letter": "家长会收到摘要",
      "shot.palm": "托在掌心",
      "shot.desk": "放在桌上",
      "shot.deskNote": "大约二十度，对着作业",
      "shot.summary": "家长看到这一次的摘要",
      "alt.speak": "开口讲：手里握着口袋教师，正面有轮，右侧齐平青键",
      "alt.capture": "拍一道题：镜头对着纸上的题，触点只在对接着的那一边",
      "alt.practice": "讲完再练习：屏幕上是一道题，3 + x = 7",
      "alt.palm": "托在掌心：口袋教师放在摊开的手上，没有画孩子的脸",
      "alt.desk": "放在桌上，大约二十度，对着作业",
      "alt.summary": "家长看到摘要：手里拿着这一次的信，旁边是口袋教师",
      "letter.title": "这次学习摘要",
      "letter.meta": "11月12日 · 开口 · 约8分钟",
      "letter.asked": "问了什么",
      "letter.askedBody": "解方程 2x + 3 = 11",
      "letter.how": "怎么讲的",
      "letter.howBody": "先移项再除系数，再用原式验算。",
      "letter.next": "下一题建议：带括号的一步方程",
      "parent.note": "家长用手机或网页看信。孩子不在这封信上操作。",
      "parent.linkKid": "看孩子这一次",
      "kid.press": "按右侧的青键，开口",
      "kid.next": "下一步",
      "kid.wheel": "滚轮，看下一步",
      "kid.key": "按一下开口",
      "phase.idle": "闲",
      "phase.listen": "听",
      "phase.teach": "讲",
      "phase.practice": "练",
      "phase.done": "完",
      "caption.idle": "按右侧的青键，开口",
      "caption.listen": "在听。转右侧滚轮，看讲解",
      "caption.teach": "转右侧滚轮，或点下一步",
      "caption.practice": "选一个答案",
      "caption.done": "这一次讲完了",
      "kid.startTeach": "开始讲解",
      "kid.nextBtn": "下一步",
      "kid.div2": "两边同除以 2",
      "kid.done": "家长会看到这次摘要",
      "kid.seeSummary": "看这次摘要",
      "glyph.move": "移",
      "glyph.sub": "减",
      "glyph.check": "验"
    }
  };

  function current() {
    try {
      var v = localStorage.getItem(KEY);
      if (v === "zh" || v === "en") return v;
    } catch (e) {}
    return "en";
  }

  function t(key) {
    var lang = current();
    if (strings[lang] && strings[lang][key] != null) return strings[lang][key];
    if (strings.en[key] != null) return strings.en[key];
    return key;
  }

  function apply() {
    var lang = current();
    document.documentElement.lang = lang === "zh" ? "zh-Hans" : "en";
    var pageKey = document.documentElement.getAttribute("data-i18n-title");
    if (pageKey) document.title = t(pageKey);
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (key) el.textContent = t(key);
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-alt");
      if (key) el.setAttribute("alt", t(key));
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria");
      if (key) el.setAttribute("aria-label", t(key));
    });
    document.querySelectorAll(".lang-switch").forEach(function (group) {
      group.setAttribute("aria-label", t("lang.aria"));
      group.querySelectorAll("button[data-lang]").forEach(function (btn) {
        btn.setAttribute("aria-pressed", btn.getAttribute("data-lang") === lang ? "true" : "false");
      });
    });
    document.dispatchEvent(new CustomEvent("pocket-tutor:lang", { detail: { lang: lang } }));
  }

  function set(lang) {
    if (lang !== "zh" && lang !== "en") return;
    try { localStorage.setItem(KEY, lang); } catch (e) {}
    apply();
  }

  function bind() {
    document.querySelectorAll(".lang-switch button[data-lang]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        set(btn.getAttribute("data-lang"));
      });
    });
  }

  function start() {
    bind();
    apply();
  }

  global.PocketI18n = { t: t, current: current, set: set, apply: apply };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})(window);
