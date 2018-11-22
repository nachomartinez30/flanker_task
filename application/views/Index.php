<!DOCTYPE html>
<html>
<head>

    <script src="./bootstrap/js/jquery-3.3.1.js"></script>
    <link rel="stylesheet" href="./bootstrap/css/bootstrap.css">
    <link rel="stylesheet" href="./style.css">
    <script src="./bootstrap/js/bootstrap.js"></script>
    <meta charset="utf-8">
    <title></title>
</head>
<body onkeypress="checkKeyPressed(event)">
<div align="center" class="borde">
    <div hidden id="div_encuesta" class="checklist">
        <div class="radio row">
            <h3>Selecciona con un clic las opciones que describen como te sentiste en la realización de la tarea. Tienes
                2 minutos para responder. Después de contestar espera las siguientes indicaciones.No Pulses ninguna
                tecla
            </h3>
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


                <div class="container raddio">
                    <label class="col-md-1">
                        1
                        <input type="radio" name="psico_1" value="1">
                    </label>

                    <label class="col-md-1">
                        2
                        <input type="radio" name="psico_1" value="2">
                    </label>
                    <label class="col-md-1">
                        3
                        <input type="radio" name="psico_1" value="3">
                    </label>

                    <label class="col-md-1">
                        4
                        <input type="radio" name="psico_1" value="4">
                    </label>
                    <label class="col-md-1">
                        5
                        <input type="radio" name="psico_1" value="5">
                    </label>
                    <label class="col-md-1">
                        6
                        <input type="radio" name="psico_1" value="6">
                    </label>
                    <label class="col-md-1">
                        7
                        <input type="radio" name="psico_1" value="7">
                    </label>

                    <label class="col-md-1">
                        8
                        <input type="radio" name="psico_1" value="8">
                    </label>

                    <label class="col-md-1">
                        9
                        <input type="radio" name="psico_1" value="9">
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


                <div class="container raddio">
                    <label class="col-md-1">
                        1
                        <input type="radio" name="psico_2" value="1">
                    </label>

                    <label class="col-md-1">
                        2
                        <input type="radio" name="psico_2" value="2">
                    </label>
                    <label class="col-md-1">
                        3
                        <input type="radio" name="psico_2" value="3">
                    </label>

                    <label class="col-md-1">
                        4
                        <input type="radio" name="psico_2" value="4">
                    </label>
                    <label class="col-md-1">

                        5
                        <input type="radio" name="psico_2" value="5">
                    </label>
                    <label class="col-md-1">

                        6
                        <input type="radio" name="psico_2" value="6">
                    </label>
                    <label class="col-md-1">
                        7
                        <input type="radio" name="psico_2" value="7">
                    </label>

                    <label class="col-md-1">
                        8
                        <input type="radio" name="psico_2" value="8">
                    </label>

                    <label class="col-md-1">
                        9
                        <input type="radio" name="psico_2" value="9">
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


                <div class="container raddio">
                    <label class="col-md-1">
                        1
                        <input type="radio" name="psico_3" value="1">
                    </label>

                    <label class="col-md-1">
                        2
                        <input type="radio" name="psico_3" value="2">
                    </label>
                    <label class="col-md-1">
                        3
                        <input type="radio" name="psico_3" value="3">
                    </label>

                    <label class="col-md-1">
                        4
                        <input type="radio" name="psico_3" value="4">
                    </label>
                    <label class="col-md-1">

                        5
                        <input type="radio" name="psico_3" value="5">
                    </label>
                    <label class="col-md-1">

                        6
                        <input type="radio" name="psico_3" value="6">
                    </label>
                    <label class="col-md-1">
                        7
                        <input type="radio" name="psico_3" value="7">
                    </label>

                    <label class="col-md-1">
                        8
                        <input type="radio" name="psico_3" value="8">
                    </label>

                    <label class="col-md-1">
                        9
                        <input type="radio" name="psico_3" value="9">
                    </label>
                </div>
            </form>
        </div>
    </div>

    <img id="pantalla_principal" src="./img/pantalla_negra.png">
    <img id='errorFase2' src="">
    <div id="encuesta" class="container">
    </div>
    <div hidden class="container" id="div_instrucciones">
    </div>

    <audio id="sonidoError">
        <source src="./img/sonido_error.mp3" type="audio/mpeg">
    </audio>
</div>
</body>
<script src="./bootstrap/js/cambio_fases.js"></script>
</html>