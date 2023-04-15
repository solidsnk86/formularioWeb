// función menú carta
function compartirFormulario() {
  card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
  <!-- Compartir -->
  <div class="container-card">
      
    <div class="compartirMenu">
    <button id="cerrarCarta" onclick="cerrarCarta()"><i class="fa-solid fa-xmark"></i></button>
      <div class="redesMenu">
      <br>
      <p>Muchas gracias por compartir!<br></center> ¡Si te gustó el formulario puedes colaborar <br>con el desarrollador aquí!<br>👇</p>
      <br>
      <button id="donar"><a href=""></a>Donar</button>
      <hr>
      <p>Compartir en redes sociales:</p>
      <button onclick="compartirFacebook()"><i id="face" class="fa-brands fa-facebook-f"></i></span></button>
      <button onclick="compartirTwitter()"><i id="twitt" class="fa-brands fa-twitter"></i></span></button>
      <button onclick="compartirWhatsapp()"><i id="what" class="fa-brands fa-whatsapp"></i></span></button>
      <button onclick="compartirLinkedIn()"><i id="linked" class="fa-brands fa-linkedin"></i></span></button>
  </div>
    </div>
  </div>
  `;
  document.body.appendChild(card);
};

function cerrarCarta() {
  document.body.removeChild(card);
}
// función imprimir
function imprimirFormulario() {
  var formularioHTML = window.open('/index.html');
  formularioHTML.onload = function() {
    formularioHTML.window.print();
  } 
};
// función para descargar


// función para expandir área de texto
var textAreas = document.querySelectorAll('#textArea');
textAreas.forEach(function(textArea) {
  textArea.addEventListener("input", autoResize);
});

function autoResize() {
  this.style.width = "auto";
  this.style.width = this.scrollWidth + "px";
};

//
// Seleccionamos el formulario
const form = document.querySelectorAll('input');

// Agregamos un evento 'submit' al formulario
form.addEventListener('submit', (event) => {
  // Prevenimos que el formulario se envíe
  event.preventDefault();

  // Guardamos los valores del formulario en localStorage
  localStorage.setItem('formValues', JSON.stringify(Object.fromEntries(new FormData(form))));
});

// Verificamos si hay valores guardados en localStorage
const formValues = localStorage.getItem('formValues');

if (formValues) {
  // Si hay valores, los cargamos en el formulario
  const parsedFormValues = JSON.parse(formValues);

  Object.entries(parsedFormValues).forEach(([input, value]) => {
    form.elements[input].value = value;
  });
}

// Función compartir en redes sociales
function compartirFacebook() {
  window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href));
};

function compartirWhatsapp() {
  var mensaje = "Míra mi CV online!: " + window.location.href;
  window.open('https://wa.me/?text=' + encodeURIComponent(mensaje));
};

function compartirTwitter() {
  window.open('https://twitter.com/share?url=' + encodeURIComponent(window.location.href));
};

function compartirLinkedIn() {
  var url = encodeURIComponent(window.location.href);
  var title = encodeURIComponent(document.title);
  var shareUrl = 'https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${title}`';
  window.open(shareUrl, '_blank');
};

function printForm(event) {
  event.preventDefault(); // prevenir envío y borrado de formulario
  window.print(); // imprimir formulario en su estado actual
}







