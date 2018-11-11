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
<div align="center">
    <div hidden id="div_encuesta" class="checklist">
        <div class="radio row">
            <h3>Selecciona con un clic las opciones que describen como te sentiste en la realización de la tarea. Tienes
                2 minutos para responder. Después de contestar espera las siguientes indicaciones.No Pulses ninguna
                tecla
            </h3>
            <form id="frm_encuesta" action="../controllers/Encuesta.php" method="post">
                <label class="offset-1 col-md-2">
                    <img src="img/encuesta/fila1_1.png" class="img-fluid"><br>
                    <input type="radio" name="psico_1" value="1">
                </label>
                <label class="col-md-2">
                    <img src="img/encuesta/fila1_2.png" class="img-fluid"><br>
                    <input type="radio" name="psico_1" value="2">
                </label>
                <label class="col-md-2">
                    <img src="img/encuesta/fila1_3.png" class="img-fluid"><br>
                    <input type="radio" name="psico_1" value="3">
                </label>
                <label class="col-md-2">
                    <img src="img/encuesta/fila1_4.png" class="img-fluid"><br>
                    <input type="radio" name="psico_1" value="4">
                </label>
                <label class="col-md-2">
                    <img src="img/encuesta/fila1_5.png" class="img-fluid"><br>
                    <input type="radio" name="psico_1" value="5">
                </label>
                <!--Fila 2-->
                <label class="offset-1 col-md-2">
                    <img src="img/encuesta/fila2_1.png" class="img-fluid"><br>
                    <input type="radio" name="psico_2" value="1">
                </label>
                <label class="col-md-2">
                    <img src="img/encuesta/fila2_2.png" class="img-fluid"><br>
                    <input type="radio" name="psico_2" value="2">
                </label>
                <label class="col-md-2">
                    <img src="img/encuesta/fila2_3.png" class="img-fluid"><br>
                    <input type="radio" name="psico_2" value="3">
                </label>
                <label class="col-md-2">
                    <img src="img/encuesta/fila2_4.png" class="img-fluid"><br>
                    <input type="radio" name="psico_2" value="4">
                </label>
                <label class="col-md-2">
                    <img src="img/encuesta/fila2_5.png" class="img-fluid"><br>
                    <input type="radio" name="psico_2" value="5">
                </label>
                <!--Fila 3-->
                <label class="offset-1 col-md-2">
                    <img src="img/encuesta/fila3_1.png" class="img-fluid"><br>
                    <input type="radio" name="psico_3" value="1">
                </label>
                <label class="col-md-2">
                    <img src="img/encuesta/fila3_2.png" class="img-fluid"><br>
                    <input type="radio" name="psico_3" value="2">
                </label>
                <label class="col-md-2">
                    <img src="img/encuesta/fila3_3.png" class="img-fluid"><br>
                    <input type="radio" name="psico_3" value="3">
                </label>
                <label class="col-md-2">
                    <img src="img/encuesta/fila3_4.png" class="img-fluid"><br>
                    <input type="radio" name="psico_3" value="4">
                </label>
                <label class="col-md-2">
                    <img src="img/encuesta/fila3_5.png" class="img-fluid"><br>
                    <input type="radio" name="psico_3" value="5">
                </label>
            </form>
        </div>
    </div>

    <img id="pantalla_principal" src="./img/pantalla_negra.png">

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