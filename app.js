// !! Importante: la creación del botón aleatorio corresponde al apartado de la rúbrica "El botón reacciona al click". 
// En este caso, la reacción es desplegar la venta de preguntas aleatorias.

// Seleccionar los botones de las flashcards y el botón aleatorio
const flashcard2000 = document.getElementById('flashcard-2000');
const flashcard2010 = document.getElementById('flashcard-2010');
const flashcard2020 = document.getElementById('flashcard-2020');
const botonAleatorio = document.getElementById('comenzar-aleatorio'); 

// Función para manejar el inicio del trivial por década
function iniciarTrivial(flashcard) {
    if (flashcard === 'flashcard-2000') {
        alert('La funcionalidad para la década de los 2000 aún no está implementada.');

    } else if (flashcard === 'flashcard-2010') {
        window.location.href = 'preguntas-2010.html';
    } else if (flashcard === 'flashcard-2020') {
        alert('La funcionalidad para la década de los 2020 aún no está implementada.');
       
    }
}

// Función para manejar el inicio aleatorio en el caso que el usuario así lo desee
function iniciarAleatorio() {
    window.location.href = 'preguntas-aleatorias.html';
}

// Asignar eventos a las flashcards solo si existen
if (flashcard2000) {
    flashcard2000.addEventListener('click', () => iniciarTrivial('flashcard-2000'));
}
if (flashcard2010) {
    flashcard2010.addEventListener('click', () => iniciarTrivial('flashcard-2010'));
}
if (flashcard2020) {
    flashcard2020.addEventListener('click', () => iniciarTrivial('flashcard-2020'));
}

// Asignar evento al botón aleatorio solo si existe
if (botonAleatorio) {
    botonAleatorio.addEventListener('click', () => {
        console.log('Botón "Comenzar aleatoriamente" presionado.'); // Mensaje de depuración
        window.location.href = 'preguntas-aleatorias.html';
    });
}

// Preguntas de todas las décadas. Se han añadido 4 preguntas por década para un total de 12 preguntas.
const preguntasAleatorias = [

    {
        pregunta: '¿Qué película ganó el Óscar a Mejor Película en 2003?',
        opciones: ['Gladiator', 'Pozos de Ambición', 'El señor de los Anillos: el Retorno del Rey'],
        respuesta: 'El señor de los Anillos: el Retorno del Rey',
        infoAdicional: '"El señor de los Anillos: el Retorno del Rey" ganó 11 Óscars, igualando el récord de "Ben-Hur" y "Titanic". Dirigida por Peter Jackson.',
    },
    {
        pregunta: '¿Quién ganó el Óscar a Mejor Actor en 2007?',
        opciones: ['Russell Crowe por Gladiator', 'Daniel Day-Lewis por Pozos de Ambición', 'Johnny Depp por Piratas del Caribe'],
        respuesta: 'Daniel Day-Lewis por Pozos de Ambición',
        infoAdicional: 'Daniel Day-Lewis ganó por su interpretación de Eli Sunday en "Pozos de Ambición" (There Will Be Blood), dirigida por Paul Thomas Anderson.'
    },
    {
        pregunta: '¿Quién ganó el Óscar a Mejor Actriz en 2006?',
        opciones: ['Natalie Portman por Closer', 'Reese Witherspoon por Walk the Line', 'Charlize Theron por North Country'],
        respuesta: 'Reese Witherspoon por Walk the Line',
        infoAdicional: 'Reese Witherspoon ganó por interpretar a June Carter Cash en "Walk the Line", donde actuó junto a Joaquin Phoenix.'
    },
    {
        pregunta: '¿Qué película ganó el Óscar a Mejor Película en 2002?',
        opciones: ['Chocolat', 'Gladiator', 'Una mente maravillosa'],
        respuesta: 'Una mente maravillosa',
        infoAdicional: '"Una mente maravillosa" cuenta la historia del matemático John Nash. Russell Crowe fue nominado a Mejor Actor por esta interpretación.'
    },

    {
        pregunta: '¿Qué película ganó el Óscar a Mejor Película en 2019?',
        opciones: ['The Artist', 'Green Book', 'La forma del agua'],
        respuesta: 'Green Book',
        infoAdicional: '"Green Book" cuenta la amistad entre el pianista Don Shirley y su chofer Tony Lip durante una gira por el sur de Estados Unidos en los años 60.'
    },
    {
        pregunta: '¿Quién ganó el Óscar a Mejor Actor de Reparto en 2013?', // REVISAR
        opciones: ['Matthew McConaughey por Magic Mike', 'Leonardo DiCaprio por Django Desencadenado', 'Christoph Waltz por Django Desencadenado'],
        respuesta: 'Christoph Waltz por Django Desencadenado',
        infoAdicional: 'Christoph Waltz ganó su segundo Óscar por interpretar al Dr. King Schultz en "Django Desencadenado" de Quentin Tarantino.'
    },
    {
        pregunta: '¿Quién ganó el Óscar a Mejor Actriz en 2012?',
        opciones: ['Emma Stone por La La Land', 'Natalie Portman por Jackie', 'Meryl Streep por La Dama de Hierro'],
        respuesta: 'Meryl Streep por La Dama de Hierro',
        infoAdicional: 'Meryl Streep ganó su tercer Óscar por interpretar a Margaret Thatcher en "La Dama de Hierro" (The Iron Lady).'
    },
    {
        pregunta: '¿Quién ganó el Óscar a Mejor Actor en 2020?',
        opciones: ['Anthony Hopkins por El padre', 'Gary Oldman por Mank', 'Joaquin Phoenix por Joker'],
        respuesta: 'Joaquin Phoenix por Joker',
        infoAdicional: 'Joaquin Phoenix perdió 23 kilos para interpretar al Joker. Su discurso de aceptación fue muy emotivo hablando sobre los derechos de los animales.'
    },
    // Década de los 2020
    {
        pregunta: '¿Qué película ganó el Óscar a Mejor Película en 2019?',
        opciones: ['Parasite', '1917', 'Joker'],
        respuesta: 'Parasite',
        infoAdicional: '"Parasite" fue la primera película en idioma no inglés en ganar Mejor Película. Dirigida por Bong Joon-ho, ganó 4 Óscars en total.',
    },
    {
        pregunta: '¿Quién ganó el Óscar a Mejor Actor en 2025?',
        opciones: ['Adrien Brody por The Brutalist', 'Brendan Fraser por The Whale', 'Cillian Murphy por Oppenheimer'],
        respuesta: 'Adrien Brody por The Brutalist',
        infoAdicional: 'Adrien Brody ganó por "The Brutalist". Curiosamente, ya había ganado un Óscar en 2003 por "El pianista" a los 29 años, siendo el ganador más joven de la categoría.'
    },
    {
        pregunta: '¿Quién ganó el Óscar a Mejor Actriz en 2024?',
        opciones: ['Emma Stone por Poor Things', 'Renée Zellweger por Judy', 'Nicole Kidman por Las Horas'],
        respuesta: 'Emma Stone por Poor Things',
        infoAdicional: 'Emma Stone ganó su segundo Óscar por "Poor Things". Su primera victoria fue en 2017 por "La La Land". Es conocida por su versatilidad actoral.'
    },
    {
        pregunta: '¿Qué película ganó el Óscar a Mejor Película en 2024?',
        opciones: ['Érase una vez en Hollywood', '1917', 'Oppenheimer'],
        respuesta: 'Oppenheimer',
        infoAdicional: '"Oppenheimer" es una película biográfica sobre J. Robert Oppenheimer, el físico teórico que lideró el Proyecto Manhattan.'
    }
];

