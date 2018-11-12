var encuesta = document.getElementById('div_encuesta');
var instrucciones = document.getElementById('div_instrucciones');
var sesionIniciada = false;
var sonido_error = document.getElementById('sonidoError');
var nombre_ensayo;
var fase = 1;

var intentosRespuesta = 0;

var date_inicio;
var date_fin;
var tiempo_inicio;
var tiempo_fin;
var segundos = /*10 * 60000*/8000;


var listado_primera_fase = ['./img/pantalla_negra.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_3.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_1.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_19.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_21.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_26.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_27.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_32.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_12.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_20.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_17.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_30.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_29.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_11.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_24.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_21.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_4.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_8.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_4.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_15.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_22.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_9.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_19.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_20.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_26.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_24.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_32.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_14.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_2.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_25.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_17.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_5.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_18.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_15.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_5.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_18.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_23.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_29.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_6.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_7.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_13.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_1.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_22.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_11.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_7.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_6.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_14.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_28.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_8.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_23.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_16.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_30.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_13.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_31.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_25.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_27.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_12.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_31.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_10.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_9.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_10.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_2.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_3.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_16.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_28.png'
    , 'final_primera_fase_ENCUESTA'
    , 'imagenes_instrucciones_2_fase'
    , './img/pantalla_negra.png',
    /*FINAL PRIMERA FASE*/
    './img/2_fase/cruz.png',
    './img/2_fase/pantalla_naranja.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/ACS_3.png',
    './img/2_fase/cruz.png',
    './img/2_fase/pantalla_naranja.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/ACS_1.png',
    './img/2_fase/cruz.png',
    './img/2_fase/pantalla_amarilla.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/AND_3.png',
    './img/2_fase/cruz.png',
    './img/2_fase/pantalla_amarilla.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/ANI_2.png',
    './img/2_fase/cruz.png',
    './img/2_fase/pantalla_amarilla.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/ACS_6.png',
    './img/2_fase/cruz.png',
    './img/2_fase/pantalla_amarilla.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/NCS_2.png',
    './img/2_fase/cruz.png',
    './img/2_fase/pantalla_naranja.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/NCS_6.png',
    './img/2_fase/cruz.png',
    './img/2_fase/pantalla_amarilla.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/NCS_5.png',
    './img/2_fase/cruz.png',
    './img/2_fase/pantalla_amarilla.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/AAI_3.png',
    './img/2_fase/cruz.png',
    './img/2_fase/pantalla_amarilla.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/ANI_1.png',
    './img/2_fase/cruz.png',
    './img/2_fase/pantalla_amarilla.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/SA_4.png',
    './img/2_fase/cruz.png',
    './img/2_fase/pantalla_amarilla.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/ACS_2.png',
    './img/2_fase/cruz.png',
    './img/2_fase/pantalla_naranja.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/SN_7.png',
    './img/2_fase/cruz.png',
    './img/2_fase/pantalla_naranja.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/DA_1.png',
    './img/2_fase/cruz.png',
    './img/2_fase/pantalla_amarilla.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/DN_3.png',
    './img/2_fase/cruz.png',
    './img/2_fase/pantalla_naranja.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/AAD_2.png',
    './img/2_fase/cruz.png',
    './img/2_fase/pantalla_naranja.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/ACS_5.png',
    './img/2_fase/cruz.png',
    './img/2_fase/pantalla_amarilla.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/ANI_3.png',
    './img/2_fase/cruz.png',
    './img/2_fase/pantalla_amarilla.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/DN_2.png',
    './img/2_fase/cruz.png',
    './img/2_fase/pantalla_amarilla.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/DN_4.png',
    './img/2_fase/cruz.png',
    './img/2_fase/pantalla_amarilla.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/DA_3.png',
    './img/2_fase/cruz.png',
    './img/2_fase/pantalla_naranja.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/SA_3.png',
    './img/2_fase/cruz.png',
    './img/2_fase/pantalla_naranja.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/SN_8.png',
    './img/2_fase/cruz.png',
    './img/2_fase/pantalla_naranja.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/AA_2.png',
    './img/2_fase/cruz.png',
    './img/2_fase/pantalla_amarilla.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/SN_4.png',
    './img/2_fase/cruz.png',
    './img/2_fase/pantalla_amarilla.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/SN_6.png',
    './img/2_fase/cruz.png',
    './img/2_fase/pantalla_amarilla.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/AA_4.png',
    './img/2_fase/cruz.png',
    './img/2_fase/pantalla_naranja.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/DA_4.png',
    './img/2_fase/cruz.png',
    './img/2_fase/pantalla_naranja.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/AND_4.png',
    './img/2_fase/cruz.png',
    './img/2_fase/pantalla_amarilla.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/AND_1.png',
    './img/2_fase/cruz.png',
    './img/2_fase/pantalla_naranja.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/SA_8.png',
    './img/2_fase/cruz.png',
    './img/2_fase/pantalla_amarilla.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/AA_1.png',
    './img/2_fase/cruz.png',
    './img/2_fase/pantalla_amarilla.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/ACS_4.png',
    './img/2_fase/cruz.png',
    './img/2_fase/pantalla_naranja.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/SA_2.png',
    './img/2_fase/cruz.png',
    './img/2_fase/pantalla_amarilla.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/SN_3.png',
    './img/2_fase/cruz.png',
    './img/2_fase/pantalla_amarilla.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/AA_3.png',
    './img/2_fase/cruz.png',
    './img/2_fase/pantalla_naranja.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/AAI_1.png',
    './img/2_fase/cruz.png',
    './img/2_fase/pantalla_naranja.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/NCS_1.png',
    './img/2_fase/cruz.png',
    './img/2_fase/pantalla_amarilla.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/SA_7.png',
    './img/2_fase/cruz.png',
    './img/2_fase/pantalla_naranja.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/NA_2.png',
    './img/2_fase/cruz.png',
    './img/2_fase/pantalla_amarilla.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/SN_5.png',
    './img/2_fase/cruz.png',
    './img/2_fase/pantalla_amarilla.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/AAD_1.png',
    './img/2_fase/cruz.png',
    './img/2_fase/pantalla_naranja.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/NCS_8.png',
    './img/2_fase/cruz.png',
    './img/2_fase/pantalla_naranja.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/ACS_7.png',
    './img/2_fase/cruz.png',
    './img/2_fase/pantalla_naranja.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/NCS_3.png',
    './img/2_fase/cruz.png',
    './img/2_fase/pantalla_naranja.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/NCS_4.png',
    './img/2_fase/cruz.png',
    './img/2_fase/pantalla_naranja.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/SA_6.png',
    './img/2_fase/cruz.png',
    './img/2_fase/pantalla_amarilla.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/AAD_4.png',
    './img/2_fase/cruz.png',
    './img/2_fase/pantalla_amarilla.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/AND_2.png',
    './img/2_fase/cruz.png',
    './img/2_fase/pantalla_naranja.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/AAI_4.png',
    './img/2_fase/cruz.png',
    './img/2_fase/pantalla_amarilla.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/DN_1.png',
    './img/2_fase/cruz.png',
    './img/2_fase/pantalla_amarilla.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/SA_1.png',
    './img/2_fase/cruz.png',
    './img/2_fase/pantalla_amarilla.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/NA_3.png',
    './img/2_fase/cruz.png',
    './img/2_fase/pantalla_naranja.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/NA_1.png',
    './img/2_fase/cruz.png',
    './img/2_fase/pantalla_naranja.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/SN_1.png',
    './img/2_fase/cruz.png',
    './img/2_fase/pantalla_amarilla.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/NCS_7.png',
    './img/2_fase/cruz.png',
    './img/2_fase/pantalla_naranja.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/ACS_8.png',
    './img/2_fase/cruz.png',
    './img/2_fase/pantalla_naranja.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/AAI_2.png',
    './img/2_fase/cruz.png',
    './img/2_fase/pantalla_naranja.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/SN_2.png',
    './img/2_fase/cruz.png',
    './img/2_fase/pantalla_naranja.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/ANI_4.png',
    './img/2_fase/cruz.png',
    './img/2_fase/pantalla_naranja.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/DA_2.png',
    './img/2_fase/cruz.png',
    './img/2_fase/pantalla_naranja.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/AAD_3.png',
    './img/2_fase/cruz.png',
    './img/2_fase/pantalla_naranja.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/NA_4.png',
    './img/2_fase/cruz.png',
    './img/2_fase/pantalla_amarilla.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/SA_5.png'
    /*FINAL SEGUNDA FASE*/
    , 'final_segunda_fase_ENCUESTA'
    , 'imagenes_instrucciones_2_fase'
    , './img/pantalla_negra.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_14.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_25.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_30.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_11.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_28.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_10.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_23.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_1.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_1.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_26.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_14.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_24.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_16.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_13.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_20.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_6.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_12.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_3.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_19.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_23.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_31.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_32.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_4.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_21.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_6.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_13.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_20.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_15.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_5.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_17.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_11.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_29.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_30.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_5.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_31.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_27.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_32.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_29.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_3.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_2.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_9.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_7.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_28.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_16.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_18.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_15.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_22.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_25.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_24.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_8.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_17.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_26.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_19.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_9.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_7.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_10.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_22.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_21.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_18.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_4.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_27.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_azul.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/azul/A_2.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_8.png'
    , './img/1_3_fase/cruz.png'
    , './img/1_3_fase/pantalla_verde.png'
    , './img/1_3_fase/contornos.png'
    , './img/1_3_fase/verdes/V_12.png',
    'final_segunda_fase_ENCUESTA',
    'imagenes_instrucciones_2_fase',
    './img/pantalla_negra.png'
]


