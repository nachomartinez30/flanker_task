<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Ensayos_model extends CI_Model {

	public function insert_ensayo($data)
	{
		$resupuesta = $this->db->insert('ensayos', $data);
		return $resupuesta;
	}

	public function get_ensayos_by_subject($subject)
	{
		$query= "select tipo_ensayo,  correcto_incorrecto  from ensayos  where sujeto = '$subject'  AND fase =2";
		// var_dump($query);
		$resultados=$this->db->query($query);
		// var_dump($resultados);
		return $resultados->result();
	}
}

/* End of file ensayos_model.php */
/* Location: ./application/models/ensayos_model.php */