console.log ("Se nota que todavía me extrañas");

setInterval(cambiarSaludo, 2000);

function cambiarSaludo(){
    let frase = document.getElementsByTagName("h2")[1];
    if(frase.innerHTML == "Gracias como siempre"){
        frase.innerHTML = "Impongo moda para las niñas!";
    }
    else{
        frase.innerHTML = "Gracias como siempre";
    }
   // console.log ("FRASE :" + frase);
}



