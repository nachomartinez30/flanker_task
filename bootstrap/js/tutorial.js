var cantidad_correctas = 0;
var limite_correctas = 5;
var tecla_respuesta;
var tecla_presionada;
var instrucciones = document.getElementById('div_instrucciones');
var cabecera_tutorial = document.getElementById('cabecera_tutorial');
var sesionIniciada = false;
var nombre_ensayo;
let tiempo_respuesta = 0;
var numero_ensayo = 0;

var intentosRespuesta = 0;

var tiempo_inicio;
var tiempo_fin;
var segundos = /*10 * 60000*/8000;

var num_imagen = 0;
var contador_ensayos = 0;

var label = document.getElementById('imagen_tutorial');

var listado_tutorial = ['./img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_15.png'
    , 'respuesta'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_31.png'
    , 'respuesta'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_17.png'
    , 'respuesta'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_25.png'
    , 'respuesta'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_09.png'
    , 'respuesta'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_03.png'
    , 'respuesta'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_15.png'
    , 'respuesta'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_32.png'
    , 'respuesta'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_29.png'
    , 'respuesta'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_05.png'
    , 'respuesta'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_30.png'
    , 'respuesta'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_24.png'
    , 'respuesta'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_13.png'
    , 'respuesta'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_11.png'
    , 'respuesta'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_20.png'
    , 'respuesta'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_01.png'
    , 'respuesta'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_01.png'
    , 'respuesta'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_19.png'
    , 'respuesta'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_11.png'
    , 'respuesta'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_05.png'
    , 'respuesta'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_03.png'
    , 'respuesta'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_09.png'
    , 'respuesta'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_26.png'
    , 'respuesta'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_28.png'
    , 'respuesta'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_22.png'
    , 'respuesta'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_27.png'
    , 'respuesta'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_07.png'
    , 'respuesta'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_21.png'
    , 'respuesta'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_07.png'
    , 'respuesta'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_23.png'
    , 'respuesta'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_13.png'
    , 'respuesta'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_18.png'
    , 'respuesta'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_17.png'
    , 'respuesta'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_15.png'
    , 'respuesta'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_29.png'
    , 'respuesta'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_22.png'
    , 'respuesta'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_15.png'
    , 'respuesta'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_32.png'
    , 'respuesta'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_31.png'
    , 'respuesta'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_01.png'
    , 'respuesta'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_01.png'
    , 'respuesta'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_28.png'
    , 'respuesta'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_09.png'
    , 'respuesta'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_03.png'
    , 'respuesta'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_05.png'
    , 'respuesta'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_20.png'
    , 'respuesta'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_13.png'
    , 'respuesta'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_11.png'
    , 'respuesta'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_03.png'
    , 'respuesta'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_11.png'
    , 'respuesta'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_25.png'
    , 'respuesta'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_23.png'
    , 'respuesta'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_05.png'
    , 'respuesta'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_09.png'
    , 'respuesta'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_07.png'
    , 'respuesta'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_30.png'
    , 'respuesta'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_18.png'
    , 'respuesta'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_13.png'
    , 'respuesta'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_21.png'
    , 'respuesta'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_19.png'
    , 'respuesta'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_24.png'
    , 'respuesta'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_26.png'
    , 'respuesta'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_27.png'
    , 'respuesta'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_07.png']

function tutorialInstruccionVerdes(num_inst) {
    switch (num_inst) {
        case 0:
            instrucciones.innerHTML = "<h3>A continuación aparecerán una secuencia pantallas distintas:<br>Primero una pantalla " +
                "blanca con una cruz negra al centro;</h3>" +
                "<button type=\"button\" class=\"btn btn-success\" onclick=\"tutorialInstruccionVerdes(1)\">Siguiente</button>"
            label.src = './img/tutorial/tuto_pantalla_blanca.png';
            break;
        case 1:
            instrucciones.innerHTML = "<h3>Después una pantalla de color azul o verde .</h3>" +
                "<button type=\"button\" class=\"btn btn-primary\" onclick=\"tutorialInstruccionVerdes(0)\">Anterior</button>" +
                "<button type=\"button\" class=\"btn btn-success\" onclick=\"tutorialInstruccionVerdes(2)\">Siguiente</button>"
            label.src = './img/tutorial/tuto_pantalla_colores.png';
            break;
        case 2:
            instrucciones.innerHTML = "<h3>Después de las pantallas de color (azul o verde) verás un conjunto de contornos circulares.</h3>" +
                "<button type=\"button\" class=\"btn btn-primary\" onclick=\"tutorialInstruccionVerdes(1)\">Anterior</button>" +
                "<button type=\"button\" class=\"btn btn-success\" onclick=\"tutorialInstruccionVerdes(3)\">Siguiente</button>"
            label.src = './img/tutorial/tuto_contornos.png';
            break;
        case 3:
            instrucciones.innerHTML = "<h3>Posteriormente dentro de los contornos circulares aparecerán figuras.</h3>" +
                "<button type=\"button\" class=\"btn btn-primary\" onclick=\"tutorialInstruccionVerdes(2)\">Anterior</button>" +
                "<button type=\"button\" class=\"btn btn-success\" onclick=\"tutorialInstruccionVerdes(4)\">Siguiente</button>"
            label.src = './img/tutorial/tuto_figuras.png';
            break;
        case 4:
            instrucciones.innerHTML = "<h3>Las figuras que pueden aparecer son: un cuadrado, rombo, un círculo y\n" +
                "un óvalo. Cada figura estará asociada a una respuesta específica:</h3>" +
                "<button type=\"button\" class=\"btn btn-primary\" onclick=\"tutorialInstruccionVerdes(3)\">Anterior</button>" +
                "<button type=\"button\" class=\"btn btn-success\" onclick=\"tutorialInstruccionVerdes(5)\">Siguiente</button>"
            label.src = './img/tutorial/tuto_ensayos_simples.png';
            break;

        case 5:
            instrucciones.innerHTML = "<h3>Para el cuadrado la tecla de flecha izquierda <h1>←</h1></h3>" +
                "<button type=\"button\" class=\"btn btn-primary\" onclick=\"tutorialInstruccionVerdes(4)\">Anterior</button>" +
                "<button type=\"button\" class=\"btn btn-success\" onclick=\"tutorialInstruccionVerdes(6)\">Siguiente</button>"
            label.src = './img/tutorial/tuto_cuadrado.png';
            break;
        case 6:
            instrucciones.innerHTML = "<h3>Para el rombo la tecla de flecha derecha <h1>→</h1></h3>" +
                "<button type=\"button\" class=\"btn btn-primary\" onclick=\"tutorialInstruccionVerdes(5)\">Anterior</button>" +
                "<button type=\"button\" class=\"btn btn-success\" onclick=\"tutorialInstruccionVerdes(7)\">Siguiente</button>"
            label.src = './img/tutorial/tuto_rombo.png';
            break;
        case 7:
            instrucciones.innerHTML = "<h3>Para el óvalo la tecla de flecha arriba <h1>↑</h1></h3>" +
                "<button type=\"button\" class=\"btn btn-primary\" onclick=\"tutorialInstruccionVerdes(6)\">Anterior</button>" +
                "<button type=\"button\" class=\"btn btn-success\" onclick=\"tutorialInstruccionVerdes(8)\">Siguiente</button>"
            label.src = './img/tutorial/tuto_ovalo.png';
            break;
        case 8:
            instrucciones.innerHTML = "<h3>Y para el círculo la tecla de flecha abajo <h1>↓</h1></h3>" +
                "<button type=\"button\" class=\"btn btn-primary\" onclick=\"tutorialInstruccionVerdes(7)\">Anterior</button>" +
                "<button type=\"button\" class=\"btn btn-success\" onclick=\"tutorialInstruccionVerdes(9)\">Siguiente</button>"
            label.src = './img/tutorial/tuto_circulo.png';
            break;

        case 9:
            label.src = '';
            instrucciones.innerHTML = "<h3>A continuación se te presentaran unos pocos ensayos para que\n" +
                "practiques y aprendas la respuesta asociada a cada figura .</h3>" +
                "<br><br><button type=\"button\" class=\"btn btn-primary\" onclick=\"tutorialInstruccionVerdes(8)\">Anterior</button>" +
                "<br><br><button type=\"button\" class=\"btn btn-success\" onclick=\"tutorialInstruccionVerdes(10)\">Hacer Prueba</button>";
            break;
        case 10: /*PRUEBA CON ENSAYOS SIMPLES*/
            instrucciones.setAttribute('hidden', 'true');
            cabecera_tutorial.setAttribute('hidden', 'true');
            iniciarTutorial();
            sesionIniciada = true;
            break;
        case 11:
            label.src = ''
            instrucciones.removeAttribute('hidden');
            cabecera_tutorial.removeAttribute('hidden');
            instrucciones.innerHTML = "<h3>Ahora que has comprendido las instrucciones, llama por favor al investigador " +
                "para comenzar</h3>" +
                "<br><br><button type=\"button\" class=\"btn btn-success\" onclick=\window.location.replace('http://localhost/flanker_task/sesion')>INICIO</button>"
            break;
    }

}

function iniciarTutorial(iterador) {


    if (iterador != 'undefined')/*CRUZ NEGRA*/{
        segundos = 2000;
        switch (num_imagen) {
            case 0:/*cruz*/

                asignarTiempoPorEnsayo(contador_ensayos);
                break;
            case 1:/*pantalla color*/
                //console.log('color');
                segundos = 1000
                break;
            case 2:/*pantalla contornos*/
                //console.log('contornos');
                segundos = 1000
                break;
            case 3:/*ensayo*/
                numero_ensayo++;
                let aux = listado_tutorial[iterador];
                nombre_ensayo = aux.substr(aux.length - 8, aux.length);
                //console.log(nombre_ensayo);
                segundos = 4000;
                //console.log("***-------FIN ENSAYO-------***");
                /*REINICIA EL INTENTO DE RESPUESTA PARA EL SISGUIENTE ENSAYO*/
                intentosRespuesta = 0;
                break;
            case 4:
                num_imagen = -1;
                segundos = 1000;
                contador_ensayos++;
                break;
        }
        let date_inicio = new Date();
        tiempo_inicio = date_inicio.getTime();
        num_imagen++;
    }

    var iterador = iterador || 0; // asignar valor de parametro, default 0 (si parametro es undefined)

    /*ENCUESTAS Y PANTALLAS NEGRAS*/
    revisarIterador(iterador);

    setTimeout(function () {
        if (iterador < listado_tutorial.length - 1 && cantidad_correctas < limite_correctas) { // romper la recursión si se llega a la ultima label
            iniciarTutorial(iterador + 1);
        }
    }, segundos);
}

function checkKeyPressed(event) {
    var event = window.event ? window.event : e;
    if (sesionIniciada === true) {
        checkTiempoRespuesta();
    }
}

function checkTiempoRespuesta() {
    intentosRespuesta++;
    if (intentosRespuesta <= 1) {
        /*PRIMERA RESPUESTA*/
        let date_fin = new Date();
        tiempo_fin = date_fin.getTime()
        tiempo_respuesta = tiempo_fin - tiempo_inicio;
        tecla_respuesta = event.key
    } else {
        /*DEMAS INTENTOS*/
        tecla_presionada = event.key
    }
}

function asignarTiempoPorEnsayo(contador_ensayos) {
    switch (contador_ensayos) {
        case 1:
            segundos = 2000
            break;
        case 2:
            segundos = 3000
            break;
        case 3:
            segundos = 1000
            break;
        case 4:
            segundos = 2000
            break;
        case 5:
            segundos = 1000
            break;
        case 6:
            segundos = 3000
            break;
        case 7:
            segundos = 3000
            break;
        case 8:
            segundos = 2000
            break;
        case 9:
            segundos = 1000
            break;
        case 10:
            segundos = 1000
            break;
        case 11:
            segundos = 3000
            break;
        case 12:
            segundos = 2000
            break;
        case 13:
            segundos = 2000
            break;
        case 14:
            segundos = 2000
            break;
        case 15:
            segundos = 3000
            break;
        case 16:
            segundos = 1000
            break;
        case 17:
            segundos = 3000
            break;
        case 18:
            segundos = 1000
            break;
        case 19:
            segundos = 2000
            break;
        case 20:
            segundos = 1000
            break;
        case 21:
            segundos = 1000
            break;
        case 22:
            segundos = 3000
            break;
        case 23:
            segundos = 1000
            break;
        case 24:
            segundos = 3000
            break;
        case 25:
            segundos = 1000
            break;
        case 26:
            segundos = 3000
            break;
        case 27:
            segundos = 1000
            break;
        case 28:
            segundos = 1000
            break;
        case 29:
            segundos = 1000
            break;
        case 30:
            segundos = 3000
            break;
        case 31:
            segundos = 1000
            break;
        case 32:
            segundos = 2000
            break;
        case 33:
            segundos = 2000
            break;
        case 34:
            segundos = 3000
            break;
        case 35:
            segundos = 1000
            break;
        case 36:
            segundos = 3000
            break;
        case 37:
            segundos = 2000
            break;
        case 38:
            segundos = 2000
            break;
        case 39:
            segundos = 1000
            break;
        case 40:
            segundos = 2000
            break;
        case 41:
            segundos = 3000
            break;
        case 42:
            segundos = 1000
            break;
        case 43:
            segundos = 2000
            break;
        case 44:
            segundos = 3000
            break;
        case 45:
            segundos = 1000
            break;
        case 46:
            segundos = 3000
            break;
        case 47:
            segundos = 2000
            break;
        case 48:
            segundos = 1000
            break;
        case 49:
            segundos = 1000
            break;
        case 50:
            segundos = 1000
            break;
        case 51:
            segundos = 2000
            break;
        case 52:
            segundos = 2000
            break;
        case 53:
            segundos = 3000
            break;
        case 54:
            segundos = 1000
            break;
        case 55:
            segundos = 2000
            break;
        case 56:
            segundos = 1000
            break;
        case 57:
            segundos = 2000
            break;
        case 58:
            segundos = 1000
            break;
        case 59:
            segundos = 1000
            break;
        case 60:
            segundos = 3000
            break;
        case 61:
            segundos = 1000
            break;
        case 62:
            segundos = 3000
            break;
        case 63:
            segundos = 2000
            break;
        case 64:
            segundos = 2000
            break;
        /*FASE 2*/
        case 65:
            segundos = 2000;
            break;
        case 66:
            segundos = 3000;
            break;
        case 67:
            segundos = 1000;
            break;
        case 68:
            segundos = 2000;
            break;
        case 69:
            segundos = 1000;
            break;
        case 70:
            segundos = 3000;
            break;
        case 71:
            segundos = 3000;
            break;
        case 72:
            segundos = 2000;
            break;
        case 73:
            segundos = 1000;
            break;
        case 74:
            segundos = 1000;
            break;
        case 75:
            segundos = 3000;
            break;
        case 76:
            segundos = 2000;
            break;
        case 77:
            segundos = 2000;
            break;
        case 78:
            segundos = 2000;
            break;
        case 79:
            segundos = 3000;
            break;
        case 80:
            segundos = 1000;
            break;
        case 81:
            segundos = 3000;
            break;
        case 82:
            segundos = 1000;
            break;
        case 83:
            segundos = 2000;
            break;
        case 84:
            segundos = 1000;
            break;
        case 85:
            segundos = 1000;
            break;
        case 86:
            segundos = 3000;
            break;
        case 87:
            segundos = 1000;
            break;
        case 88:
            segundos = 3000;
            break;
        case 89:
            segundos = 1000;
            break;
        case 90:
            segundos = 3000;
            break;
        case 91:
            segundos = 1000;
            break;
        case 92:
            segundos = 1000;
            break;
        case 93:
            segundos = 1000;
            break;
        case 94:
            segundos = 3000;
            break;
        case 95:
            segundos = 1000;
            break;
        case 96:
            segundos = 2000;
            break;
        case 97:
            segundos = 2000;
            break;
        case 98:
            segundos = 3000;
            break;
        case 99:
            segundos = 1000;
            break;
        case 100:
            segundos = 3000;
            break;
        case 101:
            segundos = 2000;
            break;
        case 102:
            segundos = 2000;
            break;
        case 103:
            segundos = 1000;
            break;
        case 104:
            segundos = 2000;
            break;
        case 105:
            segundos = 3000;
            break;
        case 106:
            segundos = 1000;
            break;
        case 107:
            segundos = 2000;
            break;
        case 108:
            segundos = 3000;
            break;
        case 109:
            segundos = 1000;
            break;
        case 110:
            segundos = 3000;
            break;
        case 111:
            segundos = 2000;
            break;
        case 112:
            segundos = 1000;
            break;
        case 113:
            segundos = 1000;
            break;
        case 114:
            segundos = 1000;
            break;
        case 115:
            segundos = 2000;
            break;
        case 116:
            segundos = 2000;
            break;
        case 117:
            segundos = 3000;
            break;
        case 118:
            segundos = 1000;
            break;
        case 119:
            segundos = 2000;
            break;
        case 120:
            segundos = 1000;
            break;
        case 121:
            segundos = 2000;
            break;
        case 122:
            segundos = 1000;
            break;
        case 123:
            segundos = 1000;
            break;
        case 124:
            segundos = 3000;
            break;
        case 125:
            segundos = 1000;
            break;
        case 126:
            segundos = 3000;
            break;
        case 127:
            segundos = 2000;
            break;
        case 128:
            segundos = 2000;
            break;
        /*FASE 3*/
        case 129:
            segundos = 3000;
            break;
        case 130:
            segundos = 3000;
            break;
        case 131:
            segundos = 1000;
            break;
        case 132:
            segundos = 2000;
            break;
        case 133:
            segundos = 1000;
            break;
        case 134:
            segundos = 3000;
            break;
        case 135:
            segundos = 3000;
            break;
        case 136:
            segundos = 2000;
            break;
        case 137:
            segundos = 1000;
            break;
        case 138:
            segundos = 1000;
            break;
        case 139:
            segundos = 3000;
            break;
        case 140:
            segundos = 2000;
            break;
        case 141:
            segundos = 2000;
            break;
        case 142:
            segundos = 2000;
            break;
        case 143:
            segundos = 3000;
            break;
        case 144:
            segundos = 1000;
            break;
        case 145:
            segundos = 3000;
            break;
        case 146:
            segundos = 1000;
            break;
        case 147:
            segundos = 2000;
            break;
        case 148:
            segundos = 1000;
            break;
        case 149:
            segundos = 1000;
            break;
        case 150:
            segundos = 3000;
            break;
        case 151:
            segundos = 1000;
            break;
        case 152:
            segundos = 3000;
            break;
        case 153:
            segundos = 1000;
            break;
        case 154:
            segundos = 3000;
            break;
        case 155:
            segundos = 1000;
            break;
        case 156:
            segundos = 1000;
            break;
        case 157:
            segundos = 1000;
            break;
        case 158:
            segundos = 3000;
            break;
        case 159:
            segundos = 1000;
            break;
        case 160:
            segundos = 2000;
            break;
        case 161:
            segundos = 2000;
            break;
        case 162:
            segundos = 3000;
            break;
        case 163:
            segundos = 1000;
            break;
        case 164:
            segundos = 3000;
            break;
        case 165:
            segundos = 2000;
            break;
        case 166:
            segundos = 2000;
            break;
        case 167:
            segundos = 1000;
            break;
        case 168:
            segundos = 2000;
            break;
        case 169:
            segundos = 3000;
            break;
        case 170:
            segundos = 1000;
            break;
        case 171:
            segundos = 2000;
            break;
        case 172:
            segundos = 3000;
            break;
        case 173:
            segundos = 1000;
            break;
        case 174:
            segundos = 3000;
            break;
        case 175:
            segundos = 2000;
            break;
        case 176:
            segundos = 1000;
            break;
        case 177:
            segundos = 1000;
            break;
        case 178:
            segundos = 1000;
            break;
        case 179:
            segundos = 2000;
            break;
        case 180:
            segundos = 2000;
            break;
        case 181:
            segundos = 3000;
            break;
        case 182:
            segundos = 1000;
            break;
        case 183:
            segundos = 2000;
            break;
        case 184:
            segundos = 1000;
            break;
        case 185:
            segundos = 2000;
            break;
        case 186:
            segundos = 1000;
            break;
        case 187:
            segundos = 1000;
            break;
        case 188:
            segundos = 3000;
            break;
        case 189:
            segundos = 1000;
            break;
        case 190:
            segundos = 3000;
            break;
        case 191:
            segundos = 2000;
            break;
        case 192:
            segundos = 2000;
            break;
    }

}

function checkRespuestasFase1_3(tecla, imagen) {
    let resultado = 0;

    switch (imagen) {
        case'A_01.png':
            if (tecla == '8') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case'A_10.png':
            if (tecla == '8') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case'A_11.png':
            if (tecla == '8') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case'A_12.png':
            if (tecla == '8') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case'A_13.png':
            if (tecla == '8') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case'A_14.png':
            if (tecla == '8') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case'A_15.png':
            if (tecla == '8') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case'A_16.png':
            if (tecla == '8') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case'A_17.png':
            if (tecla == '2') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case'A_18.png':
            if (tecla == '2') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case'A_19.png':
            if (tecla == '2') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case'A_02.png':
            if (tecla == '8') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case'A_20.png':
            if (tecla == '2') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case'A_21.png':
            if (tecla == '2') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case'A_22.png':
            if (tecla == '2') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case'A_23.png':
            if (tecla == '2') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case'A_24.png':
            if (tecla == '2') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case'A_25.png':
            if (tecla == '2') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case'A_26.png':
            if (tecla == '2') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case'A_27.png':
            if (tecla == '2') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case'A_28.png':
            if (tecla == '2') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case'A_29.png':
            if (tecla == '2') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case'A_03.png':
            if (tecla == '8') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case'A_30.png':
            if (tecla == '2') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case'A_31.png':
            if (tecla == '2') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case'A_32.png':
            if (tecla == '2') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case'A_04.png':
            if (tecla == '8') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case'A_05.png':
            if (tecla == '8') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case'A_06.png':
            if (tecla == '8') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case'A_07.png':
            if (tecla == '8') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case'A_08.png':
            if (tecla == '8') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case'A_09.png':
            if (tecla == '8') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case'V_01.png':
            if (tecla == '6') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case'V_10.png':
            if (tecla == '6') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case'V_11.png':
            if (tecla == '6') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case'V_12.png':
            if (tecla == '6') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case'V_13.png':
            if (tecla == '6') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case'V_14.png':
            if (tecla == '6') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case'V_15.png':
            if (tecla == '6') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case'V_16.png':
            if (tecla == '6') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case'V_17.png':
            if (tecla == '4') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case'V_18.png':
            if (tecla == '4') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case'V_19.png':
            if (tecla == '4') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case'V_02.png':
            if (tecla == '6') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case'V_20.png':
            if (tecla == '4') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case'V_21.png':
            if (tecla == '4') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case'V_22.png':
            if (tecla == '4') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case'V_23.png':
            if (tecla == '4') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case'V_24.png':
            if (tecla == '4') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case'V_25.png':
            if (tecla == '4') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case'V_26.png':
            if (tecla == '4') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case'V_27.png':
            if (tecla == '4') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case'V_28.png':
            if (tecla == '4') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case'V_29.png':
            if (tecla == '4') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case'V_03.png':
            if (tecla == '6') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case'V_30.png':
            if (tecla == '4') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case'V_31.png':
            if (tecla == '4') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case'V_32.png':
            if (tecla == '4') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case'V_04.png':
            if (tecla == '6') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case'V_05.png':
            if (tecla == '6') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case'V_06.png':
            if (tecla == '6') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case'V_07.png':
            if (tecla == '6') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case'V_08.png':
            if (tecla == '6') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case'V_09.png':
            if (tecla == '6') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
    }
    // console.log("resultado=" + resultado);

    if (resultado === 1) {
        label.src = './img/palomita.png';
        cantidad_correctas++;
        tecla_respuesta = '';
        console.log('cantidad_correctas=' + cantidad_correctas);
        if (cantidad_correctas === limite_correctas) {
            tutorialInstruccionVerdes(12)
        }
    } else {
        console.log('incorrecto');
        label.src = './img/tacha.png';
        cantidad_correctas = 0
    }
}

function revisarIterador(iter) {
    switch (iter) {
        case 4:
            checkRespuestasFase1_3(tecla_respuesta, nombre_ensayo);
            break;
        case 9:
            checkRespuestasFase1_3(tecla_respuesta, nombre_ensayo);
            break;
        case 14:
            checkRespuestasFase1_3(tecla_respuesta, nombre_ensayo);
            break;
        case 19:
            checkRespuestasFase1_3(tecla_respuesta, nombre_ensayo);
            break;
        case 24:
            checkRespuestasFase1_3(tecla_respuesta, nombre_ensayo);
            break;
        case 29:
            checkRespuestasFase1_3(tecla_respuesta, nombre_ensayo);
            break;
        case 34:
            checkRespuestasFase1_3(tecla_respuesta, nombre_ensayo);
            break;
        case 39:
            checkRespuestasFase1_3(tecla_respuesta, nombre_ensayo);
            break;
        case 44:
            checkRespuestasFase1_3(tecla_respuesta, nombre_ensayo);
            break;
        case 49:
            checkRespuestasFase1_3(tecla_respuesta, nombre_ensayo);
            break;
        case 54:
            checkRespuestasFase1_3(tecla_respuesta, nombre_ensayo);
            break;
        case 59:
            checkRespuestasFase1_3(tecla_respuesta, nombre_ensayo);
            break;
        case 64:
            checkRespuestasFase1_3(tecla_respuesta, nombre_ensayo);
            break;
        case 69:
            checkRespuestasFase1_3(tecla_respuesta, nombre_ensayo);
            break;
        case 74:
            checkRespuestasFase1_3(tecla_respuesta, nombre_ensayo);
            break;
        case 79:
            checkRespuestasFase1_3(tecla_respuesta, nombre_ensayo);
            break;
        case 84:
            checkRespuestasFase1_3(tecla_respuesta, nombre_ensayo);
            break;
        case 89:
            checkRespuestasFase1_3(tecla_respuesta, nombre_ensayo);
            break;
        case 94:
            checkRespuestasFase1_3(tecla_respuesta, nombre_ensayo);
            break;
        case 99:
            checkRespuestasFase1_3(tecla_respuesta, nombre_ensayo);
            break;
        case 104:
            checkRespuestasFase1_3(tecla_respuesta, nombre_ensayo);
            break;
        case 109:
            checkRespuestasFase1_3(tecla_respuesta, nombre_ensayo);
            break;
        case 114:
            checkRespuestasFase1_3(tecla_respuesta, nombre_ensayo);
            break;
        case 119:
            checkRespuestasFase1_3(tecla_respuesta, nombre_ensayo);
            break;
        case 124:
            checkRespuestasFase1_3(tecla_respuesta, nombre_ensayo);
            break;
        case 129:
            checkRespuestasFase1_3(tecla_respuesta, nombre_ensayo);
            break;
        case 134:
            checkRespuestasFase1_3(tecla_respuesta, nombre_ensayo);
            break;
        case 139:
            checkRespuestasFase1_3(tecla_respuesta, nombre_ensayo);
            break;
        case 144:
            checkRespuestasFase1_3(tecla_respuesta, nombre_ensayo);
            break;
        case 149:
            checkRespuestasFase1_3(tecla_respuesta, nombre_ensayo);
            break;
        case 154:
            checkRespuestasFase1_3(tecla_respuesta, nombre_ensayo);
            break;
        case 159:
            checkRespuestasFase1_3(tecla_respuesta, nombre_ensayo);
            break;
        case 164:
            checkRespuestasFase1_3(tecla_respuesta, nombre_ensayo);
            break;
        case 169:
            checkRespuestasFase1_3(tecla_respuesta, nombre_ensayo);
            break;
        case 174:
            checkRespuestasFase1_3(tecla_respuesta, nombre_ensayo);
            break;
        case 179:
            checkRespuestasFase1_3(tecla_respuesta, nombre_ensayo);
            break;
        case 184:
            checkRespuestasFase1_3(tecla_respuesta, nombre_ensayo);
            break;
        case 189:
            checkRespuestasFase1_3(tecla_respuesta, nombre_ensayo);
            break;
        case 194:
            checkRespuestasFase1_3(tecla_respuesta, nombre_ensayo);
            break;
        case 199:
            checkRespuestasFase1_3(tecla_respuesta, nombre_ensayo);
            break;
        case 204:
            checkRespuestasFase1_3(tecla_respuesta, nombre_ensayo);
            break;
        case 209:
            checkRespuestasFase1_3(tecla_respuesta, nombre_ensayo);
            break;
        case 214:
            checkRespuestasFase1_3(tecla_respuesta, nombre_ensayo);
            break;
        case 219:
            checkRespuestasFase1_3(tecla_respuesta, nombre_ensayo);
            break;
        case 224:
            checkRespuestasFase1_3(tecla_respuesta, nombre_ensayo);
            break;
        case 229:
            checkRespuestasFase1_3(tecla_respuesta, nombre_ensayo);
            break;
        case 234:
            checkRespuestasFase1_3(tecla_respuesta, nombre_ensayo);
            break;
        case 239:
            checkRespuestasFase1_3(tecla_respuesta, nombre_ensayo);
            break;
        case 244:
            checkRespuestasFase1_3(tecla_respuesta, nombre_ensayo);
            break;
        case 249:
            checkRespuestasFase1_3(tecla_respuesta, nombre_ensayo);
            break;
        case 254:
            checkRespuestasFase1_3(tecla_respuesta, nombre_ensayo);
            break;
        case 259:
            checkRespuestasFase1_3(tecla_respuesta, nombre_ensayo);
            break;
        case 264:
            checkRespuestasFase1_3(tecla_respuesta, nombre_ensayo);
            break;
        case 269:
            checkRespuestasFase1_3(tecla_respuesta, nombre_ensayo);
            break;
        case 274:
            checkRespuestasFase1_3(tecla_respuesta, nombre_ensayo);
            break;
        case 279:
            checkRespuestasFase1_3(tecla_respuesta, nombre_ensayo);
            break;
        case 284:
            checkRespuestasFase1_3(tecla_respuesta, nombre_ensayo);
            break;
        case 289:
            checkRespuestasFase1_3(tecla_respuesta, nombre_ensayo);
            break;
        case 294:
            checkRespuestasFase1_3(tecla_respuesta, nombre_ensayo);
            break;
        case 299:
            checkRespuestasFase1_3(tecla_respuesta, nombre_ensayo);
            break;
        case 304:
            checkRespuestasFase1_3(tecla_respuesta, nombre_ensayo);
            break;
        case 309:
            checkRespuestasFase1_3(tecla_respuesta, nombre_ensayo);
            break;
        case 314:
            checkRespuestasFase1_3(tecla_respuesta, nombre_ensayo);
            break;
        default:
            label.src = listado_tutorial[iter]; // asignar el path al src
            break;
    }
}