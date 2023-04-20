// Función sumar productos
const cantidadInputs = document.querySelectorAll('.cantidad');
const precioInputs = document.querySelectorAll('.precio');
const totalInputs = document.querySelectorAll('.total');
const subtotalInput = document.querySelector('.subtotal');
const impuestosInput = document.querySelector('.impuestos');
const totalFinalInput = document.querySelector('.total_final');

function calcularTotales() {
  let subtotal = 0;
  let impuestos = parseFloat(impuestosInput.value) || 0;

  for (let i = 0; i < cantidadInputs.length; i++) {
    let cantidad = parseInt(cantidadInputs[i].value) || 0;
    let precio = parseFloat(precioInputs[i].value) || 0;
    let total = cantidad * precio;

    totalInputs[i].value = total.toFixed(2);

    subtotal += total;
  }

  subtotalInput.value = subtotal.toFixed(2);

  let impuestosCalculados = (subtotal * impuestos) / 100;
  impuestosInput.value = impuestosCalculados.toFixed(2);

  let totalFinal = subtotal + impuestosCalculados;
  totalFinalInput.value = totalFinal.toFixed(2);
}

for (let i = 0; i < cantidadInputs.length; i++) {
  cantidadInputs[i].addEventListener('change', calcularTotales);
  precioInputs[i].addEventListener('change', calcularTotales);
}



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
      <button id="donar"><a url="https://mpago.la/1KYtLYH"></a>Donar</button>
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

const botonImprimir = document.getElementById('imprimir');
botonImprimir.addEventListener('click', function(event) {
  event.preventDefault();
  window.print();
})


// función para expandir área de texto
var textAreas = document.querySelectorAll('#textArea');
textAreas.forEach(function(textArea) {
  textArea.addEventListener("input", autoResize);
});

function autoResize() {
  this.style.width = "auto";
  this.style.width = this.scrollWidth + "px";
};

// guardar formulario
const form = document.querySelector('#myForm');
const inputField = document.querySelector('#inputField');
const selectField = document.querySelector('#selectField');


window.onload = function() {
  const savedInput = localStorage.getItem('myFormInput');
  if (savedInput) {
    inputField.value = savedInput;
  }

  const savedSelect = localStorage.getItem('myFormSelect');
  if (savedSelect) {
    selectField.value = savedSelect;
  }
}

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const input = inputField.value;
  localStorage.setItem('myFormInput', input);

  const select = selectField.value;
  localStorage.setItem('myFormSelect', select);

  

});

// Función compartir en redes sociales
function compartirFacebook() {
  window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href));
};

function compartirWhatsapp() {
  var mensaje = "Echa un vistazo a éste formulario web para que uses como factura, remito, etc.!: " + window.location.href;
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








