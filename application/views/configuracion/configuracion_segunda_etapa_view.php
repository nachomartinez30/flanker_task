<!DOCTYPE html>
<html>
<head>
    <script src="./bootstrap/js/jquery-3.3.1.js"></script>
    <link rel="stylesheet" href="./bootstrap/css/bootstrap.css">
    <link rel="stylesheet" href="./style.css">
    <script src="./bootstrap/js/bootstrap.js"></script>
    <script src="http://localhost/flanker_task/EasyAutocomplete-1.3.5/jquery.easy-autocomplete.js"></script>
    <meta charset="utf-8">
    <title>Configuración</title>
</head>

<body class="py-5 text-center bg-dark-red text-white">
<div>
    <div class="container">
        <div class="row">


            <div class="p-5 col-lg-6 col-10 mx-auto border">

                <h1 class="mb-4">Configuración segunda etapa</h1>
                <form action="config_seg_etapa/set_sujeto" method="post"
                      onsubmit="getRegistros($('#sujeto_config_2_etapa').val())">
                    <div class="form-group">
                        <input name="sujeto_2_etapa" type="text" class="form-control"
                               placeholder="Inserte identificador del sujeto a programar" id="sujeto_config_2_etapa"

                               style="">
                    </div>
                    <div class="form-group"></div>
                    <div class="form-group">
                        <small class="form-text text-muted text-right">Configuración actual del
                            sujeto: <?php if (isset($_SESSION['sujeto_2_etapa'])) {
                                echo '<b>' . $_SESSION['sujeto_2_etapa'];
                            } ?></b></small>
                    </div>
                    <button type="button" class="btn btn-warning" id="btnAsignar">Asignar
                    </button>
                </form>
                <br>
                <br>
                <br>
                <button class="btn btn-primary"
                        onclick="window.location.href ='http://localhost/flanker_task/tutorial'">Ir a Tutorial
                </button>
                <button class="btn btn-alert" onclick="window.location.href ='http://localhost/flanker_task/'">Config.
                    Inicial
                </button>
                <button class="btn btn-success" onclick="window.location.href ='http://localhost/flanker_task/sesion'">
                    Ir a Sesión
                </button>
            </div>
        </div>
    </div>
</div>
</body>

<script type="text/javascript">


    /*AUTOCOMPLETADO del input*/
    var options = {
        url: "sujetos.json",
        getValue: "sujeto",
        list: {
            match: {
                enabled: true
            }
        },
        theme: "round"
    };

    $("#sujeto_config_2_etapa").easyAutocomplete(options);

    /*AUTOCOMPLETADO*/


</script>
</html>