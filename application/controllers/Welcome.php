<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller
{

    public function index()
    {
        if ($_SESSION['sujeto'] == '') {
            echo "<h1>Por favor ingrese un sujeto <a href='http://localhost/flanker_task/'>AQUI</a></h1>";
        } else {
            $this->load->view('Index');
        }
    }
}
