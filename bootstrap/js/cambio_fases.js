var encuesta = document.getElementById('div_encuesta');
var instrucciones_2_fase = document.getElementById('div_instrucciones_fase_2')

var date_inicio;
var date_fin;
var tiempo_inicio;
var tiempo_fin;
var segundos = /*10*60000*/8000;

/*RESPUESTAS ENCUESTA MANEKINS*/
var frm_encuesta = document.getElementById('frm_encuesta');

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
    './img/2_fase/pantalla_naranja.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/ACS_3.png',
    './img/2_fase/pantalla_naranja.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/ACS_1.png',
    './img/2_fase/pantalla_amarilla.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/AND_3.png',
    './img/2_fase/pantalla_amarilla.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/ANI_2.png',
    './img/2_fase/pantalla_amarilla.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/ACS_6.png',
    './img/2_fase/pantalla_amarilla.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/NCS_2.png',
    './img/2_fase/pantalla_naranja.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/NCS_6.png',
    './img/2_fase/pantalla_amarilla.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/NCS_5.png',
    './img/2_fase/pantalla_amarilla.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/AAI_3.png',
    './img/2_fase/pantalla_amarilla.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/ANI_1.png',
    './img/2_fase/pantalla_amarilla.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/SA_4.png',
    './img/2_fase/pantalla_amarilla.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/ACS_2.png',
    './img/2_fase/pantalla_naranja.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/SN_7.png',
    './img/2_fase/pantalla_naranja.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/DA_1.png',
    './img/2_fase/pantalla_amarilla.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/DN_3.png',
    './img/2_fase/pantalla_naranja.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/AAD_2.png',
    './img/2_fase/pantalla_naranja.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/ACS_5.png',
    './img/2_fase/pantalla_amarilla.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/ANI_3.png',
    './img/2_fase/pantalla_amarilla.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/DN_2.png',
    './img/2_fase/pantalla_amarilla.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/DN_4.png',
    './img/2_fase/pantalla_amarilla.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/DA_3.png',
    './img/2_fase/pantalla_naranja.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/SA_3.png',
    './img/2_fase/pantalla_naranja.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/SN_8.png',
    './img/2_fase/pantalla_naranja.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/AA_2.png',
    './img/2_fase/pantalla_amarilla.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/SN_4.png',
    './img/2_fase/pantalla_amarilla.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/SN_6.png',
    './img/2_fase/pantalla_amarilla.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/AA_4.png',
    './img/2_fase/pantalla_naranja.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/DA_4.png',
    './img/2_fase/pantalla_naranja.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/AND_4.png',
    './img/2_fase/pantalla_amarilla.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/AND_1.png',
    './img/2_fase/pantalla_naranja.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/SA_8.png',
    './img/2_fase/pantalla_amarilla.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/AA_1.png',
    './img/2_fase/pantalla_amarilla.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/ACS_4.png',
    './img/2_fase/pantalla_naranja.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/SA_2.png',
    './img/2_fase/pantalla_amarilla.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/SN_3.png',
    './img/2_fase/pantalla_amarilla.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/AA_3.png',
    './img/2_fase/pantalla_naranja.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/AAI_1.png',
    './img/2_fase/pantalla_naranja.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/NCS_1.png',
    './img/2_fase/pantalla_amarilla.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/SA_7.png',
    './img/2_fase/pantalla_naranja.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/NA_2.png',
    './img/2_fase/pantalla_amarilla.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/SN_5.png',
    './img/2_fase/pantalla_amarilla.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/AAD_1.png',
    './img/2_fase/pantalla_naranja.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/NCS_8.png',
    './img/2_fase/pantalla_naranja.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/ACS_7.png',
    './img/2_fase/pantalla_naranja.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/NCS_3.png',
    './img/2_fase/pantalla_naranja.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/NCS_4.png',
    './img/2_fase/pantalla_naranja.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/SA_6.png',
    './img/2_fase/pantalla_amarilla.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/AAD_4.png',
    './img/2_fase/pantalla_amarilla.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/AND_2.png',
    './img/2_fase/pantalla_naranja.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/AAI_4.png',
    './img/2_fase/pantalla_amarilla.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/DN_1.png',
    './img/2_fase/pantalla_amarilla.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/SA_1.png',
    './img/2_fase/pantalla_amarilla.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/NA_3.png',
    './img/2_fase/pantalla_naranja.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/NA_1.png',
    './img/2_fase/pantalla_naranja.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/SN_1.png',
    './img/2_fase/pantalla_amarilla.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/NCS_7.png',
    './img/2_fase/pantalla_naranja.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/ACS_8.png',
    './img/2_fase/pantalla_naranja.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/AAI_2.png',
    './img/2_fase/pantalla_naranja.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/SN_2.png',
    './img/2_fase/pantalla_naranja.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/ANI_4.png',
    './img/2_fase/pantalla_naranja.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/DA_2.png',
    './img/2_fase/pantalla_naranja.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/AAD_3.png',
    './img/2_fase/pantalla_naranja.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/NA_4.png',
    './img/2_fase/pantalla_amarilla.png',
    './img/1_3_fase/contornos.png',
    './img/2_fase/ensayos/SA_5.png',
    /*FINAL SEGUNDA ETAPA*/
]

