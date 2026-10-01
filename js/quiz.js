/* =========================================================
   Kindly — quiz.js
   Pure JavaScript quiz engine — Hortatory Exposition / Netiquette
   Shows an explanation immediately after each answer.
   ========================================================= */

const quizQuestions = [
  {
    difficulty: "medium",
    context: "<b>Text:</b> Being on time is a beautiful social ethic and one of great importance. If this fails, invite the parent to school. By closing the gates, the school is behaving cruelly.",
    question: "What should the school do if a student can't stop his/her habit to come late to school?",
    options: ["Punish him/her", "Shut him/her out", "Fail him/her", "Talk to his/her parents"],
    correct: 3,
    explanation: "As stated in the text, if warnings fail, the school should invite the parents instead of shutting the student out."
  },
  {
    difficulty: "medium",
    context: "<b>Text:</b> Inner discipline, one that comes from an understanding of the set rules and regulation, is the highest form of behavior. Most excellent schools try to instill this.",
    question: "What does the writer think to be “the highest form of behaviour”?",
    options: ["Respect for one another", "Not being late to school", "Understanding the regulations", "Inner discipline"],
    correct: 3,
    explanation: "The text explicitly states that inner discipline is the highest form of behavior."
  },
  {
    difficulty: "medium",
    context: "<b>Text:</b> The boarding school also offers a great variety of activities such as arts, sports, and music that allow children to demonstrate and develop specialized skills in their free time.",
    question: "According to the writer, children in a boarding school can develop specialized skills in…",
    options: ["Entrepreneurship", "Community service", "Reading", "Music"],
    correct: 3,
    explanation: "The text mentions arts, sports, and music as areas where children can develop specialized skills."
  },
  {
    difficulty: "medium",
    context: "<b>Text:</b> At an early age interacting and communicating with people is very important for a child’s personal life and can be especially helpful for his/her future. In a boarding school, shy children can take advantage of interaction through communal activities.",
    question: "Why do parents send their children to boarding school? Because…",
    options: ["It is good for shy children", "Interacting and communicating with people is very important", "It does not allow children to demonstrate excellence", "It is safe and makes children become responsible"],
    correct: 1,
    explanation: "The primary reason mentioned is that interacting and communicating with people is very important for a child’s personal life."
  },
  {
    difficulty: "hard",
    context: "<b>Text:</b> In conclusion although a boarding school may provide good education to many children, it is not recommended for those who are strongly attached to their families.",
    question: "From the text, we can conclude that…",
    options: ["The boarding school can be very expensive", "There are good and bad boarding schools", "The boarding school is the solution to our educational problems", "Not everyone thinks that the boarding school is the best educational institution for children"],
    correct: 3,
    explanation: "The conclusion highlights that boarding school is not recommended for everyone (especially those attached to families), meaning it is not the best for all children."
  },
  {
    difficulty: "easy",
    context: "<b>Theory of Exposition:</b> Hortatory Exposition is a type of spoken or written text that is intended to explain the listeners or readers that something should or should not happen or be done.",
    question: "What is the communicative purpose of hortatory exposition?",
    options: ["To amuse the readers", "To persuade the reader that something should or should not be the case", "To describe a particular person or thing", "To tell a past event"],
    correct: 1,
    explanation: "The main purpose of a hortatory exposition is to persuade the audience that something should or should not be done (recommendation)."
  },
  {
    difficulty: "easy",
    context: "<b>Generic Structure:</b> An exposition text has specific parts to build its argument clearly and effectively.",
    question: "Which of the following is the generic structure of a Hortatory Exposition?",
    options: ["Thesis - Arguments - Recommendation", "Thesis - Arguments - Reiteration", "General Statement - Description", "Orientation - Complication - Resolution"],
    correct: 0,
    explanation: "Hortatory exposition consists of a Thesis, followed by Arguments, and ends with a Recommendation."
  },
  {
    difficulty: "medium",
    context: "<b>Analytical vs Hortatory:</b> Both are exposition texts, but they have a distinct difference in their final paragraphs.",
    question: "What is the difference between analytical and hortatory exposition?",
    options: ["Analytical ends with recommendation, hortatory ends with reiteration", "Analytical ends with reiteration, hortatory ends with recommendation", "Both end with recommendation", "Both end with reiteration"],
    correct: 1,
    explanation: "Analytical exposition concludes with a reiteration (restating the thesis), while hortatory exposition concludes with a recommendation (what should be done)."
  },
  {
    difficulty: "medium",
    context: "<b>Language Features:</b> Exposition texts often use specific transitional words to connect ideas and arguments smoothly.",
    question: "Words like 'firstly, secondly, therefore, on the other hand' are examples of...",
    options: ["Action verbs", "Thinking verbs", "Connectives/Transitions", "Modals"],
    correct: 2,
    explanation: "These words are connectives or transitional words used to organize arguments logically."
  },
  {
    difficulty: "easy",
    context: "<b>The Final Paragraph:</b> The last part of a hortatory exposition serves a very specific purpose for the reader.",
    question: "In a hortatory exposition, the recommendation part contains...",
    options: ["The writer’s opinion about the topic", "The reasons to support the opinion", "What the writer suggests the readers to do", "The summary of the event"],
    correct: 2,
    explanation: "The recommendation contains the writer’s suggestion or advice on what the readers should or should not do."
  }
];

