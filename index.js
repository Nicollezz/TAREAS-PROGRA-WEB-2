import 'colors';
import { Libro } from './models/Libro.js';
import { Biblioteca } from './models/Biblioteca.js';

const miBiblioteca = new Biblioteca();

console.log("=== BIBLIOTECA ===".cyan);

const libro1 = new Libro(1, "Cien años de soledad", "Gabriel García Márquez", 1967);
const libro2 = new Libro(2, "Don Quijote de la Mancha", "Miguel de Cervantes", 1605);

miBiblioteca.agregarLibro(libro1);
miBiblioteca.agregarLibro(libro2);

miBiblioteca.listarLibros();

console.log("\n--- ACTUALIZAR ---".yellow);
miBiblioteca.actualizarLibro(1, { titulo: "Cien años de soledad (Edición Especial)", anio: 2020 });
miBiblioteca.buscarPorId(1);

console.log("\n--- BÚSQUEDA ---".cyan);
miBiblioteca.buscarPorId(2);

console.log("\n--- ELIMINACIÓN ---".red);
miBiblioteca.eliminarLibro(1);

miBiblioteca.listarLibros();