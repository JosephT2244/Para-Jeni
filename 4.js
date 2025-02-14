// Lista de 100 frases de amor únicas
const phrases = [
    "💫 A tu lado, cada día es una rara aventura llena de magia y sueños que quiero compartir 😉.",
    "🌸 Si el amor fuera un jardín, tú serías mi flor más preciada, a la que cuidaría y amaría.",
    "🌌 Entre las estrellas, tú eres la más brillante para mi, es por eso que siempre quiero estar tan cerca de ti.",
    "❤️ Eres mi refugio en un mundo que a veces parece demasiado caótico (eres el orden de mi entropía).",
    "🌙 El amor no se mide en palabras, se siente en cada mirada y en cada gesto, pero si se midiera la unidad de medida serias tu, y el limite mi amor por ti.",
    "🍃 Como una hoja al viento, te sigo con todo mi ser, sin importar hacia dónde me lleves, te seguiré.",
    "🌹 Cada instante contigo es como un relampago que quiero que dure para siempre, como mi amor por ti.",
    "💌 Tus palabras son el refugio de mi alma, tu risa el eco de mi felicidad.",
    "🍀 El amor verdadero no busca perfección (pero si la buscase serias tu), solo acepta y celebra la belleza de lo imperfecto (aceptame).",
    "🌞 Si el sol brillara por siempre, tú seguirias siendo mi luz eterna (y la que me calienta por las mañanas).",
    "💭 Pensar en ti es como soñar despierto, un sueño que nunca quiero despertar😉.",
    "🌻 Si el amor fuera un campo, tú serías la semilla que crece más fuerte en mi corazón.",
    "🌟 Cada día contigo es una nueva estrella que se enciende en mi vida y que como recuerdo nunca se apagará.",
    "💘 Mi amor por ti no tiene límites, como el universo, 'infinito' y lleno de sorpresas curiosas.",
    "💎 Como una joya rara, tú eres única para mi y la valiosa en mi vida.",
    "🦋 El amor no es solo un sentimiento, es la libertad con la que podemos volar juntos sin miedo a caer (nos aventamos en paracaidas?).",
    "🔥 Mi amor por ti arde como el fuego, constante, intenso y bello.",
    "🌻 Tu sonrisa ilumina mis días más grises, una mirada tuya es mi hogar, un beso mi paraíso y un abrazo mi casita.",
    "💫 Si la vida fuera una película, tú serías mi guion perfecto, la estrella en cada escena.",
    "💗 En el caos del mundo, encontré la calma en tus brazos.",
    "🌸 Todo lo que necesito es verte sonreír, porque esa sonrisa ilumina mi universo, como un cuasar pulsando en mi corazón.",
    "💫 Cada día contigo es una nueva página en el libro de nuestra historia de amor (libro que debemos escribir).",
    "🌙 Si pudiera pedir un deseo, pediría que siempre estemos juntos bajo un cielo estrellado, imaginando crear cohetes y explorando planetas juntos.",
    "✨ Eres el sueño del que nunca quiero despertar.",
    "🌟 Eres mi constelación, mi estrella en medio de la oscuridad.",
    "💘 Si pudiera detener el tiempo, lo haría solo para quedarme contigo por siempre (dandote mimos y besitos).",
    "🌺 Mi corazón late por ti, no por un momento, sino por toda la eternidad y es que contigo por mas que eso quiero estar.",
    "🌞 En un mundo lleno de incertidumbre, tú eres mi sol brillante y cálido, mi ecuación perfecta para emocionarme.",
    "💎 Eres la gema más preciosa en el tesoro de mi corazón.",
    "🎵 Si pudiera cantar mi amor por ti, la canción nunca terminaría, seria una melodia que yo todo el dia gozaría.",
    "🌟 Si el amor fuera una estrella, tú serías la más brillante en el cielo de mi vida.",
    "🌸 Si el amor fuera un color, el mío sería el rojo brillante de tu pasión😉.",
    "💘 Cuando estamos juntos, todo en el mundo parece encajar perfectamente, parece ser mi lugar, en donde de verdad quiero estar.",
    "🌍 En cada rincón del universo, siempre te encontraría a ti.",
    "🌞 Cada amanecer es más brillante cuando te tengo a ti a mi lado.",
    "🌸 En el jardín de mi vida, tú eres la flor que nunca se marchita.",
    "❤️ Mi amor por ti es infinito, más allá de lo que las palabras pueden expresar.",
    "🌺 Tu voz es mi canción favorita, la que quiero escuchar una y otra vez.",
    "💎 El amor es la piedra preciosa que brilla más cuando lo compartimos.",
    "🌙 Si el amor fuera un sueño, quiero que el mío sea siempre contigo.",
    "🌙 Cada noche, mi corazón se llena de sueños contigo😉.",
    "🌸 Mi amor por ti es mi fuerza, mi razón para seguir adelante.",
    "💖 Siempre querré estar a tu lado, porque contigo todo tiene sentido.",
    "🌸 Como el perfume de una flor, me vuelves loco, tu amor me envuelve y me hace sentir completo.",
    "🌸 Mi corazón siempre te pertenecerá, más allá de cualquier obstáculo, es tuyo por completo.",
    "🌺 Mi amor por ti es mi tesoro más valioso, el que siempre protegeré.",
    "⚡ Si fueras un superconductor, me derretirías a la velocidad de la luz... y ni siquiera querría enfriarme. 🔥",
    "🧬 Si el amor fuera genética, estaría buscando el gen que me hace necesitarte, porque contigo mi ADN siempre responde. 😈",
    "⚛️ En el universo de nuestro amor, cada beso es como una fisión nuclear: lo que empieza pequeño, termina en una explosión. 💥",
    "💡 Si fueras un circuito eléctrico, me encantaría ser el cable que te conecta, siempre cargándote de energía y sin interrupciones (no hagas caso). ⚡",
    "🔬 En el laboratorio de mi corazón, tú eres la fórmula secreta que provoca cada reacción en cadena. Te atreves a ser mi experimento? 🧪",
    "📐 ¿Sabías que tu cuerpo tiene la geometría perfecta para mis cálculos? Cada centímetro tuyo está hecho para encajar conmigo. 🔥",
    "😏 ¿Qué tal si fusionamos nuestras energías y vemos si la reacción es exotérmica? 💥",
    "⚡ Si fueras electricidad, te confieso que no podría resistir la corriente… me encantaría ser la resistencia, a ver que puedo parar.",
    "En este laboratorio llamado 'amor', quiero ser la variable que altere todos tus resultados, porque cuando estamos juntos tu ya alteras los mios. ⚡",
    "🌌 Si el amor fuera una galaxia, tú serías mi agujero negro… no hay forma de escapar de ti, y no quiero hacerlo.",
    "Cada vez que me miras así, siento que mis engranajes se ponen en marcha, como si me fueras a desarmar y reconstruir a tu manera. 😈",
    "Si el genoma humano fueras tu yo no hubiera tardado tanto para hacer un mapa de cada parte tuya.",
    "🧲 Si te acercas más, nuestra atracción será tan fuerte que ni la gravedad podrá resistirnos… y lo sé porque ya me estás atrayendo. 💘",
    "🛫 Si fueras una pista de aterrizaje, me encantaría ser el avión que aterriza en ti.",
    "Si fueras una aeronave, me encantaría ser el sistema de navegación que te lleva directamente hacia mí, guiándote sin rodeos. 😔",
    "Cuando me miras, siento que voy a despegar, como un avión que no quiere aterrizar. Cada palabra tuya es una señal de pista, y en tus brazos, mi vuelo no se limita a escalas raras. 🛫",
    "Eres mi sol en un día nublado, mi estrella fugaz en el cielo estrellado. Cada suspiro que escape de tus labios, es un universo que me invita a perderme en tus brazos. 🌟",
];

