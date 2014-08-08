<?php
#Автозагрузка классов ядра
    spl_autoload_register(function ($class) {
        $system_path = __DIR__ . '/' . str_replace(array('\\', '_'), '/', $class) . '.php';
        $model_path  = __DIR__ . '/../application/models/' . str_replace(array('\\', '_'), '\\', $class) . '.php';

        if (file_exists($system_path)) include($system_path);
        else
            if (file_exists($model_path))
                include($model_path);
    });

#Автозагрузка Twig
    require_once __DIR__.'/lib/Twig/Autoloader.php';
    Twig_Autoloader::register();