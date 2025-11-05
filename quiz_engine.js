let shuffledQuestions = [];
let shuffledOptions = [];
let currentQuestion = 0;
let score = 0;
let selectedOption = null;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');
const resetBtn = document.getElementById('reset-btn');
const resultEl = document.getElementById('result');
const progressEl = document.getElementById('progress');

function initializeQuiz(questions) {
    shuffledQuestions = shuffleArray(questions);
    shuffledOptions = shuffledQuestions.map(q => shuffleArray(q.options.map((opt, idx) => ({ text: opt, originalIndex: idx }))));
    currentQuestion = 0;
    score = 0;
    selectedOption = null;
    document.getElementById('question-container').classList.remove('hidden');
    resultEl.classList.add('hidden');
    loadQuestion();
}

function loadQuestion() {
    const q = shuffledQuestions[currentQuestion];
    const options = shuffledOptions[currentQuestion];
    questionEl.textContent = q.question;
    progressEl.textContent = `Question ${currentQuestion + 1} of ${shuffledQuestions.length}`;
    optionsEl.innerHTML = '';
    selectedOption = null;
    nextBtn.classList.add('hidden');

    options.forEach((option, index) => {
        const optionEl = document.createElement('div');
        optionEl.className = 'option';
        optionEl.textContent = option.text;
        optionEl.addEventListener('click', () => selectOption(optionEl, index, option.originalIndex));
        optionsEl.appendChild(optionEl);
    });
}

function selectOption(optionEl, index, originalIndex) {
    // Remove previous selection
    document.querySelectorAll('.option').forEach(el => el.classList.remove('selected'));
    optionEl.classList.add('selected');
    selectedOption = originalIndex;

    // Show next button
    nextBtn.classList.remove('hidden');
}

function checkAnswer() {
    const q = shuffledQuestions[currentQuestion];
    const options = document.querySelectorAll('.option');

    options.forEach((option, index) => {
        const originalIndex = shuffledOptions[currentQuestion][index].originalIndex;
        if (originalIndex === q.answer) {
            option.classList.add('correct');
        } else if (originalIndex === selectedOption) {
            option.classList.add('incorrect');
        }
    });

    if (selectedOption === q.answer) {
        score++;
    }
}

function nextQuestion() {
    checkAnswer();

    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < shuffledQuestions.length) {
            loadQuestion();
        } else {
            showResult();
        }
    }, 1000);
}

function showResult() {
    document.getElementById('question-container').classList.add('hidden');
    resultEl.classList.remove('hidden');
    resultEl.textContent = `Quiz completed! Your score: ${score}/${shuffledQuestions.length}`;
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Event listeners
nextBtn.addEventListener('click', nextQuestion);
resetBtn.addEventListener('click', () => initializeQuiz(shuffledQuestions));