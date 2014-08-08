<?php
    namespace lib\database;

    class ActiveRecord
    {
        /** @var array Список полей таблицы */
        protected $_columns = array();
        /** @var string Имя таблицы в БД */
        protected $table = null;
        /** @var bool существует ли эта запись в БД */
        protected $exist = false;
        /** @var  ModelClass */
        protected $_model;
        /**
         * @param lib\Model $callClass
         */

        /**
         * Необходимо передавать объект модели, наследованной от AppModel
         * @param \AppModel $modelClass
         */
        public function setModel(\AppModel $modelClass)
        {
            $this->_model = $modelClass;
            if (is_object($this->_model)) {
                $ARClass    = new \ReflectionClass($this->_model);
                $properties = $ARClass->getProperties();

                /** Получаем имя нашей таблицы */
                if ($this->_model->getTable() == '')
                    $this->table = $ARClass->getName();
                else
                    $this->table = $this->_model->getTable();

                /**
                 * Получаем список колонок нашей таблицы
                 */
                foreach ($properties as $property)
                    if ($property->class != __CLASS__ AND $property->isPublic())
                        $this->addColumn($property->getName(), $property->getValue($this));
            }
        }

        /**
         * @param array $columns
         */
        public function setColumns($columns = array())
        {
            $this->_columns = $columns;
            $this->exist = true;
        }

        /**
         * @param $key
         * @return mixed
         */
        public function getColumn($key)
        {
            if(array_key_exists($key,$this->_columns))
                return $this->_columns[$key];
        }

        /**
         * Сохраняет изменения в БД записи AR
         */
        public function Save()
        {
            /** Не учитываем в запросе пустые поля $key */
            $this->_columns = array_diff($this->_columns, array(''));

            $key = $this->_model->getKey();
            if($this->exist)
                \DataBase::table($this->table)->where($key,$this->getColumn($key))->update($this->_columns);
            else
                \DataBase::table($this->table)->insert($this->_columns);

        }
        /**
         * @param $name
         * @param $value
         * @throws \Exception
         */
        public function __set($name, $value)
        {
            if (array_key_exists($name, $this->_columns))
                $this->_columns[$name] = $value;
            else
                throw new \Exception('Invalid field');
        }

        /**
         * @param $name
         * @return null
         */
        public function __get($name)
        {
            if (array_key_exists($name, $this->_columns))
                return $this->_columns[$name];
            else
                return null;
        }

        /**
         * Add table column
         * @param $key
         * @param $value
         */
        protected function addColumn($key, $value)
        {
            $this->_columns = array_merge($this->_columns, array($key => $value));
        }
    }






