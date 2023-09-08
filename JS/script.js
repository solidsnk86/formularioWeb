function mostrarAnuncio() {
  var anuncio = document.createElement('div');
  anuncio.innerHTML = `
  <div id="anuncio">
  <h5>¡Por formularios perzonalizados! Contáctame por éste medio:<br>
  <a href="https://api.whatsapp.com/send?phone=5492665290020&text=Hola,%20necesito%20un%20formulario%20perzonalizado%20,%20mi%20nombre%20es...%20" target="_blank">
   <img src="img/whatsapp.png" alt="" width="15px" style="margin-bottom: -2px;"> 2665-290020</a>
  </h5>
  </div>
  `;
  
  anuncio.style.background = `#eaeaea`;
  anuncio.style.color = '#333';
  anuncio.style.padding = '3px';
  anuncio.style.textAlign = 'center';
  anuncio.style.position = 'fixed';
  anuncio.style.bottom = '0';
  anuncio.style.left = '0';
  anuncio.style.width = '99%';
  anuncio.style.borderTopRightRadius = '10px';
  anuncio.style.borderTopLeftRadius = '10px';
  anuncio.style.boxShadow = '1px 2px 4px #555';

  var contador = document.createElement('span');
  contador.className = 'contador';
  anuncio.appendChild(contador);

  document.body.insertBefore(anuncio, document.body.firstChild);

  var tiempoRestante = 9; 
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
  impuestosInput.value = impuestosCalculados.toFixed(1);

  let totalFinal = subtotal + impuestosCalculados;
  totalFinalInput.value = totalFinal.toFixed(1);
}

for (let i = 0; i < cantidadInputs.length; i++) {
  cantidadInputs[i].addEventListener('change', calcularTotales);
  precioInputs[i].addEventListener('change', calcularTotales);
}



// función menú carta
function compartirFormulario() {
  card = document.createElement('div');
  card.classList.add('card-form-container');
  card.innerHTML = `
  <!-- Compartir -->
  <div class="card-form-container">
      
    <article class="compartirMenu">
    <i id="cerrarCarta" class="bx bi-x-circle" onclick="cerrarCarta()" ></i>
      <div class="redesMenu">
      <br>
   <center>
    <div class="container">
        <div class="colaboracion">
            <h1>¡Muchas Gracias por usar éste formulario!</h1>
            <h3>No olvides dar una colaboración, el desarrollador te lo agradecerá<br>para poder seguir agregando nuevas funciones a éste formulario!</h3>
            <img src="img/metodo-de-pago.png" alt="" width="50px"><br>
            <button id="colab" onclick="colaboración()">Colaborar</button>
            <h6>El monto de la colaboración se puede efectuar<br>mediante MercadoPago</h6>
            <img src="img/unnamed-removebg-preview.png" width="50px" alt="Logo Mercado-Pago">
        </div>
    </div>
</center>
      <hr>
      <p>Compartir en redes sociales:</p>
      <button onclick="compartirFacebook()"><i id="face" class="bx bi-facebook"></i></span></button>
      <button onclick="compartirTwitter()"><i id="twitt" class="bx bi-twitter"></i></span></button>
      <button onclick="compartirWhatsapp()"><i id="what" class="bx bi-whatsapp"></i></span></button>
      <button onclick="compartirLinkedIn()"><i id="linked" class="bx bi-linkedin"></i></span></button>
  </div>
    </article>
  </div>
  `;
  document.body.appendChild(card);
};

function colaboración() {
  const botonColab = document.getElementById('colab');
  window.open('https://link.mercadopago.com.ar/neotecs');
}

function cerrarCarta() {
  document.body.removeChild(card);
};


// función imprimir
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

