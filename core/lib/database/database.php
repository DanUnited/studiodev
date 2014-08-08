<?php
    namespace lib\database;

    use Core\Config;
    use \PDO;


    class DataBase
    {
        static private $_instance;
        private $connect;
        private $data;
        private $qbuilder;
        private $prefix;
        /**
         * @return DataBase
         */
        public static function Data()
        {
            if (!isset(self::$_instance)) {
                self::$_instance = new DataBase();
            }
            return self::$_instance;
        }

        public function __construct()
        {
            $config = Config::get('database');
            $host   = $config['bdhost'];
            $bdname = $config['bdname'];
            $opt    = array(
                PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8",
            );
            $this->prefix = $config['prefix'];
            try {

                $this->connect  = new PDO("mysql:host=$host;dbname=$bdname", $config['bduser'], $config['bdpass'], $opt);
                $this->qbuilder = new qbuilder();
            } catch (\PDOException $e) {
                echo 'Не удалось соединиться с БД <br/>';
                echo $e->getMessage();
            }
        }

        /**
         * @param $query
         * Используется для не SELECT запросов
         */
        public function SQL($query)
        {
            try {

                $sql = $this->connect->prepare($query);
                $sql->execute();

            } catch (\PDOException $e)
            {
               $this->Error($e);
            }
        }

        /**
         * @param $query
         * @return array
         * Используется для выборки
         */
        public function SelectSQL($query)
        {
            try {

                $sql = $this->connect->prepare($query);
                $sql->execute();
                return $sql->fetchAll();

            } catch (\PDOException $e){
                        $this->Error($e);
            }
        }

        /**
         * Проверяет есть ли у таблицы префикс, если нет, то добавляет его.
         * @param $table
         * @return string
         */
        public function prefix($table)
        {
            if(substr($table,0,strlen($this->prefix))==$this->prefix)
                return $table;
            else return $this->prefix.$table;
        }

        function __descruct()
        {
            $connect = null;
        }

        /**
         * @param $table
         * @return QBuilder
         */
        public function table($table)
        {
            return $this->qbuilder->table($table);
        }

        private function Error(\PDOException $e)
        {
            echo $this->qbuilder->getQuery().'<br/>';
            echo $e->getMessage();
            die();
        }
    }