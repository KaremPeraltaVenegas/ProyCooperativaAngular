import { Cooperativa } from "./cooperativa";

export class Productor {
  constructor(
    public id: number,
    public nombre: string,
    public apellido: string,
    public direccion: string,
    public dni: string,
    public cooperativa: Cooperativa,
    public productor: Productor
  ) {}
}
