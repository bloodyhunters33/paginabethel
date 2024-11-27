// Función para cargar imágenes en la galería por categoría
function cargarCategoria(categoria) {
    const contenedor = document.getElementById('imagenes-galeria');
    contenedor.innerHTML = ''; // Limpiar el contenido anterior

    const imagenes = {
        'primeros-pasos': ['foto1.jpg', 'foto2.jpg'],
        'cimientos': ['foto3.jpg', 'foto4.jpg'],
        'primeros-muros': ['foto5.jpg', 'foto6.jpg'],
        'construccion': ['foto7.jpg', 'foto8.jpg'],
        'piso': ['foto9.jpg', 'foto10.jpg'],
        'altar': ['foto11.jpg', 'foto12.jpg'],
        'cielo-razo': ['foto13.jpg', 'foto14.jpg']
    };

    // Mostrar las imágenes de la categoría seleccionada
    imagenes[categoria].forEach(img => {
        const imgElement = document.createElement('img');
        imgElement.src = `images/${img}`;
        contenedor.appendChild(imgElement);
    });
}
