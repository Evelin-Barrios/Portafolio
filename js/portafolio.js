//funcion que aplica estilo a la opcion seleccionada en el menu y quita la previamente seleccionada

function seleccionar (link){
    var opciones = document.querySelectorAll('#link a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    // hacemos desaparecel el menu una vez que seleccionamos una opcion en el modo responsivo

    var x = document.getElementById("nav");
    x.className = "";


}


//funcion que muestra el menu responsivo

function responsiveMenu(){
    var x = document.getElementById("nav");
    if(x.className===""){
        x.className = "responsive";
    } else{
        x.className = "";
    }
}

// detecto el scrollin para habilidades en la barra


window.onscroll = function(){
    efectohabilidades()
};

// funcion que aplica animacion en la barra

function efectohabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >=300){
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("py").classList.add("barra-progreso3");
        document.getElementById("react").classList.add("barra-progreso4");
    }
}



    efectohabilidades();




























