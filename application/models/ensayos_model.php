<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Ensayos_model extends CI_Model
{

    public function insert_ensayo($data)
    {
        $resupuesta = $this->db->insert('ensayos', $data);
        return $resupuesta;
    }

    public function get_ensayos_by_subject($subject)
    {
        $query = "select tipo_ensayo,  correcto_incorrecto  from ensayos  where sujeto LIKE '%$subject%'  AND fase =2";

        $resultados = $this->db->query($query);

        return $resultados->result();
    }

    public function get_name_subject($subject)
    {
        $query = "select sujeto  from ensayos  where sujeto LIKE '%$subject%'  AND fase =2";

        $resultados = $this->db->query($query);

        return $resultados->result();
    }

    function is_subject_in_db($subject)
    {
        $query = "select distinct sujeto, tipo_ensayo, correcto_incorrecto from ensayos where fase=2 AND sujeto = '$subject'";

        $respuesta = $this->db->query($query);

        if ($respuesta->num_rows() > 1) {
            return true;
        } else {
            return false;
        }
    }


    public function get_answers_by_subject($subject)
    {
        $query="select tipo_ensayo, correcto_incorrecto from ensayos where fase = 2  AND sujeto = '$subject' order by tipo_ensayo";
        $respuesta = $this->db->query($query);
        return $respuesta->result();
    }
}

/* End of file ensayos_model.php */
/* Location: ./application/models/ensayos_model.php */