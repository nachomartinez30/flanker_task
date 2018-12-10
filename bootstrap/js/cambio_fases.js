var encuesta = document.getElementById('div_encuesta');
var cuerpo_pagina = document.getElementById('cuerpo_pagina');
var tecla_respuesta;
var tecla_presionada;
var respuesta_valida_fase1_2_3;
var instrucciones = document.getElementById('div_instrucciones');
var sesionIniciada = false;
var sonido_error = document.getElementById('sonidoError');
var bipInicio = document.getElementById('bipAviso');
var nombre_ensayo;
let tiempo_respuesta = 0;
var fase = 1;
var numero_ensayo = 0;

/*VARIABLES LINEA DE TIEMPO*/
var time_inicio_sesion = new Date();
var time_pantalla_negra = new Date();
var time_recordatorio = new Date();
var time_cruz = new Date();
var time_color = new Date();
var time_contorno = new Date();
var time_ensayo = new Date();
var time_intrucciones = new Date();
var time_encuesta = new Date();

var time_aux_time = new Date();
var set_aux_time;

var set_inicio_sesion;
var set_pantalla_negra;
var set_recordatorio;
var set_cruz;
var set_color;
var set_contorno;
var set_ensayo;
var set_intrucciones;
var set_encuesta;
/*VARIABLES LINEA DE TIEMPO*/

var intentosRespuesta = 0;

var tiempo_inicio;
var tiempo_fin;
var segundos = /*10 * 60000*/8000;


var listado_primera_fase = ['./img/pantalla_negra.png'
    , 'bip'
    , './img/figuras_flechas.png'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_azul.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_18.png'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_azul.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_30.png'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_verde.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_03.png'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_verde.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_05.png'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_verde.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_12.png'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_verde.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_09.png'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_azul.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_20.png'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_azul.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_19.png'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_verde.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_01.png'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_azul.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_26.png'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_verde.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_06.png'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_azul.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_32.png'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_verde.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_15.png'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_azul.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_17.png'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_verde.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_02.png'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_azul.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_23.png'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_verde.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_07.png'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_azul.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_22.png'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_azul.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_25.png'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_verde.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_08.png'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_azul.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_28.png'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_azul.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_24.png'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_azul.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_31.png'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_verde.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_10.png'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_verde.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_16.png'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_azul.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_29.png'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_verde.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_04.png'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_azul.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_21.png'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_verde.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_11.png'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_azul.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_27.png'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_verde.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_13.png'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_verde.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_14.png'
    , 'ENCUESTA'
    , 'instrucciones'
    , './img/pantalla_negra.png',
    'bip'
    /*FINAL PRIMERA FASE*/
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_azul.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_27.png'
    , 'respuesta'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_azul.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_02.png'
    , 'respuesta'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_verde.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_12.png'
    , 'respuesta'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_azul.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_06.png'
    , 'respuesta'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_azul.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_03.png'
    , 'respuesta'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_verde.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_24.png'
    , 'respuesta'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_azul.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_05.png'
    , 'respuesta'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_azul.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_01.png'
    , 'respuesta'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_verde.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_09.png'
    , 'respuesta'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_verde.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_14.png'
    , 'respuesta'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_azul.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_08.png'
    , 'respuesta'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_azul.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_28.png'
    , 'respuesta'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_verde.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_18.png'
    , 'respuesta'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_azul.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_04.png'
    , 'respuesta'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_verde.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_11.png'
    , 'respuesta'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_azul.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_26.png'
    , 'respuesta'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_verde.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_10.png'
    , 'respuesta'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_azul.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_07.png'
    , 'respuesta'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_verde.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_17.png'
    , 'respuesta'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_azul.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_32.png'
    , 'respuesta'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_verde.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_16.png'
    , 'respuesta'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_verde.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_19.png'
    , 'respuesta'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_azul.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_30.png'
    , 'respuesta'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_verde.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_15.png'
    , 'respuesta'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_verde.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_21.png'
    , 'respuesta'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_azul.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_25.png'
    , 'respuesta'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_verde.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_22.png'
    , 'respuesta'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_verde.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_23.png'
    , 'respuesta'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_verde.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_13.png'
    , 'respuesta'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_azul.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_31.png'
    , 'respuesta'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_verde.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_20.png'
    , 'respuesta'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_azul.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_29.png'
    , 'respuesta'
    /*FINAL SEGUNDA FASE*/
    , 'ENCUESTA'
    , 'instrucciones'
    , './img/pantalla_negra.png'
    , 'bip'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_verde.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_01.png'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_azul.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_28.png'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_verde.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_02.png'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_verde.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_10.png'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_azul.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_17.png'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_azul.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_21.png'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_verde.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_07.png'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_verde.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_03.png'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_azul.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_18.png'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_verde.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_16.png'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_azul.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_29.png'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_verde.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_04.png'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_azul.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_26.png'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_verde.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_08.png'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_verde.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_05.png'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_azul.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_24.png'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_verde.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_11.png'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_verde.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_15.png'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_azul.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_19.png'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_verde.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_09.png'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_azul.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_31.png'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_azul.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_27.png'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_verde.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_14.png'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_azul.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_32.png'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_azul.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_22.png'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_verde.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_12.png'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_azul.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_30.png'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_verde.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_13.png'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_azul.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_23.png'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_azul.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_20.png'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_verde.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_06.png'
    , './img/ensayos/cruz.png'
    , './img/ensayos/pantalla_azul.png'
    , './img/ensayos/contornos.png'
    , './img/ensayos/F_25.png',
    'ENCUESTA',
    'instrucciones'
    , './img/pantalla_negra.png'
    , 'termino_sesion'
]

