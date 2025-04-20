import "./style.css";

// Establecemos la puntuación a 0
let puntuacion: number = 0;

// Elementos del DOM
const puntuacionDiv = document.getElementById("puntuacion");
const dameCartaBtn = document.getElementById("dameCarta");
const imagenCarta = document.getElementById("imagenCarta");
const plantarseBtn = document.getElementById("plantarse");
const nuevaPartidaBtn = document.getElementById("nuevaPartida");

// Mostramos la puntuación en pantalla
const mostrarPuntuacion = (): void => {
  if (puntuacionDiv instanceof HTMLDivElement) {
    puntuacionDiv.textContent = `Puntuación: ${puntuacion}`;
  }
};

// Generamos una carta aleatoria
const dameCarta = (): number => {
  let numero = Math.floor(Math.random() * 10) + 1;
  if (numero > 7) {
    numero += 2;
  }
  return numero;
};

// Obtenemos el valor de la carta
const valorCarta = (carta: number): number => {
  return carta >= 10 ? 0.5 : carta;
};

// Obtenemos la imagen de la carta correspondiente
const obtenerImagenCarta = (carta: number): string => {
  switch (carta) {
    case 1:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
    case 2:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
    case 3:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
    case 4:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
    case 5:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
    case 6:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
    case 7:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
    case 10:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
    case 11:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
    case 12:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
    default:
      console.error(`Carta no válida: ${carta}`);
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
  }
};

// Muestramos la carta obtenida
const mostrarCarta = (carta: number): void => {
  if (imagenCarta instanceof HTMLImageElement) {
    imagenCarta.src = obtenerImagenCarta(carta);
  } else {
    console.error("Elemento 'imagenCarta' no encontrado o no es una imagen.");
  }
};

// Comprobamos si el jugador ha perdido la partida
const gameOver = (): void => {
  if (puntuacion > 7.5) {
    if (puntuacionDiv instanceof HTMLDivElement) {
      puntuacionDiv.textContent = `Puntuación: ${puntuacion} - Game Over`;
    }

    // Ocultar el botón de "Dame carta"
    if (dameCartaBtn instanceof HTMLButtonElement) {
      dameCartaBtn.style.display = "none";
    }

    // Ocultar el botón de "Plantarse"
    if (plantarseBtn instanceof HTMLButtonElement) {
      plantarseBtn.style.display = "none";
    }

    // Mostrar el botón de "Nueva partida"
    if (nuevaPartidaBtn instanceof HTMLButtonElement) {
      nuevaPartidaBtn.style.display = "block";
    }
  }
};

// Acciones tras plantarse el jugador
const plantarse = (): void => {
  let mensaje = "";
  const categoria = puntuacion === 7.5 ? 7.5 : Math.floor(puntuacion);

  switch (categoria) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
      mensaje = "Has sido muy conservador.";
      break;
    case 5:
      mensaje = "Te ha entrado el canguelo eh?";
      break;
    case 6:
    case 7:
      mensaje = "Casi casi...";
      break;
    case 7.5:
      mensaje = "¡Lo has clavado! ¡Enhorabuena!";
      break;
  }

  // Mensaje
  if (puntuacionDiv instanceof HTMLDivElement) {
    puntuacionDiv.textContent = `Puntuación: ${puntuacion} - ${mensaje}`;
  }

  // Ocultar el botón de "Dame Carta"
  if (dameCartaBtn instanceof HTMLButtonElement) {
    dameCartaBtn.style.display = "none";
  }

  // Ocultar el botón de "Plantarse"
  if (plantarseBtn instanceof HTMLButtonElement) {
    plantarseBtn.style.display = "none";
  }

  // Mostrar el botón de "Nueva partida"
  if (nuevaPartidaBtn instanceof HTMLButtonElement) {
    nuevaPartidaBtn.style.display = "block";
  }
};

// Reiniciamos el juego
const nuevaPartida = (): void => {
  puntuacion = 0;
  mostrarPuntuacion();
  mostrarCartaOculta();

  // Mostrar el botón de "Dame Carta"
  if (dameCartaBtn instanceof HTMLButtonElement) {
    dameCartaBtn.style.display = "block";
  }

  // Mostrar el botón de "Plantarse"
  if (plantarseBtn instanceof HTMLButtonElement) {
    plantarseBtn.style.display = "block";
  }

  // Ocultar el botón de "Nueva partida"
  if (nuevaPartidaBtn instanceof HTMLButtonElement) {
    nuevaPartidaBtn.style.display = "none";
  }
};

// Mostramos la carta boca abajo
const mostrarCartaOculta = (): void => {
  if (imagenCarta instanceof HTMLImageElement) {
    imagenCarta.src =
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
  }
};

// Asignación de eventos
if (dameCartaBtn instanceof HTMLButtonElement) {
  dameCartaBtn.addEventListener("click", () => {
    const carta = dameCarta();
    puntuacion += valorCarta(carta);
    mostrarCarta(carta);
    mostrarPuntuacion();
    gameOver();
  });
}

if (plantarseBtn instanceof HTMLButtonElement) {
  plantarseBtn.addEventListener("click", plantarse);
}

if (nuevaPartidaBtn instanceof HTMLButtonElement) {
  nuevaPartidaBtn.addEventListener("click", nuevaPartida);
}

// Inicializamos al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  mostrarPuntuacion();
  mostrarCartaOculta();
});
