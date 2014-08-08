<?php
    namespace lib\database;
    /**
     * Class QBuilder
     * @package lib\database
     * Класс составления цепочек для запроса в БД
     */
    class QBuilder
    {
        private $syntax = array();
        private $query;
        private $table;
        private $whereLiteral;
        /**
         * @var  string Запрос как ключ для получения SELECT результата
         */
        private $select_param;

        /**
         * @param $table
         * @return $this
         */
        public function table($table)
        {
            $this->table = \DataBase::prefix($table);
            $this->clearQuery();
            $this->addSyntax('table', 'FROM `' . $this->table . '`');
            return $this;
        }

        /**
         * @return string $query
         */
        public function getQuery()
        {
            return $this->query;
        }

        /**
         * @param $columns
         * @return $this
         */
        public function select($columns)
        {
            $this->addSyntax('select', 'SELECT ' . $columns);
            return $this;
        }

        /**
         * @param array $params
         * @throws \Exception
         */
        public function insert($params = array())
        {
            if (count($params) != 0) {
                $columns = implode(',', array_keys($params));
                $values  = implode("','", $params);

                $this->query .= 'INSERT INTO ' . $this->table . ' (' . $columns . ') ';
                $this->query .= "VALUES ('" . $values . "')";

                return \DataBase::SQL($this->query);
            } else
                throw new \Exception("no parameters from insert function");
        }

        /**
         * @param array $params
         * @throws \Exception
         */
        public function update($params = array())
        {
            if (count($params) != 0) {
                $end = array_keys($params, end($params));
                $this->query .= "UPDATE " . $this->table . ' SET ';
                foreach ($params as $key => $value) {
                    $this->query .= "`$key` = " . $this->val($value) . ' ';

                    if ($key !== $end[0]) {
                        $this->query .= ',';
                    }
                }
                $this->query .= $this->syntax['where'];
                return \DataBase::SQL($this->query);
            } else
                throw new \Exception("no parameters from update function");
        }

        /**
         * Преобразует параметры для SQL вставки если это нужно
         */
        public function val($value)
        {
            if (\AppValidator::isNumeric($value))
                return $value;
            else return '\'' . $value . '\'';
        }

        /**
         * Удаляет выбранные строки в таблице, либо все строки если не определено WHERE
         */
        public function delete()
        {
            $this->query .= 'DELETE FROM ' . $this->table . ' ' . $this->syntax['where'];
            \DataBase::SQL($this->query);
        }

        /**
         * @return $this
         * @param $key , $opt, $value       where('id','>',2)
         * @param $key , $value             where('id',$id)
         * @throws \Exception
         */
        public function where()
        {
            @list($key, $opt, $value) = func_get_args();
            $array_opt = array('<=', '<', '=', '>', '>=');

            if (\AppValidator::isRequired($value))
                if (in_array($opt, $array_opt)) {
                    $value = $this->val($value);
                    $this->addSyntax('where', 'WHERE `' . $key . '` ' . $opt . ' ' . $value);
                } else
                    throw new \Exception("Incorrect parameter 2 in function WHERE");
            else {
                $value = $opt;
                $opt   = '=';
                return $this->where($key, $opt, $value);
            }
            return $this;
        }

        /**
         * add Where condition
         * @return $this
         */
        public function andWhere()
        {
            $this->whereLiteral = "AND";
            @list($key, $opt, $value) = func_get_args();
            return $this->addWhere($key, $opt, $value);
        }

        /**
         * or Where condition
         * @return $this
         */
        public function orWhere()
        {
            $this->whereLiteral = "OR";
            @list($key, $opt, $value) = func_get_args();
            return $this->addWhere($key, $opt, $value);
        }

        /**
         * add Where condition
         * @return $this
         * @param $key , $opt, $value       where('id','>',2)
         * @param $key , $value             where('id',$id)
         */
        protected function addWhere()
        {

            @list($key, $opt, $value) = func_get_args();
            $array_opt = array('<=', '<', '=', '>', '>=');

            if (\AppValidator::isRequired($value))
                if (array_key_exists('where', $this->syntax)) {
                    if (in_array($opt, $array_opt)) {
                        $value = $this->val($value);
                        $this->syntax['where'] .= ' ' . $this->whereLiteral . ' `' . $key . '` ' . $opt . ' ' . $value;
                    } else
                        throw new \Exception("Incorrect parameter 2 in function WHERE");
                } else
                    $this->where($key, $opt, $value);
            else {
                $value = $opt;
                $opt   = '=';

                return $this->addWhere($key, $opt, $value);
            }

            return $this;
        }

        /**
         * @param $number
         * @return $this
         */
        public function limit($number)
        {
            if (\AppValidator::isNumeric($number)) {
                $this->addSyntax('limit', 'LIMIT ' . $number);
            }
            return $this;
        }

        /**
         * @param array $columns | string $columns
         * @return $this
         * Используется в конструкциях вида table('table_name')->count('user')->where(user,$user)->get();
         */
        public function count($columns = array())
        {
            $sql = '';
            if (is_string($columns))
                $sql = "COUNT('$columns')";
            else
                $sql = "COUNT('" . implode("','", $columns) . "')";

            $this->select_param = $sql;
            $this->addSyntax('count', 'SELECT ' . $sql);
            return $this;
        }


        public function exists($params = array())
        {
            $columns = implode(',', array_keys($params));
            $values  = implode("','", $params);

            /** @var QBuilder $object */
            $object = $this->count('*');
            foreach ($params as $key => $value)
                $object->addWhere($key, $value);

            $result = $object->get();
            if ($result > 0) return true;
            else false;
        }

        /**
         * @param $key
         * @param $value
         */
        protected function addSyntax($key, $value)
        {
            $this->syntax = array_merge($this->syntax, array($key => $value));
        }

        /**
         * Create SELECT Query from $library
         */
        protected function build()
        {
            $library = array(
                'select', 'count', 'table', 'where', 'limit'
            );

            foreach ($library as $name => $value) {
                if (array_key_exists($value, $this->syntax))
                    $this->query .= ' ' . $this->syntax[$value];
            }
        }

        protected function clearQuery()
        {
            $this->query  = "";
            $this->syntax = array();
        }

        /**
         * @return mixed
         * Get SELECT query result
         */
        public function get()
        {
            $this->build();
            $arr = array('count');

            foreach ($arr as $arg)
                if (array_key_exists($arg, $this->syntax)) {
                    $res = \DataBase::SelectSQL($this->query);
                    return $res[0][$this->select_param];
                } else
                    return \DataBase::SelectSQL($this->query);

        }

        /**
         * @return mixed
         * Get First record of SELECT query
         */
        public function first()
        {
            $items = $this->get();
            return $items[0];
        }

    }