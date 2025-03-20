const preguntas = document.querySelectorAll('.preguntas .contenedor-pregunta');

preguntas.forEach((pregunta) => {
    const respuesta = pregunta.querySelector('.respuesta');

    pregunta.addEventListener('click', () => {
        // Toggle de la clase 'activa'
        const esActiva = pregunta.classList.toggle('activa');

        // Ajustar la altura máxima en función del estado de 'activa'
        if (esActiva) {
            respuesta.style.maxHeight = respuesta.scrollHeight + 'px';
        } else {
            respuesta.style.maxHeight = null;
        }

        // [Opcional] Cierra las otras preguntas
        preguntas.forEach((otraPregunta) => {
            if (pregunta !== otraPregunta) {
                otraPregunta.classList.remove('activa');
                otraPregunta.querySelector('.respuesta').style.maxHeight = null;
            }
        });
    });

    // [Opcional] Inicializar la altura máxima si la pregunta está activa al cargar la página
    if (pregunta.classList.contains('activa')) {
        respuesta.style.maxHeight = respuesta.scrollHeight + 'px';
    }
});
