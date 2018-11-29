<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Ensayos_model extends CI_Model {

    public function insert_ensayo($data)
    {
        $resupuesta = $this->db->insert('ensayos', $data);
        return $resupuesta;
    }
}

/* End of file ensayos_model.php */
/* Location: ./application/models/ensayos_model.php */