// var listado_tercera_fase = ['./img/1_3_fase/cruz.png', './img/1_3_fase/pantalla_verde.png', './img/1_3_fase/contornos.png', './img/1_3_fase/verdes/V_14.png', './img/1_3_fase/cruz.png', './img/1_3_fase/pantalla_azul.png', './img/1_3_fase/contornos.png', './img/1_3_fase/azul/A_25.png', './img/1_3_fase/cruz.png', './img/1_3_fase/pantalla_verde.png', './img/1_3_fase/contornos.png', './img/1_3_fase/verdes/V_30.png', './img/1_3_fase/cruz.png', './img/1_3_fase/pantalla_azul.png', './img/1_3_fase/contornos.png', './img/1_3_fase/azul/A_11.png', './img/1_3_fase/cruz.png', './img/1_3_fase/pantalla_verde.png', './img/1_3_fase/contornos.png', './img/1_3_fase/verdes/V_28.png', './img/1_3_fase/cruz.png', './img/1_3_fase/pantalla_azul.png', './img/1_3_fase/contornos.png', './img/1_3_fase/azul/A_10.png', './img/1_3_fase/cruz.png', './img/1_3_fase/pantalla_verde.png', './img/1_3_fase/contornos.png', './img/1_3_fase/verdes/V_23.png', './img/1_3_fase/cruz.png', './img/1_3_fase/pantalla_verde.png', './img/1_3_fase/contornos.png', './img/1_3_fase/verdes/V_1.png', './img/1_3_fase/cruz.png', './img/1_3_fase/pantalla_azul.png', './img/1_3_fase/contornos.png', './img/1_3_fase/azul/A_1.png', './img/1_3_fase/cruz.png', './img/1_3_fase/pantalla_azul.png', './img/1_3_fase/contornos.png', './img/1_3_fase/azul/A_26.png', './img/1_3_fase/cruz.png', './img/1_3_fase/pantalla_azul.png', './img/1_3_fase/contornos.png', './img/1_3_fase/azul/A_14.png', './img/1_3_fase/cruz.png', './img/1_3_fase/pantalla_verde.png', './img/1_3_fase/contornos.png', './img/1_3_fase/verdes/V_24.png', './img/1_3_fase/cruz.png', './img/1_3_fase/pantalla_azul.png', './img/1_3_fase/contornos.png', './img/1_3_fase/azul/A_16.png', './img/1_3_fase/cruz.png', './img/1_3_fase/pantalla_azul.png', './img/1_3_fase/contornos.png', './img/1_3_fase/azul/A_13.png', './img/1_3_fase/cruz.png', './img/1_3_fase/pantalla_azul.png', './img/1_3_fase/contornos.png', './img/1_3_fase/azul/A_20.png', './img/1_3_fase/cruz.png', './img/1_3_fase/pantalla_verde.png', './img/1_3_fase/contornos.png', './img/1_3_fase/verdes/V_6.png', './img/1_3_fase/cruz.png', './img/1_3_fase/pantalla_azul.png', './img/1_3_fase/contornos.png', './img/1_3_fase/azul/A_12.png', './img/1_3_fase/cruz.png', './img/1_3_fase/pantalla_verde.png', './img/1_3_fase/contornos.png', './img/1_3_fase/verdes/V_3.png', './img/1_3_fase/cruz.png', './img/1_3_fase/pantalla_verde.png', './img/1_3_fase/contornos.png', './img/1_3_fase/verdes/V_19.png', './img/1_3_fase/cruz.png', './img/1_3_fase/pantalla_azul.png', './img/1_3_fase/contornos.png', './img/1_3_fase/azul/A_23.png', './img/1_3_fase/cruz.png', './img/1_3_fase/pantalla_azul.png', './img/1_3_fase/contornos.png', './img/1_3_fase/azul/A_31.png', './img/1_3_fase/cruz.png', './img/1_3_fase/pantalla_verde.png', './img/1_3_fase/contornos.png', './img/1_3_fase/verdes/V_32.png', './img/1_3_fase/cruz.png', './img/1_3_fase/pantalla_verde.png', './img/1_3_fase/contornos.png', './img/1_3_fase/verdes/V_4.png', './img/1_3_fase/cruz.png', './img/1_3_fase/pantalla_verde.png', './img/1_3_fase/contornos.png', './img/1_3_fase/verdes/V_21.png', './img/1_3_fase/cruz.png', './img/1_3_fase/pantalla_azul.png', './img/1_3_fase/contornos.png', './img/1_3_fase/azul/A_6.png', './img/1_3_fase/cruz.png', './img/1_3_fase/pantalla_verde.png', './img/1_3_fase/contornos.png', './img/1_3_fase/verdes/V_13.png', './img/1_3_fase/cruz.png', './img/1_3_fase/pantalla_verde.png', './img/1_3_fase/contornos.png', './img/1_3_fase/verdes/V_20.png', './img/1_3_fase/cruz.png', './img/1_3_fase/pantalla_azul.png', './img/1_3_fase/contornos.png', './img/1_3_fase/azul/A_15.png', './img/1_3_fase/cruz.png', './img/1_3_fase/pantalla_verde.png', './img/1_3_fase/contornos.png', './img/1_3_fase/verdes/V_5.png', './img/1_3_fase/cruz.png', './img/1_3_fase/pantalla_verde.png', './img/1_3_fase/contornos.png', './img/1_3_fase/verdes/V_17.png', './img/1_3_fase/cruz.png', './img/1_3_fase/pantalla_verde.png', './img/1_3_fase/contornos.png', './img/1_3_fase/verdes/V_11.png', './img/1_3_fase/cruz.png', './img/1_3_fase/pantalla_azul.png', './img/1_3_fase/contornos.png', './img/1_3_fase/azul/A_29.png', './img/1_3_fase/cruz.png', './img/1_3_fase/pantalla_azul.png', './img/1_3_fase/contornos.png', './img/1_3_fase/azul/A_30.png', './img/1_3_fase/cruz.png', './img/1_3_fase/pantalla_azul.png', './img/1_3_fase/contornos.png', './img/1_3_fase/azul/A_5.png', './img/1_3_fase/cruz.png', './img/1_3_fase/pantalla_verde.png', './img/1_3_fase/contornos.png', './img/1_3_fase/verdes/V_31.png', './img/1_3_fase/cruz.png', './img/1_3_fase/pantalla_verde.png', './img/1_3_fase/contornos.png', './img/1_3_fase/verdes/V_27.png', './img/1_3_fase/cruz.png', './img/1_3_fase/pantalla_azul.png', './img/1_3_fase/contornos.png', './img/1_3_fase/azul/A_32.png', './img/1_3_fase/cruz.png', './img/1_3_fase/pantalla_verde.png', './img/1_3_fase/contornos.png', './img/1_3_fase/verdes/V_29.png', './img/1_3_fase/cruz.png', './img/1_3_fase/pantalla_azul.png', './img/1_3_fase/contornos.png', './img/1_3_fase/azul/A_3.png', './img/1_3_fase/cruz.png', './img/1_3_fase/pantalla_verde.png', './img/1_3_fase/contornos.png', './img/1_3_fase/verdes/V_2.png', './img/1_3_fase/cruz.png', './img/1_3_fase/pantalla_verde.png', './img/1_3_fase/contornos.png', './img/1_3_fase/verdes/V_9.png', './img/1_3_fase/cruz.png', './img/1_3_fase/pantalla_verde.png', './img/1_3_fase/contornos.png', './img/1_3_fase/verdes/V_7.png', './img/1_3_fase/cruz.png', './img/1_3_fase/pantalla_azul.png', './img/1_3_fase/contornos.png', './img/1_3_fase/azul/A_28.png', './img/1_3_fase/cruz.png', './img/1_3_fase/pantalla_verde.png', './img/1_3_fase/contornos.png', './img/1_3_fase/verdes/V_16.png', './img/1_3_fase/cruz.png', './img/1_3_fase/pantalla_azul.png', './img/1_3_fase/contornos.png', './img/1_3_fase/azul/A_18.png', './img/1_3_fase/cruz.png', './img/1_3_fase/pantalla_verde.png', './img/1_3_fase/contornos.png', './img/1_3_fase/verdes/V_15.png', './img/1_3_fase/cruz.png', './img/1_3_fase/pantalla_verde.png', './img/1_3_fase/contornos.png', './img/1_3_fase/verdes/V_22.png', './img/1_3_fase/cruz.png', './img/1_3_fase/pantalla_verde.png', './img/1_3_fase/contornos.png', './img/1_3_fase/verdes/V_25.png', './img/1_3_fase/cruz.png', './img/1_3_fase/pantalla_azul.png', './img/1_3_fase/contornos.png', './img/1_3_fase/azul/A_24.png', './img/1_3_fase/cruz.png', './img/1_3_fase/pantalla_azul.png', './img/1_3_fase/contornos.png', './img/1_3_fase/azul/A_8.png', './img/1_3_fase/cruz.png', './img/1_3_fase/pantalla_azul.png', './img/1_3_fase/contornos.png', './img/1_3_fase/azul/A_17.png', './img/1_3_fase/cruz.png', './img/1_3_fase/pantalla_verde.png', './img/1_3_fase/contornos.png', './img/1_3_fase/verdes/V_26.png', './img/1_3_fase/cruz.png', './img/1_3_fase/pantalla_azul.png', './img/1_3_fase/contornos.png', './img/1_3_fase/azul/A_19.png', './img/1_3_fase/cruz.png', './img/1_3_fase/pantalla_azul.png', './img/1_3_fase/contornos.png', './img/1_3_fase/azul/A_9.png', './img/1_3_fase/cruz.png', './img/1_3_fase/pantalla_azul.png', './img/1_3_fase/contornos.png', './img/1_3_fase/azul/A_7.png', './img/1_3_fase/cruz.png', './img/1_3_fase/pantalla_verde.png', './img/1_3_fase/contornos.png', './img/1_3_fase/verdes/V_10.png', './img/1_3_fase/cruz.png', './img/1_3_fase/pantalla_azul.png', './img/1_3_fase/contornos.png', './img/1_3_fase/azul/A_22.png', './img/1_3_fase/cruz.png', './img/1_3_fase/pantalla_azul.png', './img/1_3_fase/contornos.png', './img/1_3_fase/azul/A_21.png', './img/1_3_fase/cruz.png', './img/1_3_fase/pantalla_verde.png', './img/1_3_fase/contornos.png', './img/1_3_fase/verdes/V_18.png', './img/1_3_fase/cruz.png', './img/1_3_fase/pantalla_azul.png', './img/1_3_fase/contornos.png', './img/1_3_fase/azul/A_4.png', './img/1_3_fase/cruz.png', './img/1_3_fase/pantalla_azul.png', './img/1_3_fase/contornos.png', './img/1_3_fase/azul/A_27.png', './img/1_3_fase/cruz.png', './img/1_3_fase/pantalla_azul.png', './img/1_3_fase/contornos.png', './img/1_3_fase/azul/A_2.png', './img/1_3_fase/cruz.png', './img/1_3_fase/pantalla_verde.png', './img/1_3_fase/contornos.png', './img/1_3_fase/verdes/V_8.png', './img/1_3_fase/cruz.png', './img/1_3_fase/pantalla_verde.png', './img/1_3_fase/contornos.png', './img/1_3_fase/verdes/V_12.png']

