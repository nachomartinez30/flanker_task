<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="./bootstrap/js/jquery-3.3.1.js"></script>
    <link rel="stylesheet" href="./bootstrap/css/bootstrap.css">
    <link rel="stylesheet" href="./style.css">
    <script src="./bootstrap/js/bootstrap.js"></script>
    <meta charset="utf-8">
    <title></title>
</head>
<body onkeypress="checkKeyPressed(event)">
<div id="cuerpo_pagina" align="center" class="borde_inicio">
    <div hidden id="div_encuesta" class="checklist">
        <div class="radio row center-element">
            <h4>Selecciona con un clic: del uno (poco) al nueve (mucho) la opción que mejor describa cómo te sentiste en
                la realización de la tarea. Debes seleccionar una opción por fila. Tienes 1 minuto para responder.
                Después de contestar espera las siguientes indicaciones. No pulses ninguna tecla.
            </h4>
            <form id="frm_encuesta" action="../controllers/Encuesta.php" method="post">

                <div class="container row ">
                    <label class="col-md-2 arriba center-element">
                        <h5>Sentimiento</h5>
                    </label>

                    <label class="col-md-2">
                        <img src="img/encuesta/fila1_1.png" class="img-fluid"><br>
                    </label>

                    <label class="col-md-2">
                        <img src="img/encuesta/fila1_2.png" class="img-fluid"><br>
                    </label>

                    <label class="col-md-2">
                        <img src="img/encuesta/fila1_3.png" class="img-fluid"><br>
                    </label>

                    <label class="col-md-2">
                        <img src="img/encuesta/fila1_4.png" class="img-fluid"><br>
                    </label>

                    <label class="col-md-2">
                        <img src="img/encuesta/fila1_5.png" class="img-fluid"><br>
                    </label>
                </div>


                <div class="container raddio etiquetas">
                    <label  class="col-md-1">
                        <h6>Positivo</h6>
                    </label>
                    <label style="font-size: 25px" class="col-md-1">
                        1
                        <input class="radioButton" type="radio" name="psico_1" value="1">
                    </label>

                    <label style="font-size: 25px" class="col-md-1">
                        2
                        <input type="radio" name="psico_1" value="2">
                    </label>
                    <label style="font-size: 25px" class="col-md-1">
                        3
                        <input type="radio" name="psico_1" value="3">
                    </label>

                    <label style="font-size: 25px" class="col-md-1">
                        4
                        <input type="radio" name="psico_1" value="4">
                    </label>
                    <label style="font-size: 25px" class="col-md-1">
                        5
                        <input type="radio" name="psico_1" value="5">
                    </label>
                    <label style="font-size: 25px" class="col-md-1">
                        6
                        <input type="radio" name="psico_1" value="6">
                    </label>
                    <label style="font-size: 25px" class="col-md-1">
                        7
                        <input type="radio" name="psico_1" value="7">
                    </label>

                    <label style="font-size: 25px" class="col-md-1">
                        8
                        <input type="radio" name="psico_1" value="8">
                    </label>

                    <label style="font-size: 25px" class="col-md-1">
                        9
                        <input type="radio" name="psico_1" value="9">
                    </label>
                    <label  class="col-md-1">
                        <h6>Negativo</h6>
                    </label>
                </div>


                <!--Fila 2-->
                <div class="container row ">
                    <label class="col-md-2 arriba center-element">
                        <h5>Activación fisiológica</h5>
                    </label>
                    <label class="col-md-2">
                        <img src="img/encuesta/fila2_5.png" class="img-fluid"><br>
                    </label>

                    <label class="col-md-2">
                        <img src="img/encuesta/fila2_4.png" class="img-fluid"><br>
                    </label>

                    <label class="col-md-2">
                        <img src="img/encuesta/fila2_3.png" class="img-fluid"><br>
                    </label>

                    <label class="col-md-2">
                        <img src="img/encuesta/fila2_2.png" class="img-fluid"><br>
                    </label>

                    <label class="col-md-2">
                        <img src="img/encuesta/fila2_1.png" class="img-fluid"><br>

                    </label>
                </div>


                <div class="container raddio etiquetas">
                    <label  class="col-md-1">
                        <h6>Calma</h6>
                    </label>
                    <label style="font-size: 25px" class="col-md-1">
                        1
                        <input type="radio" name="psico_2" value="1">
                    </label>

                    <label style="font-size: 25px" class="col-md-1">
                        2
                        <input type="radio" name="psico_2" value="2">
                    </label>
                    <label style="font-size: 25px" class="col-md-1">
                        3
                        <input type="radio" name="psico_2" value="3">
                    </label>

                    <label style="font-size: 25px" class="col-md-1">
                        4
                        <input type="radio" name="psico_2" value="4">
                    </label>
                    <label style="font-size: 25px" class="col-md-1">

                        5
                        <input type="radio" name="psico_2" value="5">
                    </label>
                    <label style="font-size: 25px" class="col-md-1">

                        6
                        <input type="radio" name="psico_2" value="6">
                    </label>
                    <label style="font-size: 25px" class="col-md-1">
                        7
                        <input type="radio" name="psico_2" value="7">
                    </label>

                    <label style="font-size: 25px" class="col-md-1">
                        8
                        <input type="radio" name="psico_2" value="8">
                    </label>

                    <label style="font-size: 25px" class="col-md-1">
                        9
                        <input type="radio" name="psico_2" value="9">
                    </label>
                    <label  class="col-md-1">
                        <h6>Exitación</h6>
                    </label>
                </div>
                <!--Fila 3-->
                <div class="container row ">
                    <label class="col-md-2 arriba container-flex">
                        <h5>Control de la tarea</h5>
                    </label>
                    <label class="col-md-2">
                        <img src="img/encuesta/fila3_1.png" class="img-fluid"><br>
                    </label>

                    <label class="col-md-2">
                        <img src="img/encuesta/fila3_2.png" class="img-fluid"><br>
                    </label>

                    <label class="col-md-2">
                        <img src="img/encuesta/fila3_3.png" class="img-fluid"><br>
                    </label>

                    <label class="col-md-2">
                        <img src="img/encuesta/fila3_4.png" class="img-fluid"><br>
                    </label>

                    <label class="col-md-2">
                        <img src="img/encuesta/fila3_5.png" class="img-fluid"><br>
                    </label>
                </div>


                <div class="container raddio etiquetas">
                    <label  class="col-md-1" style="text-align: center">
                        <h6>Poco Dominio</h6>
                    </label>
                    <label style="font-size: 25px" class="col-md-1">
                        1
                        <input type="radio" name="psico_3" value="1">
                    </label>

                    <label style="font-size: 25px" class="col-md-1">
                        2
                        <input type="radio" name="psico_3" value="2">
                    </label>
                    <label style="font-size: 25px" class="col-md-1">
                        3
                        <input type="radio" name="psico_3" value="3">
                    </label>

                    <label style="font-size: 25px" class="col-md-1">
                        4
                        <input type="radio" name="psico_3" value="4">
                    </label>
                    <label style="font-size: 25px" class="col-md-1">

                        5
                        <input type="radio" name="psico_3" value="5">
                    </label>
                    <label style="font-size: 25px" class="col-md-1">

                        6
                        <input type="radio" name="psico_3" value="6">
                    </label>
                    <label style="font-size: 25px" class="col-md-1">
                        7
                        <input type="radio" name="psico_3" value="7">
                    </label>

                    <label style="font-size: 25px" class="col-md-1">
                        8
                        <input type="radio" name="psico_3" value="8">
                    </label>

                    <label style="font-size: 25px" class="col-md-1">
                        9
                        <input type="radio" name="psico_3" value="9">
                    </label>
                    <label  class="col-md-1" style="text-align: center">
                        <h6>Mucho Dominio</h6>
                    </label>
                </div>
            </form>
        </div>
    </div>

    <img class="no_cursor center-element" id="pantalla_principal" src="./img/pantalla_negra.png">
    <div id="encuesta" class="container">
    </div>
    <div hidden class="center-element" id="div_instrucciones">
    </div>

    <audio id="sonidoError">
        <source src="./img/sonido_error.mp3" type="audio/mpeg">
    </audio>

    <audio id="bipAviso">
        <source src="./img/bip.mp3" type="audio/mpeg">
    </audio>
</div>
</body>
<script src="./bootstrap/js/cambio_fases.js"></script>
</html>