<?php

    /**
     * Class DataBase
     * @method static void SQL($query) Позволяет выполнять SQL запросы
     * @method static array SelectSQL($query) Позволяет делать выборку
     * @method static lib\database\QBuilder table($table) Осуществляет доступ в QBuilder по указанной таблице
     */
    class DataBase          extends \lib\database\DataBase{}
    class Core              extends \lib\Core{}
    class AppRoute          extends \lib\Route{}
    class AppValidator      extends \lib\Validator{}
    class AppModel          extends \lib\Model{}
    class AppView           extends \lib\View{}

    /**
     * Class AppController
     * @method static void SetPost($arr)
     * @method static array GetPost() Получает входные данные
     * @method static void SetPermission($key)
     * @method static boolean HasAccess($key)
     * @method static mixed GetParam($index = 1)
     *
     */
    class AppController     extends \lib\Controller{}



