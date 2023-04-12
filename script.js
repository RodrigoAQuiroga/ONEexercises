
/*Fúnción para Multiplicar*/

function multiplicar() {
    let multiplicando = parseInt(document.querySelector('.first').value);
    let multiplicador = parseInt(document.querySelector('.second').value);

    if (multiplicando >= 0 && multiplicador >= 1) {


        for (x = 1; x <= multiplicador; x++) {

            let results = document.createElement("p");
            results.setAttribute("id", x)

            results.innerText = "El multiplicando " + multiplicando + " por el multiplicador " + x + " es igual a " + multiplicando * x;

            document.getElementById("showResults").appendChild(results);


            console.log();


        }
    }

}

function borrar() {

    let multiplicador = parseInt(document.querySelector('.second').value);
    for (y = 1; y <= multiplicador; y++) {
        let element = document.getElementById(y);
        element.remove();
    }
}


//Función de Calculadora Indemnizatoria


function indemnizacionGeneral(){
    //Indemnización 245
    let yearInicial = parseInt(document.querySelector('.iniYear').value);
    let mesInicial = parseInt(document.querySelector('.iniMonth').value);
    let diaInicial = parseInt(document.querySelector('.iniDay').value);

    let yearFinal = parseInt(document.querySelector('.endYear').value);
    let mesFinal = parseInt(document.querySelector('.endMonth').value);
    let diaFinal = parseInt(document.querySelector('.endDay').value);

    let salario = parseInt(document.querySelector('.sueldo').value);

    if (mesInicial <= mesFinal) {

        let rubroA = document.createElement("p");
        rubroA.setAttribute("id", "indeGeneral")

        rubroA.innerText = "Según su salario de $"+ salario + ", y por sus "+ (yearFinal - yearInicial) +" años de relación, le corresponde una indemnización aproximada de $" + (yearFinal - yearInicial) * salario + " de acuerdo al art. 245 LCT";

        document.getElementById("showRubro").appendChild(rubroA);        

    }else{
        let rubroB = document.createElement("p");
        rubroB.setAttribute("id", "indeGeneral")

        rubroB.innerText = "Según su salario de $"+ salario + ", y por sus "+ ((yearFinal - yearInicial)-1) +" años de relación, le corresponde una indemnización aproximada de $" + ((yearFinal - yearInicial)-1) * salario + " de acuerdo al art. 245 LCT";

        document.getElementById("showRubro").appendChild(rubroB); 
    }

    //Fin de Indemnización General
    
    //Inicio Indemnizacion Integración del Mes

    let claseMeses = [31, 30, 28, 29]

    if (diaFinal>=1 && diaFinal<31 && mesFinal == 1 || mesFinal == 3 || mesFinal == 5 || mesFinal == 7 || mesFinal == 8 || mesFinal == 10 || mesFinal == 12) {

        let rubroC = document.createElement("p");
        rubroC.setAttribute("id", "indeIntegra")

        rubroC.innerText = "Por intergración del mes de despido, debido a que le faltaban " + (claseMeses[0]- diaFinal) + " días para que concluya el mes, y su sueldo proporcional era de $"+ (salario/claseMeses[0]) +", le corresponde aproximadamente de acuerdo al art. 233 LCT $" + (salario/claseMeses[0])*(claseMeses[0]-diaFinal);

        document.getElementById("showRubro").appendChild(rubroC); 
        
    } else if (diaFinal>=1 && diaFinal<31 && mesFinal == 4 || mesFinal == 6 || mesFinal == 9 || mesFinal == 11) {

        let rubroC = document.createElement("p");
        rubroC.setAttribute("id", "indeIntegra")

        rubroC.innerText = "Por intergración del mes de despido, debido a que le faltaban " + (claseMeses[1]- diaFinal) + " días para que concluya el mes, y su sueldo proporcional era de $"+ (salario/claseMeses[1]) +", le corresponde aproximadamente de acuerdo al art. 233 LCT $" + (salario/claseMeses[1])*(claseMeses[1]-diaFinal);

        document.getElementById("showRubro").appendChild(rubroC); 
        
    } else if (diaFinal>=1 && diaFinal<31 && mesFinal == 2 && (yearFinal%4) === 0) {

        let rubroC = document.createElement("p");
        rubroC.setAttribute("id", "indeIntegra")

        rubroC.innerText = "Por intergración del mes de despido, debido a que le faltaban " + (29- diaFinal) + " días para que concluya el mes, y su sueldo proporcional era de $"+ (salario/29) +", le corresponde aproximadamente de acuerdo al art. 233 LCT $" + (salario/29)*(29-diaFinal);

        document.getElementById("showRubro").appendChild(rubroC); 
        
    } else if (diaFinal>=1 && diaFinal<31 && mesFinal == 2) {

        let rubroC = document.createElement("p");
        rubroC.setAttribute("id", "indeIntegra")

        rubroC.innerText = "Por intergración del mes de despido, debido a que le faltaban " + (claseMeses[2]- diaFinal) + " días para que concluya el mes, y su sueldo proporcional era de $"+ (salario/claseMeses[2]) +", le corresponde aproximadamente de acuerdo al art. 233 LCT $" + (salario/claseMeses[2])*(claseMeses[2]-diaFinal);

        document.getElementById("showRubro").appendChild(rubroC);
        
    }
}

function erase() {
    
        let a = document.getElementById("indeGeneral");
        a.remove();
        let b = document.getElementById("indeIntegra");
        b.remove();
    }




