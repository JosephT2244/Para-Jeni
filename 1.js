let gameStarted = false;
// Listas de palabras románticas para adivinar (100 por dificultad)
const easyWords = [
    'amor', 'beso', 'novio', 'corazón', 'abrazo', 'cita', 'flor', 'pareja', 'poema', 'mirada',
    'detalles', 'bailar', 'chocolate', 'rosas', 'sonrisa', 'felicidad', 'cupido', 'sueños', 'dulzura', 'tiernos',
    'romance', 'paseo', 'juntos', 'amistad', 'cariño', 'sorpresa', 'afecto', 'mágico', 'brisa', 'melodía',
    'canción', 'tequiero', 'besitos', 'tarjeta', 'cenar', 'versos', 'historias', 'palabras', 'destino', 'promesas',
    'pasión', 'risa', 'confianza', 'alegría', 'unidos', 'serenata', 'regalo', 'alma', 'ternura', 'caminata',
    'fuego', 'lealtad', 'sentimiento', 'dulce', 'sinceridad', 'mariposas', 'cuidado', 'complicidad', 'detallista',
    'serenidad', 'atención', 'dedicación', 'verso', 'ilusión', 'susurros', 'compañía', 'abrazo', 'dedos', 'ojos',
    'suspiros', 'versos', 'versatil', 'almas', 'dedicatoria', 'puente', 'llama', 'paz', 'respeto', 'latidos',
    'unión', 'rosado', 'beso', 'encanto', 'noviazgo', 'diversión', 'compromiso', 'declaración', 'ternura', 'detalles'
];

const mediumWords = [
    'admiración', 'caricia', 'compañero', 'enamorado', 'complicidad', 'sinceridad', 'incondicional', 'melancolía',
    'detallista', 'inspiración', 'compromiso', 'devoción', 'adoración', 'versatilidad', 'recuerdos', 'armonía', 'emoción',
    'sentimientos', 'compartir', 'conexión', 'fantasía', 'galantería', 'coqueteo', 'sensibilidad', 'amistad verdadera',
    'amistoso', 'increíble', 'insuperable', 'profundo', 'apasionado', 'atención', 'perdón', 'conquista', 'poesía', 'expresión',
    'encantador', 'devoción', 'cómplice', 'momento', 'entrega', 'pureza', 'confianza', 'alucinante', 'inesperado',
    'impredecible', 'sorpresivo', 'encantador', 'dulzura infinita', 'secretos', 'mirada tierna', 'dedicación', 'inmortal',
    'fidelidad', 'resplandor', 'eterna', 'amuleto', 'creación', 'esperanza', 'plenitud', 'valentía', 'misterio', 'pasional',
    'serenidad', 'contemplación', 'almas gemelas', 'devoción total', 'atracción', 'pasión desenfrenada', 'conmovedor',
    'soñar juntos', 'ilusión eterna', 'promesas de amor', 'devoción sincera', 'romance apasionado', 'cálida sensación',
    'sutileza', 'compartir sueños', 'esfuerzo mutuo', 'seguridad', 'lealtad absoluta', 'viajes juntos', 'abrazos largos'
];

const hardWords = [
    'romántico', 'pasión', 'enamorar', 'sentimientos', 'devoción incondicional', 'desvelo', 'impresionante',
    'cómplices', 'experiencia única', 'instante perfecto', 'incomparable', 'sublime', 'indescriptible',
    'melodía eterna', 'serenidad compartida', 'desinteresado', 'ternura profunda', 'resplandor único',
    'entrega total', 'indudable', 'pertenencia', 'amistad sincera', 'coincidencia', 'inseparables',
    'unión infinita', 'emociones intensas', 'luz en la oscuridad', 'maravilloso', 'tesoro oculto', 'inexplicable',
    'fascinante', 'promesas inquebrantables', 'deseo ardiente', 'miradas eternas', 'melancolía placentera',
    'caminos cruzados', 'versos profundos', 'conexión indiscutible', 'experiencia irrepetible', 'cómplice del alma',
    'soledad compartida', 'alma gemela', 'esencia vibrante', 'sentimiento irremplazable', 'sinfonía de emociones',
    'lazos inquebrantables', 'devoción desbordante', 'momentos inolvidables', 'éxtasis', 'intensidad absoluta',
    'entrega desmedida', 'sublimación', 'atracción embriagante', 'universo paralelo', 'inefable', 'divinidad',
    'pasión celestial', 'existencia compartida', 'magnético', 'plenitud existencial', 'tormenta de emociones',
    'latidos acompasados', 'realidad alterna', 'fuente inagotable', 'ilusión perpetua', 'sueños inquebrantables'
];


