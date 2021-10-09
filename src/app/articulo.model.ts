export class Articulo {
  codigo: number = 0;
  descripcion: string = '';
  precio: number = 0;

  constructor(codigo: number, descripcion: string, precio: number) {
    this.codigo = codigo;
    this.descripcion = descripcion;
    this.precio = precio;
  }
}
