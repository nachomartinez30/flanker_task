<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Config_segunda_etapa extends CI_Controller
{

    public function index()
    {
        echo "hi";
        $this->load->view('configuracion/configuracion_segunda_etapa_view');
    }

    public function set_segundo_sujeto()
    {
        $sujeto = $_POST['sujeto_2_etapa'];
        $sujeto = str_replace(' ', '_', $sujeto);

        $_SESSION['sujeto_2_etapa'] = $sujeto;

        /*ASIGNAR AJAX PARA CAMBIAR LAS RESPUESTAS DE LA SEGUNDA ETAPA, SEGUN EL SUJETO QUE ELIGIÓ*/

        /*si existe el sujeto, redirige, si no, envia alerta*/

        header('Location: http://localhost/flanker_task/config_seg_etapa');

    }

}

/* End of file Config_segunda_etapa.php */
/* Location: ./application/controllers/Config_segunda_etapa.php */