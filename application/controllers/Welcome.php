<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller
{

    public function index()
    {
        if (!isset($_SESSION['sujeto']) || $_SESSION['sujeto'] == '') {
            echo "<h1>Por favor ingrese un sujeto <a href='http://localhost/flanker_task/'>AQUI</a></h1>";
        } else {
            $this->load->view('Index');
        }
    }

    public function end()
    {
        session_destroy();
        header("Location: http://localhost/flanker_task/");
    }
}
