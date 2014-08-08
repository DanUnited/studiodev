<?php
    namespace Core;
    /**
     * Class Config
     * @package Core
     */
    class Config
    {
        /**
         * @var array
         */
        protected static $configs = array();

        /**
         * @param $path
         */
        public static function read($path)
        {
            $configs       = require $path;
            self::$configs = array_merge(self::$configs, $configs);
        }

        /**
         * @param $index
         * @return mixed
         * @throws \Exception
         */
        public static function get($index)
        {
            if (isset(self::$configs[$index])) {
                return self::$configs[$index];
            }
            throw new \Exception('Undefined config section `' . $index . '`');
        }
    }