<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Config_segunda_etapa extends CI_Controller
{

    public function __construct()
    {
        parent::__construct();
        $this->load->model('ensayos_model');
    }

    public function index()
    {
        $this->load->view('configuracion/configuracion_segunda_etapa_view');
    }

    public function set_segundo_sujeto()
    {
        $sujeto = $_POST['sujeto_2_etapa'];
        $sujeto = str_replace(' ', '_', $sujeto);


        /*ASIGNAR AJAX PARA CAMBIAR LAS RESPUESTAS DE LA SEGUNDA ETAPA, SEGUN EL SUJETO QUE ELIGIÓ*/
        $res = $this->ensayos_model->is_subject_in_db($sujeto);
        /*si existe el sujeto, redirige, si no, envia alerta*/

        if ($res) {
            $_SESSION['sujeto_2_etapa'] = $sujeto;
            $respuestas_sujeto = $this->ensayos_model->get_answers_by_subject($sujeto);
//            var_dump($respuestas_sujeto);
            header('Location: http://localhost/flanker_task/config_seg_etapa');
        } else {
            
            echo "<div id='div_error' class='alert alert-warning' role='alert' >
                    ¡El sujeto no cuenta con registros en la base de datos!
                </div>";
        }


    }

}

/* End of file Config_segunda_etapa.php */
/* Location: ./application/controllers/Config_segunda_etapa.php */