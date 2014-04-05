<?php
class DataBase
{
 static private $_instance;
 private $connect;
 
 static function Data()
 {
	if(!isset(self::$data))
		self::$_instance = new DataBase();
			return self::$_instance;
 }
 function __construct()
 {
	//соединяемся с базой данных
	$config = Core::Data()->Conf();
	$host 	= $config['bdhost'];
	$bdname = $config['bdname'];
	$opt = array(
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
	);
	$this->connect = new PDO("mysql:host=$host;dbname=$bdname", $config['bduser'], $config['bdpass'],$opt);

 }
 function SQL($query)
 {
	$sql = $this->connect->prepare($query);
	$sql->execute();
 }
 function SelectSQL($query)
 {
 	$sql = $this->connect->prepare($query);
	$sql->execute();
	return $sql->fetchAll();
 }
 function __descruct()
 {
	$connect = null;
 }
}