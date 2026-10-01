/* =========================================================
   Kindly — quiz.js
   Pure JavaScript quiz engine — Hortatory Exposition / Netiquette
   Shows an explanation immediately after each answer.
   ========================================================= */

const quizQuestions = [
  {
    difficulty: "hard",
    context: "<b>Story:</b> Sarah is annoyed because her classmate, Maya, didn't reply to her text. Sarah posts on her Instagram Story: \"SOME PEOPLE ARE SO ARROGANT AND FAKE! IGNORING TEXTS BUT ACTIVE ON SOCIAL MEDIA. WE MUST CANCEL THEM!\" Many classmates start sending hate messages to Maya. Later, they find out Maya was at the hospital visiting a critically ill relative.",
    question: "If someone writes a hortatory exposition about this incident, what is the most logical and critical argument to include?",
    options: [
      "Social media should be banned for high school students to prevent drama.",
      "Using ALL CAPS is an effective way to show how genuinely angry you are.",
      "Making assumptions and publicly shaming someone without verification can cause irreversible emotional damage.",
      "Maya should have prioritized replying to the text even if she was at the hospital."
    ],
    correct: 2,
    explanation: "Argument C targets the root of the netiquette breach: impulsive public shaming based on assumptions. It provides a strong, objective reason (emotional damage) rather than an extreme reaction like banning social media."
  },
  {
    difficulty: "medium",
    context: "<b>Story:</b> A few years ago, Budi made a harsh, offensive joke about a minority group on Twitter. Today, he is applying for a prestigious scholarship. The committee finds the old tweet, and Budi's application is rejected. Budi argues that it's unfair because 'it happened a long time ago and was just a joke.'",
    question: "A hortatory exposition text titled 'The Permanence of the Internet' uses Budi's story as evidence. Which 'Recommendation' best concludes this text?",
    options: [
      "Therefore, the scholarship committee should ignore applicants' social media histories.",
      "Thus, we must be extremely cautious about what we post, as our digital footprint is permanent and can impact our real-world future.",
      "In conclusion, Budi should delete his Twitter account immediately.",
      "So, you should always create fake anonymous accounts to post offensive jokes online."
    ],
    correct: 1,
    explanation: "A strong recommendation (B) provides a universal lesson drawn from the argument. It advises the reader on how to act moving forward (be cautious) based on the evidence presented (digital footprint permanence)."
  },
  {
    difficulty: "medium",
    context: "<b>Story:</b> In a family WhatsApp group, Uncle Anton forwards a message saying that drinking bleach cures a dangerous new virus. The message ends with 'SEND THIS TO 10 PEOPLE TO SAVE LIVES!' Without fact-checking, cousin Rina forwards it to all her friends.",
    question: "If you were to write a hortatory text about this situation, which evaluative words would be most effective to describe Rina's action in your argument?",
    options: [
      "Fast, responsive, caring",
      "Reckless, unverified, perilous",
      "Slow, deliberate, malicious",
      "Normal, everyday, harmless"
    ],
    correct: 1,
    explanation: "Evaluative words judge the action to persuade the reader. 'Reckless' and 'perilous' accurately critique the danger of spreading unverified medical hoaxes without checking facts."
  },
  {
    difficulty: "hard",
    context: "<b>Story:</b> At a sleepover, Dina takes a funny but embarrassing picture of her best friend, Siti, who is drooling while asleep. Dina posts it on TikTok without asking Siti. The video goes viral. When Siti finds out, she is humiliated. Dina defends herself saying, 'It was just a joke, don't be so sensitive.'",
    question: "In a hortatory exposition text about 'Digital Consent,' how would you critically evaluate Dina's defense?",
    options: [
      "Dina's defense is valid because the internet is meant for entertaining content.",
      "Dina's defense is flawed because consent is mandatory regardless of the creator's humorous intent; the subject's dignity takes priority.",
      "Siti should learn to accept jokes because the viral video made Dina popular.",
      "The video going viral proves that Dina made the right choice for her content."
    ],
    correct: 1,
    explanation: "A critical analysis separates intent ('just a joke') from impact (humiliation). It establishes that consent is an absolute prerequisite, dismantling Dina's weak defense."
  },
  {
    difficulty: "hard",
    context: "<b>Story:</b> A gaming forum is plagued by a user named 'DarkSlayer99' who constantly insults new players, calls them 'trash,' and tells them to quit. When confronted by moderators, DarkSlayer99 argues, 'It's freedom of speech, I can say whatever I want.'",
    question: "You are writing a thesis for a hortatory text against DarkSlayer99's behavior. Which thesis statement is the most analytical and persuasive?",
    options: [
      "Freedom of speech is bad because it allows people to insult others.",
      "DarkSlayer99 should be banned from the forum forever.",
      "While freedom of speech is important, it does not provide immunity from the consequences of verbal abuse; thus, toxic behavior in communities must be penalized.",
      "Games make people violent and angry, which is why people type mean things."
    ],
    correct: 2,
    explanation: "A strong thesis (C) acknowledges the counter-argument (freedom of speech) but firmly overrides it with a nuanced principle (it doesn't equal immunity from consequences), setting up a solid foundation for the arguments."
  },
  {
    difficulty: "medium",
    context: "<b>Story:</b> You are drafting an essay to persuade your school to adopt a strict anti-cyberbullying policy. Your notes are: (1) Cyberbullying affects students' academic performance. (2) It causes severe depression. (3) The school must create a safe space.",
    question: "Which temporal connective sequence best structures these points logically from Arguments to Recommendation?",
    options: [
      "First, cyberbullying affects academics. Second, it causes depression. Therefore, the school must create a safe space.",
      "Although cyberbullying affects academics, it causes depression. However, the school must create a safe space.",
      "Maybe it affects academics. Perhaps it causes depression. Finally, the school must create a safe space.",
      "Because it affects academics, it causes depression. Similarly, the school must create a safe space."
    ],
    correct: 0,
    explanation: "'First' and 'Second' clearly list the arguments, while 'Therefore' logically transitions into the concluding recommendation."
  },
  {
    difficulty: "hard",
    context: "<b>Story:</b> A student writes a petition to the principal: 'We think maybe students should stop using their phones during class because it might distract them. We hope you can consider this if you have time.'",
    question: "Why does this text fail as a hortatory exposition, and how can it be fixed?",
    options: [
      "It lacks arguments; it should add stories about students sleeping in class.",
      "The modality is too weak and passive; hesitant words like 'maybe' and 'hope' should be replaced with strong imperatives like 'must' and 'strongly urge'.",
      "It is too aggressive and needs to be much more polite.",
      "The vocabulary is too advanced for a high school principal."
    ],
    correct: 1,
    explanation: "Hortatory exposition relies on strong modality to persuade and assert authority. Using 'maybe' and 'might' completely undermines the writer's conviction."
  },
  {
    difficulty: "hard",
    context: "<b>Story:</b> Leo follows only accounts that agree with his political views. One day, he reads a post claiming the rival candidate wants to ban video games. Without doing any research, Leo writes a fiery blog post urging everyone to protest. It turns out the claim was a complete fabrication.",
    question: "If Leo's blog post is structured as a hortatory exposition, what is its primary critical flaw?",
    options: [
      "It lacks a recommendation at the end.",
      "The thesis and arguments are built on an unverified premise, rendering the entire logical structure of his persuasion invalid.",
      "It uses too many temporal connectives.",
      "The vocabulary is too emotional and subjective."
    ],
    correct: 1,
    explanation: "No matter how well-structured an exposition is (thesis, arguments, recommendation), if the foundational premise is factually false, the entire argument collapses."
  },
  {
    difficulty: "medium",
    context: "<b>Story:</b> Nina finds a beautiful poem on an obscure blog. She copies it, posts it on her Instagram with a beautiful aesthetic background, and doesn't credit the author. When praised by her followers, she replies 'Thank you!' taking the credit.",
    question: "You are writing a hortatory text about Intellectual Property. Which sentence would serve as the strongest supporting argument against Nina's action?",
    options: [
      "Firstly, copying someone's work without credit is intellectual theft that deprives the original creator of their rightful recognition.",
      "Firstly, poetry is hard to write, so Nina should try writing her own.",
      "Firstly, Instagram is not a place for poems anyway.",
      "Firstly, nobody reads obscure blogs so the author won't find out."
    ],
    correct: 0,
    explanation: "Argument A addresses the core ethical issue (intellectual theft and lack of recognition), making it a much stronger and universally applicable argument than the others."
  },
  {
    difficulty: "hard",
    context: "<b>Story:</b> Doni receives an email from 'AdminInsta' saying his account will be deleted in 24 hours unless he clicks a link and enters his password. Panicking, he does it. The next day, his account is hacked and used to scam his friends.",
    question: "You want to write a hortatory text warning others. What is the most constructive 'Recommendation' to conclude your text?",
    options: [
      "Therefore, you should never use Instagram because it is full of hackers.",
      "Thus, if you get hacked, you should immediately make a new account.",
      "Consequently, we must always verify the sender's email address and never click suspicious links, to protect ourselves and our network.",
      "In conclusion, Doni is gullible and we shouldn't be like him."
    ],
    correct: 2,
    explanation: "A strong recommendation offers a proactive, actionable solution (verifying emails, not clicking links) that addresses the root cause of the issue described in the arguments."
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