let currentQuestion = 0;
let userAnswers = new Array(quizQuestions.length).fill(null);

let studentName = "";
let studentClass = "";

document.addEventListener('DOMContentLoaded', () => {
  // Wait for user to start quiz
});

function startQuiz() {
  const nameInput = document.getElementById('quizStudentName').value.trim();
  const classInput = document.getElementById('quizStudentClass').value.trim();

  if (!nameInput || !classInput) {
    alert("Please enter both your name and class first!");
    return;
  }
  studentName = nameInput;
  studentClass = classInput;
  
  localStorage.setItem('kindly_current_user', JSON.stringify({ name: studentName, class: studentClass }));
  
  // Shuffle options for all questions so the correct answer isn't always the same letter
  quizQuestions.forEach(q => {
    let optionsStatus = q.options.map((opt, idx) => ({ text: opt, isCorrect: idx === q.correct }));
    for (let i = optionsStatus.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [optionsStatus[i], optionsStatus[j]] = [optionsStatus[j], optionsStatus[i]];
    }
    q.options = optionsStatus.map(o => o.text);
    q.correct = optionsStatus.findIndex(o => o.isCorrect);
  });

  document.getElementById('quizStartScreen').style.display = 'none';
  document.getElementById('quizMainScreen').style.display = 'block';
  renderQuestion();
}

function renderQuestion() {
  const q = quizQuestions[currentQuestion];
  const total = quizQuestions.length;

  document.getElementById('quizCounter').textContent = `Q${currentQuestion + 1} / ${total}`;
  document.getElementById('quizProgressFill').style.width = `${((currentQuestion) / total) * 100}%`;
  document.getElementById('quizQuestionText').textContent = q.question;

  const diffLabels = { easy: 'Easy', medium: 'Medium', hard: 'Challenging' };
  document.getElementById('quizDifficulty').innerHTML =
    `<span class="quiz-difficulty diff-${q.difficulty}"><i class="bi bi-lightning-charge-fill me-1"></i>${diffLabels[q.difficulty] || 'Medium'}</span>`;

  document.getElementById('quizContext').innerHTML = q.context
    ? `<div class="feature-example" style="margin-bottom:0.8rem;"><i class="bi bi-book me-1"></i>${q.context}</div>`
    : '';

  const optionsWrap = document.getElementById('quizOptions');
  optionsWrap.innerHTML = '';

  const answered = userAnswers[currentQuestion] !== null;
  const letters = ['A', 'B', 'C', 'D'];

  q.options.forEach((opt, i) => {
    const div = document.createElement('div');
    div.className = 'quiz-option';
    if (answered) {
      div.classList.add('disabled-option');
      if (i === q.correct) div.classList.add('correct-answer');
      else if (i === userAnswers[currentQuestion]) div.classList.add('wrong-answer');
    } else if (userAnswers[currentQuestion] === i) {
      div.classList.add('selected');
    }
    div.innerHTML = `<span class="opt-letter">${letters[i]}</span><span>${opt}</span>`;
    if (!answered) {
      div.addEventListener('click', () => selectAnswer(i));
    }
    optionsWrap.appendChild(div);
  });

  const feedbackBox = document.getElementById('quizFeedback');
  if (answered) {
    const isCorrect = userAnswers[currentQuestion] === q.correct;
    feedbackBox.className = 'quiz-feedback-box show ' + (isCorrect ? 'fb-correct' : 'fb-wrong');
    feedbackBox.innerHTML = `
      <i class="bi ${isCorrect ? 'bi-check-circle-fill' : 'bi-x-circle-fill'}"></i>
      <div>
        <strong>${isCorrect ? 'Correct!' : 'Not quite.'}</strong>
        ${q.explanation}
      </div>`;
  } else {
    feedbackBox.className = 'quiz-feedback-box';
    feedbackBox.innerHTML = '';
  }

  // Hide the next button when rendering a new question
  const nextBtnContainer = document.getElementById('nextBtnContainer');
  if (nextBtnContainer) nextBtnContainer.style.display = 'none';

}

