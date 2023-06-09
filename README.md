# 🚀 xAcademy-Node.js

## 🗒 Proceso de desarrollo

1. Comienzo del proyecto:
    * Instalación de dependencias:
        * Genero el archivo package.json con el comando ```npm init```
        * Instalación de dependencias:
            * **express** ➡ Framework de Node. Proporciona funciones y herramientas para manejar las solicitudes y respuestas *HTTP*, gestionar rutas, definir middleware, entre otros.

            * **sequelize** ➡ ORM de Node. Sirve para interactuar con las ***databases*** sin tener que hacer consultas ***SQL***.

            * **mysql2** ➡ Driver. Sirve para comunicarse con las ***databases***.

            * **passport** ➡ Herramienta para realizar autenticaciones en Node siguiendo una estrategia.

            * **passport-jwt** ➡ Herramienta para definir una estrategia basada en ***JWT*** (Json Web Token).

            * **nodemon** ➡ Herramienta de Node. Sirve para reiniciar el servidor cada vez que se detecta un cambio.

2. Generar los archivos iniciales para levantar un servidor:

    Se crea el archivo ```index.js```.
    
    Este archivo será el punto de partida de la aplicación, contiene la declaración de la configuracón del servidor y la carga de distintos módulos necesarios para el manejo de rutas.

3. Estructura del proyecto:
    * Se crea una carpeta contenedora ```/src``` la cual alojará todos los módulos correspondientes del proyecto. Estos módulos son:
        * ***/routes*** ➡ Contiene los archivos necesarios para manejar las rutas por cada entidad.
        
        * ***/controllers*** ➡ Contiene los archivos necesarios para gestionar las peticiones de las rutas hacia los servicios.

        * ***/services*** ➡ Contiene los archivos necesarios para hacer las acciones correspondientes en la **database**.

        * ***/db*** ➡ Contiene los archivos necesarios para hacer la conexión a la **database**.

        * ***/models*** ➡ Contiene los archivos que representan las tablas en la **database**. Cada entidad tiene su archivo donde se especifican los campos requeridos, el tipo de dato que admite, si son ***PK*** (primary key) o ***FK*** (foreign key) entre otros.

        * ***/auth*** ➡ Contiene los archivos necesarios para realizar autenticación de usuario.

        * ***/middlewares*** ➡ Contiene los archivos necesarios para manipular solicitudes o gestionar errores.

4. Archivos según el módulo:
    * ***/routes***:
        * ```book-routes.js``` ➡ Archivo para manejar las rutas de la entidad *libro*, según la acción requerida (obtener todos los libros, obtener libro por id, crear un libro, actualizar y eliminar);
        
        * ```libraries-routes.js``` ➡ Archivo para manejar las rutas de la entidad *librerías*, según la acción requerida (obtener todas las librerías, obtener librería por id, crear una librería, actualizar y eliminar);

        * ```user-routes.js``` ➡ Archivo para manejar la ruta *login* del usuario.
    
    * ***/controllers***: 
        * ```books-controller.js``` ➡ Archivo que gestiona la peticíon y la acción requerida de libros con el ***books-service.js***.

        * ```libraries-controller.js``` ➡ Archivo que gestiona la peticíon y la acción requerida de librerias con el ***libraries-service.js***.

        * ```user-controller.js``` ➡ Archivo que gestiona la peticíon y la acción requerida de usuario con el ***user-service.js***.
    
    * ***/services***
        * ```books-services.js``` ➡ Contiene todas las funcionalidades para realizar la acción correspondiente en la *tabla libros de la database*.

        * ```libraries-services.js``` ➡ Contiene todas las funcionalidades para realizar la acción correspondiente en la *tabla librerias de la database*.

        * ```books-services.js``` ➡ Contiene todas las funcionalidades para realizar la acción correspondiente en la *tabla usuario de la database*.
    
    * ***/db***
        * ```sequelieze-config.js``` ➡ Contiene la configuración de *sequelize* para conectarse a la *database*, inlcuye datos como host, database, username, password, port, etc.

    * ***/models***
         * ```book.js``` ➡ Contiene la configuración "representativa" de la tabla libros en la *database*.

         * ```library.js``` ➡ Contiene la configuración "representativa" de la tabla librerias en la *database*.

         * ```User.js``` ➡ Contiene la configuración "representativa" de la tabla usuario en la *database*.
    
    * ***/auth***
        * ```passport-conifg.js``` ➡ Contiene la configuración de la "estrategia" a seguir para poder hacer la autenticación.

        * ```auth.js``` ➡ Contiene la función para inicializar la autenticación, recibe desde ```passport-config.js``` la estrategia a seguir.

    * ***/middlewares***
         * ```authentication.js``` ➡ Este archivo gestiona los errores que puedan producirse al intentar loggearse.

         * ```errorHandlerMiddleware.js``` ➡ Este archivo gestiona los errores que puedan producirse en cualquiera de las peticiones de librerías o libros. Recibe un mensaje de error desde los services.
      