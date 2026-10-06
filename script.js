const productos = [
  {
    id: 1,
    nombre: "CHROMAKOPIA 2LP - Tyler the creator",
    descripcion: "CHROMAKOPIA es el octavo álbum de estudio de Tyler, the Creator, publicado el 28 de octubre de 2024. Ahora disponible en vinilo, incluyendo todas las canciones del álbum original",
    precio: 115299,
	imagen:"https://store.sonymusic.es/cdn/shop/files/chromakopia_1.png?v=1760698536&width=1600"
  },
  {
    id: 2,
    nombre: "El madrileño - C tangana",
    descripcion: "En este esperadísimo disco que ha ido anunciando su llegada con #1, records de streamings (todos los singles previos también están aquí, incluido “Nunca Estoy”, punto de inflexión previo a esta nueva etapa)",
    precio: 58000,
  imagen:"https://store.sonymusic.es/cdn/shop/files/elmadrilenocd.png?v=1779897919&width=1600"
  },
  {
    id: 3,
    nombre: "Astroworld - Travis Scott",
    descripcion: "En este esperadísimo disco que ha ido anunciando su llegada con #1, records de streamings (todos los singles previos también están aquí, incluido “Nunca Estoy”, punto de inflexión previo a esta nueva etapa",
    precio: 100886,
    imagen: "https://store.sonymusic.es/cdn/shop/files/Utopia.webp?v=1790768041&width=1600"
  },
  {
    id: 4,
    nombre: "Cosa Nuestra: Capitulo 0 - Rauw Alejandro",
    descripcion: "Cosa Nuestra: Capítulo 0 es el sexto álbum de estudio de Rauw Alejandro y funciona como una precuela de Cosa Nuestra (2024). En este proyecto, lanzado el 26 de septiembre de 2025, el artista explora profundamente sus raíces caribeñas y su identidad puertorriqueña, fusionando ritmos tradicionales como bomba, plena, salsa y bachata con elementos modernos.",
    precio: 187361,
    imagen: "https://store.sonymusic.es/cdn/shop/files/rauw_1_5aa6d160-5323-490a-9c93-5027e7186c63.png?v=1778164137&width=1600"
  },
  {
    id: 5,
    nombre: "Random Access Memories 2LPs - Daft Punk",
    descripcion: "Cuarto álbum de estudio. Incluye colaboraciones con Pharrell Williams, Julian Casablancas, Panda Bear, Nile Rodgers, Todd Edwards y Giorgio Moroder. Publicado originalmente el 17 de mayo de 2013.",
    precio: 100886,
    imagen: "https://store.sonymusic.es/cdn/shop/files/daftpunk_1.png?v=1769771203&width=1600"
  }
];


/* ==============================
   CARRITO
================================ */

const carrito = [];

const contenedorProductos = document.getElementById("productos");
const listaCarrito = document.getElementById("lista-carrito");
const totalCarrito = document.getElementById("total");


/* ==============================
   MOSTRAR PRODUCTOS
================================ */

function mostrarProductos() {

  contenedorProductos.innerHTML = "";

  productos.forEach(prod => {

    const div = document.createElement("div");

    div.className = "producto";

    div.innerHTML = `
      <img src="${prod.imagen}" alt="${prod.nombre}">

      <h3>${prod.nombre}</h3>

      <p class="descripcion">
        ${prod.descripcion}
      </p>

      <p class="precio">
        ${prod.precio.toLocaleString("es-CO", {
          style: "currency",
          currency: "COP",
          minimumFractionDigits: 0
        })}
      </p>

      <button onclick="agregarAlCarrito(${prod.id})">
        Agregar al carrito
      </button>
    `;

    contenedorProductos.appendChild(div);

  });

}


/* ==============================
   AGREGAR AL CARRITO
================================ */

function agregarAlCarrito(id) {

  const productoExistente =
    carrito.find(p => p.id === id);

  if (productoExistente) {

    productoExistente.cantidad++;

  } else {

    const producto =
      productos.find(p => p.id === id);

    carrito.push({
      ...producto,
      cantidad: 1
    });

  }

  actualizarCarrito();

}


/* ==============================
   ACTUALIZAR CARRITO
================================ */

function actualizarCarrito() {

  listaCarrito.innerHTML = "";

  let total = 0;
  let totalItems = 0;

  carrito.forEach(item => {

    const li =
      document.createElement("li");

    const subtotal =
      item.precio * item.cantidad;

    li.textContent =
      `${item.nombre} x${item.cantidad} — ` +
      subtotal.toLocaleString("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0
      });

    listaCarrito.appendChild(li);

    total += subtotal;
    totalItems += item.cantidad;

  });

  totalCarrito.textContent =
    total.toLocaleString("es-CO");

  actualizarTituloCarrito(totalItems);

}


/* ==============================
   CONTADOR DEL CARRITO
================================ */

function actualizarTituloCarrito(cantidad) {

  const titulo =
    document.querySelector(".carrito h2");

  titulo.textContent =
    `🧾 Carrito de Compras (${cantidad})`;

}


/* ==============================
   VACIAR CARRITO
================================ */

function vaciarCarrito() {

  if (carrito.length === 0) {

    alert("🛒 El carrito ya está vacío.");

    return;

  }

  if (
    confirm(
      "¿Estás seguro de que quieres vaciar el carrito?"
    )
  ) {

    carrito.length = 0;

    actualizarCarrito();

  }

}


/* ==============================
   FINALIZAR COMPRA
================================ */

function finalizarCompra() {

  if (carrito.length === 0) {

    alert(
      "🛒 Tu carrito está vacío. Agrega productos antes de finalizar la compra."
    );

    return;

  }

  alert(
    "🎉 ¡Pedido simulado confirmado!\n\n" +
    "En un eCommerce real, ahora entrarían en acción " +
    "el backend, la pasarela de pago y la logística."
  );

  carrito.length = 0;

  actualizarCarrito();

}


/* ==============================
   INICIAR TIENDA
================================ */

mostrarProductos();