let autoNextTimeout;
let autoNextInterval;

function clearAutoNext() {
  if (autoNextTimeout) clearTimeout(autoNextTimeout);
  if (autoNextInterval) clearInterval(autoNextInterval);
}

function selectAnswer(index) {
  if (userAnswers[currentQuestion] !== null) return;
  userAnswers[currentQuestion] = index;
  
  const q = quizQuestions[currentQuestion];
  const isCorrect = (index === q.correct);
  playSound(isCorrect ? 'correct' : 'wrong');

  renderQuestion();
  
  // Show Next button instead of auto-transition
  const isLast = (currentQuestion === quizQuestions.length - 1);
  const nextBtnContainer = document.getElementById('nextBtnContainer');
  if (nextBtnContainer) {
    const nextBtn = nextBtnContainer.querySelector('button');
    if (isLast) {
      nextBtn.innerHTML = 'Finish Quiz <i class="bi bi-check-circle-fill ms-1"></i>';
      nextBtn.className = 'btn btn-success px-5 fw-bold shadow-sm rounded-pill';
    } else {
      nextBtn.innerHTML = 'Next Question <i class="bi bi-arrow-right ms-1"></i>';
      nextBtn.className = 'btn btn-kindly-primary px-5 fw-bold shadow-sm rounded-pill';
    }
    nextBtnContainer.style.display = 'block';
  }
}

function goPrev() {
  clearAutoNext();
  if (currentQuestion > 0) {
    currentQuestion--;
    renderQuestion();
  }
}

function goNext() {
  clearAutoNext();
  if (userAnswers[currentQuestion] === null) return;
  if (currentQuestion < quizQuestions.length - 1) {
    currentQuestion++;
    renderQuestion();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  let score = 0;
  const reviewData = quizQuestions.map((q, i) => {
    const isCorrect = userAnswers[i] === q.correct;
    if (isCorrect) score++;
    return {
      question: q.question,
      userAnswer: userAnswers[i] !== null ? q.options[userAnswers[i]] : 'No answer',
      correctAnswer: q.options[q.correct],
      explanation: q.explanation,
      isCorrect
    };
  });

  const finalScore = Math.round((score / quizQuestions.length) * 100);
  
  // Save to Neon Database via API
  fetch('/api/submissions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: studentName,
      className: studentClass,
      quizScore: finalScore
    })
  }).catch(err => console.error("Failed to save to database:", err));

  sessionStorage.setItem('kindly_score', score);
  sessionStorage.setItem('kindly_total', quizQuestions.length);
  sessionStorage.setItem('kindly_review', JSON.stringify(reviewData));
  localStorage.setItem('kindly_quiz_completed', 'true');

  window.location.href = 'result.html';
}

// ==========================================
// AUDIO SYNTHESIS FOR QUIZ FEEDBACK
// ==========================================
let audioCtx;

function playSound(type) {
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    if (type === 'correct') {
      // "Ding" sound for correct answer
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(600, audioCtx.currentTime); 
      oscillator.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + 0.1); 
      
      gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.5, audioCtx.currentTime + 0.05);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.4);
      
      oscillator.start(audioCtx.currentTime);
      oscillator.stop(audioCtx.currentTime + 0.4);
    } else {
      // "Buzzer" sound for wrong answer
      oscillator.type = 'square';
      oscillator.frequency.setValueAtTime(150, audioCtx.currentTime);
      
      gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.2, audioCtx.currentTime + 0.05);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
      
      oscillator.start(audioCtx.currentTime);
      oscillator.stop(audioCtx.currentTime + 0.3);
    }
  } catch (e) {
    console.error('Audio playback failed', e);
  }
}
