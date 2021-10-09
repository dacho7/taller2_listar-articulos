import { Articulo } from './articulo.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  ids = 4;
  id = null;
  descripcion = '';
  precio = 0;
  articulos: Articulo[] = [
    new Articulo(1, 'Manzana', 800),
    new Articulo(2, 'Cebolla', 1100),
    new Articulo(3, 'Aguacate', 1300),
  ];

  agregarArticulo() {
    this.articulos.push(new Articulo(this.ids, this.descripcion, this.precio));
    this.ids++;
    this.descripcion = '';
    this.precio = 0;
    console.log('agregar');
  }

  borrarArticulo(id: number) {
    this.articulos = this.articulos.filter((articulo) => articulo.codigo != id);
  }

  editarArticulo(id: any, descripcion: string, precio: number) {
    this.id = id;
    this.descripcion = descripcion;
    this.precio = precio;
  }

  actualizarArticulo() {
    this.articulos.forEach((articulo, index) => {
      if (articulo.codigo == this.id) {
        this.articulos[index].descripcion = this.descripcion;
        this.articulos[index].precio = this.precio;
      }
    });
    this.precio = 0;
    this.descripcion = '';
    this.id = null;
  }
}
