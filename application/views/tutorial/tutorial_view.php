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
    <img id="imagen_tutorial" src="">
</div>
<div id="div_instrucciones" align="center">
    <h1>Tutorial</h1>
    <h3>A continuación aparecerá una secuencia de pantallas; primero una pantalla blanca con una cruz negra al
        centro; después una pantalla de color azul o verde que te indicarán las figuras que se presentarán a
        continuación. Después de las pantallas de color (azul o verde) verás un conjunto de contornos circulares.
        Posteriormente dentro de los contornos circulares aparecerán figuras.
        Tu tarea será identificar en cada ensayo donde aparece una figura, la cual puede ser un cuadrado o rombo/ un
        círculo u óvalo. A veces solo aparecerá una figura, otras veces puede haber más, pero siempre habrá una
        figura presente en uno de los contornos circulares (cuadrado, rombo, círculo u óvalo).
    </h3>
    <button type="button" class="btn btn-primary" onclick="tutorialInstruccionVerdes(1)">Siguiente</button>
</div>

</body>
<script src="./bootstrap/js/tutorial.js"></script>
</html>