<?php
class View
{
    //public $template_view; // по умолчанию
    
    function generate($content_view, $template_view, $data = null)
    {    
        if(is_array ($data))
		{
			$count = extract($data,EXTR_OVERWRITE); 
		}
        include 'application/views/'.$template_view;
    }
}