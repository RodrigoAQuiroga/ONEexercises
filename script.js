

function multiplicar() {
    let multiplicando = parseInt(document.querySelector('.first').value);
    let multiplicador = parseInt(document.querySelector('.second').value);
 
    let mostrar = document.querySelector(".resultado");
 
   
    const element = document.getElementById("myDIV");

    for (x = 1; x <= multiplicador; x++) {

        let results = document.createElement("p");
        results.setAttribute("id", x)

        results.innerText = "El multiplicando " + multiplicando + " por el multiplicador " + x + " es igual a " + multiplicando * x;
        
        document.getElementById("showResults").appendChild(results);
       

        console.log();


    }
}



function borrar() {

    let multiplicador = parseInt(document.querySelector('.second').value);
    for (y=1; y<=multiplicador; y++) {
        let element = document.getElementById(y);
        element.remove();
    }
}