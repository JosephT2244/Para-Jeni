const emojiContainer = document.getElementById('emoji-container');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');
const instructions = document.getElementById('instructions');

let emojisCount = 80;  // Valor predeterminado
let turnTime = 20; // Valor predeterminado
let gameInterval;
let currentPlayer = 'Joseph';
let scores = {
    'Joseph': 0,
    'Jenifer': 0
};

const emojis = [
    '❤️', '🧡', // Corazones similares
    '💛', '💚', // Corazones similares
    '💙', '💜', // Corazones similares
    '🖤', '🤍', // Corazones similares
    '💖', '💗', // Corazones similares
    '💓', '💞', // Corazones similares
    '❣️', '💕', // Corazones similares
    '💌', '💘', // Corazones similares
    '💝', '💘', // Corazones similares
    '🌟', '✨', // Estrellas similares
    '⚡', '💥', // Relámpagos y explosiones similares
    '🔥', '🌪️', // Fuego y tormenta similares
    '💧', '🌊', // Gotas de agua y ola similares
    '🌈', '🌤️', // Arco iris y sol similares
    '🌙', '🌕', // Lunas similares
    '🌚', '🌝', // Lunas similares
    '🌻', '🌼', // Flores similares
    '🌷', '🌸', // Flores similares
    '🌺', '🌹', // Flores similares
    '🦋', '🐝', // Mariposa y abeja similares
    '🐞', '🐜', // Insectos similares
    '🐍', '🦎', // Serpientes y lagartos similares
    '🐢', '🦖', // Tortuga y dinosaurio similares
    '🐙', '🐋', // Pulpo y ballena similares
    '🦑', '🦐', // Calamar y camarón similares
    '🍏', '🍎', // Manzanas similares
    '🍊', '🍋', // Naranjas y limones similares
    '🍌', '🍍', // Plátano y piña similares
    '🍑', '🍒', // Durazno y cereza similares
    '🍓', '🍇', // Fresas y uvas similares
    '🍉', '🍈', // Sandía y melón similares
    '🥥', '🥝', // Coco y kiwi similares
    '🍍', '🥭', // Piña y mango similares
    '🍄', '🍃', // Hongos y hojas similares
    '🌰', '🍂', // Castaña y hojas similares
    '🌵', '🌾', // Cactus y trigo similares
    '🍂', '🍃', // Hojas similares
    '🌾', '🌿', // Trigo y hierba similares
    '🪴', '🌵', // Planta en maceta y cactus similares
    '🌱', '🌿', // Plantas similares
    '🍁', '🍂', // Hojas similares
    '🍃', '🍀', // Hojas similares
    '🌍', '🌎', // Planetas similares
    '🌏', '🌐', // Planetas similares
    '🌋', '⛰️', // Volcán y montaña similares
    '🏞️', '🌄', // Paisajes similares
    '🏙️', '🌆', // Ciudades similares
    '🌇', '🌃', // Atardeceres similares
    '🌉', '🗼', // Puentes y torres similares
    '🗺️', '🌏', // Mapa y planeta similares
    '🛶', '🚤', // Barcos similares
    '🚢', '⛵', // Barcos similares
    '🛥️', '🚀', // Barco y cohete similares
    '🛸', '🚁', // Platillo volador y helicóptero similares
    '✈️', '🚁', // Avión y helicóptero similares
    '🚋', '🚂', // Trenes similares
    '🚃', '🚞', // Trenes similares
    '🚎', '🚌', // Autobús y microbús similares
    '🚍', '🚐', // Autobús y furgoneta similares
    '🚑', '🚒', // Ambulancia y camión de bomberos similares
    '🚓', '🚔', // Patrulla y camión de policía similares
    '🚙', '🚘', // Autos similares
    '🚗', '🛻', // Autos y camionetas similares
    '🚕', '🚖', // Taxis similares
    '🚙', '🛻', // Camionetas similares
    '🚛', '🚚', // Camiones similares
    '🚜', '🚛', // Tractores y camiones similares
    '🚗', '🛻', // Autos y camionetas similares
    '🚁', '🛸', // Helicópteros y platillos voladores similares
    '🚀', '🛸', // Cohete y platillo volador similares
    '🪐', '🌑', // Planeta y luna similar
    '🌘', '🌗', // Lunas similares
    '🌖', '🌒', // Lunas similares
    '🌔', '🌕', // Lunas similares
    '🌑', '🌚', // Lunas similares
    '🪴', '🌻', // Planta en maceta y flor similar
    '🌳', '🌴', // Árboles similares
    '🌲', '🌵', // Árbol y cactus similares
    '🍂', '🍁', // Hojas similares
    '🍃', '🍀', // Hojas similares
    '🍄', '🪵', // Hongos y madera similares
    '🪓', '🪚', // Hacha y sierra similares
    '🧰', '🛠️', // Caja de herramientas y herramientas similares
    '🔨', '🪛', // Martillo y destornillador similares
    '🪝', '🪠', // Ganchos y pinzas similares
    '🔧', '🔩', // Llave y tornillo similares
    '🗡️', '🔪', // Cuchillo y daga similares
    '⚔️', '🛡️', // Espada y escudo similares
    '🪖', '🧳', // Casco y maleta similares
    '🧵', '🧶', // Hilo y ovillo similares
    '🧸', '🎨', // Osito y pintura similares
    '🎬', '📽️', // Película y proyector similares
    '🎞️', '🎤', // Película y micrófono similares
    '🎧', '🎷', // Auriculares y saxofón similares
    '🎺', '🎸', // Trompeta y guitarra similares
    '🎻', '🥁', // Violín y tambor similares
    '🎹', '🎶', // Piano y notas musicales similares
    '🎵', '🎼', // Música similar
    '🎶', '🎤', // Música y micrófono similares
    '🎧', '🎬', // Auriculares y película similares
    '🧸', '🎉', // Osito y fiesta similares
    '🖼️', '🎨', // Cuadro y pintura similares
    '🎭', '🎬', // Teatro y película similares
    '📽️', '🎬', // Proyector y película similares
    '🎤', '🎧', // Micrófono y auriculares similares
    '📀', '💿', // Disco y CD similares
    '📀', '🎶', // Disco y música similares
    '🎮', '🕹️', // Videojuegos similares
    '🧩', '♟️', // Rompecabezas y ajedrez similares
    '🔮', '🧿', // Bola de cristal y amuleto similares
    '♠️', '❤️', // Cartas similares
    '♦️', '♣️', // Cartas similares
    '🃏', '🀄', // Cartas similares
    '♠️', '♦️', // Cartas similares
    '🎴', '🃏', // Cartas similares
    '🪁', '🎏', // Cometa y banderín similares
    '🎐', '🎍', // Banderín y bambú similares
    '🎏', '🎐', // Banderín y viento similares
    '🎀', '🎁', // Regalo y lazo similares
    '🎫', '🎟️', // Entrada y boleto similares
    '🎟️', '🏷️', // Boleto y etiqueta similares
    '🖋️', '✒️', // Pluma y bolígrafo similares
    '🖊️', '✏️', // Bolígrafo y lápiz similares
    '📝', '📏', // Escribir y medir similares
    '📐', '📎', // Regla y clip similares
    '📌', '📍', // Chinchetas similares
    '🖋️', '✒️', // Pluma y lápiz similares
    '📎', '📑', // Clip y documento similares
    '📚', '📖', // Libros similares
    '📝', '📅', // Escribir y calendario similares
    '📆', '📊', // Calendario y gráfico similares
    '📋', '📌', // Lista y chinchetas similares
    '📑', '📜', // Documento y pergamino similares
    '📄', '📝', // Documento y notas similares
    '🔗', '🧷', // Cadena y alfiler similares
    '💳', '📠', // Tarjeta y teléfono similares
    '🖥️', '💻', // Computadora similares
    '💾', '📀', // Disco y CD similares
    '📼', '🖨️', // Cinta y impresora similares
    '🖱️', '⌨️', // Ratón y teclado similares
    '💻', '🖥️', // Computadora similares
    '🖱️', '🖥️', // Ratón y computadora similares
    '💻', '🖱️', // Computadora y ratón similares
    '⌨️', '🖥️', // Teclado y computadora similares
    '🖨️', '🖱️', // Impresora y ratón similares
    '📱', '📞', // Teléfono móvil y teléfono fijo similares
    '📞', '📱', // Teléfono fijo y móvil similares
    '📲', '📱', // Teléfono móvil y móvil similares
    '☎️', '📱', // Teléfono fijo y móvil similares
    '📞', '☎️', // Teléfono fijo similares
    '📡', '🛰️', // Antena y satélite similares
    '🛰️', '📡', // Satélite y antena similares
    '🖥️', '🖱️', // Computadora y ratón similares
    '📺', '📡', // Televisión y antena similares
    '📹', '📽️', // Cámara y proyector similares
    '📺', '📡', // Televisión y antena similares
    '📸', '📷', // Cámara similares
    '📸', '📷', // Cámara similares
    '📷', '📸', // Cámara similares
    '🎥', '📷', // Cámara de cine y foto similares
    '📷', '🎥', // Cámara de foto y cine similares
    '📽️', '🎬', // Proyector y película similares
    '🖱️', '⌨️', // Ratón y teclado similares
    '🖨️', '🖱️', // Impresora y ratón similares
    '🖥️', '⌨️', // Computadora y teclado similares
    '💻', '📱', // Computadora y teléfono móvil similares
    '💾', '📀', // Disco y CD similares
    '🔋', '🔌', // Batería y enchufe similares
    '🔋', '🔌', // Batería y enchufe similares
    '🔒', '🔓', // Candado y abierto similares
    '🔐', '🔏', // Candado y cerrado similares
    '🛠️', '⚙️', // Herramientas y engranaje similares
    '🧰', '🔧', // Caja de herramientas y destornillador similares
    '🧰', '🛠️', // Caja de herramientas y martillo similares
    '🔨', '🪛', // Martillo y destornillador similares
    '🪝', '🪠', // Ganchos y pinzas similares
    '🔧', '🔩', // Llave y tornillo similares
    '🗡️', '🔪', // Daga y cuchillo similares
    '⚔️', '🛡️', // Espada y escudo similares
    '🪖', '🧳', // Casco y maleta similares
    '🧵', '🧶', // Hilo y ovillo similares
    '🧸', '🎨', // Osito y pintura similares
    '🎬', '📽️', // Película y proyector similares
    '🎞️', '🎤', // Película y micrófono similares
    '🎧', '🎷', // Auriculares y saxofón similares
    '🎺', '🎸', // Trompeta y guitarra similares
    '🎻', '🥁', // Violín y tambor similares
    '🎹', '🎶', // Piano y notas musicales similares
    '🎵', '🎼', // Música similar
    '🎶', '🎤', // Música y micrófono similares
    '🎧', '🎬', // Auriculares y película similares
    '🧸', '🎉', // Osito y fiesta similares
    '🖼️', '🎨', // Cuadro y pintura similares
    '🎭', '🎬', // Teatro y película similares
    '📽️', '🎬', // Proyector y película similares
    '🎤', '🎧', // Micrófono y auriculares similares
    '📀', '💿', // Disco y CD similares
    '📀', '🎶', // Disco y música similares
    '🎮', '🕹️', // Videojuegos similares
    '🧩', '♟️', // Rompecabezas y ajedrez similares
    '🔮', '🧿', // Bola de cristal y amuleto similares
    '♠️', '❤️', // Cartas similares
    '♦️', '♣️', // Cartas similares
    '🃏', '🀄', // Cartas similares
    '♠️', '♦️', // Cartas similares
    '🎴', '🃏', // Cartas similares
    '🪁', '🎏', // Cometa y banderín similares
    '🎐', '🎍', // Banderín y bambú similares
    '🎏', '🎐', // Banderín y viento similares
    '🎀', '🎁', // Regalo y lazo similares
    '🎫', '🎟️', // Entrada y boleto similares
    '🎟️', '🏷️', // Boleto y etiqueta similares
    '🖋️', '✒️', // Pluma y bolígrafo similares
    '🖊️', '✏️', // Bolígrafo y lápiz similares
    '📝', '📏', // Escribir y medir similares
    '📐', '📎', // Regla y clip similares
    '📌', '📍', // Chinchetas similares
    '🖋️', '✒️', // Pluma y lápiz similares
    '📎', '📑', // Clip y documento similares
    '📚', '📖', // Libros similares
    '📝', '📅', // Escribir y calendario similares
    '📆', '📊', // Calendario y gráfico similares
    '📋', '📌', // Lista y chinchetas similares
    '📑', '📜', // Documento y pergamino similares
    '📄', '📝', // Documento y notas similares
    '🔗', '🧷', // Cadena y alfiler similares
    '💳', '📠', // Tarjeta y teléfono similares
    '🖥️', '💻', // Computadora similares
    '💾', '📀', // Disco y CD similares
    '📼', '🖨️', // Cinta y impresora similares
    '🖱️', '⌨️', // Ratón y teclado similares
    '💻', '🖥️', // Computadora similares
    '🖱️', '🖥️', // Ratón y computadora similares
    '💻', '🖱️', // Computadora y ratón similares
    '⌨️', '🖥️', // Teclado y computadora similares
    '🖨️', '🖱️', // Impresora y ratón similares
    '📱', '📞', // Teléfono móvil y teléfono fijo similares
    '📞', '📱', // Teléfono fijo y móvil similares
    '📲', '📱', // Teléfono móvil y móvil similares
    '☎️', '📱', // Teléfono fijo y móvil similares
    '📞', '☎️', // Teléfono fijo similares
    '📡', '🛰️', // Antena y satélite similares
    '🛰️', '📡', // Satélite y antena similares
    '🖥️', '🖱️', // Computadora y ratón similares
    '📺', '📡', // Televisión y antena similares
    '📹', '📽️', // Cámara y proyector similares
    '📺', '📡', // Televisión y antena similares
    '📸', '📷', // Cámara similares
    '📸', '📷', // Cámara similares
    '📷', '📸', // Cámara similares
    '🎥', '📷', // Cámara de cine y foto similares
    '📷', '🎥', // Cámara de foto y cine similares
    '📽️', '🎬', // Proyector y película similares
    '🖱️', '⌨️', // Ratón y teclado similares
    '🖨️', '🖱️', // Impresora y ratón similares
    '🖥️', '⌨️', // Computadora y teclado similares
    '💻', '📱', // Computadora y teléfono móvil similares
    '💾', '📀', // Disco y CD similares
    '🔋', '🔌', // Batería y enchufe similares
    '🔋', '🔌', // Batería y enchufe similares
    '🔒', '🔓', // Candado y abierto similares
    '🔐', '🔏', // Candado y cerrado similares
    '🛠️', '⚙️', // Herramientas y engranaje similares
    '🧰', '🔧', // Caja de herramientas y destornillador similares
    '🧰', '🛠️', // Caja de herramientas y martillo similares
    '🔨', '🪛', // Martillo y destornillador similares
    '🪝', '🪠', // Ganchos y pinzas similares
    '🔧', '🔩', // Llave y tornillo similares
    '🗡️', '🔪', // Daga y cuchillo similares
    '⚔️', '🛡️', // Espada y escudo similares
    '🪖', '🧳', // Casco y maleta similares
    '🧵', '🧶', // Hilo y ovillo similares
    '🧸', '🎨', // Osito y pintura similares
    '🎬', '📽️', // Película y proyector similares
    '🎞️', '🎤', // Película y micrófono similares
    '🎧', '🎷', // Auriculares y saxofón similares
    '🎺', '🎸', // Trompeta y guitarra similares
    '🎻', '🥁', // Violín y tambor similares
    '🎹', '🎶', // Piano y notas musicales similares
    '🎵', '🎼', // Música similar
    '🎶', '🎤', // Música y micrófono similares
    '🎧', '🎬', // Auriculares y película similares
    '🧸', '🎉', // Osito y fiesta similares
    '🖼️', '🎨', // Cuadro y pintura similares
    '🎭', '🎬', // Teatro y película similares
    '📽️', '🎬', // Proyector y película similares
    '🎤', '🎧', // Micrófono y auriculares similares
    '📀', '💿', // Disco y CD similares
    '📀', '🎶', // Disco y música similares
    '🎮', '🕹️', // Videojuegos similares
    '🧩', '♟️', // Rompecabezas y ajedrez similares
    '🔮', '🧿', // Bola de cristal y amuleto similares
    '♠️', '❤️', // Cartas similares
    '♦️', '♣️', // Cartas similares
    '🃏', '🀄', // Cartas similares
    '♠️', '♦️', // Cartas similares
    '🎴', '🃏', // Cartas similares
    '🪁', '🎏', // Cometa y banderín similares
    '🎐', '🎍', // Banderín y bambú similares
    '🎏', '🎐', // Banderín y viento similares
    '🎀', '🎁', // Regalo y lazo similares
    '🎫', '🎟️', // Entrada y boleto similares
    '🎟️', '🏷️', // Boleto y etiqueta similares
    '🖋️', '✒️', // Pluma y bolígrafo similares
    '🖊️', '✏️', // Bolígrafo y lápiz similares
    '📝', '📏', // Escribir y medir similares
    '📐', '📎', // Regla y clip similares
    '📌', '📍', // Chinchetas similares
    '🖋️', '✒️', // Pluma y lápiz similares
    '📎', '📑', // Clip y documento similares
    '📚', '📖', // Libros similares
    '📝', '📅', // Escribir y calendario similares
    '📆', '📊', // Calendario y gráfico similares
    '📋', '📌', // Lista y chinchetas similares
    '📑', '📜', // Documento y pergamino similares
    '📄', '📝', // Documento y notas similares
    '🔗', '🧷', // Cadena y alfiler similares
    '💳', '📠', // Tarjeta y teléfono similares
    '🖥️', '💻', // Computadora similares
    '💾', '📀', // Disco y CD similares
    '📼', '🖨️', // Cinta y impresora similares
    '🖱️', '⌨️', // Ratón y teclado similares
    '💻', '🖥️', // Computadora similares
    '🖱️', '🖥️', // Ratón y computadora similares
    '💻', '🖱️', // Computadora y ratón similares
    '⌨️', '🖥️', // Teclado y computadora similares
    '🖨️', '🖱️', // Impresora y ratón similares
    '📱', '📞', // Teléfono móvil y teléfono fijo similares
    '📞', '📱', // Teléfono fijo y móvil similares
    '📲', '📱', // Teléfono móvil y móvil similares
    '☎️', '📱', // Teléfono fijo y móvil similares
    '📞', '☎️', // Teléfono fijo similares
    '📡', '🛰️', // Antena y satélite similares
    '🛰️', '📡', // Satélite y antena similares
    '🖥️', '🖱️', // Computadora y ratón similares
    '📺', '📡', // Televisión y antena similares
    '📹', '📽️', // Cámara y proyector similares
    '📺', '📡', // Televisión y antena similares
    '📸', '📷', // Cámara similares
    '📸', '📷', // Cámara similares
    '📷', '📸', // Cámara similares
    '🎥', '📷', // Cámara de cine y foto similares
    '📷', '🎥', // Cámara de foto y cine similares
    '📽️', '🎬', // Proyector y película similares
    '🖱️', '⌨️', // Ratón y teclado similares
    '🖨️', '🖱️', // Impresora y ratón similares
    '🖥️', '⌨️', // Computadora y teclado similares
    '💻', '📱', // Computadora y teléfono móvil similares
    '💾', '📀', // Disco y CD similares
    '🔋', '🔌', // Batería y enchufe similares
    '🔋', '🔌', // Batería y enchufe similares
    '🔒', '🔓', // Candado y abierto similares
    '🔐', '🔏', // Candado y cerrado similares
    '🛠️', '⚙️', // Herramientas y engranaje similares
    '🧰', '🔧', // Caja de herramientas y destornillador similares
    '🧰', '🛠️', // Caja de herramientas y martillo similares
    '🔨', '🪛', // Martillo y destornillador similares
    '🪝', '🪠', // Ganchos y pinzas similares
    '🔧', '🔩', // Llave y tornillo similares
    '🗡️', '🔪', // Daga y cuchillo similares
    '⚔️', '🛡️', // Espada y escudo similares
    '🪖', '🧳', // Casco y maleta similares
    '🧵', '🧶', // Hilo y ovillo similares
    '🧸', '🎨', // Osito y pintura similares
    '🎬', '📽️', // Película y proyector similares
    '🎞️', '🎤', // Película y micrófono similares
    '🎧', '🎷', // Auriculares y saxofón similares
    '🎺', '🎸', // Trompeta y guitarra similares
    '🎻', '🥁', // Violín y tambor similares
    '🎹', '🎶', // Piano y notas musicales similares
    '🎵', '🎼', // Música similar
    '🎶', '🎤', // Música y micrófono similares
    '🎧', '🎬', // Auriculares y película similares
    '🧸', '🎉', // Osito y fiesta similares
    '🖼️', '🎨', // Cuadro y pintura similares
    '🎭', '🎬', // Teatro y película similares
    '📽️', '🎬', // Proyector y película similares
    '🎤', '🎧', // Micrófono y auriculares similares
    '📀', '💿', // Disco y CD similares
    '📀', '🎶', // Disco y música similares
    '🎮', '🕹️', // Videojuegos similares
    '🧩', '♟️', // Rompecabezas y ajedrez similares
    '🔮', '🧿', // Bola de cristal y amuleto similares
    '♠️', '❤️', // Cartas similares
    '♦️', '♣️', // Cartas similares
    '🃏', '🀄', // Cartas similares
    '♠️', '♦️', // Cartas similares
    '🎴', '🃏', // Cartas similares
    '🪁', '🎏', // Cometa y banderín similares
    '🎐', '🎍', // Banderín y bambú similares
    '🎏', '🎐', // Banderín y viento similares
    '🎀', '🎁', // Regalo y lazo similares
    '🎫', '🎟️', // Entrada y boleto similares
    '🎟️', '🏷️', // Boleto y etiqueta similares
    '🖋️', '✒️', // Pluma y bolígrafo similares
    '🖊️', '✏️', // Bolígrafo y lápiz similares
    '📝', '📏', // Escribir y medir similares
    '📐', '📎', // Regla y clip similares
    '📌', '📍', // Chinchetas similares
    '🖋️', '✒️', // Pluma y lápiz similares
    '📎', '📑', // Clip y documento similares
    '📚', '📖', // Libros similares
    '📝', '📅', // Escribir y calendario similares
    '📆', '📊', // Calendario y gráfico similares
    '📋', '📌', // Lista y chinchetas similares
    '📑', '📜', // Documento y pergamino similares
    '📄', '📝', // Documento y notas similares
    '🔗', '🧷', // Cadena y alfiler similares
    '💳', '📠', // Tarjeta y teléfono similares
    '🖥️', '💻', // Computadora similares
    '💾', '📀', // Disco y CD similares
    '📼', '🖨️', // Cinta y impresora similares
    '🖱️', '⌨️', // Ratón y teclado similares
    '💻', '🖥️', // Computadora similares
    '🖱️', '🖥️', // Ratón y computadora similares
    '💻', '🖱️', // Computadora y ratón similares
    '⌨️', '🖥️', // Teclado y computadora similares
    '🖨️', '🖱️', // Impresora y ratón similares
    '📱', '📞', // Teléfono móvil y teléfono fijo similares
    '📞', '📱', // Teléfono fijo y móvil similares
    '📲', '📱', // Teléfono móvil y móvil similares
    '☎️', '📱', // Teléfono fijo y móvil similares
    '📞', '☎️', // Teléfono fijo similares
    '📡', '🛰️', // Antena y satélite similares
    '🛰️', '📡', // Satélite y antena similares
    '🖥️', '🖱️', // Computadora y ratón similares
    '📺', '📡', // Televisión y antena similares
    '📹', '📽️', // Cámara y proyector similares
    '📺', '📡', // Televisión y antena similares
    '📸', '📷', // Cámara similares
    '📸', '📷', // Cámara similares
    '📷', '📸', // Cámara similares
    '🎥', '📷', // Cámara de cine y foto similares
    '📷', '🎥', // Cámara de foto y cine similares
    '📽️', '🎬', // Proyector y película similares
    '🖱️', '⌨️', // Ratón y teclado similares
    '🖨️', '🖱️', // Impresora y ratón similares
    '🖥️', '⌨️', // Computadora y teclado similares
    '💻', '📱', // Computadora y teléfono móvil similares
    '💾', '📀', // Disco y CD similares
    '🔋', '🔌', // Batería y enchufe similares
    '🔋', '🔌', // Batería y enchufe similares
    '🔒', '🔓', // Candado y abierto similares
    '🔐', '🔏', // Candado y cerrado similares
    '🛠️', '⚙️', // Herramientas y engranaje similares
    '🧰', '🔧', // Caja de herramientas y destornillador similares
    '🧰', '🛠️', // Caja de herramientas y martillo similares
    '🔨', '🪛', // Martillo y destornillador similares
    '🪝', '🪠', // Ganchos y pinzas similares
    '🔧', '🔩', // Llave y tornillo similares
    '🗡️', '🔪', // Daga y cuchillo similares
    '⚔️', '🛡️', // Espada y escudo similares
    '🪖', '🧳', // Casco y maleta similares
    '🧵', '🧶', // Hilo y ovillo similares
    '🧸', '🎨', // Osito y pintura similares
    '🎬', '📽️', // Película y proyector similares
    '🎞️', '🎤', // Película y micrófono similares
    '🎧', '🎷', // Auriculares y saxofón similares
    '🎺', '🎸', // Trompeta y guitarra similares
    '🎻', '🥁', // Violín y tambor similares
    '🎹', '🎶', // Piano y notas musicales similares
    '🎵', '🎼', // Música similar
    '🎶', '🎤', // Música y micrófono similares
    '🎧', '🎬', // Auriculares y película similares
    '🧸', '🎉', // Osito y fiesta similares
    '🖼️', '🎨', // Cuadro y pintura similares
    '🎭', '🎬', // Teatro y película similares
    '📽️', '🎬', // Proyector y película similares
    '🎤', '🎧', // Micrófono y auriculares similares
    '📀', '💿', // Disco y CD similares
    '📀', '🎶', // Disco y música similares
    '🎮', '🕹️', // Videojuegos similares
    '🧩', '♟️', // Rompecabezas y ajedrez similares
    '🔮', '🧿', // Bola de cristal y amuleto similares
    '♠️', '❤️', // Cartas similares
    '♦️', '♣️', // Cartas similares
    '🃏', '🀄', // Cartas similares
    '♠️', '♦️', // Cartas similares
    '🎴', '🃏', // Cartas similares
    '🪁', '🎏', // Cometa y banderín similares
    '🎐', '🎍', // Banderín y bambú similares
    '🎏', '🎐', // Banderín y viento similares
    '🎀', '🎁', // Regalo y lazo similares
    '🎫', '🎟️', // Entrada y boleto similares
    '🎟️', '🏷️', // Boleto y etiqueta similares
    '🖋️', '✒️', // Pluma y bolígrafo similares
    '🖊️', '✏️', // Bolígrafo y lápiz similares
    '📝', '📏', // Escribir y medir similares
    '📐', '📎', // Regla y clip similares
    '📌', '📍', // Chinchetas similares
    '🖋️', '✒️', // Pluma y lápiz similares
    '📎', '📑', // Clip y documento similares
    '📚', '📖', // Libros similares
    '📝', '📅', // Escribir y calendario similares
    '📆', '📊', // Calendario y gráfico similares
    '📋', '📌', // Lista y chinchetas similares
    '📑', '📜', // Documento y pergamino similares
    '📄', '📝', // Documento y notas similares
    '🔗', '🧷', // Cadena y alfiler similares
    '💳', '📠', // Tarjeta y teléfono similares
    '🖥️', '💻', // Computadora similares
    '💾', '📀', // Disco y CD similares
    '📼', '🖨️', // Cinta y impresora similares
    '🖱️', '⌨️', // Ratón y teclado similares
    '💻', '🖥️', // Computadora similares
    '🖱️', '🖥️', // Ratón y computadora similares
    '💻', '🖱️', // Computadora y ratón similares
    '⌨️', '🖥️', // Teclado y computadora similares
    '🖨️', '🖱️', // Impresora y ratón similares
    '📱', '📞', // Teléfono móvil y teléfono fijo similares
    '📞', '📱', // Teléfono fijo y móvil similares
    '📲', '📱', // Teléfono móvil y móvil similares
    '☎️', '📱', // Teléfono fijo y móvil similares
    '📞', '☎️', // Teléfono fijo similares
    '📡', '🛰️', // Antena y satélite similares
    '🛰️', '📡', // Satélite y antena similares
    '🖥️', '🖱️', // Computadora y ratón similares
    '📺', '📡', // Televisión y antena similares
    '📹', '📽️', // Cámara y proyector similares
    '📺', '📡', // Televisión y antena similares
    '📸', '📷', // Cámara similares
    '📸', '📷', // Cámara similares
    '📷', '📸', // Cámara similares
    '🎥', '📷', // Cámara de cine y foto similares
    '📷', '🎥', // Cámara de foto y cine similares
    '📽️', '🎬', // Proyector y película similares
    '🖱️', '⌨️', // Ratón y teclado similares
    '🖨️', '🖱️', // Impresora y ratón similares
    '🖥️', '⌨️', // Computadora y teclado similares
    '💻', '📱', // Computadora y teléfono móvil similares
    '💾', '📀', // Disco y CD similares
    '🔋', '🔌', // Batería y enchufe similares
    '🔋', '🔌', // Batería y enchufe similares
    '🔒', '🔓', // Candado y abierto similares
    '🔐', '🔏', // Candado y cerrado similares
    '🛠️', '⚙️', // Herramientas y engranaje similares
    '🧰', '🔧', // Caja de herramientas y destornillador similares
    '🧰', '🛠️', // Caja de herramientas y martillo similares
    '🔨', '🪛', // Martillo y destornillador similares
    '🪝', '🪠', // Ganchos y pinzas similares
    '🔧', '🔩', // Llave y tornillo similares
    '🗡️', '🔪', // Daga y cuchillo similares
    '⚔️', '🛡️', // Espada y escudo similares
    '🪖', '🧳', // Casco y maleta similares
    '🧵', '🧶', // Hilo y ovillo similares
    '🧸', '🎨', // Osito y pintura similares
    '🎬', '📽️', // Película y proyector similares
    '🎞️', '🎤', // Película y micrófono similares
    '🎧', '🎷', // Auriculares y saxofón similares
    '🎺', '🎸', // Trompeta y guitarra similares
    '🎻', '🥁', // Violín y tambor similares
    '🎹', '🎶', // Piano y notas musicales similares
    '🎵', '🎼', // Música similar
    '🎶', '🎤', // Música y micrófono similares
    '🎧', '🎬', // Auriculares y película similares
    '🧸', '🎉', // Osito y fiesta similares
    '🖼️', '🎨', // Cuadro y pintura similares
    '🎭', '🎬', // Teatro y película similares
    '📽️', '🎬', // Proyector y película similares
    '🎤', '🎧', // Micrófono y auriculares similares
    '📀', '💿', // Disco y CD similares
    '📀', '🎶', // Disco y música similares
    '🎮', '🕹️', // Videojuegos similares
    '🧩', '♟️', // Rompecabezas y ajedrez similares
    '🔮', '🧿', // Bola de cristal y amuleto similares
    '♠️', '❤️', // Cartas similares
    '♦️', '♣️', // Cartas similares
    '🃏', '🀄', // Cartas similares
    '♠️', '♦️', // Cartas similares
    '🎴', '🃏', // Cartas similares
    '🪁', '🎏', // Cometa y banderín similares
    '🎐', '🎍', // Banderín y bambú similares
    '🎏', '🎐', // Banderín y viento similares
    '🎀', '🎁', // Regalo y lazo similares
    '🎫', '🎟️', // Entrada y boleto similares
    '🎟️', '🏷️', // Boleto y etiqueta similares
    '🖋️', '✒️', // Pluma y bolígrafo similares
    '🖊️', '✏️', // Bolígrafo y lápiz similares
    '📝', '📏', // Escribir y medir similares
    '📐', '📎', // Regla y clip similares
    '📌', '📍', // Chinchetas similares
    '🖋️', '✒️', // Pluma y lápiz similares
    '📎', '📑', // Clip y documento similares
    '📚', '📖', // Libros similares
    '📝', '📅', // Escribir y calendario similares
    '📆', '📊', // Calendario y gráfico similares
    '📋', '📌', // Lista y chinchetas similares
    '📑', '📜', // Documento y pergamino similares
    '📄', '📝', // Documento y notas similares
    '🔗', '🧷', // Cadena y alfiler similares
    '💳', '📠', // Tarjeta y teléfono similares
    '🖥️', '💻', // Computadora similares
    '💾', '📀', // Disco y CD similares
    '📼', '🖨️', // Cinta y impresora similares
    '🖱️', '⌨️', // Ratón y teclado similares
    '💻', '🖥️', // Computadora similares
    '🖱️', '🖥️', // Ratón y computadora similares
    '💻', '🖱️', // Computadora y ratón similares
    '⌨️', '🖥️', // Teclado y computadora similares
    '🖨️', '🖱️', // Impresora y ratón similares
    '📱', '📞', // Teléfono móvil y teléfono fijo similares
    '📞', '📱', // Teléfono fijo y móvil similares
    '📲', '📱', // Teléfono móvil y móvil similares
    '☎️', '📱', // Teléfono fijo y móvil similares
    '📞', '☎️', // Teléfono fijo similares
    '📡', '🛰️', // Antena y satélite similares
    '🛰️', '📡', // Satélite y antena similares
    '🖥️', '🖱️', // Computadora y ratón similares
    '📺', '📡', // Televisión y antena similares
    '📹', '📽️', // Cámara y proyector similares
    '📺', '📡', // Televisión y antena similares
    '📸', '📷', // Cámara similares
    '📸', '📷', // Cámara similares
    '📷', '📸', // Cámara similares
    '🎥', '📷', // Cámara de cine y foto similares
    '📷', '🎥', // Cámara de foto y cine similares
    '📽️', '🎬', // Proyector y película similares
    '🖱️', '⌨️', // Ratón y teclado similares
    '🖨️', '🖱️', // Impresora y ratón similares
    '🖥️', '⌨️', // Computadora y teclado similares
    '💻', '📱', // Computadora y teléfono móvil similares
    '💾', '📀', // Disco y CD similares
    '🔋', '🔌', // Batería y enchufe similares
    '🔋', '🔌', // Batería y enchufe similares
    '🔒', '🔓', // Candado y abierto similares
    '🔐', '🔏', // Candado y cerrado similares
    '🛠️', '⚙️', // Herramientas y engranaje similares
    '🧰', '🔧', // Caja de herramientas y destornillador similares
    '🧰', '🛠️', // Caja de herramientas y martillo similares
    '🔨', '🪛', // Martillo y destornillador similares
    '🪝', '🪠', // Ganchos y pinzas similares
    '🔧', '🔩', // Llave y tornillo similares
    '🗡️', '🔪', // Daga y cuchillo similares
    '⚔️', '🛡️', // Espada y escudo similares
    '🪖', '🧳', // Casco y maleta similares
    '🧵', '🧶', // Hilo y ovillo similares
    '🧸', '🎨', // Osito y pintura similares
    '🎬', '📽️', // Película y proyector similares
    '🎞️', '🎤', // Película y micrófono similares
    '🎧', '🎷', // Auriculares y saxofón similares
    '🎺', '🎸', // Trompeta y guitarra similares
    '🎻', '🥁', // Violín y tambor similares
    '🎹', '🎶', // Piano y notas musicales similares
    '🎵', '🎼', // Música similar
    '🎶', '🎤', // Música y micrófono similares
    '🎧', '🎬', // Auriculares y película similares
    '🧸', '🎉', // Osito y fiesta similares
    '🖼️', '🎨', // Cuadro y pintura similares
    '🎭', '🎬', // Teatro y película similares
    '📽️', '🎬', // Proyector y película similares
    '🎤', '🎧', // Micrófono y auriculares similares
    '📀', '💿', // Disco y CD similares
    '📀', '🎶', // Disco y música similares
    '🎮', '🕹️', // Videojuegos similares
    '🧩', '♟️', // Rompecabezas y ajedrez similares
    '🔮', '🧿', // Bola de cristal y amuleto similares
    '♠️', '❤️', // Cartas similares
    '♦️', '♣️', // Cartas similares
    '🃏', '🀄', // Cartas similares
    '♠️', '♦️', // Cartas similares
    '🎴', '🃏', // Cartas similares
    '🪁', '🎏', // Cometa y banderín similares
    '🎐', '🎍', // Banderín y bambú similares
    '🎏', '🎐', // Banderín y viento similares
    '🎀', '🎁', // Regalo y lazo similares
    '🎫', '🎟️', // Entrada y boleto similares
    '🎟️', '🏷️', // Boleto y etiqueta similares
    '🖋️', '✒️', // Pluma y bolígrafo similares
    '🖊️', '✏️', // Bolígrafo y lápiz similares
    '📝', '📏', // Escribir y medir similares
    '📐', '📎', // Regla y clip similares
    '📌', '📍', // Chinchetas similares
    '🖋️', '✒️', // Pluma y lápiz similares
    '📎', '📑', // Clip y documento similares
    '📚', '📖', // Libros similares
    '📝', '📅', // Escribir y calendario similares
    '📆', '📊', // Calendario y gráfico similares
    '📋', '📌', // Lista y chinchetas similares
    '📑', '📜', // Documento y pergamino similares
    '📄', '📝', // Documento y notas similares
    '🔗', '🧷', // Cadena y alfiler similares
    '💳', '📠', // Tarjeta y teléfono similares
    '🖥️', '💻', // Computadora similares
    '💾', '📀', // Disco y CD similares
    '📼', '🖨️', // Cinta y impresora similares
    '🖱️', '⌨️', // Ratón y teclado similares
    '💻', '🖥️', // Computadora similares
    '🖱️', '🖥️', // Ratón y computadora similares
    '💻', '🖱️', // Computadora y ratón similares
    '⌨️', '🖥️', // Teclado y computadora similares
    '🖨️', '🖱️', // Impresora y ratón similares
    '📱', '📞', // Teléfono móvil y teléfono fijo similares
    '📞', '📱', // Teléfono fijo y móvil similares
    '📲', '📱', // Teléfono móvil y móvil similares
    '☎️', '📱', // Teléfono fijo y móvil similares
    '📞', '☎️', // Teléfono fijo similares
    '📡', '🛰️', // Antena y satélite similares
    '🛰️', '📡', // Satélite y antena similares
    '🖥️', '🖱️', // Computadora y ratón similares
    '📺', '📡', // Televisión y antena similares
    '📹', '📽️', // Cámara y proyector similares
    '📺', '📡', // Televisión y antena similares
    '📸', '📷', // Cámara similares
    '📸', '📷', // Cámara similares
    '📷', '📸', // Cámara similares
    '🎥', '📷', // Cámara de cine y foto similares
    '📷', '🎥', // Cámara de foto y cine similares
    '📽️', '🎬', // Proyector y película similares
    '🖱️', '⌨️', // Ratón y teclado similares
    '🖨️', '🖱️', // Impresora y ratón similares
    '🖥️', '⌨️', // Computadora y teclado similares
    '💻', '📱', // Computadora y teléfono móvil similares
    '💾', '📀', // Disco y CD similares
    '🔋', '🔌', // Batería y enchufe similares
    '🔋', '🔌', // Batería y enchufe similares
    '🔒', '🔓', // Candado y abierto similares
    '🔐', '🔏', // Candado y cerrado similares
    '🛠️', '⚙️', // Herramientas y engranaje similares
    '🧰', '🔧', // Caja de herramientas y destornillador similares
    '🧰', '🛠️', // Caja de herramientas y martillo similares
    '🔨', '🪛', // Martillo y destornillador similares
    '🪝', '🪠', // Ganchos y pinzas similares
    '🔧', '🔩', // Llave y tornillo similares
    '🗡️', '🔪', // Daga y cuchillo similares
    '⚔️', '🛡️', // Espada y escudo similares
    '🪖', '🧳', // Casco y maleta similares
    '🧵', '🧶', // Hilo y ovillo similares
    '🧸', '🎨', // Osito y pintura similares
    '🎬', '📽️', // Película y proyector similares
    '🎞️', '🎤', // Película y micrófono similares
    '🎧', '🎷', // Auriculares y saxofón similares
    '🎺', '🎸', // Trompeta y guitarra similares
    '🎻', '🥁', // Violín y tambor similares
    '🎹', '🎶', // Piano y notas musicales similares
    '🎵', '🎼', // Música similar
    '🎶', '🎤', // Música y micrófono similares
    '🎧', '🎬', // Auriculares y película similares
    '🧸', '🎉', // Osito y fiesta similares
    '🖼️', '🎨', // Cuadro y pintura similares
    '🎭', '🎬', // Teatro y película similares
    '📽️', '🎬', // Proyector y película similares
    '🎤', '🎧', // Micrófono y auriculares similares
    '📀', '💿', // Disco y CD similares
    '📀', '🎶', // Disco y música similares
    '🎮', '🕹️', // Videojuegos similares
    '🧩', '♟️', // Rompecabezas y ajedrez similares
    '🔮', '🧿', // Bola de cristal y amuleto similares
    '♠️', '❤️', // Cartas similares
    '♦️', '♣️', // Cartas similares
    '🃏', '🀄', // Cartas similares
    '♠️', '♦️', // Cartas similares
    '🎴', '🃏', // Cartas similares
    '🪁', '🎏', // Cometa y banderín similares
    '🎐', '🎍', // Banderín y bambú similares
    '🎏', '🎐', // Banderín y viento similares
    '🎀', '🎁', // Regalo y lazo similares
    '🎫', '🎟️', // Entrada y boleto similares
    '🎟️', '🏷️', // Boleto y etiqueta similares
    '🖋️', '✒️', // Pluma y bolígrafo similares
    '🖊️', '✏️', // Bolígrafo y lápiz similares
    '📝', '📏', // Escribir y medir similares
    '📐', '📎', // Regla y clip similares
    '📌', '📍', // Chinchetas similares
    '🖋️', '✒️', // Pluma y lápiz similares
    '📎', '📑', // Clip y documento similares
    '📚', '📖', // Libros similares
    '📝', '📅', // Escribir y calendario similares
    '📆', '📊', // Calendario y gráfico similares
    '📋', '📌', // Lista y chinchetas similares
    '📑', '📜', // Documento y pergamino similares
    '📄', '📝', // Documento y notas similares
    '🔗', '🧷', // Cadena y alfiler similares
    '💳', '📠', // Tarjeta y teléfono similares
    '🖥️', '💻', // Computadora similares
    '💾', '📀', // Disco y CD similares
    '📼', '🖨️', // Cinta y impresora similares
    '🖱️', '⌨️', // Ratón y teclado similares
    '💻', '🖥️', // Computadora similares
    '🖱️', '🖥️', // Ratón y computadora similares
    '💻', '🖱️', // Computadora y ratón similares
    '⌨️', '🖥️', // Teclado y computadora similares
    '🖨️', '🖱️', // Impresora y ratón similares
    '📱', '📞', // Teléfono móvil y teléfono fijo similares
    '📞', '📱', // Teléfono fijo y móvil similares
    '📲', '📱', // Teléfono móvil y móvil similares
    '☎️', '📱', // Teléfono fijo y móvil similares
    '📞', '☎️', // Teléfono fijo similares
    '📡', '🛰️', // Antena y satélite similares
    '🛰️', '📡', // Satélite y antena similares
    '🖥️', '🖱️', // Computadora y ratón similares
    '📺', '📡', // Televisión y antena similares
    '📹', '📽️', // Cámara y proyector similares
    '📺', '📡', // Televisión y antena similares
    '📸', '📷', // Cámara similares
    '📸', '📷', // Cámara similares
    '📷', '📸', // Cámara similares
    '🎥', '📷', // Cámara de cine y foto similares
    '📷', '🎥', // Cámara de foto y cine similares
    '📽️', '🎬', // Proyector y película similares
    '🖱️', '⌨️', // Ratón y teclado similares
    '🖨️', '🖱️', // Impresora y ratón similares
    '🖥️', '⌨️', // Computadora y teclado similares
    '💻', '📱', // Computadora y teléfono móvil similares
    '💾', '📀', // Disco y CD similares
    '🔋', '🔌', // Batería y enchufe similares
    '🔋', '🔌', // Batería y enchufe similares
    '🔒', '🔓', // Candado y abierto similares
    '🔐', '🔏', // Candado y cerrado similares
    '🛠️', '⚙️', // Herramientas y engranaje similares
    '🧰', '🔧', // Caja de herramientas y destornillador similares
    '🧰', '🛠️', // Caja de herramientas y martillo similares
    '🔨', '🪛', // Martillo y destornillador similares
    '🪝', '🪠', // Ganchos y pinzas similares
    '🔧', '🔩', // Llave y tornillo similares
    '🗡️', '🔪', // Daga y cuchillo similares
    '⚔️', '🛡️', // Espada y escudo similares
    '🪖', '🧳', // Casco y maleta similares
    '🧵', '🧶', // Hilo y ovillo similares
    '🧸', '🎨', // Osito y pintura similares
    '🎬', '📽️', // Película y proyector similares
    '🎞️', '🎤', // Película y micrófono similares
    '🎧', '🎷', // Auriculares y saxofón similares
    '🎺', '🎸', // Trompeta y guitarra similares
    '🎻', '🥁', // Violín y tambor similares
    '🎹', '🎶', // Piano y notas musicales similares
    '🎵', '🎼', // Música similar
    '🎶', '🎤', // Música y micrófono similares
    '🎧', '🎬', // Auriculares y película similares
    '🧸', '🎉', // Osito y fiesta similares
    '🖼️', '🎨', // Cuadro y pintura similares
    '🎭', '🎬', // Teatro y película similares
    '📽️', '🎬', // Proyector y película similares
    '🎤', '🎧', // Micrófono y auriculares similares
    '📀', '💿', // Disco y CD similares
    '📀', '🎶', // Disco y música similares
    '🎮', '🕹️', // Videojuegos similares
    '🧩', '♟️', // Rompecabezas y ajedrez similares
    '🔮', '🧿', // Bola de cristal y amuleto similares
    '♠️', '❤️', // Cartas similares
    '♦️', '♣️', // Cartas similares
    '🃏', '🀄', // Cartas similares
    '♠️', '♦️', // Cartas similares
    '🎴', '🃏', // Cartas similares
    '🪁', '🎏', // Cometa y banderín similares
    '🎐', '🎍', // Banderín y bambú similares
    '🎏', '🎐', // Banderín y viento similares
    '🎀', '🎁', // Regalo y lazo similares
    '🎫', '🎟️', // Entrada y boleto similares
    '🎟️', '🏷️', // Boleto y etiqueta similares
    '🖋️', '✒️', // Pluma y bolígrafo similares
    '🖊️', '✏️', // Bolígrafo y lápiz similares
    '📝', '📏', // Escribir y medir similares
    '📐', '📎', // Regla y clip similares
    '📌', '📍', // Chinchetas similares
    '🖋️', '✒️', // Pluma y lápiz similares
    '📎', '📑', // Clip y documento similares
    '📚', '📖', // Libros similares
    '📝', '📅', // Escribir y calendario similares
    '📆', '📊', // Calendario y gráfico similares
    '📋', '📌', // Lista y chinchetas similares
    '📑', '📜', // Documento y pergamino similares
    '📄', '📝', // Documento y notas similares
    '🔗', '🧷', // Cadena y alfiler similares
    '💳', '📠', // Tarjeta y teléfono similares
    '🖥️', '💻', // Computadora similares
    '💾', '📀', // Disco y CD similares
    '📼', '🖨️', // Cinta y impresora similares
    '🖱️', '⌨️', // Ratón y teclado similares
    '💻', '🖥️', // Computadora similares
    '🖱️', '🖥️', // Ratón y computadora similares
    '💻', '🖱️', // Computadora y ratón similares
    '⌨️', '🖥️', // Teclado y computadora similares
    '🖨️', '🖱️', // Impresora y ratón similares
    '📱', '📞', // Teléfono móvil y teléfono fijo similares
    '📞', '📱', // Teléfono fijo y móvil similares
    '📲', '📱', // Teléfono móvil y móvil similares
    '☎️', '📱', // Teléfono fijo y móvil similares
    '📞', '☎️', // Teléfono fijo similares
    '📡', '🛰️', // Antena y satélite similares
    '🛰️', '📡', // Satélite y antena similares
    '🖥️', '🖱️', // Computadora y ratón similares
    '📺', '📡', // Televisión y antena similares
    '📹', '📽️', // Cámara y proyector similares
    '📺', '📡', // Televisión y antena similares
    '📸', '📷', // Cámara similares
    '📸', '📷', // Cámara similares
    '📷', '📸', // Cámara similares
    '🎥', '📷', // Cámara de cine y foto similares
    '📷', '🎥', // Cámara de foto y cine similares
    '📽️', '🎬', // Proyector y película similares
    '🖱️', '⌨️', // Ratón y teclado similares
    '🖨️', '🖱️', // Impresora y ratón similares
    '🖥️', '⌨️', // Computadora y teclado similares
    '💻', '📱', // Computadora y teléfono móvil similares
    '💾', '📀', // Disco y CD similares
    '🔋', '🔌', // Batería y enchufe similares
    '🔋', '🔌', // Batería y enchufe similares
    '🔒', '🔓', // Candado y abierto similares
    '🔐', '🔏', // Candado y cerrado similares
    '🛠️', '⚙️', // Herramientas y engranaje similares
    '🧰', '🔧', // Caja de herramientas y destornillador similares
    '🧰', '🛠️', // Caja de herramientas y martillo similares
    '🔨', '🪛', // Martillo y destornillador similares
    '🪝', '🪠', // Ganchos y pinzas similares
    '🔧', '🔩', // Llave y tornillo similares
    '🗡️', '🔪', // Daga y cuchillo similares
    '⚔️', '🛡️', // Espada y escudo similares
    '🪖', '🧳', // Casco y maleta similares
    '🧵', '🧶', // Hilo y ovillo similares
    '🧸', '🎨', // Osito y pintura similares
    '🎬', '📽️', // Película y proyector similares
    '🎞️', '🎤', // Película y micrófono similares
    '🎧', '🎷', // Auriculares y saxofón similares
    '🎺', '🎸', // Trompeta y guitarra similares
    '🎻', '🥁', // Violín y tambor similares
    '🎹', '🎶', // Piano y notas musicales similares
    '🎵', '🎼', // Música similar
    '🎶', '🎤', // Música y micrófono similares
    '🎧', '🎬', // Auriculares y película similares
    '🧸', '🎉', // Osito y fiesta similares
    '🖼️', '🎨', // Cuadro y pintura similares
    '🎭', '🎬', // Teatro y película similares
    '📽️', '🎬', // Proyector y película similares
    '🎤', '🎧', // Micrófono y auriculares similares
    '📀', '💿', // Disco y CD similares
    '📀', '🎶', // Disco y música similares
    '🎮', '🕹️', // Videojuegos similares
    '🧩', '♟️', // Rompecabezas y ajedrez similares
    '🔮', '🧿', // Bola de cristal y amuleto similares
    '♠️', '❤️', // Cartas similares
    '♦️', '♣️', // Cartas similares
    '🃏', '🀄', // Cartas similares
    '♠️', '♦️', // Cartas similares
    '🎴', '🃏', // Cartas similares
    '🪁', '🎏', // Cometa y banderín similares
    '🎐', '🎍', // Banderín y bambú similares
    '🎏', '🎐', // Banderín y viento similares
    '🎀', '🎁', // Regalo y lazo similares
    '🎫', '🎟️', // Entrada y boleto similares
    '🎟️', '🏷️', // Boleto y etiqueta similares
    '🖋️', '✒️', // Pluma y bolígrafo similares
    '🖊️', '✏️', // Bolígrafo y lápiz similares
    '📝', '📏', // Escribir y medir similares
    '📐', '📎', // Regla y clip similares
    '📌', '📍', // Chinchetas similares
    '🖋️', '✒️', // Pluma y lápiz similares
    '📎', '📑', // Clip y documento similares
    '📚', '📖', // Libros similares
    '📝', '📅', // Escribir y calendario similares
    '📆', '📊', // Calendario y gráfico similares
    '📋', '📌', // Lista y chinchetas similares
    '📑', '📜', // Documento y pergamino similares
    '📄', '📝', // Documento y notas similares
    '🔗', '🧷', // Cadena y alfiler similares
    '💳', '📠', // Tarjeta y teléfono similares
    '🖥️', '💻', // Computadora similares
    '💾', '📀', // Disco y CD similares
    '📼', '🖨️', // Cinta y impresora similares
    '🖱️', '⌨️', // Ratón y teclado similares
    '💻', '🖥️', // Computadora similares
    '🖱️', '🖥️', // Ratón y computadora similares
    '💻', '🖱️', // Computadora y ratón similares
    '⌨️', '🖥️', // Teclado y computadora similares
    '🖨️', '🖱️', // Impresora y ratón similares
    '📞', '📱', // Teléfono fijo y móvil similares
    '📲', '📱', // Teléfono móvil y móvil similares
    '☎️', '📱', // Teléfono fijo y móvil similares
    '📞', '☎️', // Teléfono fijo similares
    '📡', '🛰️', // Antena y satélite similares
    '🛰️', '📡', // Satélite y antena similares
    '🖥️', '🖱️', // Computadora y ratón similares
    '📺', '📡', // Televisión y antena similares
    '📹', '📽️', // Cámara y proyector similares
    '📺', '📡', // Televisión y antena similares
    '📸', '📷', // Cámara similares
    '📸', '📷', // Cámara similares
    '📷', '📸', // Cámara similares
    '🎥', '📷', // Cámara de cine y foto similares
    '🎬', '🎥', // Cámara de foto y cine similares
    '📽️', '🎬', // Proyector y película similares
    '🖱️', '⌨️', // Ratón y teclado similares
    '🖨️', '🖱️', // Impresora y ratón similares
    '🖥️', '⌨️', // Computadora y teclado similares
    '💻', '📱', // Computadora y teléfono móvil similares
    '💾', '📀', // Disco y CD similares
    '🔋', '🔌', // Batería y enchufe similares
    '🔒', '🔓', // Candado y abierto similares
    '🔐', '🔏', // Candado y cerrado similares
    '🛠️', '⚙️', // Herramientas y engranaje similares
    '🧰', '🔧', // Caja de herramientas y destornillador similares
    '⚔️', '🛠️', // Caja de herramientas y martillo similares
    '🔨', '🪛', // Martillo y destornillador similares
    '🪝', '🪠', // Ganchos y pinzas similares
    '🔧', '🔩', // Llave y tornillo similares
    '🗡️', '🔪', // Daga y cuchillo similares
    '🧳', '🛡️', // Espada y escudo similares
    '🪖', '🧳', // Casco y maleta similares
    '🧵', '🧶', // Hilo y ovillo similares
    '🧸', '🎨', // Osito y pintura similares
    '🎬', '📽️', // Película y proyector similares
    '🎞️', '🎤', // Película y micrófono similares
    '🎺', '🎷', // Auriculares y saxofón similares
    '🎉', '🎸', // Trompeta y guitarra similares
    '🎻', '🥁', // Violín y tambor similares
    '🎹', '🎶', // Piano y notas musicales similares
    '🎵', '🎼', // Música similar
    '🎶', '🎤', // Música y micrófono similares
    '🎧', '🎬', // Auriculares y película similares
    '🧸', '🎉', // Osito y fiesta similares
    '🖼️', '🎨', // Cuadro y pintura similares
    '🎭', '🎬', // Teatro y película similares
    '📽️', '🎬', // Proyector y película similares
    '🎤', '🎧', // Micrófono y auriculares similares
    '📀', '🧩', // Disco y CD similares
    '📀', '🎶', // Disco y música similares
    '🎮', '🕹️', // Videojuegos similares
    '📎', '🔌', // Rompecabezas y ajedrez similares
    '📎', '♟️', // Rompecabezas y ajedrez similares
    '🔮', '🧿', // Bola de cristal y amuleto similares
    '♠️', '❤️', // Cartas similares
    '♦️', '♣️', // Cartas similares
    '🃏', '🀄', // Cartas similares
    '♠️', '♦️', // Cartas similares
    '🎴', '🃏', // Cartas similares
    '🪁', '🎏', // Cometa y banderín similares
    '🎐', '🎍', // Banderín y bambú similares
    '🎏', '🎐', // Banderín y viento similares
    '🎀', '🎁', // Regalo y lazo similares
    '🎫', '🎟️', // Entrada y boleto similares
    '🎟️', '🏷️', // Boleto y etiqueta similares
    '🖋️', '✒️', // Pluma y bolígrafo similares
    '🖊️', '🖋️', // Bolígrafo y lápiz similares
    '📝', '📏', // Escribir y medir similares
    '📐', '📎', // Regla y clip similares
    '📌', '📍', // Chinchetas similares
    '🖋️', '✒️', // Pluma y lápiz similares
    '🃏', '📑', // Clip y documento similares
    '📚', '📊', // Libros similares
    '📝', '📖', // Escribir y calendario similares
    '📆', '📅', // Calendario y gráfico similares
    '📋', '📌', // Lista y chinchetas similares
    '📑', '📜', // Documento y pergamino similares
    '📄', '📝', // Documento y notas similares
    '🔗', '🧷', // Cadena y alfiler similares
    '💳', '📅', // Tarjeta y teléfono similares
    '🖥️', '💻', // Computadora similares
    '💾', '📀', // Disco y CD similares
    '📼', '🖨️', // Cinta y impresora similares
];


