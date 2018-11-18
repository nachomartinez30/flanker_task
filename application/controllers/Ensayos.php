<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Ensayos extends CI_Controller
{

    public function index()
    {

        $this->load->model('ensayos_model');
        var_dump($_GET);
        $data['sujeto'] = 'Lorem Ipsum';
        $data['tipo_ensayo'] = $_GET['tipo_ensayo'];
        $data['tiempo_respuesta'] = $_GET['tiempo_respuesta'];
        $data['correcto_incorrecto'] = $_GET['correcto_incorrecto'];
        $data['numero_ensayo'] = $_GET['numero_ensayo'];
        $data['cantidad_respuestas'] = $_GET['cantidad_respuestas'];

        $respuesta = $this->ensayos_model->insertEnsayo($data);


    }

}

/* End of file Ensayos.php */
/* Location: ./application/controllers/Ensayos.php */