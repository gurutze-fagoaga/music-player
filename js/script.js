// PARTE 1

const navegador = document.querySelector(".bottom-nav");
const listaBotones = navegador.querySelectorAll(".nav-button");
const listaContents = document.querySelectorAll(".tab-content");
const containerCanciones = document.getElementById("containerCanciones");
const paginaCanciones = document.querySelector("#tab2");
const cancionActual = document.querySelector("#cancionActual");
const paginaCancionActual = document.querySelector("#paginaCancionActual");
const container = document.querySelector(".container");
const btnAnterior = document.querySelector("#btnAnterior");
const btnPlay = document.querySelector("#btnPlay");
const btnPausa = document.querySelector("#btnPausa");
const btnSiguiente = document.querySelector("#btnSiguiente");
const audioPlayer = document.querySelector("audioPlayer"); // nuestro reproductor


const listaCanciones = [
    { id: 28, titulo: "Amaierak", artista: "Malko", imagen: "img/malko.jpeg", fuente: "audio/amaierak.mp3" },
    { id: 1, titulo: "MAPS", artista: "Amaia", imagen: "img/amaia.webp", fuente: "audio/maps.mp3" },
    { id: 2, titulo: "Fusilaren hotsa", artista: "La txama", imagen: "img/la-txama.jpg", fuente: "audio/fusilaren-hotsa.mp3" },
    { id: 3, titulo: "Ravean xuabe", artista: "Olaia Inziarte", imagen: "img/olaia-inziarte-zerrautsa.jpg", fuente: "audio/ravean-xuabe.mp3" },
    { id: 4, titulo: "Bueltatzen", artista: "Berri Txarrak", imagen: "img/berri-txarrak.jpg", fuente: "audio/bueltatzen.mp3" }
];

let idCancion = 0;


// PARTE 2

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

listaCanciones.forEach(cancion => {
    // deconstrucción del objeto "tema"
    const { id, titulo, artista, imagen, fuente } = cancion;

    // usamos innerHTML para crear nuestros temas
    containerCanciones.innerHTML += `
                                        <li id="${id}" class="cardCancion">
                                            <img id="${id}" src="./${imagen}" alt="Artista 1">
                                            <div id="${id}" >
                                                <h2 id="${id}" >${titulo}</h2>
                                                <small id="${id}" >${artista}</small>
                                            </div>
                                        </li>
`

});

// creamos la función de cargar la canción actual

const handleCargarCancion = (id) => {
    const titulo = listaCanciones[idCancion].titulo;
    const artista = listaCanciones[idCancion].artista;
    const imagen = listaCanciones[idCancion].imagen;

    cancionActual.innerHTML =
    `
    <h2>Reproducciendo...</h2>
    <div class= "reproductor" >
        <img src = "${imagen}">
        <div class="reproductorInfo">
            <h2 class="artista">${artista}</h2>
            <span class="mp3">${titulo} </span>
        </div>
    </div>
    `;

    paginaCancionActual.innerHTML = cancionActual.innerHTML;




};

// funciones de los controllers

btnSiguiente.addEventListener("click", () => {
    idCancion++;
    console.log(idCancion);
    reiniciarReproduccion();
    handleCargarCancion(idCancion);
});

btnAnterior.addEventListener("click", () => {
    idCancion--;
    reiniciarReproduccion();
    handleCargarCancion(idCancion);
});


function reiniciarReproduccion() {
    if (idCancion >= 5) {
        idCancion = 0;
    } else if (idCancion <= -1) {
        idCancion = 4;
    };
    console.log(idCancion);
};

// llamamos a la canción actual al hacer click en las canciones

paginaCanciones.addEventListener("click", (event) => {

    console.log(event.target.id);
    // el id de los elementos que quiero que se reproduzcan al clickear = "id" de listaCanciones = la posición en el array
    idCancion = event.target.id;
    handleCargarCancion(idCancion);


});




// PARTE 3: Ejecutamos la función de cargar la canción actual, con la canción nº 1 (idCancion=0)por defecto

handleCargarCancion(idCancion);