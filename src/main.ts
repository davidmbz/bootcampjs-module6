import "./style.css";
import { crearPartida } from "./model";
import { dameCarta, valorCarta } from "./motor";
import {
  mostrarCarta,
  mostrarPuntuacion,
  mostrarCartaOculta,
  mostrarGameOver,
  mostrarMensajePlantarse,
  mostrarBotonesJuego,
  ocultarBotonNuevaPartida,
  dameCartaBtn,
  plantarseBtn,
  nuevaPartidaBtn,
} from "./ui";

let partida = crearPartida();

const nuevaPartida = (): void => {
  partida = crearPartida();
  mostrarPuntuacion(partida);
  mostrarCartaOculta();
  mostrarBotonesJuego();
  ocultarBotonNuevaPartida();
};

document.addEventListener("DOMContentLoaded", () => {
  mostrarPuntuacion(partida);
  mostrarCartaOculta();

  if (dameCartaBtn instanceof HTMLButtonElement) {
    dameCartaBtn.addEventListener("click", () => {
      const carta = dameCarta();
      partida.puntuacion += valorCarta(carta);
      mostrarCarta(carta);
      mostrarPuntuacion(partida);
      mostrarGameOver(partida);
    });
  }

  if (plantarseBtn instanceof HTMLButtonElement) {
    plantarseBtn.addEventListener("click", () => {
      mostrarMensajePlantarse(partida);
    });
  }

  if (nuevaPartidaBtn instanceof HTMLButtonElement) {
    nuevaPartidaBtn.addEventListener("click", nuevaPartida);
  }
});
