   const quizData = [
    {
      question: "Who is the founder of Pakistan?",
      options: ["Allama Iqbal", "Liaquat Ali Khan", "Quaid-e-Azam", "Fatima Jinnah"],
      answer: "Quaid-e-Azam"
    },
    {
      question: "In which year did Pakistan become independent?",
      options: ["1945", "1947", "1950", "1946"],
      answer: "1947"
    },
    {
      question: "What is the national language of Pakistan?",
      options: ["Sindhi", "Urdu", "Punjabi", "Pashto"],
      answer: "Urdu"
    },
    {
      question: "Who is known as the Father of Pakistan's Nuclear Program?",
      options: ["Abdul Sattar Edhi", "Dr. Abdul Qadeer Khan", "Malala Yousafzai", "Imran Khan"],
      answer: "Dr. Abdul Qadeer Khan"
    },
    {
      question: "What is the national sport of Pakistan?",
      options: ["Hockey", "Cricket", "Football", "Kabaddi"],
      answer: "Hockey"
    }
  ];

  let currentQuestion = 0;
  let score = 0;

  const questionText = document.getElementById("question-text");
  const optionsContainer = document.getElementById("options-container");
  const nextBtn = document.getElementById("next-btn");
  const resultBox = document.getElementById("result-box");
  const quizBox = document.getElementById("quiz-box");
  const scoreText = document.getElementById("score-text");
  const restartBtn = document.getElementById("restart-btn");

  function loadQuestion() {
    const q = quizData[currentQuestion];
    questionText.textContent = q.question;
    optionsContainer.innerHTML = "";
    q.options.forEach(option => {
      const btn = document.createElement("button");
      btn.classList.add("option-btn");
      btn.textContent = option;
      btn.addEventListener("click", () => selectOption(btn, q.answer));
      optionsContainer.appendChild(btn);
    });
  }

  function selectOption(button, correctAnswer) {
    const buttons = document.querySelectorAll(".option-btn");
    buttons.forEach(btn => btn.disabled = true);
    if (button.textContent === correctAnswer) {
      button.classList.add("correct");
      score++;
    } else {
      button.classList.add("wrong");
    }
  }

  nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  });

  function showResult() {
    quizBox.classList.add("hidden");
    resultBox.classList.remove("hidden");
    scoreText.textContent = `You scored ${score} out of ${quizData.length}`;
  }

  restartBtn.addEventListener("click", () => {
    score = 0;
    currentQuestion = 0;
    resultBox.classList.add("hidden");
    quizBox.classList.remove("hidden");
    loadQuestion();
  });

  loadQuestion();


 
  const openBtn = document.getElementById('openFormBtn');
  const closeBtn = document.getElementById('closeFormBtn');
  const formSection = document.getElementById('loginSection');

  openBtn.addEventListener('click', () => {
    formSection.style.display = 'flex';
  });

  closeBtn.addEventListener('click', () => {
    formSection.style.display = 'none';
  });