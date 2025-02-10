// Jugadores y sus puntajes
let players = {
    Jenifer: 0,
    Joseph: 0
};

let currentPlayer = 'Jenifer'; // El turno comienza con Jenifer
let currentQuestionIndex = 0;
let countdownTimer;

// Array de preguntas y respuestas variadas
const questions = [

        { "question": "¿Quién canta la canción 'Perfect'?", "answer": "Ed Sheeran", "options": ['Ed Sheeran', 'Adele', 'Taylor Swift'] },
        { "question": "¿Cuál es la canción más popular de Adele?", "answer": "Someone Like You", "options": ['Someone Like You', 'Hello', 'Rolling in the Deep'] },
        { "question": "¿De qué película es la canción 'I Will Always Love You'?", "answer": "El guardaespaldas", "options": ['El guardaespaldas', 'Titanic', 'Mamma Mia'] },
        { "question": "¿Quién canta 'All of Me'?", "answer": "John Legend", "options": ['John Legend', 'Ed Sheeran', 'Sam Smith'] },
        { "question": "¿Cuál es la canción más famosa de Taylor Swift?", "answer": "Love Story", "options": ['Love Story', 'Shake It Off', 'Blank Space'] },
        { "question": "¿Quién cantó 'I Will Survive'?", "answer": "Gloria Gaynor", "options": ['Gloria Gaynor', 'Cher', 'Madonna'] },
        { "question": "¿En qué año salió la canción 'Shape of You'?", "answer": "2017", "options": ['2017', '2016', '2018'] },
        { "question": "¿Quién canta 'Havana'?", "answer": "Camila Cabello", "options": ['Camila Cabello', 'Shakira', 'Rihanna'] },
        { "question": "¿De qué banda es la canción 'Take On Me'?", "answer": "a-ha", "options": ['a-ha', 'The Beatles', 'Queen'] },
        { "question": "¿Quién canta la canción 'Rolling in the Deep'?", "answer": "Adele", "options": ['Adele', 'Beyoncé', 'Rihanna'] },
        { "question": "¿Quién canta 'Uptown Funk'?", "answer": "Mark Ronson ft. Bruno Mars", "options": ['Mark Ronson ft. Bruno Mars', 'Pharrell Williams', 'Justin Timberlake'] },
        { "question": "¿De qué banda es la canción 'Bohemian Rhapsody'?", "answer": "Queen", "options": ['Queen', 'Led Zeppelin', 'The Rolling Stones'] },
        { "question": "¿Qué cantante tiene el éxito 'Like a Prayer'?", "answer": "Madonna", "options": ['Madonna', 'Beyoncé', 'Lady Gaga'] },
        { "question": "¿Quién canta 'Someone Like You'?", "answer": "Adele", "options": ['Adele', 'Sam Smith', 'Sia'] },
        { "question": "¿De qué banda es la canción 'Hotel California'?", "answer": "Eagles", "options": ['Eagles', 'The Rolling Stones', 'The Beatles'] },
        { "question": "¿Quién canta la canción 'Toxic'?", "answer": "Britney Spears", "options": ['Britney Spears', 'Christina Aguilera', 'Lady Gaga'] },
        { "question": "¿De qué película es la canción 'My Heart Will Go On'?", "answer": "Titanic", "options": ['Titanic', 'The Bodyguard', 'The Lion King'] },
        { "question": "¿Quién canta 'Smells Like Teen Spirit'?", "answer": "Nirvana", "options": ['Nirvana', 'Pearl Jam', 'Soundgarden'] },
        { "question": "¿Quién canta 'Hello'?", "answer": "Adele", "options": ['Adele', 'Beyoncé', 'Shakira'] },
        { "question": "¿De qué banda es la canción 'Stairway to Heaven'?", "answer": "Led Zeppelin", "options": ['Led Zeppelin', 'AC/DC', 'The Rolling Stones'] },
        { "question": "¿Quién canta 'We Are the Champions'?", "answer": "Queen", "options": ['Queen', 'The Beatles', 'Pink Floyd'] },
        { "question": "¿De qué banda es la canción 'Imagine'?", "answer": "John Lennon", "options": ['John Lennon', 'The Beatles', 'The Rolling Stones'] },
        { "question": "¿Quién canta 'Shake It Off'?", "answer": "Taylor Swift", "options": ['Taylor Swift', 'Katy Perry', 'Ariana Grande'] },
        { "question": "¿Quién canta 'Love Yourself'?", "answer": "Justin Bieber", "options": ['Justin Bieber', 'Shawn Mendes', 'Ed Sheeran'] },
        { "question": "¿Quién canta 'Firework'?", "answer": "Katy Perry", "options": ['Katy Perry', 'Lady Gaga', 'Rihanna'] },
        { "question": "¿De qué banda es la canción 'Hey Jude'?", "answer": "The Beatles", "options": ['The Beatles', 'The Rolling Stones', 'The Beach Boys'] },
        { "question": "¿Quién canta 'Single Ladies'?", "answer": "Beyoncé", "options": ['Beyoncé', 'Rihanna', 'Nicki Minaj'] },
        { "question": "¿Quién canta 'All About That Bass'?", "answer": "Meghan Trainor", "options": ['Meghan Trainor', 'Ariana Grande', 'Kesha'] },
        { "question": "¿De qué banda es la canción 'Smells Like Teen Spirit'?", "answer": "Nirvana", "options": ['Nirvana', 'Pearl Jam', 'Soundgarden'] },
        { "question": "¿Quién canta 'Can't Stop the Feeling'?", "answer": "Justin Timberlake", "options": ['Justin Timberlake', 'Pharrell Williams', 'Ed Sheeran'] },
        { "question": "¿Quién canta 'Roar'?", "answer": "Katy Perry", "options": ['Katy Perry', 'Taylor Swift', 'Lady Gaga'] },
        { "question": "¿Quién canta 'Bad Romance'?", "answer": "Lady Gaga", "options": ['Lady Gaga', 'Beyoncé', 'Rihanna'] },
        { "question": "¿De qué banda es la canción 'Sweet Child O' Mine'?", "answer": "Guns N' Roses", "options": ['Guns N\' Roses', 'AC/DC', 'Queen'] },
        { "question": "¿Quién canta 'Billie Jean'?", "answer": "Michael Jackson", "options": ['Michael Jackson', 'Usher', 'Chris Brown'] },
        { "question": "¿Quién canta 'Rolling in the Deep'?", "answer": "Adele", "options": ['Adele', 'Beyoncé', 'Sia'] },
        { "question": "¿De qué banda es la canción 'Bohemian Rhapsody'?", "answer": "Queen", "options": ['Queen', 'The Beatles', 'Led Zeppelin'] },
        { "question": "¿Quién canta 'Let It Be'?", "answer": "The Beatles", "options": ['The Beatles', 'Elton John', 'The Rolling Stones'] },
        { "question": "¿Quién canta 'I Wanna Dance with Somebody'?", "answer": "Whitney Houston", "options": ['Whitney Houston', 'Mariah Carey', 'Celine Dion'] },
        { "question": "¿De qué banda es la canción 'Back in Black'?", "answer": "AC/DC", "options": ['AC/DC', 'Led Zeppelin', 'Guns N\' Roses'] },
        { "question": "¿Quién canta 'Lose Yourself'?", "answer": "Eminem", "options": ['Eminem', 'Jay-Z', 'Kanye West'] },
        { "question": "¿De qué banda es la canción 'Smells Like Teen Spirit'?", "answer": "Nirvana", "options": ['Nirvana', 'Pearl Jam', 'Soundgarden'] },
        { "question": "¿Quién canta 'Stay'?", "answer": "Rihanna ft. Mikky Ekko", "options": ['Rihanna ft. Mikky Ekko', 'Beyoncé', 'Ariana Grande'] },
        { "question": "¿Quién fue el primer hombre en viajar al espacio?", "answer": "Yuri Gagarin", "options": ['Yuri Gagarin', 'Neil Armstrong', 'John Glenn'] },
        { "question": "¿Qué científico formuló las tres leyes del movimiento?", "answer": "Isaac Newton", "options": ['Isaac Newton', 'Albert Einstein', 'Galileo Galilei'] },
        { "question": "¿En qué año se firmó la Declaración de Independencia de los Estados Unidos?", "answer": "1776", "options": ['1776', '1789', '1800'] },
        { "question": "¿Quién escribió 'La República'?", "answer": "Platón", "options": ['Platón', 'Aristóteles', 'Sócrates'] },
        { "question": "¿Cuál es el planeta más grande del sistema solar?", "answer": "Júpiter", "options": ['Júpiter', 'Saturno', 'Urano'] },
        { "question": "¿Quién descubrió la teoría de la relatividad?", "answer": "Albert Einstein", "options": ['Albert Einstein', 'Isaac Newton', 'Nikola Tesla'] },
        { "question": "¿Qué país tiene la mayor población del mundo?", "answer": "China", "options": ['China', 'India', 'Estados Unidos'] },
        { "question": "¿En qué continente se encuentra el desierto de Sahara?", "answer": "África", "options": ['África', 'Asia', 'Australia'] },
        { "question": "¿Quién fue el primer presidente de los Estados Unidos?", "answer": "George Washington", "options": ['George Washington', 'Thomas Jefferson', 'Abraham Lincoln'] },
        { "question": "¿Qué teoría establece que el universo está en expansión?", "answer": "Teoría del Big Bang", "options": ['Teoría del Big Bang', 'Teoría de la relatividad', 'Teoría de cuerdas'] },
        { "question": "¿Qué continente tiene más países?", "answer": "África", "options": ['África', 'Asia', 'Europa'] },
        { "question": "¿Cuál es la capital de Australia?", "answer": "Canberra", "options": ['Canberra', 'Sídney', 'Melbourne'] },
        { "question": "¿Qué gas componen la mayor parte de la atmósfera terrestre?", "answer": "Nitrógeno", "options": ['Nitrógeno', 'Oxígeno', 'Carbono'] },
        { "question": "¿En qué año cayó el muro de Berlín?", "answer": "1989", "options": ['1989', '1991', '1985'] },
        { "question": "¿Quién pintó la Mona Lisa?", "answer": "Leonardo da Vinci", "options": ['Leonardo da Vinci', 'Pablo Picasso', 'Vincent van Gogh'] }
];

