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
      <p>Muchas gracias por compartir!<br></center> ¡Si te gustó el formulario puedes colaborar!</p>
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
    formularioHTML.print();
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

// función suma - porcentajes - descuentos
const quantityInput = document.getElementById('cantidad');
const priceInput = document.getElementById('precio');
const discountInput = document.getElementById('descuento');
const taxInput = document.getElementById('impuesto');
const totalInput = document.getElementById('total');

function updateTotal() {
  const quantity = quantityInput.value;
  const price = priceInput.value;
  const discount = discountInput.value;
  const tax = taxInput.value;

  const subtotal = quantity * price;
  const discountAmount = subtotal * (discount / 100);
  const taxAmount = (subtotal - discountAmount) * (tax / 100);
  const total = subtotal - discountAmount + taxAmount;

  totalInput.value = total.toFixed(2);
}

quantityInput.addEventListener('input', updateTotal);










