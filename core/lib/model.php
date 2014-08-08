<?php

    namespace lib;

    use \lib\database\activerecord;

    /**
     * Класс реализует возможности CRUD
     * Class Model (ActiveRecord)
     * @package lib
     */
    class Model
    {
        protected $_message;
        /** @var string Имя таблицы в БД */
        protected $table;
        /** @var array Список правил валидации */
        protected $rules = array();
        /** @var array Запрещенные столбцы массового назначения */
        protected $guarded = array();
        /** @var  string Primary key of table */
        protected $_key = 'id';
        /** @var array Список выборки из БД */
        protected $items = array();

        /**
         * @return array
         */
        public function getGuardedArray()
        {
            return $this->guarded;
        }

        /**
         * @return string primary key of table
         */
        public function getKey()
        {
            return $this->_key;
        }

        /**
         * @return string
         */
        public function getTable()
        {
            if ($this->table != '')
                return $this->table;
            else
                return get_called_class();
        }

        /**
         * Создает новую запись AR
         * @return activerecord
         */
        public function _create()
        {
            $AR = new ActiveRecord();
            $AR->setModel($this);
            return $AR;
        }

        /**
         * Получение всех записей заданной таблицы
         * @return array
         */
        public function _all()
        {
            $this->items = \DataBase::table($this->table)->select('*')->get();
            $records     = array();
            foreach ($this->items as $item) {
                $AR = new ActiveRecord();
                $AR->setModel($this);
                $AR->setColumns($item);
                $records[] = $AR;
            }
            return clone $this;
        }

        /**
         * Получает запись по первичному ключу
         * @param $value
         * @return activerecord|null
         */
        public function _find($value)
        {
            $this->items = \DataBase::table($this->table)->Select('*')->Where($this->getKey(), $value)->first();
            return clone $this;
        }
        /**
         * Получает данные на основе $this->items
         * @return array|int|activerecord
         */
        public function get()
        {
            if (count($this->items) == 0) return 0;

            if (count($this->items) == 1) {
                $AR = new ActiveRecord();
                $AR->setModel($this);
                $AR->setColumns($this->items[0]);
                return $AR;
            } else {
                $records = array();
                foreach ($this->items as $item) {
                    $AR = new ActiveRecord();
                    $AR->setModel($this);
                    $AR->setColumns($item);
                    $records[] = $AR;
                }
                return $records;
            }
        }

        /**
         * Возвращает выборку ввиде массива
         * @return array
         */
        public function inArray()
        {
            return $this->items;
        }

        /**
         * Создает запрос Where и делает выборку
         * @return $this
         */
        public function _where()
        {

            @list($key, $opt, $value) = func_get_args();
            $this->items = \DataBase::table($this->table)->select('*')->where($key, $opt, $value)->get();
            return clone $this;
        }

        /**
         * Удаляет все элементы таблицы с ключами $keys
         * @param array $keys
         */
        public function destroy($keys)
        {
            $obj = \DataBase::table($this->table);
            if (!is_array($keys))
                $obj->where($this->getKey(), $keys);
            else
                foreach ($keys as $key) {
                    $obj->orWhere($this->getKey(), $key);
                }
            $obj->delete();
        }

        /**
         * По факту создает экземпляр нашей модели и вызывает статический класс как обычный
         * @param $method
         * @param $parameters
         * @return mixed
         */
        public static function __callStatic($method, $parameters)
        {
            $model = get_called_class();
            $obj   = new $model;
                if (method_exists($obj, '_' . $method))
                    return call_user_func_array(array($obj, '_' . $method), $parameters);
            else
                throw new \Exception('undefined method ' . $method . ' from ' . $model);
        }

        /**
         * Если использовать методы из класса-наследника
         * @param $method
         * @param $parameters
         * @return mixed
         * @throws \Exception
         */
        public function __call($method, $parameters)
        {
            if (method_exists($this, '_' . $method))
                return call_user_func_array(array($this, '_' . $method), $parameters);
            else
                throw new \Exception('undefined method ' . $method . ' from ' . get_called_class());
        }
        /**
         * Если метод конечный, возвращает выборку ActiveRecord
         * @return array|int|activerecord
         */
        public function __clone()
        {
            return $this->get();
        }

        public function GetMessage()
        {
        }

        public function SetMessage()
        {
        }
    }
