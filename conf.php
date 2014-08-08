<?php

    return array(
        'general'    => array(
            'defaultController' => 'content',
            'template'          => 'default',
            'SiteName'          => 'Studiodev.ru',
            'keywords'          => 'studiodev, studio development, php'
        ),
        'database'   => array(
            'driver' => 'mysql',
            'bdhost' => 'localhost',
            'bdname' => 'studiodev',
            'bduser' => 'root',
            'bdpass' => '',
            'prefix' => 'st_'
        ),
        'components' => array(
            'AppCore'         => 'lib\core',
            'AppRoute'     => 'lib\route',
            'DataBase'     => 'lib\database\database',
            'AppValidator' => 'lib\validator',
            'AppView'      => 'lib\view',
            'Input'        => 'lib\input',
        ),
        'alias'      => array(
            'AppModel'      => 'lib\model',
            'AppController' => 'lib\controller',
        ),

        #url => #extention path
        'extentions' => array(
            '/admin' => 'admin/',
        ),
    );
