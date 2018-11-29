<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Configuracion extends CI_Controller
{

    public function index()
    {
        $this->load->view('configuracion/configuracion_view');
    }

    public function set_sujeto()
    {
        $sujeto = $_POST['sujeto'];
        $sujeto = str_replace(' ', '_', $sujeto);

        $_SESSION['sujeto'] = $sujeto;

        header('Location: http://localhost/flanker_task/');

    }

}

/* End of file Configuracion.php */
/* Location: ./application/controllers/Configuracion.php */