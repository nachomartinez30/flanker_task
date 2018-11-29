<?php
defined('BASEPATH') OR exit('No direct script access allowed');


class Ensayos extends CI_Controller
{

    public function index()
    {

        $this->load->model('ensayos_model');
//        var_dump($_GET);
        $data['sujeto'] = $_SESSION['sujeto'];
        $data['tipo_ensayo'] = $_GET['tipo_ensayo'];
        $data['fase'] = $_GET['fase'];
        $data['tiempo_respuesta'] = $_GET['tiempo_respuesta'];
        $data['respuesta_sujeto'] = $_GET['tecla_primer_respuesta'];
        $data['correcto_incorrecto'] = $_GET['correcto_incorrecto'];
        $data['numero_ensayo'] = $_GET['numero_ensayo'];
        $data['cantidad_respuestas'] = $_GET['cantidad_respuestas'];
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
        fclose($fp);

    }

}

/* End of file Ensayos.php */
/* Location: ./application/controllers/Ensayos.php */