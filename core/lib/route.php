<?php
    namespace lib;

    use Core\Config;

    /**
     * Class Route
     * @package lib
     */
    class Route
    {
        /** @var array Параметры запросов идущие через слэш */

        private static $params = array();
        private $controller;
        private $action;
        private $extention;
        /**
         * Проверяет начинается ли строка $source с шаблона $template
         * Возвращает true в случае успешного сопоставления
         */
        private function ContainsBegin($source, $template)
        {
            return (substr($source, 0, strlen($template)) == $template);
        }

        /**
         * Устанавливает страницу-реферрер в Cookie пользователя
         */
        public function setRef()
        {
            setcookie("ref",$_SERVER['REQUEST_URI'],time() + 3600*2 , "/");
        }
        public function getRef()
        {
            return $_COOKIE['ref'];
        }
        public function removeRef()
        {
            setcookie ("ref", "", time() - 3600,"/");
        }
        /**
         * @return array
         */
        public function GetParams()
        {
            return self::$params;
        }

        /**
         * @return string URL without params
         * /extention/controller/action
         *  controller/action
         */
        public function getRequest()
        {
            if($this->extention!="")
                return $this->extention."/".$this->controller."/".$this->action;

            else
               return $this->controller."/".$this->action;
        }
        /**
         * Разбирает адрес строки вида
         * /extentions/controller/action/params
         * /controller/action/params
         */

        public function start()
        {
            // контроллер и действие по умолчанию
            $conf     = Config::get('general');
            $ext_list = Config::get('extentions');
            $url      = $_SERVER['REQUEST_URI'];
            //Если существует модуль приложения
            $extention    = "";
            $ext_path     = "";
            self::$params = array();

            foreach ($ext_list as $ext => $path) {
                if (self::ContainsBegin($url, strtolower($ext))) {
                    $extention = $ext;
                    $ext_path  = $path;
                }
            }
            $url = substr($url, strlen($extention), strlen($url) - strlen($extention));

            $controller = $conf['defaultController'];
            $action     = 'index';

            $routes = explode('/', $url);
            $level  = 0;

            if (!empty($routes[1])) {
                $controller = $routes[1];
                $level++;
            }

            if (!empty($routes[2])) {
                $action = $routes[2];
                $level++;
            }
            $this->controller = $controller;
            $this->action = $action;
            $this->extention = $extention;

            $index_param = 1;
            foreach ($routes as $key => $value) {
                if ($key > $level)
                    self::$params[$index_param++] = $value;
            }

            $action_name = 'action_' . $action;

            $controller_file = strtolower($ext_path . $controller) . '.php';
            $controller_path = "application/controllers/" . $controller_file;

            if (file_exists($controller_path)) {
                include "application/controllers/" . $controller_file;
            } else {
                die("Не смог открыть " . $controller);
                Route::ErrorPage404();
            }


            $controller_name = 'Controller' . $controller;
            $controller      = new $controller_name;

            if (method_exists($controller, $action_name)) {

                if ($controller->hasAccess())
                {
                    if(!in_array($this->getRequest(),array("app/login","app/logout","app/auth","app/register")))
                        $this->removeRef();
                    $controller->$action_name();
                }
                else
                {
                    $this->setRef();
                    \AppView::generate('login.php', null, array('message' => 'У вас нет прав для доступа к этому разделу'));
                }
            } else {
                die("Не найден метод $action у контроллера $controller_name");
                Route::ErrorPage404();
            }
        }

        /**
         * Redirect to referrer url or main page
         */
        public function refRedirect()
        {
            $url = \AppRoute::getRef();
            if($url==NULL)$url="/";
            \AppView::redirect($url);
        }
        /**
         * Redirect to 404 page
         */
        static function ErrorPage404()
        {
            header('Location: /main/404');
        }
    }