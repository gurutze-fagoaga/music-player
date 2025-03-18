const listaBloques = document.querySelectorAll(".tab-content");
const listaButtons = document.querySelectorAll(".nav-button");
const containerCanciones = document.getElementById("containerCanciones");

const listaCanciones = [
    { id: 1, titulo: "Canción 1", artista: "Artista 1", imagen: "img/img1.jpg" , fuente: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
    { id: 2, titulo: "Canción 2", artista: "Artista 2", imagen: "img/img2.jpg" , fuente: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
    { id: 3, titulo: "Canción 3", artista: "Artista 3", imagen: "img/img3.jpg" , fuente: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
    { id: 4, titulo: "Canción 4", artista: "Artista 4", imagen: "img/img4.jpg" , fuente: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
    { id: 5, titulo: "Canción 5", artista: "Artista 5", imagen: "img/img5.jpg" , fuente: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" }
];

// -------------- NAVEGACIÓN --------------------//
listaButtons.forEach( (button, idx) =>{

    button.addEventListener("click", ()=>{
        // Obtenemos el ID del Target que quiero mostrar!
        const target = button.getAttribute("data-tab");

        // Actualizar la visibilidad de los bloques
        listaBloques.forEach(bloque => {
            bloque.classList.remove("active");
            // si el bloque es el que me interesa, agregar active
            if(bloque.id == target){
                bloque.classList.add("active");
            }
        });

        // Actualizar el botón activo de navegación
        listaButtons.forEach( btn => {
            btn.classList.remove("active");
            button.classList.add("active");
        });
    });

});

// -------------- LISTAR TEMAS --------------------//

listaCanciones.forEach( tema => {
    // deconstrucción del objeto "tema"
    const {id, titulo, artista, imagen, fuente} = tema;
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

})


// -------------- REPRODUCTOR ---------------------//
