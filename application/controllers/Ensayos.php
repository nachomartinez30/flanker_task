<?php
defined('BASEPATH') OR exit('No direct script access allowed');


class Ensayos extends CI_Controller
{

    public function __construct()
    {
        parent::__construct();
        $this->load->model('ensayos_model');
    }

    public function index()
    {
//        var_dump($_GET);
        $data['sujeto'] = $_SESSION['sujeto'];
        $data['tipo_ensayo'] = $_GET['tipo_ensayo'];
        $data['fase'] = $_GET['fase'];
        $data['tiempo_respuesta'] = $_GET['tiempo_respuesta'];
        $data['respuesta_sujeto'] = $_GET['tecla_primer_respuesta'];
        $data['correcto_incorrecto'] = $_GET['correcto_incorrecto'];
        $data['numero_ensayo'] = $_GET['numero_ensayo'];
        $data['cantidad_respuestas'] = $_GET['cantidad_respuestas'];
        $data['etapa'] = $_GET['etapa'];
        $data['sujeto_configurado'] = $_GET['sujeto_configurado'];
        $respuesta = $this->ensayos_model->insert_ensayo($data);
    }

    public function write_log()
    {
        $sujeto = $_SESSION['sujeto'];
        $tipo_ensayo = $_GET['tipo_ensayo'];
        $fase = $_GET['fase'];
        $tecla_primer_respuesta = $_GET['tecla_primer_respuesta'];
        $numero_ensayo = $_GET['numero_ensayo'];
        $tiempo_respuesta = $_GET['tiempo_respuesta'];
        $correcto_incorrecto = $_GET['correcto_incorrecto'];
        $cantidad_respuestas = $_GET['cantidad_respuestas'];
        $etapa = $_GET['etapa'];
        $sujeto_configurado = $_GET['sujeto_configurado'];

        $fp = fopen('C:\xampp\htdocs\flanker_task\registros\log_' . $sujeto . '.txt', 'a');
        fwrite($fp, "--------------------------------------------------------\n");
        fwrite($fp, "sujeto=" . $sujeto . "\n");
        fwrite($fp, "fase=" . $fase . "\n");
        fwrite($fp, "tipo_ensayo=" . $tipo_ensayo . "\n");
        fwrite($fp, "tecla_primer_respuesta=" . $tecla_primer_respuesta . "\n");
        fwrite($fp, "tiempo_respuesta=" . $tiempo_respuesta . "\n");
        fwrite($fp, "correcto_incorrecto=" . $correcto_incorrecto . "\n");
        fwrite($fp, "numero_ensayo=" . $numero_ensayo . "\n");
        fwrite($fp, "cantidad_respuestas=" . $cantidad_respuestas . "\n");
        fwrite($fp, "etapa=" . $etapa . "\n");
        fwrite($fp, "sujeto_configurado=" . $sujeto_configurado . "\n");
        fclose($fp);

    }

    function get_ensayos_by_sujetos($subject)
    {

        $respuesta = $this->ensayos_model->get_ensayos_by_subject($subject);
        echo json_encode(Array('respuesta' => $respuesta));
        // var_dump($respuesta);

    }

    function get_name_sujeto($subject)
    {
        $respuesta = $this->ensayos_model->get_name_subject($subject);
        echo json_encode($respuesta);
    }

}

/* End of file Ensayos.php */
/* Location: ./application/controllers/Ensayos.php */