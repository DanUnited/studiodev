<?php
    use Core\App;
    use Core\Config;
    $start  = microtime(true);
    $config = include('core/Config.php');
    require 'core/Run.php';
    require 'core/Autoload.php';

    Config::read('conf.php');
    App::setup(Config::get('components'));
    App::Initialize();

    AppRoute::start();
    echo (memory_get_usage()/1024).' байт скушано. ';
    $time = microtime(true) - $start;
    printf('Скрипт выполнялся %.4F сек.', $time);

