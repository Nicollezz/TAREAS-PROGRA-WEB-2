import 'colors';

export class Biblioteca {
  constructor() {
    this.libros = []; 
  }

  agregarLibro(libro) {
    this.libros.push(libro);
    console.log(`\n Libro agregado: "${libro.titulo.green}"`);
  }

  listarLibros() {
    if (this.libros.length === 0) {
      console.log("\n La biblioteca está vacía.".yellow);
      return;
    }
    console.log("\n--- LISTA DE LIBROS EN LA BIBLIOTECA ---".cyan);
    this.libros.forEach((libro, index) => {
      console.log(`${index + 1}. ${libro.obtenerDetalles()}`);
    });
  }

  buscarPorId(id) {
    const libro = this.libros.find(l => l.id === id);
    if (libro) {
      console.log(`\n Libro encontrado: ${libro.obtenerDetalles().green}`);
    } else {
      console.log(`\n No se encontró ningún libro con el ID: ${id}`.red);
    }
    return libro;
  }

  actualizarLibro(id, nuevosDatos) {
    const libro = this.libros.find(l => l.id === id);
    if (libro) {
      if (nuevosDatos.titulo) libro.titulo = nuevosDatos.titulo;
      if (nuevosDatos.autor) libro.autor = nuevosDatos.autor;
      if (nuevosDatos.anio) libro.anio = nuevosDatos.anio;
      console.log(`\n Libro actualizado con éxito: "${libro.titulo.blue}"`);
    } else {
      console.log(`\n No se pudo actualizar. ID no encontrado: ${id}`.red);
    }
  }

  eliminarLibro(id) {
    const index = this.libros.findIndex(l => l.id === id);
    if (index !== -1) {
      const eliminado = this.libros.splice(index, 1);
      console.log(`\n Libro eliminado: "${eliminado[0].titulo.blue}"`);
    } else {
      console.log(`\n No se pudo eliminar. ID no encontrado: ${id}`.red);
    }
  }
}