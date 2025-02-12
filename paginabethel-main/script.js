// Función para el menú hamburguesa
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Cerrar el menú al hacer clic en un enlace
document.querySelectorAll('.nav-menu li a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});
// Función para cargar imágenes en la galería por categoría
function cargarCategoria(categoria) {
  const contenedor = document.getElementById('imagenes-galeria');
  contenedor.innerHTML = '<p>Cargando imágenes...</p>'; // Mensaje de carga

  const imagenes = {
      'primeros-pasos': ['media/muestra.png', 'media/muestra.png','media/muestra.png','media/muestra.png','media/muestra.png','media/muestra.png'],
      'cimientos': ['media/muestra.png','media/muestra.png','media/muestra.png','media/muestra.png','media/muestra.png','media/muestra.png'],
      'primeros-muros': ['media/muestra.png','media/muestra.png','media/muestra.png','media/muestra.png','media/muestra.png','media/muestra.png'],
      'construccion': ['media/muestra.png','media/muestra.png','media/muestra.png','media/muestra.png','media/muestra.png','media/muestra.png'],
      'piso': ['media/muestra.png','media/muestra.png','media/muestra.png','media/muestra.png','media/muestra.png','media/muestra.png'],
      'altar': ['media/muestra.png','media/muestra.png','media/muestra.png','media/muestra.png','media/muestra.png','media/muestra.png'],
      'cielo-razo': ['media/muestra.png','media/muestra.png','media/muestra.png','media/muestra.png','media/muestra.png','media/muestra.png']
  };

  // Mostrar las imágenes de la categoría seleccionada
  setTimeout(() => {
      contenedor.innerHTML = ''; // Limpiar el mensaje de carga
      imagenes[categoria].forEach(img => {
          const imgElement = document.createElement('img');
          imgElement.src = img;
          imgElement.alt = `Imagen de ${categoria}`;
          contenedor.appendChild(imgElement);
      });
  }, 1000); // Simular un retraso de carga
}

// Evento para cambiar el texto del botón "Leer más"
document.querySelectorAll(".leer-mas").forEach(button => {
  button.addEventListener("click", function() {
      let fullText = this.parentElement.nextElementSibling;
      fullText.classList.toggle("active");
      this.textContent = fullText.classList.contains("active") ? "Leer menos" : "Leer más";
  });
});

// Evento para activar el botón de la galería
document.querySelectorAll('.galeria-categorias button').forEach(button => {
  button.addEventListener('click', function() {
      document.querySelectorAll('.galeria-categorias button').forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
  });
});

// Cargar la primera categoría al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  cargarCategoria('primeros-pasos');
});

// Validación del formulario de contacto
document.querySelector('form').addEventListener('submit', function(event) {
  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const mensaje = document.getElementById('mensaje').value;

  if (!nombre || !email || !mensaje) {
      event.preventDefault();
      alert('Por favor, complete todos los campos.');
  }
});