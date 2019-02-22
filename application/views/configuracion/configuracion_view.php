<!DOCTYPE html>
<html>
<head>
    <script src="./bootstrap/js/jquery-3.3.1.js"></script>
    <link rel="stylesheet" href="./bootstrap/css/bootstrap.css">
    <link rel="stylesheet" href="./style.css">
    <script src="./bootstrap/js/bootstrap.js"></script>
    <meta charset="utf-8">
    <title>Configuración</title>
</head>
<body class="py-5 text-center bg-dark text-white">
<div>
    <div class="container">
        <div class="row">
            <div class="p-5 col-lg-6 col-10 mx-auto border">
                <h1 class="mb-4">Configuración</h1>
                <form action="config/set_sujeto" method="post">
                    <div class="form-group">
                        <input name="sujeto" type="text" class="form-control"
                               placeholder="Nombre del sujeto Ej. José Arriaga" id="form13" style="">
                    </div>
                    <div class="form-group"></div>
                    <div class="form-group">
                        <b class="form-text text-muted text-right">Sujeto actual
                            registrado: <?php if (isset($_SESSION['sujeto'])) {
                                echo "<b>" . $_SESSION['sujeto'];
                            } ?></b></small>
                    </div>
                    <button type="submit" class="btn btn-warning">Fijar</button>
                </form>
                <br>
                <br>
                <br>
                <button class="btn btn-primary"
                        onclick="window.location.href ='http://localhost/flanker_task/tutorial'">Ir a Tutorial
                </button>
                <button class="btn btn-success" onclick="window.location.href ='http://localhost/flanker_task/sesion'">
                    Ir a Sesión
                </button>
            </div>
        </div>
    </div>
</div>
</body>
</html>