function setDifficulty(level) {
    switch (level) {
        case 'easy':
            emojisCount = 112;
            turnTime = 20;
            break;
        case 'medium':
            emojisCount = 168;
            turnTime = 15;
            break;
        case 'hard':
            emojisCount = 280;
            turnTime = 12;
            break;
    }
    timerElement.textContent = `Tiempo restante: ${turnTime}s`;
    instructions.textContent = `¡Encuentra el emoji diferente entre los ${emojisCount} emojis antes de que se acabe el tiempo!`;
}

function startTurn() {
    clearInterval(gameInterval);
    timerElement.textContent = `Tiempo restante: ${turnTime}s`;

    emojiContainer.innerHTML = '';
    const shuffledEmojis = new Array(emojisCount - 1).fill(randomEmoji()); // Todos los emojis son aleatorios
    const differentEmoji = randomDifferentEmoji(); // Se inserta uno diferente aleatorio
    shuffledEmojis.push(differentEmoji); 
    shuffledEmojis.sort(() => Math.random() - 0.5); // Aleatoriza los emojis

    shuffledEmojis.forEach(emoji => {
        const emojiElement = document.createElement('div');
        emojiElement.textContent = emoji;
        emojiElement.classList.add('emoji');
        emojiElement.onclick = () => checkChoice(emoji, differentEmoji); // Pasa el emoji distinto para la comparación
        emojiContainer.appendChild(emojiElement);
    });

    gameInterval = setInterval(() => {
        turnTime--;
        timerElement.textContent = `Tiempo restante: ${turnTime}s`;
        if (turnTime <= 0) {
            clearInterval(gameInterval);
            alert(`${currentPlayer} se quedó sin tiempo!`);
            switchPlayer();
        }
    }, 1000);
}

function randomEmoji() {
    return emojis[Math.floor(Math.random() * emojis.length)];
}

function randomDifferentEmoji() {
    let differentEmoji;
    do {
        differentEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    } while (differentEmoji === '❤️'); // Aquí se asegura que el emoji distinto no sea el mismo cada vez
    return differentEmoji;
}

function checkChoice(selectedEmoji, differentEmoji) {
    if (selectedEmoji === differentEmoji) {
        scores[currentPlayer]++; // Incrementa el puntaje del jugador actual
        alert(`${currentPlayer} ¡Encontraste el emoji diferente!`);
        updateScore();
        startTurn(); // Inicia un nuevo turno sin cambiar de jugador
    } else {
        alert(`${currentPlayer} ¡No es el emoji diferente!`);
    }
}

function updateScore() {
    scoreElement.textContent = `Joseph: ${scores['Joseph']} | Jenifer: ${scores['Jenifer']}`;
}

function switchPlayer() {
    currentPlayer = currentPlayer === 'Joseph' ? 'Jenifer' : 'Joseph';
    turnTime = 20; // Reinicia el tiempo al valor inicial (20 segundos)
    startTurn(); // Inicia el turno del siguiente jugador
}