// Función para mostrar una pregunta aleatoria
function mostrarPreguntaAleatoria() {
    const contenedorPregunta = document.getElementById('pregunta');
    const contenedorOpciones = document.getElementById('opciones');

    // Seleccionar una pregunta aleatoria con el método Math.random
    const preguntaAleatoria = preguntasAleatorias[Math.floor(Math.random() * preguntasAleatorias.length)];

    // Mostrar la pregunta
    contenedorPregunta.textContent = preguntaAleatoria.pregunta;

    // Mostrar las opciones
    contenedorOpciones.innerHTML = '';
    preguntaAleatoria.opciones.forEach(opcion => {
        const boton = document.createElement('button');
        boton.textContent = opcion;
        boton.classList.add('opcion');
        boton.addEventListener('click', () => {
            const mensajeRespuesta = document.getElementById('mensaje-respuesta');
            
            // Limpiar cualquier imagen anterior
            const imagenAnterior = document.getElementById('imagen-info');
            if (imagenAnterior) {
                imagenAnterior.remove();
            }
            
            // Deshabilitar todas las opciones después de responder
            const todasLasOpciones = document.querySelectorAll('.opcion');
            todasLasOpciones.forEach(btn => {
                btn.disabled = true;
                btn.style.opacity = '0.6';
                btn.style.cursor = 'not-allowed';
            });
            
            if (opcion === preguntaAleatoria.respuesta) {
                // Mensaje más informativo para respuestas correctas
                let mensajeCompleto = '¡Correcto! ';
                if (preguntaAleatoria.infoAdicional) {
                    mensajeCompleto += preguntaAleatoria.infoAdicional;
                }
                mensajeRespuesta.textContent = mensajeCompleto;
                mensajeRespuesta.className = 'mensaje-respuesta mensaje-correcto';
            } else {
                mensajeRespuesta.textContent = 'Incorrecto. La respuesta correcta era: ' + preguntaAleatoria.respuesta;
                mensajeRespuesta.className = 'mensaje-respuesta mensaje-incorrecto';
            }
            
            mensajeRespuesta.style.display = 'block';
            
            // Crear botón "Siguiente pregunta"
            const botonSiguiente = document.createElement('button');
            botonSiguiente.textContent = 'Siguiente pregunta';
            botonSiguiente.id = 'boton-siguiente';
            botonSiguiente.style.marginTop = '1rem';
            botonSiguiente.addEventListener('click', () => {
                mensajeRespuesta.style.display = 'none';
                botonSiguiente.remove();
                mostrarPreguntaAleatoria();
            });
            
            // Agregar el botón después del mensaje de respuesta
            mensajeRespuesta.parentNode.insertBefore(botonSiguiente, mensajeRespuesta.nextSibling);
        });
        contenedorOpciones.appendChild(boton);
    });
}

// Verificar si estamos en la página de preguntas aleatorias
if (window.location.pathname.includes('preguntas-aleatorias.html')) {
    document.addEventListener('DOMContentLoaded', () => {
        console.log('Cargando página de preguntas aleatorias...');
        const contenedorPregunta = document.getElementById('pregunta');
        const contenedorOpciones = document.getElementById('opciones');

        if (contenedorPregunta && contenedorOpciones) {
            console.log('Elementos encontrados. Ejecutando mostrarPreguntaAleatoria...');
            mostrarPreguntaAleatoria();
        } else {
            console.error('No se encontraron los elementos requeridos en el DOM.');
        }
    });
}

console.log('El archivo app.js se ha cargado correctamente.');
