const navegador = document.querySelector(".bottom-nav");
const listaBotones = navegador.querySelectorAll(".nav-button");
const listaContents = document.querySelectorAll(".tab-content");
const paginaCanciones = document.querySelector("#tab2");
const cancionActual = document.querySelector("#cancionActual")
const container = document.querySelector(".container");

const listaCanciones = [
    { id: 1, titulo: "Canción 1", artista: "Artista 1", imagen: "img/img1.jpg", cancion: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
    { id: 2, titulo: "Canción 2", artista: "Artista 2", imagen: "img/img2.jpg", cancion: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
    { id: 3, titulo: "Canción 3", artista: "Artista 3", imagen: "img/img3.jpg", cancion: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
    { id: 4, titulo: "Canción 4", artista: "Artista 4", imagen: "img/img4.jpg", cancion: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
    { id: 5, titulo: "Canción 5", artista: "Artista 5", imagen: "img/img5.jpg", cancion: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" }
];

let idCancion = listaCanciones.id;


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

listaCanciones.forEach (cancion => {
    // deconstrucción del objeto "tema"
    const { id, titulo, artista, imagen, fuente } = cancion;
    console.log(titulo);

    // usamos innerHTML para crear nuestros temas
    containerCanciones.innerHTML += `
                                        <li class="cardCancion">
                                            <img src="./${imagen}" alt="Artista 1">
                                            <div>
                                                <h2>${titulo}</h2>
                                                <small>${artista}</small>
                                            </div>
                                        </li>
    
`
});


const handleCargarCancion = () => {
    cancionActual.innerHTML =
        `
        <h2>Reproducciendo...</h2>
        <div class= "reproductor" >
            <img src = "${imagen}">
            <h2 class="artista">${artista}</h2>
            <span class="mp3">${titulo} </span>
        </div>
    `;
};


container.addEventListener("click", (e) => {
    idCancion = listaCanciones.id;
    handleCargarCancion();
});