var label = document.getElementById('pantalla_principal');

var num_imagen = 0;
var contador_ensayos = 0;

function iniciarSesion(iterador) {
    // console.log("***-------INICIO-------***");
    console.log("iterador=" + iterador);
    // console.log("--CONTADOR ENSAYO=" + contador_ensayos);
    console.log('numero de imagen=' + num_imagen);
    // console.log('IMAGEN=' + listado_primera_fase[iterador]);
    // console.log('FASE = '+fase);
    if (iterador != 'undefined' && iterador > 1)/*CRUZ NEGRA*/{
        segundos = 2000;
        switch (num_imagen) {
            case 1:/*cruz*/
                // console.log('cruz');
                asignarTiempoPorEnsayo(contador_ensayos);
                /*SI NO ES PANTALLA NEGRA, INSTRUCCION o ENCUESTA*/
                if (isEncuestaPantallaNegraInstruccion(iterador) === false) {
                    if (fase != 2) {/*SI NO ES FASE 2*/
                        respuesta_valida_fase1_2_3 = checkRespuestasFase1_3(tecla_respuesta, nombre_ensayo)
                    }
                    // console.log('previo log ='+iterador);
                    sendData();
                    respuesta_valida_fase1_2_3 = 0;
                }
                break;
            case 2:/*pantalla color*/
                //console.log('color');
                segundos = 1000
                break;
            case 3:/*pantalla contornos*/
                //console.log('contornos');
                segundos = 1000
                break;
            case 4:/*ensayo*/
                /*EXTRACCION IMAGEN FASE 2*/
                numero_ensayo++;
                if (fase === 2) {
                    let aux = listado_primera_fase[iterador];
                    nombre_ensayo = aux.substr(aux.length - 8, aux.length);
                    //console.log(nombre_ensayo);
                    segundos = 4000;
                } else {
                    let aux = listado_primera_fase[iterador];
                    nombre_ensayo = aux.substr(aux.length - 8, aux.length);
                    num_imagen = 0;
                    segundos = 5000;
                    contador_ensayos++;
                }

                //console.log("***-------FIN ENSAYO-------***");
                /*REINICIA EL INTENTO DE RESPUESTA PARA EL SISGUIENTE ENSAYO*/
                intentosRespuesta = 0;
                break;
            case 5:/*ensayo fase 2*/
                num_imagen = 0;
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


    /*testing*/
    /*******
     FASE 1
     0-257
     FASE 2
     258-580
     FASE 3<
     581-839
     *******/

    /*testing*/
    /*switch (iterador) {
        case 258:/!*Primer ENCUESTA*!/
            segundos = 8000;
            break;
        case 581: /!*Segunda ENCUESTA*!/
            segundos = 8000;
            break;
        case 839:/!*Tercer ENCUESTA*!/
            segundos = 8000;
            break;
        default:
            segundos = 10;
            break;
    }
    */

    /*if (iterador < 430) {
        // console.log('iterador= ' + iterador);
        segundos = 10;
    }*/


    console.log('***DURACION SEGUNDOS =' + segundos);
    // llamada recursiva con timer
    setTimeout(function () {
        if (iterador < listado_primera_fase.length - 1) { // romper la recursión si se llega a la ultima label
            iniciarSesion(iterador + 1);
        }
    }, segundos);
}

function checkKeyPressed(event) {
    var event = window.event ? window.event : e;
    if (sesionIniciada === true) {
        checkTiempoRespuesta();
    }
    /*REVISA QUE INICIE LA SESION Y NO SE PUEDA HASTA QUE TERMINE*/
    if (event.key === 'Enter' && sesionIniciada === false) {
        console.log('INICIO');
        cuerpo_pagina.classList.remove('borde_inicio');
        cuerpo_pagina.classList.add('borde');
        label.src = './img/cruz.png'
        label.src = './img/pantalla_negra.png'
        set_inicio_sesion = time_inicio_sesion.getTime();
        sesionIniciada = true;
        iniciarSesion();
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


    //console.log("tiempo respuesta=" + tiempo_respuesta);
    //console.log('intento respuesta=' + intentosRespuesta);
    //console.log("Tecla=" + event.key)
}

function insertarEn(array, valor, posicion)/*AUTHOR ArtEze*/ {
    var inicio = array.slice(0, posicion)
    var medio = valor
    var fin = array.slice(posicion)
    var resultado = inicio.concat(medio).concat(fin)
    return resultado
}

function aleatoriosNoRepetidos(cantidad) /*AUTHOR ArtEze*/ {
    var array = []
    for (var i = 0; i < cantidad; i++) {
        array = insertarEn(array, i, Math.random() * (cantidad + 1))
    }
    return array
}

function enviarEncuesta(fase) {
    let fila_1 = $('input[name=psico_1]:checked').val();
    let fila_2 = $('input[name=psico_2]:checked').val();
    let fila_3 = $('input[name=psico_3]:checked').val();

    $.ajax({
        type: 'post',
        url: 'encuesta?fase=' + fase + '&fila_1=' + fila_1 + '&fila_2=' + fila_2 + '&fila_3=' + fila_3,
        data: $('frm_encuesta').serialize(),
        success: function (res) {
            //console.log("Resultado encuesta=" + res);
        }
    });
    $('input[name=psico_1]').prop("checked", false);
    $('input[name=psico_2]').prop("checked", false);
    $('input[name=psico_3]').prop("checked", false);
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
    // console.log('TECLA=' + tecla);
    // console.log('imagen=' + imagen);
    switch (imagen) {
        case 'F_01.png':
            if (tecla == '2') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case 'F_02.png':
            if (tecla == '4') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case 'F_03.png':
            if (tecla == '8') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case 'F_04.png':
            if (tecla == '6') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case 'F_05.png':
            if (tecla == '8') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case 'F_06.png':
            if (tecla == '6') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case 'F_07.png':
            if (tecla == '2') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case 'F_08.png':
            if (tecla == '4') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case 'F_09.png':
            if (tecla == '4') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case 'F_10.png':
            if (tecla == '8') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case 'F_11.png':
            if (tecla == '8') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case 'F_12.png':
            if (tecla == '4') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case 'F_13.png':
            if (tecla == '6') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case 'F_14.png':
            if (tecla == '2') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case 'F_15.png':
            if (tecla == '6') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case 'F_16.png':
            if (tecla == '8') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case 'F_17.png':
            if (tecla == '2') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case 'F_18.png':
            if (tecla == '4') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case 'F_19.png':
            if (tecla == '8') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case 'F_20.png':
            if (tecla == '6') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case 'F_21.png':
            if (tecla == '8') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case 'F_22.png':
            if (tecla == '6') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case 'F_23.png':
            if (tecla == '2') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case 'F_24.png':
            if (tecla == '4') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case 'F_25.png':
            if (tecla == '4') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case 'F_26.png':
            if (tecla == '8') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case 'F_27.png':
            if (tecla == '8') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case 'F_28.png':
            if (tecla == '4') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case 'F_29.png':
            if (tecla == '6') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case 'F_30.png':
            if (tecla == '2') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case 'F_31.png':
            if (tecla == '6') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
        case 'F_32.png':
            if (tecla == '8') {
                /*CORRECTO*/
                resultado = 1;
            } else {
                /*INCORRECTO*/
                resultado = 0;
            }
            break;
    }
    return resultado;
}

function checkRespuestasFase2(tecla, imagen) {
    let respuesta = 0;
    switch (imagen) {
        case 'F_01.png':
            if (tecla === '2') {
//console.log('RESPUESTA CORRECTA!');
                label.src = './img/palomita.png';
                respuesta = 1;
            } else {
                /*MUESTRA X*/
                label.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
                respuesta = 0;
            }
            break;
        case 'F_02.png':
            if (tecla === '4') {
//console.log('RESPUESTA CORRECTA!');
                label.src = './img/palomita.png';
                respuesta = 1;
            } else {
                /*MUESTRA X*/
                label.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
                respuesta = 0;
            }
            break;
        case 'F_03.png':
            if (tecla === '8') {
//console.log('RESPUESTA CORRECTA!');
                label.src = './img/palomita.png';
                respuesta = 1;
            } else {
                /*MUESTRA X*/
                label.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
                respuesta = 0;
            }
            break;
        case 'F_04.png':
            if (tecla === '6') {
//console.log('RESPUESTA CORRECTA!');
                label.src = './img/palomita.png';
                respuesta = 1;
            } else {
                /*MUESTRA X*/
                label.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
                respuesta = 0;
            }
            break;
        case 'F_05.png':
            if (tecla === '8') {
//console.log('RESPUESTA CORRECTA!');
                label.src = './img/palomita.png';
                respuesta = 1;
            } else {
                /*MUESTRA X*/
                label.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
                respuesta = 0;
            }
            break;
        case 'F_06.png':
            if (tecla === '6') {
//console.log('RESPUESTA CORRECTA!');
                label.src = './img/palomita.png';
                respuesta = 1;
            } else {
                /*MUESTRA X*/
                label.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
                respuesta = 0;
            }
            break;
        case 'F_07.png':
            if (tecla === '2') {
//console.log('RESPUESTA CORRECTA!');
                label.src = './img/palomita.png';
                respuesta = 1;
            } else {
                /*MUESTRA X*/
                label.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
                respuesta = 0;
            }
            break;
        case 'F_08.png':
            if (tecla === '4') {
//console.log('RESPUESTA CORRECTA!');
                label.src = './img/palomita.png';
                respuesta = 1;
            } else {
                /*MUESTRA X*/
                label.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
                respuesta = 0;
            }
            break;
        case 'F_09.png':
            if (tecla === '4') {
//console.log('RESPUESTA CORRECTA!');
                label.src = './img/palomita.png';
                respuesta = 1;
            } else {
                /*MUESTRA X*/
                label.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
                respuesta = 0;
            }
            break;
        case 'F_10.png':
            if (tecla === '8') {
//console.log('RESPUESTA CORRECTA!');
                label.src = './img/palomita.png';
                respuesta = 1;
            } else {
                /*MUESTRA X*/
                label.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
                respuesta = 0;
            }
            break;
        case 'F_11.png':
            if (tecla === '8') {
//console.log('RESPUESTA CORRECTA!');
                label.src = './img/palomita.png';
                respuesta = 1;
            } else {
                /*MUESTRA X*/
                label.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
                respuesta = 0;
            }
            break;
        case 'F_12.png':
            if (tecla === '4') {
//console.log('RESPUESTA CORRECTA!');
                label.src = './img/palomita.png';
                respuesta = 1;
            } else {
                /*MUESTRA X*/
                label.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
                respuesta = 0;
            }
            break;
        case 'F_13.png':
            if (tecla === '6') {
//console.log('RESPUESTA CORRECTA!');
                label.src = './img/palomita.png';
                respuesta = 1;
            } else {
                /*MUESTRA X*/
                label.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
                respuesta = 0;
            }
            break;
        case 'F_14.png':
            if (tecla === '2') {
//console.log('RESPUESTA CORRECTA!');
                label.src = './img/palomita.png';
                respuesta = 1;
            } else {
                /*MUESTRA X*/
                label.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
                respuesta = 0;
            }
            break;
        case 'F_15.png':
            if (tecla === '6') {
//console.log('RESPUESTA CORRECTA!');
                label.src = './img/palomita.png';
                respuesta = 1;
            } else {
                /*MUESTRA X*/
                label.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
                respuesta = 0;
            }
            break;
        case 'F_16.png':
            if (tecla === '2') {
//console.log('RESPUESTA CORRECTA!');
                label.src = './img/palomita.png';
                respuesta = 1;
            } else {
                /*MUESTRA X*/
                label.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
                respuesta = 0;
            }
            break;
        case 'F_17.png':
            if (tecla === '2') {
//console.log('RESPUESTA CORRECTA!');
                label.src = './img/palomita.png';
                respuesta = 1;
            } else {
                /*MUESTRA X*/
                label.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
                respuesta = 0;
            }
            break;
        case 'F_18.png':
            if (tecla === '4') {
//console.log('RESPUESTA CORRECTA!');
                label.src = './img/palomita.png';
                respuesta = 1;
            } else {
                /*MUESTRA X*/
                label.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
                respuesta = 0;
            }
            break;
        case 'F_19.png':
            if (tecla === '8') {
//console.log('RESPUESTA CORRECTA!');
                label.src = './img/palomita.png';
                respuesta = 1;
            } else {
                /*MUESTRA X*/
                label.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
                respuesta = 0;
            }
            break;
        case 'F_20.png':
            if (tecla === '6') {
//console.log('RESPUESTA CORRECTA!');
                label.src = './img/palomita.png';
                respuesta = 1;
            } else {
                /*MUESTRA X*/
                label.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
                respuesta = 0;
            }
            break;
        case 'F_21.png':
            if (tecla === '8') {
//console.log('RESPUESTA CORRECTA!');
                label.src = './img/palomita.png';
                respuesta = 1;
            } else {
                /*MUESTRA X*/
                label.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
                respuesta = 0;
            }
            break;
        case 'F_22.png':
            if (tecla === '6') {
//console.log('RESPUESTA CORRECTA!');
                label.src = './img/palomita.png';
                respuesta = 1;
            } else {
                /*MUESTRA X*/
                label.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
                respuesta = 0;
            }
            break;
        case 'F_23.png':
            if (tecla === '2') {
//console.log('RESPUESTA CORRECTA!');
                label.src = './img/palomita.png';
                respuesta = 1;
            } else {
                /*MUESTRA X*/
                label.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
                respuesta = 0;
            }
            break;
        case 'F_24.png':
            if (tecla === '4') {
//console.log('RESPUESTA CORRECTA!');
                label.src = './img/palomita.png';
                respuesta = 1;
            } else {
                /*MUESTRA X*/
                label.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
                respuesta = 0;
            }
            break;
        case 'F_25.png':
            if (tecla === '4') {
//console.log('RESPUESTA CORRECTA!');
                label.src = './img/palomita.png';
                respuesta = 1;
            } else {
                /*MUESTRA X*/
                label.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
                respuesta = 0;
            }
            break;
        case 'F_26.png':
            if (tecla === '8') {
//console.log('RESPUESTA CORRECTA!');
                label.src = './img/palomita.png';
                respuesta = 1;
            } else {
                /*MUESTRA X*/
                label.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
                respuesta = 0;
            }
            break;
        case 'F_27.png':
            if (tecla === '8') {
//console.log('RESPUESTA CORRECTA!');
                label.src = './img/palomita.png';
                respuesta = 1;
            } else {
                /*MUESTRA X*/
                label.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
                respuesta = 0;
            }
            break;
        case 'F_28.png':
            if (tecla === '4') {
//console.log('RESPUESTA CORRECTA!');
                label.src = './img/palomita.png';
                respuesta = 1;
            } else {
                /*MUESTRA X*/
                label.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
                respuesta = 0;
            }
            break;
        case 'F_29.png':
            if (tecla === '6') {
//console.log('RESPUESTA CORRECTA!');
                label.src = './img/palomita.png';
                respuesta = 1;
            } else {
                /*MUESTRA X*/
                label.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
                respuesta = 0;
            }
            break;
        case 'F_30.png':
            if (tecla === '2') {
//console.log('RESPUESTA CORRECTA!');
                label.src = './img/palomita.png';
                respuesta = 1;
            } else {
                /*MUESTRA X*/
                label.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
                respuesta = 0;
            }
            break;
        case 'F_31.png':
            if (tecla === '6') {
//console.log('RESPUESTA CORRECTA!');
                label.src = './img/palomita.png';
                respuesta = 1;
            } else {
                /*MUESTRA X*/
                label.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
                respuesta = 0;
            }
            break;
        case 'F_32.png':
            if (tecla === '2') {
//console.log('RESPUESTA CORRECTA!');
                label.src = './img/palomita.png';
                respuesta = 1;
            } else {
                /*MUESTRA X*/
                label.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
                respuesta = 0;
            }
            break;
    }
    return respuesta;
}

function sendData() {
    // console.log('---------------------------------------------------------------');
    // console.log('NOMBRE_ENSAYO=' + nombre_ensayo);
    // console.log('NUMERO_ENSAYO=' + numero_ensayo);
    // console.log('FASE=' + fase);
    // console.log('TECLA_PRIMER RESPUESTA=' + tecla_respuesta);
    // console.log('CORRECTO=' + respuesta_valida_fase1_2_3);
    // console.log('TIEMPO_PRIMERA_RESPUESTA=' + tiempo_respuesta / 1000 + ' seg.');
    // console.log('INTENTOS_RESPUESTA=' + intentosRespuesta);
    tiempo_respuesta = tiempo_respuesta / 1000;
    /*AJAX QUE REGISTRA EN EL LOG*/
    $.ajax({
        type: 'get',
        url: 'ensayos/write_log?tipo_ensayo=' + nombre_ensayo +
            '&fase=' + fase +
            '&tecla_primer_respuesta=' + tecla_respuesta +
            '&numero_ensayo=' + numero_ensayo +
            '&tiempo_respuesta=' + tiempo_respuesta +
            '&correcto_incorrecto=' + respuesta_valida_fase1_2_3 +
            '&cantidad_respuestas=' + intentosRespuesta,
        success: function (res) {
            // console.log('log_insertado');
        }
    });
    $.ajax({
        type: 'get',
        url: 'ensayos?tipo_ensayo=' + nombre_ensayo +
            '&fase=' + fase +
            '&tiempo_respuesta=' + tiempo_respuesta +
            '&correcto_incorrecto=' + respuesta_valida_fase1_2_3 +
            '&numero_ensayo=' + numero_ensayo +
            '&tecla_primer_respuesta=' + tecla_respuesta +
            '&cantidad_respuestas=' + intentosRespuesta,

        success: function (res) {
            // console.log('ENSAYO REGISTRADO');
        }
    })

    tiempo_respuesta = 0;
    tecla_respuesta = ''
}

function isEncuestaPantallaNegraInstruccion(numero) {
    let resultado = true;
    // console.log('iterador = '+numero);
    switch (numero) {
        case 1:
            /*BIP*/
            resultados = true;
            break;
        case 134:
            /*BIP*/
            resultados = true;
            break;
        case 298:
            /*BIP*/
            resultados = true;
            break;
        case 2:
            /*PRIMER CONTORNO NO ENVÍA DATOS*/
            resultados = true;
            break;

        case 131:
            /* ENCUESTA*/
            resultado = true;
            break;

        case 295:
            /* ENCUESTA*/
            resultado = true;
            break;

        case 427:
            /* ENCUESTA*/
            resultado = true;
            break;

        case 132:
            /* instrucciones*/
            resultado = true;
            break;

        case 296:
            /* instrucciones*/
            resultado = true;
            break;

        case 428:
            /* instrucciones*/
            resultado = true;
            break;

        case 133:
            /*pantalla_negra*/
            resultado = true;
            break;

        case 297:
            /*pantalla_negra*/
            resultado = true;
            break;

        case 429:
            /*pantalla_negra*/
            resultado = true;
            break;

        default:
            resultado = false;
            break;

    }
    // console.log("IS PANTATALLA " + resultado);
    return resultado;
}

function revisarIterador(iter) {
    // console.log('ITERADOR= ' + iter);
    switch (iter) {
        case 2:
            /*PANTALLA RECORDATORIA*/
            // segundos = 30000;
            segundos = 20000;
            label.src = listado_primera_fase[iter];
            break;

        /***********************************************************PANTALLAS NEGRAS*****************************************************/
        case 133:/*PANTALLA NEGRA SEGUNDA FASE*/
            instrucciones.setAttribute('hidden', 'true');
            num_imagen = 0;
            segundos = 120000;
            label.src = listado_primera_fase[iter];
            numero_ensayo = 0;
            break;

        case 297:/*PANTALLA NEGRA TERCERA FASE*/
            instrucciones.setAttribute('hidden', 'true');
            num_imagen = 0;
            segundos = 120000;
            label.src = listado_primera_fase[iter];
            numero_ensayo = 0;
            break;

        case 429:/*PANTALLA NEGRA FINAL DE FASE*/
            instrucciones.setAttribute('hidden', 'true');
            // console.log(listado_primera_fase[iter]);
            label.src = listado_primera_fase[iter];
            num_imagen = 0;
            segundos = 120000;
            //alert('sesion terminada');
            break;
        /***********************************************************PANTALLAS NEGRAS*****************************************************/

        /***************************************************************ENCUESTAS*******************************************************/
        case 131:/*PRIMERA ENCUESTA*/
            num_imagen = 0;
            /*DURACION INSTRUCCIONES 2 MINUTOS*/
            segundos = 60000;
            /*QUITA LA ULTIMA IMAGEN*/
            label.src = '';
            /*MUESTRA LA ENCUESTA*/
            encuesta.removeAttribute('hidden');
            break;

        case 295:/*SEGUNDA ENCUESTA*/
            num_imagen = 0;
            /*DURACION INSTRUCCIONES 2 MINUTOS*/
            segundos = 60000;
            /*QUITA LA ULTIMA IMAGEN*/
            label.src = '';
            /*MUESTRA LA ENCUESTA*/
            encuesta.removeAttribute('hidden');
            break;

        case 427:/*TERCERA ENCUESTA MANEKINS*/
            num_imagen = 0;
            /*DURACION INSTRUCCIONES 2 MINUTOS*/
            segundos = 60000;
            /*QUITA LA ULTIMA IMAGEN*/
            label.src = '';
            /*MUESTRA LA ENCUESTA*/
            encuesta.removeAttribute('hidden');
            break;
        /***************************************************************ENCUESTAS*******************************************************/

        /*************************************************************INSTRUCCIONES*****************************************************/
        case 132:/*INSTRUCCIONES 1 DE FASE 2*/
            num_imagen = 0;
            /*ENVIAR DATOS ENCUESTA MANEKIN*/
            enviarEncuesta(fase);
            fase++;
            /*DURACION INSTRUCCIONES 2 MINUTOS*/
            segundos = 60000;
            /*ESCONDE ENCUESTA MANEKINS*/
            encuesta.setAttribute('hidden', 'true');
            /*MUESTRA INSTRUCCIONES FASE 2*/
            instrucciones.innerHTML = ' <h2> A continuación iniciará una nueva fase, deberás seguir contestando como ' +
                'hasta ahora. Esta vez, cuando tu respuesta sea incorrecta escucharás un sonido por un segundo y una ' +
                'cruz aparecerá; cuando tu respuesta sea correcta verás una señal que así te lo indicará.' +
                '<br>Trata de responder lo más rápido posible.' +
                '</h2>' +
                '<br><br><p><h3>Antes de que la fase inicie aparecerá una pantalla negra y una cruz al centro, trata de ' +
                'fijar la mirada en la cruz y estar atento. Un pequeño tono te avisará cuando la nueva fase comience, ' +
                'mientras tanto espera paciente y no pulses ninguna tecla.' +
                '</h3></p>';
            instrucciones.removeAttribute('hidden');
            break;

        case 296:/*INSTRUCCIONES  DE FASE 3*/
            num_imagen = 0;
            /*ENVIAR DATOS ENCUESTA MANEKIN*/
            enviarEncuesta(fase);
            fase++;
            /*DURACION INSTRUCCIONES 2 MINUTOS*/
            segundos = 60000;
            /*ESCONDE ENCUESTA MANEKINS*/
            encuesta.setAttribute('hidden', 'true');
            /*MUESTRA INSTRUCCIONES FASE 2*/
            instrucciones.innerHTML = '<h2> A continuación iniciará una nueva fase, deberás seguir contestando como ' +
                'hasta ahora. No habrá señales que indiquen si tu respuesta fue correcta o incorrecta. Intenta contestar' +
                ' lo mejor y más rápido que puedas.' +
                '<br><br>Antes de que la fase inicie aparecerá una pantalla negra y una cruz al centro, trata de fijar ' +
                'la mirada en la cruz y estar atento. Un pequeño tono te avisará cuando la nueva fase comience mientras ' +
                'tanto espera paciente y no pulses ninguna tecla.' +
                '</h2>'
            instrucciones.removeAttribute('hidden');
            break;

        case 428:/*INSTRUCCIONES DE FASE 3*/
            num_imagen = 0;
            /*ENVIAR DATOS ENCUESTA MANEKIN*/
            enviarEncuesta(fase);
            /*DURACION INSTRUCCIONES 2 MINUTOS*/
            segundos = 60000;
            /*ESCONDE ENCUESTA MANEKINS*/
            encuesta.setAttribute('hidden', 'true');
            /*MUESTRA INSTRUCCIONES FASE 2*/
            sendData();
            instrucciones.innerHTML = '<h2> La tarea ha terminado. En seguida verás una pantalla negra con una cruz al ' +
                'centro, trata de fijar la mirada en la cruz y relajarte. No te muevas ni desconectes los sensores ' +
                'hasta que el investigador te lo indique.' +
                '<br><br>Gracias por tu participación.</h2>';
            instrucciones.removeAttribute('hidden');
            break;
        /*************************************************************INSTRUCCIONES*****************************************************/

        /******************************************************************BIP**********************************************************/
        case 1:
            segundos = 1000;
            bipInicio.play();
            break;

        case 134:
            segundos = 1000;
            bipInicio.play();
            break;

        case 298:
            segundos = 1000;
            bipInicio.play();
            break;
        /******************************************************************BIP**********************************************************/


        /*RESPUESTAS FASE 2*/
        case 139:
            respuesta_valida_fase1_2_3 = checkRespuestasFase2(tecla_respuesta, nombre_ensayo);
            break;

        case 144:
            respuesta_valida_fase1_2_3 = checkRespuestasFase2(tecla_respuesta, nombre_ensayo);
            break;

        case 149:
            respuesta_valida_fase1_2_3 = checkRespuestasFase2(tecla_respuesta, nombre_ensayo);
            break;

        case 154:
            respuesta_valida_fase1_2_3 = checkRespuestasFase2(tecla_respuesta, nombre_ensayo);
            break;

        case 159:
            respuesta_valida_fase1_2_3 = checkRespuestasFase2(tecla_respuesta, nombre_ensayo);
            break;

        case 164:
            respuesta_valida_fase1_2_3 = checkRespuestasFase2(tecla_respuesta, nombre_ensayo);
            break;

        case 169:
            respuesta_valida_fase1_2_3 = checkRespuestasFase2(tecla_respuesta, nombre_ensayo);
            break;

        case 174:
            respuesta_valida_fase1_2_3 = checkRespuestasFase2(tecla_respuesta, nombre_ensayo);
            break;

        case 179:
            respuesta_valida_fase1_2_3 = checkRespuestasFase2(tecla_respuesta, nombre_ensayo);
            break;

        case 184:
            respuesta_valida_fase1_2_3 = checkRespuestasFase2(tecla_respuesta, nombre_ensayo);
            break;

        case 189:
            respuesta_valida_fase1_2_3 = checkRespuestasFase2(tecla_respuesta, nombre_ensayo);
            break;

        case 194:
            respuesta_valida_fase1_2_3 = checkRespuestasFase2(tecla_respuesta, nombre_ensayo);
            break;

        case 199:
            respuesta_valida_fase1_2_3 = checkRespuestasFase2(tecla_respuesta, nombre_ensayo);
            break;

        case 204:
            respuesta_valida_fase1_2_3 = checkRespuestasFase2(tecla_respuesta, nombre_ensayo);
            break;

        case 209:
            respuesta_valida_fase1_2_3 = checkRespuestasFase2(tecla_respuesta, nombre_ensayo);
            break;

        case 214:
            respuesta_valida_fase1_2_3 = checkRespuestasFase2(tecla_respuesta, nombre_ensayo);
            break;

        case 219:
            respuesta_valida_fase1_2_3 = checkRespuestasFase2(tecla_respuesta, nombre_ensayo);
            break;

        case 224:
            respuesta_valida_fase1_2_3 = checkRespuestasFase2(tecla_respuesta, nombre_ensayo);
            break;

        case 229:
            respuesta_valida_fase1_2_3 = checkRespuestasFase2(tecla_respuesta, nombre_ensayo);
            break;

        case 234:
            respuesta_valida_fase1_2_3 = checkRespuestasFase2(tecla_respuesta, nombre_ensayo);
            break;

        case 239:
            respuesta_valida_fase1_2_3 = checkRespuestasFase2(tecla_respuesta, nombre_ensayo);
            break;

        case 244:
            respuesta_valida_fase1_2_3 = checkRespuestasFase2(tecla_respuesta, nombre_ensayo);
            break;

        case 249:
            respuesta_valida_fase1_2_3 = checkRespuestasFase2(tecla_respuesta, nombre_ensayo);
            break;

        case 254:
            respuesta_valida_fase1_2_3 = checkRespuestasFase2(tecla_respuesta, nombre_ensayo);
            break;

        case 259:
            respuesta_valida_fase1_2_3 = checkRespuestasFase2(tecla_respuesta, nombre_ensayo);
            break;

        case 264:
            respuesta_valida_fase1_2_3 = checkRespuestasFase2(tecla_respuesta, nombre_ensayo);
            break;

        case 269:
            respuesta_valida_fase1_2_3 = checkRespuestasFase2(tecla_respuesta, nombre_ensayo);
            break;

        case 274:
            respuesta_valida_fase1_2_3 = checkRespuestasFase2(tecla_respuesta, nombre_ensayo);
            break;

        case 279:
            respuesta_valida_fase1_2_3 = checkRespuestasFase2(tecla_respuesta, nombre_ensayo);
            break;

        case 284:
            respuesta_valida_fase1_2_3 = checkRespuestasFase2(tecla_respuesta, nombre_ensayo);
            break;

        case 289:
            respuesta_valida_fase1_2_3 = checkRespuestasFase2(tecla_respuesta, nombre_ensayo);
            break;

        case 294:
            respuesta_valida_fase1_2_3 = checkRespuestasFase2(tecla_respuesta, nombre_ensayo);
            break;


        /*****************************************************************FINAL***********************************************************/

        case 430:/*MUESTRA EL FINAL DE LA SESION*/
            segundos = 8000;
            cuerpo_pagina.classList.remove('borde');
            cuerpo_pagina.classList.add('borde_inicio');
            console.log("SESSION TERMINADA");
            /*pantalla negra*/
            label.src = './img/pantalla_negra.png';
            sesionIniciada = false;
            break;

        default:
            label.src = listado_primera_fase[iter]; // asignar el path al src
            break;

    }
}

function getIdsArreglo(listado) {
    let i = 0;
    listado.forEach(function () {
        console.log(i + '= ' + listado[i]);
        i++;
    })
}

function createNewArray(lista) {
    lista = lista.sort(function () {
        return Math.random() - 0.5
    });
    let i = 0;
    lista.forEach(function () {
        console.log(lista[i]);
        i++;
    })
}
