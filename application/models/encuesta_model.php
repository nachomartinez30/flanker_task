<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Encuesta_model extends CI_Model
{

    function insert_encuesta($data)
    {
        $resupuesta = $this->db->insert('encuestas', $data);
        return $resupuesta;
    }

}

/* End of file encuesta_model.php */
/* Location: ./application/models/encuesta_model.php */