
PROGRAMACIÓN ORIENTADA A OBJETOS

La estructura se divide en dos clases principales:
Clase `Libro`: Define la estructura de cada objeto individual, estableciendo sus atributos principales (identificador, título, autor y año) y un método para retornar sus detalles en formato de texto.
Clase `Biblioteca`: Actúa como el componente gestor encargado de administrar la colección de elementos y alojar la lógica operativa del programa.


La aplicación utiliza un arreglo (`this.libros = []`) para almacenar la información en memoria. 

Contiene: 

`push()`: Incorpora nuevos elementos al final del arreglo.
`find()`: Localiza un registro específico dentro de la colección mediante su identificador.
`findIndex()` y `splice()`: Identifican la posición exacta de un elemento y permiten su extracción o eliminación segura del arreglo.


Implementé un crud para almacenar, borrar, leer y actualizar para interactuar con los libros.


Requisitos y Dependencias
* **Node.js:** Entorno de ejecución obligatorio para interpretar.
* **Librería `colors`:** Dependencia externa instalada mediante `npm` para resaltar elementos en consola.

Instrucciones de Ejecución

1. Asegurar  tener instalado **Node.js** .
2. Abrir la terminal en la carpeta raíz del proyecto.
3. Instalar las dependencias del proyecto ejecutando el comando: npm install y npm i colors
4. Utilizar el comando node index.js para ejecutar.
