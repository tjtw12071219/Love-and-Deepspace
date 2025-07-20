
const questions = [
  {
    question: "當你身處陌生的環境中，你會更傾向怎麼做？",
    options: [
      { text: "嘗試觀察環境中的節奏和規則，找到可預測的行為框架", character: "夏以晝" },
      { text: "尋找與人建立連結的契機，即便只是短暫交談", character: "祁煜" },
      { text: "把焦點轉回自己，先確保內在狀態穩定再行動", character: "黎深" },
      { text: "靠直覺做出反應，不擔心犯錯，願意主動試探", character: "沈星回" }
    ]
  },
  {
    question: "若你發現某人正在默默守護你，你會最在意什麼？",
    options: [
      { text: "他是否能預判你真正的需求", character: "黎深" },
      { text: "他是否會主動與你溝通情感", character: "祁煜" },
      { text: "他是否能在關鍵時刻挺身而出", character: "秦徹" },
      { text: "他是否選擇了尊重你的空間", character: "夏以晝" }
    ]
  },
  {
    question: "面對失控的情緒時，你的直覺行為最接近哪個？",
    options: [
      { text: "找個人傾訴，哪怕只是講講廢話也好", character: "沈星回" },
      { text: "把情緒具象化（如畫畫、運動、寫字）轉移注意", character: "祁煜" },
      { text: "一個人靜下來，耐心整理感受與邏輯", character: "黎深" },
      { text: "快速做事轉移焦點，不讓自己陷太深", character: "秦徹" }
    ]
  },
  {
    question: "如果某人深愛你，但不善表達，你會希望他怎麼做？",
    options: [
      { text: "用實際行動替你分擔、補位", character: "夏以晝" },
      { text: "誠實說出他的不安與愛意，即便詞不達意", character: "沈星回" },
      { text: "靜靜陪著你，給你穩定無壓的情緒支撐", character: "黎深" },
      { text: "給你一個驚喜或冒險，讓你知道你是特別的", character: "秦徹" }
    ]
  },
  {
    question: "如果你在一段關係中感到脆弱，你最希望對方給你什麼？",
    options: [
      { text: "一個讓你自由呼吸、慢慢依賴的空間", character: "夏以晝" },
      { text: "強烈的保護感與「我在你這邊」的承諾", character: "秦徹" },
      { text: "主動而真摯的情緒表達，不逃避互動", character: "沈星回" },
      { text: "能陪你一起瘋、一起痛的深層共鳴", character: "祁煜" }
    ]
  },
  {
    question: "你對「依賴」這件事的看法最接近哪一種？",
    options: [
      { text: "依賴是一種選擇，而非弱點——當你願意把後背交給某人，那是信任的極致。", character: "夏以晝" },
      { text: "依賴讓我焦慮，我更傾向先照顧好自己才放心去愛。", character: "秦徹" },
      { text: "依賴是互相的，只要彼此真誠坦白，關係就能自然流動。", character: "祁煜" },
      { text: "我不太相信長期依賴，但會默默為重要的人撐住所有重量。", character: "黎深" }
    ]
  },
  {
    question: "哪種告白方式會讓你最感動？",
    options: [
      { text: "他站在原地，等你跑回來，什麼都沒說，卻什麼都說了。", character: "沈星回" },
      { text: "他準備一段日子，親手做出與你有關的作品，然後在你最意想不到的時候交給你。", character: "祁煜" },
      { text: "他忽然在你吵架後將你擁入懷中，只低聲說：「我愛你。」", character: "秦徹" },
      { text: "他看著你，不說話，只靜靜牽住你的手，讓你知道自己從未被放下。", character: "黎深" }
    ]
  },
  {
    question: "當你陷入一場無法控制的風暴中，你下意識會怎麼處理？",
    options: [
      { text: "找一個能陪你沉默的人，只要他在身邊，你就能撐過去。", character: "黎深" },
      { text: "向某人傾訴全部，不管解決與否，你只想有人聽懂你。", character: "沈星回" },
      { text: "強迫自己保持理性，排除情緒，只專注解決問題。", character: "夏以晝" },
      { text: "靠某個具體的寄託，如聲音、畫面、氣味來喚回自己。", character: "祁煜" }
    ]
  },
  {
    question: "你對「控制慾」的接受度如何？",
    options: [
      { text: "若是因為愛而想佔有我，我願意在界線內被牽引。", character: "秦徹" },
      { text: "我能接受溫柔主導，但不希望被情緒勒索。", character: "沈星回" },
      { text: "我無法忍受對方控制我太多，我需要足夠的自由。", character: "祁煜" },
      { text: "只要他保護我的方式是用行動，而不是語言，我可以依靠他。", character: "夏以晝" }
    ]
  },
  {
    question: "你最無法抗拒的他是哪一面？",
    options: [
      { text: "平時冷靜嚴謹，卻會在你睡著時輕輕吻你額頭的溫柔。", character: "夏以晝" },
      { text: "嘴巴總是貧嘴鬧人，卻在你低落時用最實際的方式守著你。", character: "沈星回" },
      { text: "在不被理解的世界中，他選擇用藝術來說愛你。", character: "祁煜" },
      { text: "他不說愛，但會為你放棄無數選擇與遠方。", character: "黎深" }
    ]
  }
];

let currentQuestion = 0;
const scores = {
  '夏以晝': 0,
  '祁煜': 0,
  '黎深': 0,
  '沈星回': 0,
  '秦徹': 0
};

function startQuiz() {
  document.querySelector('button').classList.add('hidden');
  showQuestion();
}

