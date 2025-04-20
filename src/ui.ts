import { obtenerImagenCarta, backImage } from "./motor";
import { Partida } from "./model";

const puntuacionDiv = document.getElementById("puntuacion");
const imagenCarta = document.getElementById("imagenCarta");

export const dameCartaBtn = document.getElementById("dameCarta");
export const plantarseBtn = document.getElementById("plantarse");
export const nuevaPartidaBtn = document.getElementById("nuevaPartida");

export const mostrarPuntuacion = (p: Partida): void => {
  if (puntuacionDiv instanceof HTMLDivElement) {
    puntuacionDiv.textContent = `Puntuación: ${p.puntuacion}`;
  }
};

export const mostrarCarta = (carta: number): void => {
  if (imagenCarta instanceof HTMLImageElement) {
    imagenCarta.src = obtenerImagenCarta(carta);
  }
};

export const mostrarCartaOculta = (): void => {
  if (imagenCarta instanceof HTMLImageElement) {
    imagenCarta.src = backImage;
  }
};

export const mostrarGameOver = (p: Partida): void => {
  if (p.puntuacion > 7.5) {
    if (puntuacionDiv instanceof HTMLDivElement) {
      puntuacionDiv.textContent = `Puntuación: ${p.puntuacion} - Game Over`;
    }
    ocultarBotonesJuego();
    mostrarBotonNuevaPartida();
  }
};

export const mostrarMensajePlantarse = (p: Partida): void => {
  let mensaje = "";
  const categoria = p.puntuacion === 7.5 ? 7.5 : Math.floor(p.puntuacion);

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

  if (puntuacionDiv instanceof HTMLDivElement) {
    puntuacionDiv.textContent = `Puntuación: ${p.puntuacion} - ${mensaje}`;
  }

  ocultarBotonesJuego();
  mostrarBotonNuevaPartida();
};

export const ocultarBotonesJuego = (): void => {
  if (dameCartaBtn instanceof HTMLButtonElement)
    dameCartaBtn.style.display = "none";
  if (plantarseBtn instanceof HTMLButtonElement)
    plantarseBtn.style.display = "none";
};

export const mostrarBotonesJuego = (): void => {
  if (dameCartaBtn instanceof HTMLButtonElement)
    dameCartaBtn.style.display = "block";
  if (plantarseBtn instanceof HTMLButtonElement)
    plantarseBtn.style.display = "block";
};

export const mostrarBotonNuevaPartida = (): void => {
  if (nuevaPartidaBtn instanceof HTMLButtonElement) {
    nuevaPartidaBtn.style.display = "block";
  }
};

export const ocultarBotonNuevaPartida = (): void => {
  if (nuevaPartidaBtn instanceof HTMLButtonElement) {
    nuevaPartidaBtn.style.display = "none";
  }
};
