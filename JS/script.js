function mostrarAnuncio() {
  var anuncio = document.createElement('div');
  anuncio.innerHTML = `
  <div id="anuncio">
  <h5>¡Por formularios perzonalizados! Contáctame por éste medio:<br>
  <a href="https://api.whatsapp.com/send?phone=5492665290020&text=Hola,%20necesito%20un%20formulario%20perzonalizado%20,%20mi%20nombre%20es...%20" target="_blank">
   <img src="img/whatsapp.png" alt="" width="14px"> 2665-290020</a>
  </a>
  </h5>
  </div>
  `;
  anuncio.style.background = `rgb(193, 197, 215)`;
  anuncio.style.color = '#333';
  anuncio.style.padding = '3px';
  anuncio.style.textAlign = 'center';

  var contador = document.createElement('span');
  contador.className = 'contador';
  anuncio.appendChild(contador);

  document.body.insertBefore(anuncio, document.body.firstChild);

  var tiempoRestante = 60; 
  contador.textContent = tiempoRestante + ' segundos restantes';

  var intervalo = setInterval(function() {
    tiempoRestante--;
    contador.textContent = tiempoRestante + ' segundos restantes del anuncio';

    if (tiempoRestante <= 0) {
      clearInterval(intervalo);
      anuncio.style.display = 'none';
    }
  }, 1000);
}

window.addEventListener('load', mostrarAnuncio);

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
   <center>
    <div class="container">
        <div class="colaboracion">
            <h1>¡Muchas Gracias por usar éste formulario!</h1>
            <h3>No olvides dar una colaboración, el desarrollador te lo agradecerá<br>para poder seguir agregando nuevas funciones a éste formulario!</h3>
            <img src="img/metodo-de-pago.png" alt="" width="50px"><br>
            <button id="colab">Colaborar</button>
            <h6>El monto de la colaboración se puede efectuar<br>mediante MercadoPago</h6>
            <img src="img/icons8-mercado-pago-48.png" alt="">
        </div>
    </div>
</center>
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
};


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

// función para cambiar de color

const elegirColor = document.querySelector('#elegir-color');
const elementos = document.querySelectorAll('#elemento');

elegirColor.addEventListener('change', function() {
  const color = elegirColor.value;
  localStorage.setItem('selectedColor', color);
  actualizarColor(color);
});

function actualizarColor(color) {
  elementos.forEach(function (elementos) {
    elementos.style.backgroundColor = color;
  })
};

window.addEventListener('load', function () {
  const selectedColor = localStorage.getItem('selectedColor');
  if (selectedColor) {
    actualizarColor(selectedColor);
    elegirColor.value = selectedColor;
  }
});

// Envio PDF
function generarPDF() {
  // Crear instancia de jsPDF
  const doc = new jsPDF();

  // Obtener el contenido del formulario
  const formulario = document.getElementById('myForm');
  const contenidoFormulario = formulario.innerHTML;

  // Generar el PDF con el contenido del formulario
  doc.text(contenidoFormulario, 10, 10);

  const pdfData = doc.output();

  // Crear un objeto Blob desde los datos del PDF
  const pdfBlob = new Blob([pdfData], { type: 'application/pdf' });

  const pdfUrl = URL.createObjectURL(pdfBlob);

  const mensajePdf = encodeURIComponent('Adjunto el formulario como PDF.');
  const enlaceWhatsApp = `https://wa.me/?text=&text=${mensajePdf}&attachment=${pdfUrl}`;

  window.open(enlaceWhatsApp);
}

document.getElementById('btnEnviarPDF').addEventListener('click', generarPDF);