var label = document.getElementById('pantalla_principal');
var fase2Error = document.getElementById('errorFase2');
var num_imagen = 0;
var contador_ensayos = 0;

function iniciarSesion(iterador) {
    fase2Error.src= '';
    console.log("***-------INICIO-------***");
    console.log("iterador=" + iterador)
    console.log("--CONTADOR ENSAYO=" + contador_ensayos);
    console.log('numero de imagen=' + num_imagen);
    console.log('IMAGEN=' + listado_primera_fase[iterador]);
    if (iterador != undefined)/*CRUZ NEGRA*/{
        segundos = 2000;
        switch (num_imagen) {
            case 0:/*cruz*/
                console.log('cruz');
                asignarTiempoPorEnsayo(contador_ensayos);
                break;
            case 1:/*pantalla color*/
                console.log('color');
                segundos = 1000
                break;
            case 2:/*pantalla contornos*/
                console.log('contornos');
                segundos = 1000
                break;
            case 3:/*ensayo*/
                date_inicio = new Date();
                tiempo_inicio = date_inicio.getTime();
                /*EXTRACCION IMAGEN FASE 2*/
                if (fase === 2) {
                    let aux = listado_primera_fase[iterador];
                    nombre_ensayo = aux.substr(21, aux.length);
                    console.log(nombre_ensayo);
                }
                num_imagen = -1;
                segundos = 6000;
                contador_ensayos++;

                console.log("***-------FIN ENSAYO-------***");
                /*REINICIA EL INTENTO DE RESPUESTA PARA EL SISGUIENTE ENSAYO*/
                intentosRespuesta = 0;
                break;
        }
        num_imagen++;
    }

    var iterador = iterador || 0; // asignar valor de parametro, default 0 (si parametro es undefined)

    /*ENCUESTAS Y PANTALLAS NEGRAS*/
    switch (iterador) {
        /***********************************************************FINAL FASE 1*****************************************************/
        case 257:/*MUESTRA PRIMERA ENCUESTA MANEKINS*/
            num_imagen = 0;
            /*DURACION INSTRUCCIONES 2 MINUTOS*/
            segundos = 120000;
            /*QUITA LA ULTIMA IMAGEN*/
            label.src = '';
            /*MUESTRA LA ENCUESTA*/
            encuesta.removeAttribute('hidden');
            break;
        case 258:/*INSTRUCCIONES 1 DE FASE 2*/
            num_imagen = 0;
            /*ENVIAR DATOS ENCUESTA MANEKIN*/
            enviarEncuesta(fase);
            fase++;
            /*DURACION INSTRUCCIONES 2 MINUTOS*/
            segundos = 120000;
            /*ESCONDE ENCUESTA MANEKINS*/
            encuesta.setAttribute('hidden', 'true');
            /*MUESTRA INSTRUCCIONES FASE 2*/
            instrucciones.innerHTML = ' <h1>A continuación las imágenes cambiaran de color, pero tu deberás seguir contestando' +
                ' como hasta ahora. Si tu\n' +
                'respuesta es incorrecta escucharás un sonido por un segundo y una cruz aparecerá; si respondes ' +
                'correctamente verás una señal que así lo indicará.\n' +
                'En seguida verás una pantalla negra, trata de fijar la mirada den la cruz y relajarte hasta que la tarea\n' +
                'comience.\n' +
                '</h1>';
            instrucciones.removeAttribute('hidden');
            break;
        case 259:/*PANTALLA NEGRA SEGUNDA FASE*/
            instrucciones.setAttribute('hidden', 'true');
            num_imagen = 0;
            segundos = 120000;
            label.src = listado_primera_fase[iterador];
            break;
        /***********************************************************FINAL FASE 2*****************************************************/
        case 518:/*ENCUESTA SEGUNDA FASE*/
            num_imagen = 0;
            /*DURACION INSTRUCCIONES 2 MINUTOS*/
            segundos = 120000;
            /*QUITA LA ULTIMA IMAGEN*/
            label.src = '';
            /*MUESTRA LA ENCUESTA*/
            encuesta.removeAttribute('hidden');
            break;
        case 519:/*INSTRUCCIONES  DE FASE 3*/
            num_imagen = 0;
            /*ENVIAR DATOS ENCUESTA MANEKIN*/
            enviarEncuesta(fase);
            fase++;
            /*DURACION INSTRUCCIONES 2 MINUTOS*/
            segundos = 120000;
            /*ESCONDE ENCUESTA MANEKINS*/
            encuesta.setAttribute('hidden', 'true');
            /*MUESTRA INSTRUCCIONES FASE 2*/
            instrucciones.innerHTML = '<h1>\n' +
                'La tarea volverá a ser igual que al inicio. no habrá señales que indiquen si tu respuesta fue correcta. \n' +
                'Trata de contestar lo mejor que puedas. En sesguida verás una pantalla negra, trata de fijar la mirada \n' +
                'en la cruz y relajarte hasta que la tarea comience.\n' +
                '</h1>'
            instrucciones.removeAttribute('hidden');
            break;
        case 520:/*PANTALLA NEGRA SEGUNDA FASE*/
            instrucciones.setAttribute('hidden', 'true');
            num_imagen = 0;
            segundos = 120000;
            label.src = listado_primera_fase[iterador];
            break;
        /***********************************************************FINAL FASE 3*****************************************************/
        case 775:/*TERCERA ENCUESTA MANEKINS*/
            num_imagen = 0;
            /*DURACION INSTRUCCIONES 2 MINUTOS*/
            segundos = 120000;
            /*QUITA LA ULTIMA IMAGEN*/
            label.src = '';
            /*MUESTRA LA ENCUESTA*/
            encuesta.removeAttribute('hidden');
            break;
        case 776:/*INSTRUCCIONES DE FASE 3*/
            num_imagen = 0;
            /*ENVIAR DATOS ENCUESTA MANEKIN*/
            enviarEncuesta(fase);
            /*DURACION INSTRUCCIONES 2 MINUTOS*/
            segundos = 120000;
            /*ESCONDE ENCUESTA MANEKINS*/
            encuesta.setAttribute('hidden', 'true');
            /*MUESTRA INSTRUCCIONES FASE 2*/
            instrucciones.innerHTML = '<h1>La tarea ha terminado. En seguida verás una pantalla negra, trata de fijar la' +
                ' mirada en la cruz y relajarte. No te muevas ni desconectes los sensores hasta que el investigador' +
                'te lo indique</h1>';
            instrucciones.removeAttribute('hidden');
            break;
        case 777:/*PANTALLA NEGRA SEGUNDA FASE*/
            instrucciones.setAttribute('hidden', 'true');
            num_imagen = 0;
            segundos = 120000;
            label.src = listado_primera_fase[iterador];
            /*REINICIO DE LA SESION*/
            sesionIniciada = fasle;
            break;
        default:
            label.src = listado_primera_fase[iterador]; // asignar el path al src
            break;
    }


    /*TESTING*/
    if (iterador < 220) {
        segundos = 10
    }
    /*TESTING*/

    console.log('***DURACION SEGUNDOS =' + segundos);
    // llamada recursiva con timer
    setTimeout(function () {
        if (iterador < listado_primera_fase.length - 1) { // romper la recursión si se llega a la ultima imagen
            iniciarSesion(iterador + 1);
        }
    }, segundos);
}

