<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Tutorial extends CI_Controller {

	public function index() {
        $this->load->view('/tutorial/tutorial_view');
	}

}

/* End of file Tutorial.php */
/* Location: ./application/controllers/Tutorial.php */