export class Cooperativa {
  constructor(
    public id: number,
    public nombre: string,
    public fecha_inscripcion: Date,
    public numero_orden: number,
    public created_at: Date,
    public updated_at: Date
  ) {}
}