var label = document.getElementById('pantalla_principal');
var lista_imagenes = new Array();
var arreglo_ensayos = new Array();
var num_imagen = 0;
var contador_ensayos = 0;

function iniciarSesion(iterador) {
    console.log("***-------INICIO-------***");
    console.log("iterador=" + iterador);
    console.log("--CONTADOR ENSAYO=" + contador_ensayos);
    console.log('numero de imagen=' + num_imagen);
    if (iterador != undefined)/*CRUZ NEGRA*/{
        segundos = 4000;
        switch (num_imagen) {
            case 0:/*cruz*/
                console.log('cruz');
                switch (contador_ensayos) {
                    case 1:
                        segundos = 3000
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
                }
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
                num_imagen = -1;
                console.log('ensayo');
                segundos = 6000
                contador_ensayos++;
                break;
        }

    }

    var iterador = iterador || 0; // asignar valor de parametro, default 0 (si parametro es undefined)

    /*TERMINÓ PRIMERA FASE*/
    switch (iterador) {
        case 257:/*MUESTRA PRIMERA ENCUESTA MANEKINS*/
            num_imagen=0;
            /*DURACION INSTRUCCIONES 2 MINUTOS*/
            segundos = 120000;
            /*QUITA LA ULTIMA IMAGEN*/
            label.src = '';
            /*MUESTRA LA ENCUESTA*/
            encuesta.removeAttribute('hidden');
            break;
        case 258:/*INSTRUCCIONES 1 DE FASE 2*/
            /*ENVIAR DATOS ENCUESTA MANEKIN*/
            /*frm_encuesta.submit();*/
            enviarEncuesta(1);
            /*DURACION INSTRUCCIONES 2 MINUTOS*/
            fila_1 = document.getElementById('ra')
            segundos = 120000;
            /*ESCONDE ENCUESTA MANEKINS*/
            encuesta.setAttribute('hidden', 'true');
            /*MUESTRA INSTRUCCIONES FASE 2*/
            instrucciones_2_fase.removeAttribute('hidden');
            break;
        case 259:/*PANTALLA NEGRA SEGUNDA FASE*/
            segundos = 10 * 60000;
            label.src = listado_primera_fase[iterador];
            break;
        default:
            num_imagen++;
            label.src = listado_primera_fase[iterador]; // asignar el path al src
            break;
    }
    /*TESTING*/
   /* if (iterador == 257) {
        segundos = 8000
    } else {
        segundos = 100;
    }*/
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
    date_fin = new Date();
    tiempo_fin = date_fin.getTime()
    let tiempo_final = tiempo_fin - tiempo_inicio;

    console.log("tiempo respuesta=" + tiempo_final);
    console.log(event.keyCode)

    if (event.keyCode == 13) {
        console.log('inició');
        iniciarSesion();
    }
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
        success: function () {
            console.log('encuesta enviada');
        }
    });
}