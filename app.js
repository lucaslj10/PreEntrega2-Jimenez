class Item {
  constructor(nombre, precio, imagen) {
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
  }
}

// Items del juego
const pocion = new Item("Kame Hame Ha", 1000, "habilidad.png");
const espada = new Item("Super Saiyajin", 2000, "tecnica.png");
const escudo = new Item("Semillas del Ermitaño", 500, "semilla.png");

const inventario = [];

let coins = 4000;

//  DOM
const elCoins = document.querySelector("#coins span");
elCoins.innerText = coins;
const elInventario = document.getElementById("inventario");

function comprar(item) {
  if (coins - item.precio >= 0) {
    inventario.push(item);
    coins -= item.precio;
    actualizarHTML();
  } else {
    alert(`No tenés coins suficiente para comprar ${item.nombre}.`);
  }
}

function vender(nombreDelItem) {
  const itemEncontrado = inventario.find(
    (item) => item.nombre == nombreDelItem
  );

  if (itemEncontrado) {
    coins += itemEncontrado.precio;
    // Lo volamos del inventario
    const indice = inventario.indexOf(itemEncontrado);
    inventario.splice(indice, 1);

    actualizarHTML();
  }
}

function actualizarHTML() {
  elInventario.innerHTML = "";
  for (const item of inventario) {
    const li = `
    <li onclick="vender('${item.nombre}')">
      <img src="img/${item.imagen}" alt="${item.imagen}" />
    </li>
    `;

    elInventario.innerHTML += li;
  }

  elCoins.innerText = coins;
}