// Lista de 100 canciones dedicables
const songs = [
   
    "🎶 'Darte un beso' - Prince Royce",
    "🎶 'Te amo' - Franco de Vita",
    "🎶 'Eres la mujer' - Ricardo Arjona",
    "🎶 'Quiero' - Alejandro Sanz",
    "🎶 'Sigo pensando en ti' - Luis Miguel",
    "🎶 'Desde que llegaste' - Juanes",
    "🎶 'Amar sin ser amado' - Luis Fonsi",
    "🎶 'Por siempre' - Kany García"
    "🎶 'Cuando Me Enamoro' – Juan Luis Guerra ft. Juanes",
    "🎶 'Quiero Perderme Contigo' - José José",
    "🎶 'Preso' - José José",
    "🎶 'Por Mujeres Como Tú' - José José",
    "🎶 'Sabes Una Cosa' - Luis Miguel",
    "🎶 'Me Basta' - José José",
    "🎶 'Eso Y Más' - Joan Sebastián",
    "🎶 'Me Enamoré de Ti' - Chayanne",
    "🎶 'Entra En Mi Vida' - Sin Bandera",
    "🎶 'La Cosa Más Bella' - Eros Ramazzotti",
    "🎶 'El Amor De Mi Vida' - La Adictiva",
    "🎶 'Bésame (Ida y Vuelta Edición Especial) [Video Oficial]' - La Adictiva",
    "🎶 'Sólo Para Ti' - Camila",
    "🎶 'Perfect' - Ed Sheeran",
    "🎶 'Thinking Out Loud' - Ed Sheeran"
    "🎶 'Un Siglo Sin Ti' – Chayanne"
    "🎶 'Just the Way You Are' - Bruno Mars"
    "🎶 'All of Me' - John Legend"
    "🎶 'Can't Help Falling in Love' - Elvis Presley"
    "🎶 'My Universe' - Coldplay & BTS"
    "🎶 'Yellow' - Coldplay",
    "🎶 'Stand By Me' - Ben E. King",
    "🎶 'Eres Tú' - Matisse & Reik",
    "🎶 'Eres' - Café Tacvba"
    "🎶 'Te Voy a Amar' - Axel",
    "🎶 'Photograph' - Ed Sheeran",
    "🎶 'Por el Resto de Mi Vida' - Andrés Cepeda",
    "🎶 'As Long As You Love Me' - Backstreet Boys",
    "🎶 'Adore You' - Harry Styles",
    "🎶 'Sin Miedo a Nada' (feat. Amaia Montero) - Kany García",
    "🎶 'Angels' - Robbie Williams",
    "🎶 'Me Enamoré de Ti' - David Bisbal",
    "🎶 'Estar Contigo' (feat. La Oreja de Van Gogh) - Alex Ubago, La Oreja de Van Gogh",
    "🎶 'Solamente Tú' - Pablo Alborán"
    "🎶 'Te Amaré' - Miguel Bosé",
    "🎶 'Para Amarnos Más' - Manuel Mijares",
    "🎶 '100 Años' - Pedro Infante",
    "🎶 'I Don't Want to Miss a Thing' - Aerosmith",
    "🎶 'El Color de Tus Ojos' - Banda MS de Sergio Lizárraga"
];

// Función para generar una frase y canción aleatoria y mostrarlas juntas en el mismo recuadro
function generatePhraseAndSong() {
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    const randomSong = songs[Math.floor(Math.random() * songs.length)];

    // Mostrar frase y canción en el mismo recuadro
    document.getElementById('generated-phrase').innerHTML = 
        `<strong>Frase de amor:</strong> ${randomPhrase}<br><br><strong>Canción dedicada:</strong> ${randomSong}`;
}