// Guardar los inputs y valores en LocalStorage
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
  var shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${title}`;
  window.open(shareUrl, '_blank');
};

// Obtener el elemento select de forma de pago
  const formaPagoSelect = document.getElementById("forma-pago");

// Escuchar el evento de cambio en el select
  formaPagoSelect.addEventListener("change", function() {
    const formaPagoValue = formaPagoSelect.value;
    const containerForma = document.querySelector(".container-forma");

    // Limpiar el contenido existente en el contenedor
    containerForma.innerHTML = "";

    // Crear elementos según el valor seleccionado
    if (formaPagoValue === "opcion1") {
      const div = document.createElement("div");
      const heading = document.createElement("h4");
      const input = document.createElement("input");
      const imgBanco = document.createElement('img');
      input.setAttribute("type", "text");
      input.setAttribute("placeholder", "Ingrese su CBU");
      heading.textContent = "Número de cuenta Bancaria:"
      div.appendChild(heading);
      div.appendChild(input);
      div.appendChild(imgBanco);
      containerForma.appendChild(div);
      imgBanco.src = 'img/banco.png';
      imgBanco.style.width = '35px';
      imgBanco.style.marginTop = '6px';
      div.style.display = 'grid';
    } else if (formaPagoValue === "opcion2") {
      const div = document.createElement("div");
      const paragraph = document.createElement("h4");
      const input = document.createElement("input");
      const imgMercado = document.createElement("img");
      input.setAttribute("type", "text");
      input.setAttribute("placeholder", "Ingrese su CVU o alias de Mercado Pago");
      paragraph.textContent = "Número de CVU/alias:";
      div.appendChild(paragraph);
      div.appendChild(input);
      containerForma.appendChild(div);
      div.appendChild(imgMercado);
      imgMercado.src = 'img/unnamed-removebg-preview.png';
      imgMercado.style.width = '40px';
      div.style.display = 'grid';
    } else if (formaPagoValue === "opcion3") {
        const div3 = document.createElement("div");
      const etiqueta = document.createElement("label");
       const etiqueta2 = document.createElement("label");
      const input = document.createElement("input");
      const input2 = document.createElement("input");
      const pagoEfectivo = document.createElement('img');
      input.setAttribute("type", "radio", "value", "dolar");
      input2.setAttribute("type", "radio", "value", "pesos");
      pagoEfectivo.src = 'img/pagar.png';
      etiqueta.textContent = "Dólar";
      etiqueta2.textContent = "Pesos"
      div3.appendChild(etiqueta);
      div3.appendChild(input);
      div3.appendChild(etiqueta2);
      div3.appendChild(input2);
      div3.appendChild(pagoEfectivo);
      containerForma.appendChild(div3);
      div3.style.display = 'flex';
      div3.style.margin = '20px';
      div3.style.width = '110px';
      etiqueta2.style.marginLeft = '30px';
      pagoEfectivo.style.width = '40px';
      pagoEfectivo.style.marginLeft = '20px';
    }
    
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(radioButton => {
      radioButton.addEventListener('click', () => {
    const otherRadioButtons = document.querySelectorAll('input[type="radio"]');
    otherRadioButtons.forEach(otherRadioButton => {
      otherRadioButton.checked = false;
    });
    radioButton.checked = true;
  });
});
});


/**
 * Dark Mode
 */
document.querySelector('.toggle-button').onclick = function() {
  const rootbackground = document.body;
  const elementos = document.querySelectorAll('header, th, article')
  const DarkIcon = document.getElementById('moon-icon')
  const LightIcon = document.getElementById('sun-icon')
  const inputs = document.querySelectorAll('input')
  

  if (rootbackground.classList.contains('dark-mode')) {
    rootbackground.classList.remove('dark-mode')
    LightIcon.style.display = 'none'
    DarkIcon.style.display = 'inline-block'
    inputs.forEach((input) => {
      input.classList.remove('dark-mode')
    })
    elementos.forEach((elemento) => {
      elemento.classList.remove('dark-mode')
    })
  } else {
    rootbackground.classList.add('dark-mode')
    LightIcon.style.display = 'inline-block'
    DarkIcon.style.display = 'none'
    inputs.forEach((input) => {
      input.classList.add('dark-mode')
    })
    elementos.forEach((elemento) => {
      elemento.classList.add('dark-mode')
    })
  }
}

/**
 * // función para cambiar de color

const elegirColor = document.querySelector('#elegir-color');
var elementos = document.querySelectorAll('#elemento');

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
 */

const inputWhatsapp = document.getElementById('wap').value;
const atributteA = document.querySelector('#wap-href');

function createAtributte() {
  inputWhatsapp.addEventListener('change', function() {
    atributteA.setAttribute.href = `https://api.whatsapp.com/send?phone=${inputWhatsapp}&text=Hola,%20estoy%20interesado%20en%20tu%20servicio%20contactáctame%20por%20este%20medio.."`;
  })
}


                            