function checkKeyPressed(event) {
    var event = window.event ? window.event : e;


    if (sesionIniciada === true) {
        checkTiempoRespuesta();
        /*SI ES LA SEGUNDA FASE CHECA RESPUESTAS*/
        if (fase === 2) {
            checkRespuestasFase2(event.key, nombre_ensayo);
        }
    }
    /*REVISA QUE INICIE LA SESION Y NO SE PUEDA HASTA QUE TERMINE*/
    if (event.key === 'Enter' && sesionIniciada === false) {
        console.log('inició');
        sesionIniciada = true;
        iniciarSesion();
    }
}

function checkTiempoRespuesta() {
    intentosRespuesta++;
    date_fin = new Date();
    tiempo_fin = date_fin.getTime()
    let tiempo_final = tiempo_fin - tiempo_inicio;


    console.log("tiempo respuesta=" + tiempo_final);
    console.log('intento respuesta=' + intentosRespuesta);
    console.log("Tecla=" + event.keyCode)
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
            console.log("Resultado encuesta=" + res);
        }
    });
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

function checkRespuestasFase2(tecla, imagen) {
    switch (imagen) {
        case 'AA_1.png':
            if (tecla === '4') {
                console.log('RESPUESTA CORRECTA!');
                fase2Error.src = './img/palomita.png';
            } else {
                /*MUESTRA X*/
                fase2Error.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
            }
            break;
        case 'AA_4.png':
            if (tecla === '4') {
                console.log('RESPUESTA CORRECTA!');
                fase2Error.src = './img/palomita.png';
            } else {
                /*MUESTRA X*/
                fase2Error.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
            }
            break;
        case 'DA_3.png':
            if (tecla === '6') {
                console.log('RESPUESTA CORRECTA!');
                fase2Error.src = './img/palomita.png';
            } else {
                /*MUESTRA X*/
                fase2Error.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
            }
            break;
        case 'DN_2.png':
            if (tecla === '6') {
                console.log('RESPUESTA CORRECTA!');
                fase2Error.src = './img/palomita.png';
            } else {
                /*MUESTRA X*/
                fase2Error.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
            }
            break;
        case 'NA_1.png':
            if (tecla === '6') {
                console.log('RESPUESTA CORRECTA!');
                fase2Error.src = './img/palomita.png';
            } else {
                /*MUESTRA X*/
                fase2Error.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
            }
            break;
        case 'NA_4.png':
            if (tecla === '6') {
                console.log('RESPUESTA CORRECTA!');
                fase2Error.src = './img/palomita.png';
            } else {
                /*MUESTRA X*/
                fase2Error.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
            }
            break;
        case 'AA_2.png':
            if (tecla === '4') {
                console.log('RESPUESTA CORRECTA!');
                fase2Error.src = './img/palomita.png';
            } else {
                /*MUESTRA X*/
                fase2Error.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
            }
            break;
        case 'DA_1.png':
            if (tecla === '6') {
                console.log('RESPUESTA CORRECTA!');
                fase2Error.src = './img/palomita.png';
            } else {
                /*MUESTRA X*/
                fase2Error.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
            }
            break;
        case 'DA_4.png':
            if (tecla === '6') {
                console.log('RESPUESTA CORRECTA!');
                fase2Error.src = './img/palomita.png';
            } else {
                /*MUESTRA X*/
                fase2Error.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
            }
            break;
        case 'DN_3.png':
            if (tecla === '6') {
                console.log('RESPUESTA CORRECTA!');
                fase2Error.src = './img/palomita.png';
            } else {
                /*MUESTRA X*/
                fase2Error.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
            }
            break;
        case 'NA_2.png':
            if (tecla === '4') {
                console.log('RESPUESTA CORRECTA!');
                fase2Error.src = './img/palomita.png';
            } else {
                /*MUESTRA X*/
                fase2Error.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
            }
            break;
        case 'AA_3.png':
            if (tecla === '4') {
                console.log('RESPUESTA CORRECTA!');
                fase2Error.src = './img/palomita.png';
            } else {
                /*MUESTRA X*/
                fase2Error.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
            }
            break;
        case 'DA_2.png':
            if (tecla === '6') {
                console.log('RESPUESTA CORRECTA!');
                fase2Error.src = './img/palomita.png';
            } else {
                /*MUESTRA X*/
                fase2Error.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
            }
            break;
        case 'DN_1.png':
            if (tecla === '6') {
                console.log('RESPUESTA CORRECTA!');
                fase2Error.src = './img/palomita.png';
            } else {
                /*MUESTRA X*/
                fase2Error.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
            }
            break;
        case 'DN_4.png':
            if (tecla === '6') {
                console.log('RESPUESTA CORRECTA!');
                fase2Error.src = './img/palomita.png';
            } else {
                /*MUESTRA X*/
                fase2Error.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
            }
            break;
        case 'NA_3.png':
            if (tecla === '4') {
                console.log('RESPUESTA CORRECTA!');
                fase2Error.src = './img/palomita.png';
            } else {
                /*MUESTRA X*/
                fase2Error.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
            }
            break;
        case 'AAD_1.png':
            if (tecla === '2') {
                console.log('RESPUESTA CORRECTA!');
                fase2Error.src = './img/palomita.png';
            } else {
                /*MUESTRA X*/
                fase2Error.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
            }
            break;
        case 'AAD_4.png':
            if (tecla === '2') {
                console.log('RESPUESTA CORRECTA!');
                fase2Error.src = './img/palomita.png';
            } else {
                /*MUESTRA X*/
                fase2Error.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
            }
            break;
        case 'AAI_3.png':
            if (tecla === '8') {
                console.log('RESPUESTA CORRECTA!');
                fase2Error.src = './img/palomita.png';
            } else {
                /*MUESTRA X*/
                fase2Error.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
            }
            break;
        case 'AND_2.png':
            if (tecla === '2') {
                console.log('RESPUESTA CORRECTA!');
                fase2Error.src = './img/palomita.png';
            } else {
                /*MUESTRA X*/
                fase2Error.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
            }
            break;
        case 'ANI_1.png':
            if (tecla === '8') {
                console.log('RESPUESTA CORRECTA!');
                fase2Error.src = './img/palomita.png';
            } else {
                /*MUESTRA X*/
                fase2Error.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
            }
            break;
        case 'ANI_4.png':
            if (tecla === '8') {
                console.log('RESPUESTA CORRECTA!');
                fase2Error.src = './img/palomita.png';
            } else {
                /*MUESTRA X*/
                fase2Error.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
            }
            break;
        case 'AAD_2.png':
            if (tecla === '2') {
                console.log('RESPUESTA CORRECTA!');
                fase2Error.src = './img/palomita.png';
            } else {
                /*MUESTRA X*/
                fase2Error.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
            }
            break;
        case 'AAI_1.png':
            if (tecla === '8') {
                console.log('RESPUESTA CORRECTA!');
                fase2Error.src = './img/palomita.png';
            } else {
                /*MUESTRA X*/
                fase2Error.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
            }
            break;
        case 'AAI_4.png':
            if (tecla === '8') {
                console.log('RESPUESTA CORRECTA!');
                fase2Error.src = './img/palomita.png';
            } else {
                /*MUESTRA X*/
                fase2Error.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
            }
            break;
        case 'AND_3.png':
            if (tecla === '2') {
                console.log('RESPUESTA CORRECTA!');
                fase2Error.src = './img/palomita.png';
            } else {
                /*MUESTRA X*/
                fase2Error.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
            }
            break;
        case 'ANI_2.png':
            if (tecla === '8') {
                console.log('RESPUESTA CORRECTA!');
                fase2Error.src = './img/palomita.png';
            } else {
                /*MUESTRA X*/
                fase2Error.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
            }
            break;
        case 'AAD_3.png':
            if (tecla === '2') {
                console.log('RESPUESTA CORRECTA!');
                fase2Error.src = './img/palomita.png';
            } else {
                /*MUESTRA X*/
                fase2Error.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
            }
            break;
        case 'AAI_2.png':
            if (tecla === '8') {
                console.log('RESPUESTA CORRECTA!');
                fase2Error.src = './img/palomita.png';
            } else {
                /*MUESTRA X*/
                fase2Error.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
            }
            break;
        case 'AND_1.png':
            if (tecla === '2') {
                console.log('RESPUESTA CORRECTA!');
                fase2Error.src = './img/palomita.png';
            } else {
                /*MUESTRA X*/
                fase2Error.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
            }
            break;
        case 'AND_4.png':
            if (tecla === '2') {
                console.log('RESPUESTA CORRECTA!');
                fase2Error.src = './img/palomita.png';
            } else {
                /*MUESTRA X*/
                fase2Error.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
            }
            break;
        case 'ANI_3.png':
            if (tecla === '8') {
                console.log('RESPUESTA CORRECTA!');
                fase2Error.src = './img/palomita.png';
            } else {
                /*MUESTRA X*/
                fase2Error.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
            }
            break;
        case 'SA_3.png':
            if (tecla === '4') {
                console.log('RESPUESTA CORRECTA!');
                fase2Error.src = './img/palomita.png';
            } else {
                /*MUESTRA X*/
                fase2Error.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
            }
            break;
        case 'SA_6.png':
            if (tecla === '4') {
                console.log('RESPUESTA CORRECTA!');
                fase2Error.src = './img/palomita.png';
            } else {
                /*MUESTRA X*/
                fase2Error.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
            }
            break;
        case 'SN_1.png':
            if (tecla === '6') {
                console.log('RESPUESTA CORRECTA!');
                fase2Error.src = './img/palomita.png';
            } else {
                /*MUESTRA X*/
                fase2Error.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
            }
            break;
        case 'SN_4.png':
            if (tecla === '6') {
                console.log('RESPUESTA CORRECTA!');
                fase2Error.src = './img/palomita.png';
            } else {
                /*MUESTRA X*/
                fase2Error.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
            }
            break;
        case 'SN_7.png':
            if (tecla === '6') {
                console.log('RESPUESTA CORRECTA!');
                fase2Error.src = './img/palomita.png';
            } else {
                /*MUESTRA X*/
                fase2Error.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
            }
            break;
        case 'SA_1.png':
            if (tecla === '4') {
                console.log('RESPUESTA CORRECTA!');
                fase2Error.src = './img/palomita.png';
            } else {
                /*MUESTRA X*/
                fase2Error.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
            }
            break;
        case 'SA_4.png':
            if (tecla === '4') {
                console.log('RESPUESTA CORRECTA!');
                fase2Error.src = './img/palomita.png';
            } else {
                /*MUESTRA X*/
                fase2Error.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
            }
            break;
        case 'SA_7.png':
            if (tecla === '4') {
                console.log('RESPUESTA CORRECTA!');
                fase2Error.src = './img/palomita.png';
            } else {
                /*MUESTRA X*/
                fase2Error.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
            }
            break;
        case 'SN_2.png':
            if (tecla === '6') {
                console.log('RESPUESTA CORRECTA!');
                fase2Error.src = './img/palomita.png';
            } else {
                /*MUESTRA X*/
                fase2Error.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
            }
            break;
        case 'SN_5.png':
            if (tecla === '6') {
                console.log('RESPUESTA CORRECTA!');
                fase2Error.src = './img/palomita.png';
            } else {
                /*MUESTRA X*/
                fase2Error.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
            }
            break;
        case 'SN_8.png':
            if (tecla === '6') {
                console.log('RESPUESTA CORRECTA!');
                fase2Error.src = './img/palomita.png';
            } else {
                /*MUESTRA X*/
                fase2Error.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
            }
            break;
        case 'SA_2.png':
            if (tecla === '4') {
                console.log('RESPUESTA CORRECTA!');
                fase2Error.src = './img/palomita.png';
            } else {
                /*MUESTRA X*/
                fase2Error.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
            }
            break;
        case 'SA_5.png':
            if (tecla === '4') {
                console.log('RESPUESTA CORRECTA!');
                fase2Error.src = './img/palomita.png';
            } else {
                /*MUESTRA X*/
                fase2Error.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
            }
            break;
        case 'SA_8.png':
            if (tecla === '4') {
                console.log('RESPUESTA CORRECTA!');
                fase2Error.src = './img/palomita.png';
            } else {
                /*MUESTRA X*/
                fase2Error.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
            }
            break;
        case 'SN_3.png':
            if (tecla === '6') {
                console.log('RESPUESTA CORRECTA!');
                fase2Error.src = './img/palomita.png';
            } else {
                /*MUESTRA X*/
                fase2Error.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
            }
            break;
        case 'SN_6.png':
            if (tecla === '6') {
                console.log('RESPUESTA CORRECTA!');
                fase2Error.src = './img/palomita.png';
            } else {
                /*MUESTRA X*/
                fase2Error.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
            }
            break;
        case 'ACS_1.png':
            if (tecla === '8') {
                console.log('RESPUESTA CORRECTA!');
                fase2Error.src = './img/palomita.png';
            } else {
                /*MUESTRA X*/
                fase2Error.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
            }
            break;
        case 'ACS_4.png':
            if (tecla === '8') {
                console.log('RESPUESTA CORRECTA!');
                fase2Error.src = './img/palomita.png';
            } else {
                /*MUESTRA X*/
                fase2Error.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
            }
            break;
        case 'ACS_7.png':
            if (tecla === '8') {
                console.log('RESPUESTA CORRECTA!');
                fase2Error.src = './img/palomita.png';
            } else {
                /*MUESTRA X*/
                fase2Error.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
            }
            break;
        case 'NCS_2.png':
            if (tecla === '2') {
                console.log('RESPUESTA CORRECTA!');
                fase2Error.src = './img/palomita.png';
            } else {
                /*MUESTRA X*/
                fase2Error.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
            }
            break;
        case 'NCS_5.png':
            if (tecla === '2') {
                console.log('RESPUESTA CORRECTA!');
                fase2Error.src = './img/palomita.png';
            } else {
                /*MUESTRA X*/
                fase2Error.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
            }
            break;
        case 'NCS_8.png':
            if (tecla === '2') {
                console.log('RESPUESTA CORRECTA!');
                fase2Error.src = './img/palomita.png';
            } else {
                /*MUESTRA X*/
                fase2Error.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
            }
            break;
        case 'ACS_2.png':
            if (tecla === '8') {
                console.log('RESPUESTA CORRECTA!');
                fase2Error.src = './img/palomita.png';
            } else {
                /*MUESTRA X*/
                fase2Error.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
            }
            break;
        case 'ACS_5.png':
            if (tecla === '8') {
                console.log('RESPUESTA CORRECTA!');
                fase2Error.src = './img/palomita.png';
            } else {
                /*MUESTRA X*/
                fase2Error.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
            }
            break;
        case 'ACS_8.png':
            if (tecla === '8') {
                console.log('RESPUESTA CORRECTA!');
                fase2Error.src = './img/palomita.png';
            } else {
                /*MUESTRA X*/
                fase2Error.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
            }
            break;
        case 'NCS_3.png':
            if (tecla === '2') {
                console.log('RESPUESTA CORRECTA!');
                fase2Error.src = './img/palomita.png';
            } else {
                /*MUESTRA X*/
                fase2Error.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
            }
            break;
        case 'NCS_6.png':
            if (tecla === '2') {
                console.log('RESPUESTA CORRECTA!');
                fase2Error.src = './img/palomita.png';
            } else {
                /*MUESTRA X*/
                fase2Error.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
            }
            break;
        case 'ACS_3.png':
            if (tecla === '8') {
                console.log('RESPUESTA CORRECTA!');
                fase2Error.src = './img/palomita.png';
            } else {
                /*MUESTRA X*/
                fase2Error.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
            }
            break;
        case 'ACS_6.png':
            if (tecla === '8') {
                console.log('RESPUESTA CORRECTA!');
                fase2Error.src = './img/palomita.png';
            } else {
                /*MUESTRA X*/
                fase2Error.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
            }
            break;
        case 'NCS_1.png':
            if (tecla === '2') {
                console.log('RESPUESTA CORRECTA!');
                fase2Error.src = './img/palomita.png';
            } else {
                /*MUESTRA X*/
                fase2Error.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
            }
            break;
        case 'NCS_4.png':
            if (tecla === '2') {
                console.log('RESPUESTA CORRECTA!');
                fase2Error.src = './img/palomita.png';
            } else {
                /*MUESTRA X*/
                fase2Error.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
            }
            break;
        case 'NCS_7.png':
            if (tecla === '2') {
                console.log('RESPUESTA CORRECTA!');
                fase2Error.src = './img/palomita.png';
            } else {
                /*MUESTRA X*/
                fase2Error.src = './img/tacha.png'
                /*RESPRODUCE SONIDO*/
                sonido_error.play();
            }
            break;
    }
}