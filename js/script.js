/*--------------- PARTE 1 -------------*/

// NAVEGACIÓN
const navegador = document.querySelector(".bottom-nav");
const listaBotones = navegador.querySelectorAll(".nav-button");
const listaContents = document.querySelectorAll(".tab-content");

// LISTA
const containerCanciones = document.getElementById("containerCanciones");
const paginaCanciones = document.querySelector("#tab2");
const cancionActual = document.querySelector("#cancionActual");
const container = document.querySelector(".container");

const listaCanciones = [
    { id: 28, titulo: "Amaierak", artista: "Malko", imagen: "img/malko.jpeg", fuente: "./audio/amaierak.mp3" },
    { id: 2, titulo: "M.A.P.S", artista: "Amaia", imagen: "img/amaia.webp", fuente: "./audio/maps.mp3" },
    { id: 35, titulo: "Fusilaren hotsa", artista: "La txama", imagen: "img/la-txama.jpg", fuente: "./audio/fusilaren-hotsa.mp3" },
    { id: 4, titulo: "Ravean xuabe", artista: "Olaia Inziarte", imagen: "img/olaia-inziarte-zerrautsa.jpg", fuente: "./audio/ravean-xuabe.mp3" },
    { id: 5, titulo: "Bueltatzen", artista: "Berri Txarrak", imagen: "img/berri-txarrak.jpg", fuente: "./audio/bueltatzen.mp3" }
];

// REPRODUCTOR
const paginaCancionActual = document.querySelector("#paginaCancionActual");
const btnAnterior = document.querySelector("#btnAnterior");
const btnPlay = document.querySelector("#btnPlay");
const btnPausa = document.querySelector("#btnPausa");
const btnSiguiente = document.querySelector("#btnSiguiente");
const audioPlayer = document.querySelector("#audioPlayer"); // nuestro reproductor

let idCancion = 0;
let posicionTemaActual = 0;



/*--------------- PARTE 2 -------------*/

// NAVEGACIÓN

listaBotones.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
        listaContents.forEach((content, id) => {
            listaContents[id].classList.remove("active");
            listaBotones[id].classList.remove("active");
        });
        listaBotones[idx].classList.add("active");
        listaContents[idx].classList.add("active");
    });
});

// LISTA

listaCanciones.forEach(cancion => {
    // deconstrucción del objeto "tema"
    const { id, titulo, artista, imagen, fuente } = cancion;

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
    cardCancion.addEventListener("click", (event) => {
        console.log(event.target.id);
        // el id de los elementos que quiero que se reproduzcan al clickear = "id" de listaCanciones = la posición en el array
        cargarCancion(id);
    });

    containerCanciones.appendChild(cardCancion);

});

// REPRODUCTOR

btnPausa.style.display = "none";


function cargarCancion(id) {

    const tema = listaCanciones.find(cancion => cancion.id == id);

    if (!tema) { return; };

    const { titulo, imagen, artista } = tema;

    audioPlayer.src = tema.fuente;
    idCancion = id;

    cancionActual.innerHTML =
        `
   
    <div class= "reproductor" >
        <img src = "${imagen}">
        <div class="reproductorInfo">
            <h2 class="artista">${titulo}</h2>
            <span class="mp3">${artista} </span>
        </div>
    </div>
    `;

    paginaCancionActual.innerHTML = cancionActual.innerHTML;

    audioPlayer.play();
    btnPlay.style.display = "none";
    btnPausa.style.display = "inline";
};

// función para pasar de canción en bucle

function reiniciarReproduccion() {
    if (posicionTemaActual >= 5) {
        posicionTemaActual = 0;
    } else if (posicionTemaActual <= -1) {
        posicionTemaActual = 4;
    };
    console.log(posicionTemaActual);
};

// controladores

btnPlay.addEventListener("click", () => {
    audioPlayer.play();
    btnPlay.style.display = "none";
    btnPausa.style.display = "inline";

});

btnPausa.addEventListener("click", () => {
    audioPlayer.pause();
    btnPlay.style.display = "inline";
    btnPausa.style.display = "none";

});

btnSiguiente.addEventListener("click", () => {
    posicionTemaActual++;
    reiniciarReproduccion();
    const idCancion = listaCanciones[posicionTemaActual].id;
    cargarCancion(idCancion);
});

btnAnterior.addEventListener("click", () => {
    posicionTemaActual--;
    reiniciarReproduccion();
    const idCancion = listaCanciones[posicionTemaActual].id;
    cargarCancion(idCancion);
});

