<?php
    namespace lib;

    class Input
    {
        protected $input = array();

        public function __construct()
        {
            $this->input = array_merge($this->input, $_GET, $_POST);
            foreach ($this->input as $item => $value)
            {
                if(is_string($item))
                {
                    $this->input[$item] = htmlspecialchars($value);
                    /** extension=php_mysql.dll */
                    $this->input[$item] = mysql_real_escape_string($value);
                }
            }
        }

        /**
         * Возвращает ключ $input
         * @param $key
         * @param null $default
         * @return string or $default
         */
        public function get($key, $default = null)
        {
            if ($this->have($key))
                return $this->input[$key];
            else return $default;
        }

        /**
         * Проверяет существование ключа
         * @param $key
         * @return bool
         */
        public function have($key)
        {
            return array_key_exists($key,$this->input);
        }
        /**
         * Get only selected parameters
         * @param array $keys
         * @return array
         */
        public function only($keys)
        {
            return array_intersect_key($this->input,array_flip(func_get_args()));
        }

        /** Get all as array */
        public function all()
        {
            return $this->input;
        }
    }