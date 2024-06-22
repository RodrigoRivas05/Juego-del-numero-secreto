
let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(numeroSecreto);
    console.log(intentos);

    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p','Acertaste el numero!. Te tomó: ' + intentos + ' intentos!');
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
            intentos++;
            limpiarCaja();
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
            intentos++
            limpiarCaja();
        }
    }

    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
    
}


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1; 

    console.log(listaNumeroSorteados);
    // si ya sorteamos todos los numeros
    if (listaNumeroSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se han sorteado todo los numeros posibles');
    } else {
        // si el numero generado esta incluido en la lista

        if (listaNumeroSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p','Indica un número del 1 al ' + numeroMaximo);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    // limpiar caja
    limpiarCaja();
    // indicar mensaje de intervalo de numeros
    // generar el numero aleatorio
    // reiniciar numero de intentos
    condicionesIniciales();
    // deshabilitar el boton de reiniciar
    document.querySelector('#reiniciar').setAttribute('disabled',true);
    
    
}

condicionesIniciales();

