<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Encuesta extends CI_Controller
{

    function __construct()
    {
        parent::__construct();
        $this->load->database();
        $this->load->model('encuesta_model');
    }

    public function index()
    {
        $data['sujeto'] = 'PRUEBA_PILOTO';
        $data['fase'] = $_GET['fase'];

        $fila_1 = $_GET['fila_1'];
        $fila_2 = $_GET['fila_2'];
        $fila_3 = $_GET['fila_3'];

        if ($fila_1 == 'undefined') {
            $fila_1 = 0;
        }
        if ($fila_2 == 'undefined') {
            $fila_2 = 0;
        }
        if ($fila_3 == 'undefined') {
            $fila_3 = 0;
        }


        $data['fila_1'] = $fila_1;
        $data['fila_2'] = $fila_2;
        $data['fila_3'] = $fila_3;

        $resultado = $this->encuesta_model->InsertEncuesta($data);
        if ($resultado == true) {
            echo "insertado";
        } else {
            echo "error";
        }
    }

}

/* End of file Encuesta.php */
/* Location: ./application/controllers/Encuesta.php */