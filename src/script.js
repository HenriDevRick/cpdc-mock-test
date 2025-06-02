// Variáveis globais
const totalTime = 120 * 60; // 120 minutos em segundos
let currentQuestion = 0;
let score = 0;
let remainingTime = totalTime;
let timerInterval;
let selectedAnswers = {};
let quizStarted = false;

// Elementos DOM
const welcomeScreen = document.getElementById('welcome-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const timerEl = document.getElementById('timer');
const questionEl = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const feedbackEl = document.getElementById('feedback');
const feedbackBtn = document.getElementById('feedback-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const scoreEl = document.getElementById('score');
const timeTakenEl = document.getElementById('time-taken');
const feedbackMessageEl = document.getElementById('feedback-message');

// Iniciar o quiz
startBtn.addEventListener('click', startQuiz);
restartBtn.addEventListener('click', restartQuiz);

function startQuiz() {
    welcomeScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    quizStarted = true;
    
    // Resetar o tempo restante
    remainingTime = totalTime;
    updateTimerDisplay();
    startTimer();
    
    loadQuestion();
}

function startTimer() {
    clearInterval(timerInterval);
    
    timerInterval = setInterval(() => {
        remainingTime--;
        updateTimerDisplay();
        
        // Se o tempo acabar
        if (remainingTime <= 0) {
            clearInterval(timerInterval);
            showResults();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const hours = Math.floor(remainingTime / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((remainingTime % 3600) / 60).toString().padStart(2, '0');
    const seconds = (remainingTime % 60).toString().padStart(2, '0');
    timerEl.textContent = `Time Remaining: ${hours}:${minutes}:${seconds}`;
    
    // Mudar cor conforme o tempo diminui
    timerEl.className = '';
    if (remainingTime <= 300) {
        timerEl.classList.add('timer-critical');
    } else if (remainingTime <= 600) {
        timerEl.classList.add('timer-warning');
    }
}

function loadQuestion() {
    const question = questions[currentQuestion];
    questionEl.textContent = `Q${currentQuestion + 1}: ${question.question}`;
    
    // Determinar tipo de questão
    const isMultiple = Array.isArray(question.answer);
    const inputType = isMultiple ? 'checkbox' : 'radio';
    
    // Limpar opções anteriores
    optionsContainer.innerHTML = '';
    
    
    // Adicionar novas opções
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        
        const optionLetter = option.charAt(0);
        const isSelected = selectedAnswers[currentQuestion]?.includes(optionLetter);
        
        optionElement.innerHTML = `
            <input type="${Array.isArray(question.answer) ? 'checkbox' : 'radio'}" 
                name="option" 
                value="${optionLetter}" 
                ${isSelected ? 'checked' : ''}>
            <label>${option}</label>
        `;
        
        optionElement.addEventListener('click', () => {
            const input = optionElement.querySelector('input');
            input.checked = !input.checked;
            updateSelection();
        });
        
        optionsContainer.appendChild(optionElement);
    });
    
    // Atualizar estado dos botões
    prevBtn.disabled = currentQuestion === 0;
    
    // Limpar feedback
    feedbackEl.textContent = '';
    feedbackEl.className = '';
}

function updateSelection() {
    const selectedOptions = [];
    document.querySelectorAll('#options-container input:checked').forEach(input => {
        selectedOptions.push(input.value);
    });
    selectedAnswers[currentQuestion] = selectedOptions;
}

// Botão de feedback
feedbackBtn.addEventListener('click', showFeedback);

function showFeedback() {
    const selected = selectedAnswers[currentQuestion] || [];
    if (selected.length === 0) {
        feedbackEl.textContent = "Please select at least one option before proceeding.";
        feedbackEl.className = 'incorrect';
        return;
    }

    const question = questions[currentQuestion];
    const correctAnswers = Array.isArray(question.answer) ? question.answer : [question.answer];
    
    // Verificar resposta
    const isCorrect = selected.length === correctAnswers.length && 
                    selected.every(opt => correctAnswers.includes(opt));
    
    if (isCorrect) {
        feedbackEl.textContent = "Correct!";
        feedbackEl.className = 'correct';
    } else {
        const correctOptions = question.options.filter(opt => 
            correctAnswers.includes(opt.charAt(0)));
        feedbackEl.textContent = `Incorrect! The correct answer(s): ${correctOptions.join(', ')}`;
        feedbackEl.className = 'incorrect';
    }
}

// Navegação entre questões
nextBtn.addEventListener('click', goToNextQuestion);
prevBtn.addEventListener('click', goToPreviousQuestion);

function goToNextQuestion() {
    // Salvar seleção atual
    updateSelection();
    
    // Limpar feedback
    feedbackEl.textContent = '';
    feedbackEl.className = '';
    
    // Mover para próxima questão
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        // Se for a última questão, mostrar resultados
        showResults();
    }
}

function goToPreviousQuestion() {
    // Salvar seleção atual
    updateSelection();
    
    // Limpar feedback
    feedbackEl.textContent = '';
    feedbackEl.className = '';
    
    // Mover para questão anterior
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

function showResults() {
    // Parar temporizador
    clearInterval(timerInterval);
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    
    // Calcular pontuação
    score = 0;
    for (let i = 0; i < questions.length; i++) {
        const correctAnswers = Array.isArray(questions[i].answer) ? 
            questions[i].answer : [questions[i].answer];
        
        const userAnswers = selectedAnswers[i] || [];
        
        if (correctAnswers.length === userAnswers.length && 
            correctAnswers.every(ans => userAnswers.includes(ans))) {
            score++;
        }
    }
    
    const percentage = (score / questions.length) * 100;
    scoreEl.textContent = `You scored ${score} out of ${questions.length} (${percentage.toFixed(2)}%)`;
    
    // Calcular tempo utilizado
    const timeUsed = totalTime - remainingTime;
    const minutes = Math.floor(timeUsed / 60).toString().padStart(2, '0');
    const seconds = (timeUsed % 60).toString().padStart(2, '0');
    timeTakenEl.textContent = `Time Taken: ${minutes}:${seconds}`;
    
    // Mensagem de feedback
    let feedbackMessage;
    if (score === questions.length) {
        feedbackMessage = "Excellent! You have a strong grasp of the material.";
    } else if (score >= questions.length / 2) {
        feedbackMessage = "Good job! You might want to review a few concepts.";
    } else {
        feedbackMessage = "Keep studying! Revisit the material for better understanding.";
    }
    feedbackMessageEl.textContent = feedbackMessage;
}

function restartQuiz() {
    // Reiniciar variáveis
    currentQuestion = 0;
    score = 0;
    selectedAnswers = {};
    remainingTime = totalTime;
    
    // Reiniciar interface
    resultScreen.classList.add('hidden');
    welcomeScreen.classList.remove('hidden');
    
    // Limpar feedback
    feedbackEl.textContent = '';
    feedbackEl.className = '';
    
    // Atualizar display do timer
    updateTimerDisplay();
}
