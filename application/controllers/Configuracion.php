<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Configuracion extends CI_Controller {

	public function index()
	{
		$this->load->view('configuracion/configuracion_view')		;
	}

}

/* End of file Configuracion.php */
/* Location: ./application/controllers/Configuracion.php */