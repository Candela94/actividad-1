




//Definimos variables 

let amiga = {

    nombre: "Andrea",
    profesion: "diseñadora gráfica",
    foto: "./img/avatar.jpg",
    alt: "andrea",
    hobbies: "ir a la playa",
    descripcion: "Después de algunos años trabajando como diseñadora, decidí seguir estudiando. Primero hice el módulo de Diseño web, y después me metí en Full stack un poco sin saber lo que era. Aunque me parezca un mundo super complejo he descubierto que me gusta :)",



}


// Selección del div donde se va a mostrar la card
const card = document.querySelector(".Card");
const boton = document.querySelector("#Card-btn");





function mostrarCard() {

    card.innerHTML=` 
                    
                    <img class = "Card-img" src = "${amiga.foto}" alt= "${amiga.alt}">
                   
                    <div class = "Card-informacion">

                        <h2 class = "Card-h2">${amiga.nombre}</h2>

                        <p class = "Card-p">Soy ${amiga.profesion}</p>
                       
                        <p class = "Card-pDescripcion">${amiga.descripcion}</p>

                        <p class = "Card-pHobbie">Además de programar, también me gusta ${amiga.hobbies} y disfrutar del solete</p>
                
                    </div>


                    <button class = "Card-button" id = "Card-btn"> Cambiar mi modo </button>
                   
    `;

    console.log(amiga.hobbies);

}





//Ejecutamos función
mostrarCard();