// Función para mezclar opciones aleatoriamente
function shuffleOptions(options) {
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }
    return options;
}

function showNextQuestion() {
    if (questions.length === 0) {
        document.getElementById('question-container').textContent = '¡Has terminado el concurso!';
        document.getElementById('turn-counter').style.display = 'none';
        return;
    }

    const questionContainer = document.getElementById('question-container');
    const answerButtons = document.getElementById('answer-buttons');

    // Seleccionar una pregunta aleatoria
    const randomIndex = Math.floor(Math.random() * questions.length);
    const currentQuestion = questions[randomIndex];

    // Guardar la pregunta actual sin eliminarla
    questionContainer.dataset.currentQuestion = randomIndex;
    questionContainer.textContent = currentQuestion.question;

    // Mezclar las opciones aleatoriamente
    const shuffledOptions = shuffleOptions([...currentQuestion.options]);
    answerButtons.innerHTML = '';
    shuffledOptions.forEach(option => {
        const button = document.createElement('button');
        button.classList.add('answer-btn');
        button.textContent = option;
        button.onclick = () => checkAnswer(option, currentQuestion.answer);
        answerButtons.appendChild(button);
    });

    startCountdown();
}

function switchPlayer() {
    currentPlayer = (currentPlayer === 'Jenifer') ? 'Joseph' : 'Jenifer';
    document.getElementById('current-player').textContent = currentPlayer;
    document.getElementById('turn-counter').textContent = `Turno de ${currentPlayer}`;
}

