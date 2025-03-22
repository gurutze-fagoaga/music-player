const listaBloques = document.querySelectorAll(".tab-content");
const listaButtons = document.querySelectorAll(".nav-button");
const containerCanciones = document.querySelector("#containerCanciones");
const cancionActual = document.querySelector("#cancionActual");


const listaTemas = [
    { id: 1, titulo: "Amaierak", artista: "Malko", imagen: "img/malko.jpeg", fuente: "./audio/amaierak.mp3" },
    { id: 2, titulo: "MAPS", artista: "Amaia", imagen: "img/amaia.webp", fuente: "./audio/maps.mp3" },
    { id: 3, titulo: "Fusilaren hotsa", artista: "La txama", imagen: "img/la-txama.jpg", fuente: "./audio/fusilaren-hotsa.mp3" },
    { id: 4, titulo: "Ravean xuabe", artista: "Olaia Inziarte", imagen: "img/olaia-inziarte-zerrautsa.jpg", fuente: "./audio/ravean-xuabe.mp3" },
    { id: 5, titulo: "Bueltatzen", artista: "Berri Txarrak", imagen: "img/berri-txarrak.jpg", fuente: "./audio/bueltatzen.mp3" }
];

let idCancion = 0;
let posicionTemaActual = 0;

// -------------- NAVEGACIÓN --------------------//
listaButtons.forEach((button, idx) => {

    button.addEventListener("click", () => {
        // Obtenemos el ID del Target que quiero mostrar!
        const target = button.getAttribute("data-tab");

        // Actualizar la visibilidad de los bloques
        listaBloques.forEach(bloque => {
            bloque.classList.remove("active");
            // si el bloque es el que me interesa, agregar active
            if (bloque.id == target) {
                bloque.classList.add("active");
            }
        });

        // Actualizar el botón activo de navegación
        listaButtons.forEach(btn => {
            btn.classList.remove("active");
            button.classList.add("active");
        });
    });

});

// -------------- LISTAR TEMAS --------------------//

listaTemas.forEach(tema => {
    // deconstrucción del objeto "tema"
    const { id, titulo, artista, imagen, fuente } = tema;
    // console.log(titulo);

    // usamos innerHTML para crear nuestros temas
    // containerCanciones.innerHTML += `
    //                                 <li class="cardCancion" data-id="${id}">
    //                                     <img src="./${imagen}" alt="Artista 1">
    //                                     <div>
    //                                         <h2>${titulo}</h2>
    //                                         <small>${artista}</small>
    //                                     </div>
    //                                 </li>
    // `;

    // // agarrar el último hijo agregado para incluirle un eventListener 
    // const cardCancion = containerCanciones.lastElementChild;

    const cardCancion = document.createElement('li');
    cardCancion.dataset.id = id;
    cardCancion.className = "cardCancion";
    cardCancion.innerHTML = `
                            <img src="./${imagen}" alt="Artista 1">
                            <div>
                                <h2>${titulo}</h2>
                                <small>${artista}</small>
                            </div>

    `

    cardCancion.addEventListener("click", () => {
        cargarCancion(id);

        // opcional : pasar a la pestaña de reproducción
        //  document.querySelector("[data-tab]='tab3'").click();

    });

    containerCanciones.appendChild(cardCancion);

});


// -------------- REPRODUCTOR ---------------------//

const prevBtn = document.querySelector(".fa-step-backward");
const playBtn = document.querySelector(".fa-play");
const pauseBtn = document.querySelector(".fa-pause");
const nextBtn = document.querySelector(".fa-step-forward");
const audioPlayer = document.querySelector("#audioPlayer"); // nuestro reproductor
const divCurrentSongInfo = document.querySelector(".divCurrentSongInfo");

pauseBtn.style.display = "none";


// función para cargar un tema

function cargarCancion(id) {
    // recorremos nuestras canciones y obtenemos solo la que me interesa
    const cancion = listaTemas.find(tema => tema.id == id);

    // si no encuentras ninguna canción, termina la función.
    if (!cancion) { return; };

    const {titulo, imagen, artista, fuente} = cancion;

    console.log(cancion);
    audioPlayer.src = cancion.fuente;
    idCancion = id;

    divCurrentSongInfo.innerHTML = `
    
                            <img src="./${imagen}" alt="Portada de canción" >
                            <h2>${titulo}</h2>
                            <small>${artista}</small>
                            
    
    `

    cancionActual.innerHTML = `
    
                            <img src="./${imagen}" alt="Portada de canción" >
                            <h2>${titulo}</h2>
                            <small>${artista}</small>
                            
    
    `

    audioPlayer.play();
    playBtn.style.display = "none";
    pauseBtn.style.display = "inline";

};

// Event Listeners de botones del reproductor

playBtn.addEventListener("click", () => {

    audioPlayer.play();
    playBtn.style.display = "none";
    pauseBtn.style.display = "inline";

});

pauseBtn.addEventListener("click", () => {

    audioPlayer.pause();
    playBtn.style.display = "inline";
    pauseBtn.style.display = "none";

});

nextBtn.addEventListener("click", () => {
    posicionTemaActual++;
    reiniciarReproduccion();
    const idCancion = listaTemas[posicionTemaActual].id;
    cargarCancion(idCancion);
});

prevBtn.addEventListener("click", () => {
    posicionTemaActual--;
    reiniciarReproduccion();
    const idCancion = listaTemas[posicionTemaActual].id;
    cargarCancion(idCancion);
});

function reiniciarReproduccion() {
    if (posicionTemaActual >= 5) {
        posicionTemaActual = 0;
    } else if (posicionTemaActual <= -1) {
        posicionTemaActual = 4;
    };
    console.log(posicionTemaActual);
};