function showQuestion() {
  const quizEl = document.getElementById('quiz');
  quizEl.innerHTML = '';
  quizEl.classList.remove('hidden');

  if (currentQuestion >= questions.length) {
    showResult();
    return;
  }

  const q = questions[currentQuestion];
  const block = document.createElement('div');
  block.className = 'question-block';
  block.innerHTML = `<h2>Q${currentQuestion + 1}. ${q.question}</h2>`;

  const opts = document.createElement('div');
  opts.className = 'options';

  q.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.textContent = opt.text;
    btn.onclick = () => {
      scores[opt.character]++;
      currentQuestion++;
      showQuestion();
    };
    opts.appendChild(btn);
  });

  block.appendChild(opts);
  quizEl.appendChild(block);
}


const characterResults = {
  "夏以晝": {
    color: "#ff924a",
    description: "💫 你所嚮往的關係，是彼此信任，不需多言。\n在你的內心深處，你並不喜歡戲劇化的情感遊戲。你渴望的，是一段穩定、有秩序的深層連結——那人不需每日甜言蜜語，但你知道，在真正需要的時候，他永遠站在你身後。\n\n夏以晝就是那樣的存在。\n他沉著冷靜、理性克制，從不強行介入你的世界，卻總在你需要的瞬間準確出現。他不多話，不擅長鋪陳浪漫，卻用行動與堅定告訴你：「你是我願意為之墜落的星辰。」\n\n🛩️ 你偏好的愛情方式：\n信任感優先、默契式互動、慢熱型依賴、情緒自控力強。\n\n🌙 為什麼你與夏以晝契合？\n「你不需要吶喊，他就能聽見你心裡的沉默。」\n\n🖋️ 小語：\n愛，不必轟烈。你要的，是那個即使全世界熄燈，也會為你亮著座艙燈的男人。"
  },
  "祁煜": {
    color: "#e88fc2",
    description: "💫 你所嚮往的關係，是活潑、熱烈，帶著一點不可預測的驚喜。\n你欣賞創造力，也相信感情裡需要「表達」與「流動」。\n\n祁煜就是這樣的存在。\n他喧鬧、活潑、愛說話，有時笨拙，有時敏銳。他用音樂、畫筆、眼神和文字去愛人。愛你，就像創作——真實、鮮明、不可複製。\n\n🎭 你偏好的愛情方式：\n情緒表達明確、生活互動豐富、允許矛盾與脆弱、真誠即是一切。\n\n🌙 為什麼你與祁煜契合？\n「他不是為了安撫你，而是為了讓你笑而存在。」\n\n🖋️ 小語：\n愛不是謎題，是拼圖。他願意一片一片拼出屬於你們的海洋。"
  },
  "黎深": {
    color: "#6fbf73",
    description: "💫 你所嚮往的關係，是恆定、深刻、無須試探的理解。\n你習慣內收情緒，也懂得怎麼照顧自己，但你並不排斥依賴。\n\n黎深就是那樣的存在。\n他成熟穩重、不會強行介入，也不會無視你的需要。他懂得給你空間，也在你需要的時候輕輕伸手。\n\n🌱 你偏好的愛情方式：\n安靜但可靠、高敏感與共鳴、慢熟但深情、信任高於承諾。\n\n🌙 為什麼你與黎深契合？\n「他不是浪漫的人，但他記得你的一切。」\n\n🖋️ 小語：\n他是一座恆星，靜靜燃燒，溫暖你所有被現實凍住的夢。"
  },
  "秦徹": {
    color: "#cc3e3e",
    description: "💫 你所嚮往的關係，是無須防備的交付與絕對的安全。\n你有強烈的自我，也帶著對掌控感的深層需求。\n\n秦徹，就是那樣值得的人。\n他不溫柔，卻極致地照顧你；他不主動說愛，卻用全部的資源、手段與意志把你牢牢放在生命核心。\n\n🧩 你偏好的愛情方式：\n保護與佔有共存、內斂但深情、絕不隨便依賴、渴望被扛起來。\n\n🌙 為什麼你與秦徹契合？\n「他不問你願不願意，只問你安不安全。」\n\n🖋️ 小語：\n他不會說「愛你」，但他會說「這世界太亂，你只能跟我走。」"
  },
  "沈星回": {
    color: "#7d7edc",
    description: "💫 你所嚮往的關係，是在動盪中找到真誠與陪伴。\n你敏銳、直覺強烈，渴望被理解，也願意主動靠近。\n\n沈星回，就是這樣的存在。\n他不完美，甚至偶爾固執、話少、嘴硬，但他會在你最需要的瞬間出現，毫不猶豫地站在你身邊。\n\n🐺 你偏好的愛情方式：\n共感型情感交流、反差吸引力、主動式陪伴、信任下的情緒表現。\n\n🌙 為什麼你與沈星回契合？\n「他不是遠方讓你仰望的光，而是會悄悄將光收進掌心，只為照亮你腳下的路。」\n\n🖋️ 小語：\n他也許不懂如何表達愛，但他會用盡所有方式，告訴你：「我不會走。」"
  }
};


function showResult() {
  const quizEl = document.getElementById('quiz');
  const resultEl = document.getElementById('result');
  quizEl.classList.add('hidden');

  let topScore = 0;
  let topCharacter = '';

  for (const [char, score] of Object.entries(scores)) {
    if (score > topScore) {
      topScore = score;
      topCharacter = char;
    }
  }

  const result = characterResults[topCharacter];
resultEl.innerHTML = `<div style="background-color: ${result.color}; padding: 2rem; border-radius: 1rem; color: white;"><h2 style="font-size: 1.8rem;">你的命定角色是：${topCharacter}</h2><p style="white-space: pre-line; margin-top: 1rem;">${result.description}</p></div>`;
  resultEl.classList.remove('hidden');
}
