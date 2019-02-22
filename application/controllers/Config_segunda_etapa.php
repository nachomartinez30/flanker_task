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
            /*SI NO EXISTE UNA ETAPA, POR DEFECTO ES LA PRIMERA*/
            if ($_POST['etapa'] == '') {
                $_SESSION['etapa'] = 1;
            } else {
                $_SESSION['etapa'] = $_POST['etapa'];


                $_SESSION['sujeto_2_etapa'] = $sujeto;
                $respuestas_sujeto = $this->ensayos_model->get_answers_by_subject($sujeto);
                $json_array = Array();

                foreach ($respuestas_sujeto as $res) {
                    $json_array[$res->tipo_ensayo] = $res->correcto_incorrecto;
                }

                $_SESSION['respuestas_sujeto'] = json_encode($json_array);
//            echo json_encode($sujeto = Array($respuestas_sujeto));
            }
            header('Location: http://localhost/flanker_task/config_seg_etapa');
        } else {
            $this->load->view('configuracion/no_records_view');
        }
    }

    public function get_JOSN_records_by_subject()
    {
        echo $_SESSION['respuestas_sujeto'];
    }

    public function get_subject_etapa()
    {
        echo $_SESSION['sujeto_2_etapa'];
    }

    public function get_etapa()
    {
        echo $_SESSION['etapa'];
    }
}

/* End of file Config_segunda_etapa.php */
/* Location: ./application/controllers/Config_segunda_etapa.php */