function checkAnswer(selectedAnswer, correctAnswer) {
    clearInterval(countdownTimer);
    const resultContainer = document.getElementById('result');

    if (selectedAnswer === correctAnswer) {
        resultContainer.textContent = `¡Correcto, ${currentPlayer}! 💖`;
        players[currentPlayer]++;
        document.getElementById(`${currentPlayer.toLowerCase()}-score`).textContent = players[currentPlayer];

        // Cambiar de pregunta de inmediato
        showNextQuestion();
        switchPlayer();
    } else {
        resultContainer.textContent = `¡Incorrecto, ${currentPlayer}! 😓 Intenta de nuevo.`;
        switchPlayer(); // Cambiar de jugador, pero no cambiar la pregunta
        startCountdown(); // Reiniciar el contador
    }
}

function startCountdown() {
    clearInterval(countdownTimer);
    timeLeft = 5;

    countdownTimer = setInterval(() => {
        document.getElementById('turn-counter').textContent = `Turno de ${currentPlayer} - ${timeLeft}s`;

        if (timeLeft === 0) {
            clearInterval(countdownTimer);
            const resultContainer = document.getElementById('result');
            resultContainer.textContent = `Tiempo agotado, ${currentPlayer}! ⏳`;

            // Cambiar de pregunta de inmediato si el tiempo se agotó
            showNextQuestion();
            switchPlayer();
        } else {
            timeLeft--;
        }
    }, 1000);
}

showNextQuestion();