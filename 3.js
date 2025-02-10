const puzzleContainer = document.getElementById('puzzle-container');
const temporizadorElement = document.getElementById('temporizador');
const turnoElement = document.getElementById('turno');
const startButton = document.getElementById('start-button');
const aciertosJeniferElement = document.getElementById('aciertos-jenifer').querySelector('span');
const aciertosJosephElement = document.getElementById('aciertos-joseph').querySelector('span');
const easyButton = document.getElementById('easy');
const mediumButton = document.getElementById('medium');
const hardButton = document.getElementById('hard');

let cards;
let selectedCards = [];
let matchedCards = [];
let currentPlayer = 0;
let turnos = ['Jenifer', 'Joseph'];
let aciertos = { Jenifer: 0, Joseph: 0 };
let timer;
let interval;
let difficulty = 'medium'; // Default to medium

// Configuración de dificultades
const difficultySettings = {
    easy: { pairs: 6, time: 150 },    // 2 minutos y medio
    medium: { pairs: 10, time: 120 },  // 2 minutos
    hard: { pairs: 14, time: 90 },     // 1 minuto y medio
};

easyButton.addEventListener('click', () => setDifficulty('easy'));
mediumButton.addEventListener('click', () => setDifficulty('medium'));
hardButton.addEventListener('click', () => setDifficulty('hard'));

// Configurar la dificultad
function setDifficulty(level) {
    difficulty = level;
    easyButton.disabled = true;
    mediumButton.disabled = true;
    hardButton.disabled = true;
    startButton.style.display = 'inline-block';
    alert(`Nivel seleccionado: ${level}`);

    // Reiniciar el juego con la nueva dificultad
    resetGame();
}

// Iniciar el juego
function startGame() {
    startButton.style.display = 'none';
    puzzleContainer.innerHTML = '';
    cards = generateCards(difficultySettings[difficulty].pairs);

    cards = shuffle(cards);
    cards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.innerText = '?';
        cardElement.addEventListener('click', () => revealCard(cardElement, card, index));
        puzzleContainer.appendChild(cardElement);
    });

    aciertos = { Jenifer: 0, Joseph: 0 };
    aciertosJeniferElement.innerHTML = aciertos.Jenifer;
    aciertosJosephElement.innerHTML = aciertos.Joseph;
    startTimer(difficultySettings[difficulty].time);
    turnoElement.innerHTML = `Turno: ${turnos[currentPlayer]}`;
}

// Generar las cartas de acuerdo con el nivel
function generateCards(pairs) {
    const symbols = ['❤️', '💌', '💘', '💖', '🌹', '🌈', '🥰', '😘', '🌟', '✨', '💞', '💗', '💋', '💍', '💓', '💝'];
    const selectedSymbols = symbols.slice(0, pairs);  // Seleccionar símbolos según el nivel
    const cards = [...selectedSymbols, ...selectedSymbols]; // Duplicar para crear parejas
    return cards;
}

// Barajar las cartas
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Función para mostrar la carta seleccionada
function revealCard(cardElement, card, index) {
    if (selectedCards.length < 2 && !cardElement.classList.contains('matched')) {
        cardElement.innerText = card;
        cardElement.classList.add('selected');
        selectedCards.push({ cardElement, card, index });

        if (selectedCards.length === 2) {
            setTimeout(checkMatch, 1000);
        }
    }
}

// Verificar si las cartas coinciden
function checkMatch() {
    const [firstCard, secondCard] = selectedCards;

    if (firstCard.card === secondCard.card) {
        firstCard.cardElement.classList.add('matched');
        secondCard.cardElement.classList.add('matched');
        matchedCards.push(firstCard.card, secondCard.card);
        aciertos[turnos[currentPlayer]]++;
        if (matchedCards.length === cards.length) {
            alert(`${turnos[currentPlayer]} ha ganado!`);
            resetGame();
        }
    } else {
        firstCard.cardElement.innerText = '?';
        secondCard.cardElement.innerText = '?';
        firstCard.cardElement.classList.remove('selected');
        secondCard.cardElement.classList.remove('selected');
    }

    selectedCards = [];
    currentPlayer = (currentPlayer + 1) % 2;
    turnoElement.innerHTML = `Turno: ${turnos[currentPlayer]}`;
    aciertosJeniferElement.innerHTML = aciertos.Jenifer;
    aciertosJosephElement.innerHTML = aciertos.Joseph;
}

// Iniciar temporizador
function startTimer(time) {
    timer = time;
    interval = setInterval(() => {
        if (timer > 0) {
            timer--;
            temporizadorElement.innerHTML = `Tiempo restante: <span>${timer}</span> s`;
        } else {
            clearInterval(interval);
            alert('¡Tiempo agotado!');
            resetGame();
        }
    }, 1000);
}

// Reiniciar el juego
function resetGame() {
    startButton.style.display = 'inline-block';
    puzzleContainer.innerHTML = '';
    timer = 60;
    temporizadorElement.innerHTML = `Tiempo restante: <span>${timer}</span> s`;
    startButton.addEventListener('click', startGame);
    easyButton.disabled = false;
    mediumButton.disabled = false;
    hardButton.disabled = false;
}

startButton.addEventListener('click', startGame);
