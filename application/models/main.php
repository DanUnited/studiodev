<?php

class Model_main extends Model
{
	private $content;
	function __construct()
	{
		$this->content = $this->SelectSQL("SELECT * FROM  `st_content` WHERE id=2");
	}
    public function get_data()
    {	
	//Данные для передачи в View
        return array(
                'Year' => '2012',
                'Site' => 'http://DunkelBeer.ru',
                'content' => $this->content,

        );
    }
}