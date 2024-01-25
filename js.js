const questions = [
    { question: "Em que cidade nasci?", options: ["Rio de Janeiro", "Belo Horizonte", "São Paulo", "Porto Alegre"] },
    { question: "Qual é a minha música favorita?", options: ["Comfortably Numb", "Bohemian Rhapsody", "Stairway to Heaven", "Hotel California"] },
    { question: "Qual é o meu animal de estimação?", options: ["Gato", "Cachorro", "Peixe", "Pássaro"] },
    { question: "Qual é a minha cor preferida?", options: ["Azul", "Branco", "Vermelho", "Preto"] },
    { question: "Café ou chá?", options: ["Café", "Chá", "Nenhum dos dois", "Ambos"] },
    { question: "Do que eu mais gosto de fazer nos fins de semana?", options: ["Dormir", "Viajar", "Praticar esportes", "Assistir filmes"] }
];

let currentQuestion = 0;
let correctAnswers = 0;

function loadQuestion() {
    const questionContainer = document.getElementById('question-container');
    const optionsContainer = document.getElementById('options-container');
    
    questionContainer.textContent = questions[currentQuestion].question;

    optionsContainer.innerHTML = '';
    for (let i = 0; i < questions[currentQuestion].options.length; i++) {
        const optionButton = document.createElement('button');
        optionButton.textContent = questions[currentQuestion].options[i];
        optionButton.addEventListener('click', () => selectOption(i));
        optionsContainer.appendChild(optionButton);
    }
}

function selectOption(optionIndex) {
    const correctIndex = questions[currentQuestion].options.indexOf(questions[currentQuestion].options[0]);

    if (optionIndex === correctIndex) {
        correctAnswers++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        displayResult();
        showRestartButton();
    }
}

function displayResult() {
    const resultContainer = document.getElementById('result');
    const successThreshold = Math.ceil(questions.length / 2);

    resultContainer.innerHTML = `<p>Você acertou ${correctAnswers} de ${questions.length} perguntas. </p>`;

    if (correctAnswers >= successThreshold) {
        resultContainer.innerHTML += '<p>Parabéns! Você ganhou um date! 🥳</p>';
        resultContainer.innerHTML += '<img src="images/michael.png" alt="Michael Scott" style="width: 200px;">';
    } else {
        resultContainer.innerHTML += '<p>Infelizmente, você não ganhou o date. 😢</p>';
        resultContainer.innerHTML += '<img src="images/faustao.jpg" alt="Faustão">';
    }
}

function restartGame() {
    currentQuestion = 0;
    correctAnswers = 0;
    loadQuestion();
    hideRestartButton();
}

function hideRestartButton() {
    const restartButton = document.getElementById('restartButton');
    restartButton.style.display = 'none';
}

function showRestartButton() {
    const restartButton = document.getElementById('restartButton');
    restartButton.style.display = 'block';
}

loadQuestion();