let selectedWord = '';
let wordDisplay = '';
let guesses = [];
let lives = 8; // Comienza en fácil
let difficulty = 'easy';
let previousWords = [];

// Configurar la dificultad y comenzar el juego
function setDifficulty(level) {
    difficulty = level;
    lives = (difficulty === 'easy') ? 8 : (difficulty === 'medium') ? 6 : 4;
    guesses = [];
    previousWords = [];
    document.getElementById('message').innerText = '';
    document.getElementById('score').innerText = `Vidas: ${lives}`;
    chooseWord();
    updateWordDisplay();
}

// Elegir una palabra aleatoria sin repetir
function chooseWord() {
    let wordList = (difficulty === 'easy') ? easyWords : (difficulty === 'medium') ? mediumWords : hardWords;
    
    if (previousWords.length >= wordList.length) {
        previousWords = [];
    }

    do {
        selectedWord = wordList[Math.floor(Math.random() * wordList.length)];
    } while (previousWords.includes(selectedWord));

    previousWords.push(selectedWord);
}

// Mostrar palabra con letras adivinadas
function updateWordDisplay() {
    wordDisplay = selectedWord.split('')
        .map(letter => (letter === ' ' || guesses.includes(letter) ? letter : '_'))
        .join(' ');

    document.getElementById('word-display').innerText = wordDisplay;
}

// Adivinar una letra
function guessLetter() {
    const letterInput = document.getElementById('letter-input');
    let letter = letterInput.value.toLowerCase().trim();

    if (!letter || letter.length !== 1 || !/^[a-záéíóúüñ]$/i.test(letter)) {
        alert('Ingresa una sola letra válida.');
        letterInput.value = '';
        return;
    }

    if (!guesses.includes(letter)) {
        guesses.push(letter);
        if (!selectedWord.includes(letter)) {
            lives--;
        }
    }

    gameStarted = true;  // Se considera iniciado solo después de ingresar una letra válida

    letterInput.value = '';
    updateWordDisplay();
    document.getElementById('score').innerText = `Vidas: ${lives}`;

    checkGameState();
}

// Verificar si el jugador ganó o perdió
function checkGameState() {
    if (!gameStarted) return; // No evaluar estado si no ha iniciado

    let palabraCompleta = selectedWord.split('').every(letter => letter === ' ' || guesses.includes(letter));

    if (palabraCompleta) {
        setTimeout(() => {
            document.getElementById('message').innerText = '¡Ganaste! ❤️';
            setTimeout(() => {
                document.getElementById('message').innerText = '';
                startNewWord();
            }, 1500);
        }, 300);
    } else if (lives <= 0) {
        setTimeout(() => {
            document.getElementById('message').innerText = `¡Perdiste! La palabra era "${selectedWord}". 💔`;
            setTimeout(() => {
                document.getElementById('message').innerText = '';
                startNewWord();
            }, 2000);
        }, 300);
    }
}

// Iniciar una nueva ronda
function startNewWord() {
    guesses = [];
    lives = (difficulty === 'easy') ? 8 : (difficulty === 'medium') ? 6 : 4;
    document.getElementById('score').innerText = `Vidas: ${lives}`;
    chooseWord();
    updateWordDisplay();
}

// Permitir ingresar letra con Enter
document.getElementById('letter-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        guessLetter();
    }
});

// Iniciar el juego en modo fácil al cargar
window.onload = () => {
    setDifficulty('easy');
};