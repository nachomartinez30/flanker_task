<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Encuesta extends CI_Controller
{

    public function index()
    {
        $this->load->model('encuesta_model');
        var_dump($_GET);
        echo "PRUEBA BASE DE DATOS";

        $resultado = $this->encuesta_model->getEncuesta();
        var_dump($resultado);
    }

}

/* End of file Encuesta.php */
/* Location: ./application/controllers/Encuesta.php */