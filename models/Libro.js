export class Libro {
  constructor(id, titulo, autor, anio) {
    this.id = id;
    this.titulo = titulo;
    this.autor = autor;
    this.anio = anio;
  }

 
  obtenerDetalles() {
    return `[ID: ${this.id}] "${this.titulo}" - ${this.autor} (${this.anio})`;
  }
}