<?php
class Route
{
    static function start()
    {
        // контроллер и действие по умолчанию
		$conf = Core::Data()->Conf();
        $controller_name = $conf['defaultController'];
        $action_name = 'index';

        $routes = explode('/', $_SERVER['REQUEST_URI']);
	
        // получаем имя контроллера
        if ( !empty($routes[1]) )
        {	
            $controller_name = $routes[1];
        }
        // получаем имя экшена
        if ( !empty($routes[2]) )
        {
            $action_name = $routes[2];
        }
        $action_name = 'action_'.$action_name;

        //Файл с классом модели

        $model_file = strtolower($controller_name).'.php';
        $model_path = "application/models/".$model_file;
        if(file_exists($model_path))
        {
            include "application/models/".$model_file;
        }
		
        // подцепляем файл с классом контроллера
        $controller_file = strtolower($controller_name).'.php';
        $controller_path = "application/controllers/".$controller_file;
        if(file_exists($controller_path))
        {
            include "application/controllers/".$controller_file;
        }
        else
        {
            Route::ErrorPage404();
        }
     
        // создаем контроллер
		$controller_name = 'Controller'.$controller_name;
		
        $controller = new $controller_name;

        $action = $action_name;

        if(method_exists($controller, $action))
        {
            $controller->$action();
        }
        else
        {
            Route::ErrorPage404();
        }
    }
    
    function ErrorPage404()
    {
        die("Ошибка 404");
    }
}