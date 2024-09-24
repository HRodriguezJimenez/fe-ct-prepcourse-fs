/*//? Comando
Es una intrucción que realiza una acción, ejecuta un proceso y produce una salida.

//* Estructura de un comando
- Nombre como descripción de la acción que realiza.
- Recibe argumentos con los cuales le podemos especificar sobre que elemento queremos que se aplique el 
comando.
- Recibe opciones generalmente estan precedidas por un guión y alteran el comportamiento del comando.

//? Algunos de los comandos mas usados:
- pwd -> Print working directory = Imprimir el directorio.

- ls -> List = listar: este comando muestra un listado con los nombres de los archivos y carpetas que se
encuentran en la carpeta en la que estamos actualmente.

- mkdir nombre -> Make directory = Crear carpeta: este comando crea una carpeta con el nombre que le demos.
//! Si deseamos que el nombre de la carpeta tenga espacios entre sus palabras debemos escribir el nombre
//! entre comillas "Nueva carpeta".

- cd nombreDeLaCarpeta -> Change directory = Cambiar de carpeta o archivo.

- cd .. -> Para regresar atras un directorio.

- clear -> Para limpiar la terminal.

- touch nombreDelArchivo.js -> Crear archivo vacio = Debemos siempre especificar la extención del archivo
si es js, css, html, etc.

- rm nombre -> Remove = Elimina el archivo seleccionado.

- rm -r Nombre -> Elimina la carpeta que le indiquemos.

- help -> Muestra en pantalla una lista de comandos básicos.

//? Crear un repositorio en Git.

1. Ingresamos a la terminal y nos ubicamos en el escritorio.
- cd Desktop

2. Creamos una carpeta en nuestra computadora.
- mkdir "nombre de la carpeta"

3. Ingresamos a la carpeta que acabamos de crear.
- cd "nombre de la carpeta"

4. Creamos un archivo en la carpeta.
- touch "Harold.js"

5. Si queremos abrir la carpeta en VScode de una vez podemos escribir el comando:
- code "nombreDelArchivo"

6. Para que nuestra carpeta local se convierta en un reposiotorio en GitHub lo hacemos con el comando:
- git init

//? Commit: captura instantánea de los cambios preparados en ese momento del proyecto.

7. Para agregar los cambios que deseamos subir al repositorio escribimos el comando:
- git add "nombreDelArchivo" = unicamente se suben los cambios de ese archivo.
- git add . = subimos los cambios generados en todos los archivos que tengan cambios.

//* git status = nos muestra el estado actual del repositorio en el que estamos trabajando.

8. Al crear el commit le podemos agregar un mensaje descriptivo de los cambios realizados.
- git commit -m "mensajeDelCommit"

//* git log = nos muestra una lista con los commits realizados en el repositorio.




*/