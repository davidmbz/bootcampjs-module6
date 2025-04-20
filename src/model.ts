export interface Partida {
  puntuacion: number;
}

export const crearPartida = (): Partida => ({
  puntuacion: 0,
});
