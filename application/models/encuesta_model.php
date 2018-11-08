<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Encuesta_model extends CI_Model {

	function getEncuesta() {
        $query = $this->db->query("SELECT * FROM encuestas");
		return $query->result();
	}

}

/* End of file encuesta_model.php */
/* Location: ./application/models/encuesta_model.php */