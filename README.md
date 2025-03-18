# Objetivo del ejercicio
  
En este ejercicio, pondrás en práctica tus habilidades en HTML, CSS y JavaScript, trabajando con eventos, manipulación del DOM y arrays. Implementarás una estructura de navegación con y desarrollarás un reproductor de música básico.

Este ejercicio se irá mejorando a lo largo del curso, por lo que es importante que lo estructures bien desde el inicio.

# Estructura base del ejercicio 

Se te proporcionará el HTML y CSS que podras analizar y adaptar para desarrollar tu app. Deberás completar la funcionalidad JavaScript en para que las pestañas funcionen correctamente y el reproductor de música pueda interactuar con las canciones.

# Nivel 1: Implementación de Tabs con JavaScript  

Agregar la funcionalidad para que al hacer click en una pestaña, se muestre el contenido correspondiente y las demás se oculten.
La primera pestaña debe mostrarse activa al cargar la página.

# Nivel 2: Creación de una lista de canciones con JavaScript  

Crear un array de objetos que contenga al menos 5 canciones con la siguiente estructura:
const canciones = [
{ id: 1, titulo: "Canción 1", artista: "Artista 1", imagen: "img1.jpg" },
{ id: 2, titulo: "Canción 2", artista: "Artista 2", imagen: "img2.jpg" },
// ...
];

Generar dinámicamente la lista de canciones en el HTML.
Cada canción debe mostrarse con su  artista, titulo imagen.

# Nivel 3: Interacción con el reproductor de música  

Agregar funcionalidad para que al hacer click en una canción, se muestre la información en el reproductor
Implementar los botones de Siguiente y Anterio para cambiar entre canciones del array.
Agregar eventos a los botones de Play y Pausa  (pueden simplemente cambiar un texto o icono indicando el estado).

# Nivel 4: Personalización y mejoras visuales  

Aplicar una tipografía de Google Fonts  (por ejemplo, Montserrat).
Ajustar el diseño con CSS  para mejorar la apariencia del reproductor.
Analiza la implementación de transición suave  al cambiar de pestaña. Crea comentarios en tu código explicando como funciona.

#Extras (Opcional)  
Crear un modo oscuro/claro para el reproductor.
Utiliza variables CSS para los colores de tu App y para la velocidad de las transiciones.
Permitir que el usuario agregue sus propias canciones al array.
Entrega de archivos  
Comprime la carpeta completa con todos los archivos y asegúrate de haber implementado todos los niveles.