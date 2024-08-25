function loadContent(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => console.error('Error al cargar el contenido:', error));
}

// Cargar la página de inicio por defecto al cargar el sitio
document.addEventListener("DOMContentLoaded", function() {
    loadContent('inicio.html');
});