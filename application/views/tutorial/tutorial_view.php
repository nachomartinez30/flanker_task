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
<div id="cabecera_tutorial" align="center">
    <h1>Tutorial</h1>
</div>
<div align="center">
    <img class="no_cursor" id="imagen_tutorial" src="./img/tutorial/tuto_pantalla_blanca.png">
    <br>
</div>
<br>
<br>
<div id="div_instrucciones" align="center">

    <h3>A continuación aparecerá una secuencia de pantallas.
        <br>
        Primero una pantalla blanca con una cruz negra al centro;
    </h3>

    <button type="button" class="btn btn-success" onclick="tutorialInstruccionVerdes(1)">Siguiente</button>
</div>

</body>
<script src="./bootstrap/js/tutorial.js"></script>
</html>