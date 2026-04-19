function cargarSeccion(id, archivo) {
    fetch(archivo)
        .then(response => response.text())
        .then(html => {
            document.getElementById(id).innerHTML = html;
        })
        .catch(error => console.warn("Error cargando la sección:", error));
}

// Ejecutamos la función para cada sección
cargarSeccion('Sushi', '../Secciones/Sushi.html');
cargarSeccion('BarraCaliente', '../Secciones/BarraCaliente.html');
cargarSeccion('Postres', '../Secciones/Postres.html');

