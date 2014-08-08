<?php
    namespace Core;

    use \Exception;

    /**
     * Class App Container for Framework
     * @package Core
     */
    class App
    {
        protected static $registry = array();
        const ACCESSOR_POSTFIX = 'Facade';

        public static function Initialize()
        {
            foreach (Config::get('alias') as $items => $path) {
                class_alias($path, $items);
            }
        }

        /**
         * @param $name
         * @param $callback
         */
        public static function register($name, $callback)
        {
            self::$registry[$name] = $callback();
            $accessor              = self::getAccessorName($name);
            $class                 = call_user_func(create_function(
                '',
                'class ' . $accessor . '  extends ' . __CLASS__ . '{}'
            ));
            class_alias($accessor, $name);
        }

        /*
         * @param $cls
         * @return string
         */
        protected static function getAccessorName($cls)
        {
            return $cls . self::ACCESSOR_POSTFIX;
        }

        /**
         * @param $cls
         * @return mixed
         */
        protected static function getAccessorOriginal($cls)
        {
            return str_replace(self::ACCESSOR_POSTFIX, '', $cls);
        }

        /*
         * Считывает парамтеры из файла
         * Если есть метод Data значит класс ведет себя подобно Singleton
         */

        public static function setup($files,$param = array())
        {
            foreach ($files as $alias => $class) {
                self::register($alias, function () use ($class) {
                    if (method_exists($class, 'Data')) {
                        return $class::Data();
                    } else
                        return new $class;
                });
            }
        }

        /**
         *Перенаправляет методы на вызов метода класса из контейнера $registry
         */
        /**
         * @param $name
         * @param $args
         * @return mixed
         * @throws \Exception
         */
        public static function __callStatic($name, $args)
        {

            $class       = self::getAccessorOriginal(get_called_class());
            $invokeClass = self::$registry[$class];

            if (method_exists($invokeClass, $name) || method_exists($invokeClass, '__call'))
                return call_user_func_array(array(self::$registry[$class], $name), $args);
            else
                throw new Exception('Класс ' . $class . ' не имеет метода ' . $name);
        }

    }