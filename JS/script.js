/** function mostrarAnuncio() {
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

*/

/**
 * LOADER 
 */
 document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  const preloader = document.querySelector('.loader');
  const containerLoader = document.querySelector('.container-loader');
  if (preloader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        containerLoader.classList.add('container-loader')
        preloader.classList.add('loader');
      }, 1000);
      setTimeout(() => {
        preloader.remove();
        containerLoader.remove();
      }, 2000);
    })
  }
})

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
 const ulrAvatar = 'https://avatars.githubusercontent.com/u/93176365?s=400&u=a363fdcce46fcbb4846fd947e243399620956326&v=4'
  const name = 'Calcagni Gabriel'
  const userName = 'solidsnk86'
  const wapNumber = '2665290020'

  card = document.createElement('div');
  card.classList.add('card-form-container');
  card.innerHTML = `
  <div class="card-form-container">
      
  <article class="compartirMenu">
  <i id="cerrarCarta" class="bx bi-x-circle" onclick="cerrarCarta()" ></i>
    <br>
      <div class="colaboracion">
          <h1>Desarrollo de software</h1>

          <p>¡Si estás interesado en mis <br>servicios, no dudes en contactarme!</p>

          <main class="tw-followCard-header">
            <img src=${ulrAvatar} class="tw-followCard-avatar" />
            <div class="tw-followCard-info">
                <strong>${name}</strong>
                <span 
                class="tw-followcard-infoUserName">@${userName}</span>
            </div>
            <aside>
            <button class="tw-followCard-button" id="seguir-instagram">
                <span class="tw-followCard-text">Seguir</span>
            </button>
          </aside>
          </main>

          <h5>Por consultas o presupuestos escribime acá:</h5>
          <a target="_blank" title="Enviar Whatsapp" href="https://api.whatsapp.com/send?phone=${wapNumber}&text=Hola,%20estoy%20interesado%20en
          %20tu%20servicio%20mi%20nombre es"><i class="bx bi-whatsapp"></i> Contacto!</a>
      </div>
      <br>
    <hr>

    <aside class="redesMenu">
    <p>Compartir en redes sociales:</p>
    <button onclick="compartirFacebook()"><i id="face" class="bx bi-facebook"></i></span></button>
    <button onclick="compartirTwitter()"><img src="img/X_logo_2023.svg" id="X-logo" alt="Logo Twitter" /></span></button>
    <button onclick="compartirWhatsapp()"><i id="what" class="bx bi-whatsapp"></i></span></button>
    <button onclick="compartirLinkedIn()"><i id="linked" class="bx bi-linkedin"></i></span></button>
    </aside>
  
  </article>
</div>
  `;
  document.body.appendChild(card);
  const seguirInsta = document.getElementById('seguir-instagram');

  seguirInsta.onclick = () => {
    window.open('https://www.linkedin.com/in/gabriel-calcagni')
  }
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

  formaPagoSelect.addEventListener("change", function() {
    const formaPagoValue = formaPagoSelect.value;
    const containerForma = document.querySelector(".container-forma");

    containerForma.innerHTML = "";

    if (formaPagoValue === "opcion1") {
      const div = document.createElement("div");
      const heading = document.createElement("h4");
      const input = document.createElement("input");
      const imgBanco = document.createElement('img');

      imgBanco.src = 'img/banco.png';
      imgBanco.style.position = 'absolute'
      imgBanco.style.width = '25px';
      imgBanco.style.height = '25px'
      imgBanco.style.top = '82%'
      imgBanco.style.left = '10px'

      input.setAttribute("type", "text");
      input.setAttribute("placeholder", "Ingrese su CBU");
      input.style.marginLeft = '20px'

      heading.textContent = "Número de cuenta Bancaria:"

      div.appendChild(heading);
      div.appendChild(input);
      div.appendChild(imgBanco);
      containerForma.appendChild(div);
      
    } else if (formaPagoValue === "opcion2") {
      const div = document.createElement("div");
      const paragraph = document.createElement("h4");
      const input = document.createElement("input");
      const imgMercado = document.createElement("img");

      imgMercado.src = 'img/unnamed-removebg-preview.png';
      imgMercado.style.width = '37px';
      imgMercado.style.height = '40px'
      imgMercado.style.position = 'absolute'
      imgMercado.style.top = '80%'
      imgMercado.style.left = '6px'

      input.setAttribute("type", "text");
      input.setAttribute("placeholder", "Ingrese su CVU o alias de Mercado Pago");
      input.style.marginLeft = '25px'

      paragraph.textContent = "Número de CVU/alias:";

      div.appendChild(paragraph);
      div.appendChild(input);
      containerForma.appendChild(div);
      div.appendChild(imgMercado);
      
    } else if (formaPagoValue === "opcion3") {
        const div3 = document.createElement("div");
      const etiqueta = document.createElement("label");
       const etiqueta2 = document.createElement("label");
      const input = document.createElement("input");
      const input2 = document.createElement("input");
      const pagoEfectivo = document.createElement('img');

      div3.style.display = 'flex';
      div3.style.margin = '20px';
      div3.style.width = '110px';
      pagoEfectivo.src = 'img/pagar.png';
      etiqueta2.style.marginLeft = '30px';
      pagoEfectivo.style.width = '30px';
      pagoEfectivo.style.marginLeft = '25px';

      input.setAttribute("type", "radio", "value", "dolar");
      input2.setAttribute("type", "radio", "value", "pesos");
      etiqueta.textContent = "Dólar";
      etiqueta2.textContent = "Pesos"
      div3.appendChild(etiqueta);
      div3.appendChild(input);
      div3.appendChild(etiqueta2);
      div3.appendChild(input2);
      div3.appendChild(pagoEfectivo);
      containerForma.appendChild(div3);
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
  const elementos = document.querySelectorAll('header, th, td, article, .observaciones')
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


const chevroButton = document.querySelector('.drop-chevron');
const dropList = document.querySelector('.article-drop-list');
chevroButton.style.transition = '.3s all'
chevroButton.style.cursor = 'pointer'

chevroButton.onclick = () => {
  
  if (dropList.style.display === '') {
    chevroButton.style.transform = 'rotate(-45deg)';
    dropList.style.display = 'block';
    chevroButton.style.color = 'tomato'
  } else {
    dropList.style.display = '';
    chevroButton.style.transform = 'rotate(0)';
    chevroButton.style.color = ''
  }
}

/**
 * MODAL CARD
 */
function modalCard() { 
  const textSave = 'Se han guardado los datos del formulario correctamente!'

  modalcard = document.createElement('div');
  modalcard.classList.add('modal-card');
  modalcard.innerHTML = `
  <article class='modal-card'>
  <div class="modal-style">
  <h4>${textSave}</h4>
  <button id="cerrar-modal" class="shimmer-button">Ok</button>
  </div>
  </article>
  `;
  document.body.appendChild(modalcard);

  document.getElementById('cerrar-modal').addEventListener('click', cerrarModal);
}

function cerrarModal() {
  document.body.removeChild(modalcard);
}

/**---------------------------|
 * Local Storage Button Save  |
 ----------------------------*/

const inputs = document.querySelectorAll('input');
const saveButton = document.getElementById('save-button');
const borrarButton = document.getElementById('deleteButton')

function guardarEnLocalStorage() {
  var valores = {
    empresaNombre: [],
    formulario: [],
    cliente: [],
    direccion: [],
    cuit: [],
    numeroFact: [],
    fecha: [],
    producto1: [],
    producto2: [],
    producto3: [],
    producto4: [],
    producto5: [],
    cantidad1: [],
    cantidad2: [],
    cantidad3: [],
    cantidad4: [],
    cantidad5: [],
    precio1: [],
    precio2: [],
    precio3: [],
    precio4: [],
    precio5: [],
    total1: [],
    total2: [],
    total3: [],
    total4: [],
    total5: [],
    subtotal: [],
    impuesto: [],
    Total: [],
    wap: [],
    "phone-input": [],
    "mail-input": [],
  };
  
  inputs.forEach((input) => {
    valores[input.id] = input.value;
  });

  const valoresJSON = JSON.stringify(valores);
  localStorage.setItem('valoresInput', valoresJSON);
  if (guardarEnLocalStorage) {
    return (
      modalCard()
    )
  }
}

function cargarDesdeLocalStorage() {
  const valoresJSON = localStorage.getItem('valoresInput');
  
  if (valoresJSON) {
    const valores = JSON.parse(valoresJSON);

    inputs.forEach((input) => {
      if (valores[input.id]) {
        input.value = valores[input.id];
      }
    });
  }
}

cargarDesdeLocalStorage();

saveButton.addEventListener('click', guardarEnLocalStorage)

borrarButton.addEventListener('click', () => {
  localStorage.removeItem('valoresInput');
  
  inputs.forEach((input) => {
    input.value = '';
  });
  if (localStorage.removeItem) {
    modalCardDelete();
  }
});

function modalCardDelete() { 
  const textDelete = 'Se han eliminado los datos del formulario con éxito!'
  modalcard = document.createElement('div');
  modalcard.classList.add('modal-card');
  modalcard.innerHTML = `
  <article class='modal-card'>
  <div class="modal-style">
  <h4>${textDelete}</h4>
  <button id="cerrar-modal" class="shimmer-button">Ok</button>
  </div>
  </article>
  `;
  document.body.appendChild(modalcard);

  document.getElementById('cerrar-modal').addEventListener('click', cerrarModal);
}

/**-----------------------|
 # Share content Android  |
-------------------------*/

// Verificar si el navegador admite el Web Share API
if (navigator.share) {
  const shareButtons = document.querySelectorAll('#share-button');
  
  shareButtons.forEach(function(shareButton) {
    shareButton.addEventListener('click', async () => {
      try {
        await navigator.share({
          title: 'Facturador Web',
          text: '¡Echa un vistazo a este facturador online!',
          url: 'https://solidsnk86.github.io/mioPortfolioCG/',
        });
        console.log('Contenido compartido exitosamente.');
      } catch (error) {
        console.error('Error al compartir:', error);
      }
    });
  });
} else {
  console.log('El navegador no admite el Web Share API.');
}

/**
 * GEOLOCALIZACION (INTENTAR)
 */
const iframeGoogle = document.getElementById('google-iframe')

if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(function(position) {
    var latitud = position.coords.latitude;
    var longitud = position.coords.longitude;
    var azimut = position.coords.accuracy;
    console.log("Latitud: " + latitud + ", Longitud: " + longitud + ", Altitud: " + azimut);
},function (loadIframe) {
  const urlMap = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d${azimut}!2d${longitud}!3d${latitud}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d3056cee406bf3%3A0x80cbd8c58e2ca91d5e0!3m2!1ses-419!2sar!4v1694255285033!5m2!1ses-419!2sar`;
  iframeGoogle.setAttribute('href', urlMap)
  document.addEventListener('DOMContentLoaded', loadIframe);
})
}

/**
 * CONTACT ME
 */
const phoneMe = document.getElementById('phone-me');
phoneMe.onclick = () => {
  window.open('tel:+5492664541567');
}

const myLinkedin = document.getElementById('my-linkedin');
myLinkedin.onclick = () => {
  window.open('https://www.linkedin.com/in/gabriel-calcagni');
}

const myGithub = document.getElementById('my-github');
myGithub.onclick = () => {
  window.open('https://github.com/solidsnk86');
}

const mailMe = document.getElementById('mail-me');
mailMe.onclick = () => {
  window.open('mailto:calcagni.gabriel86@gmail.com');
}

const reloadForm = document.getElementById('reloadButton')

reloadForm.onclick = () => {
  location.reload()
}

/* CREATE ROW AND SHOW MODAL */

const createButton = document.getElementById('create-table-button');
const newTable = document.querySelector('.newTable');

createButton.addEventListener('click', () => {
  createTable();
  if (newTable.style.display === 'contents') {
    modalCardCreateItem();
  } else {
    modalCardDeleteItem();
  }
});

function createTable() {
  if (newTable.style.display === 'none' || newTable.style.display === '') {
    newTable.style.display = 'contents';
    createButton.style.transform = 'rotate(45deg)';
  } else {
    newTable.style.display = 'none';
    createButton.style.transform = 'rotate(0)';
  }
}

function showModal(message) {
  const modalcard = document.createElement('div');
  modalcard.classList.add('modal-card');
  modalcard.innerHTML = `
    <article class='modal-card'>
      <div class="modal-style">
        <h4>${message}</h4>
        <button id="cerrar-modal" class="shimmer-button">Ok</button>
      </div>
    </article>
  `;
  document.body.appendChild(modalcard);

  const closeModalButton = document.getElementById('cerrar-modal');
  closeModalButton.addEventListener('click', () => {
    document.body.removeChild(modalcard);
  });
}

function modalCardCreateItem() {
  const itemCreate = 'Se ha creado una fila para otro ítem, puedes eliminarla desde el mismo botón!';
  showModal(itemCreate);
}

function modalCardDeleteItem() {
  const itemDelete = 'Se ha eliminado el ítem.';
  showModal(itemDelete);
}

/* SET ATRIBUTTE IN CONTACT FIELDS */

const contactWapInput = document.getElementById('wap');
const wapAtributte = document.getElementById('wapAtributte');
const iconWap = document.getElementById('wap-href');

function createAtributteWap() {
  const phoneNumber = contactWapInput.value;
  const encodedMessage = encodeURIComponent('Hola, estoy interesado en tu servicio mi nombre es');

  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

  wapAtributte.href = whatsappLink;
}

contactWapInput.addEventListener('input', createAtributteWap);

iconWap.addEventListener('click', function () {
  createAtributteWap();
  const href = wapAtributte.href;
  window.open(href, '_blank');
});

const phoneInput = document.getElementById('phone-input');
const phoneAtributte = document.getElementById('phoneAtributte');
const phoneIcon = document.getElementById('phone-href');

function createAtributtePhone() {
  const phoneCel = phoneInput.value;

  const phoneLink = `tel:+${phoneCel}`;

  phoneAtributte.href = phoneLink;
}

phoneInput.addEventListener('input', createAtributtePhone);

phoneIcon.onclick = () => {
  createAtributtePhone();
  const href = phoneAtributte.href;
  window.open(href, '_blank')
}

const mailInput = document.getElementById('mail-input');
const mailAtributte = document.getElementById('mailAtributte');
const mailIcon = document.getElementById('mail-href');

function createAtributteMail() {
  const mail = mailInput.value;
  const mailLink = `mailto:${mail}`

  mailAtributte.href = mailLink;
}

mailInput.addEventListener('input', createAtributteMail);

mailIcon.onclick = () => {
  createAtributteMail();
  const href = mailAtributte.href;
  window.open(href, '_blank')
}




