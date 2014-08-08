<?php
/*
 *Синглтон ядра сайта
 *Data() возвращает экземпляр класса
 */
namespace lib;
use Core\App;

class Core
{
		static $data;
		private $user = array();
		
		static function Data()
		{
			if(!isset(self::$data))
				self::$data = new Core();
			return self::$data;
		}
		public function SetUser($arr = array())
		{
			$this->user = $arr;
		}
		public function GetUser()
		{
			if (isset($_COOKIE['user']) && isset($_COOKIE['hash']))
			{
				$cookie_user = $_COOKIE['user'];
				
				$query = \DataBase::Data()->SelectSQL("SELECT * FROM  `st_sessions` WHERE user = '$cookie_user' LIMIT 1");
				$user =  $query[0];
				
				if(($user['hash'] !== $_COOKIE['hash']) or ($user['user'] !== $_COOKIE['user']))
				{
					setcookie("id", "", time() - 3600*24*30*12, "/");
					setcookie("hash", "", time() - 3600*24*30*12, "/");
					return null;
				}else
				{
					$query = \DataBase::Data()->SelectSQL("SELECT * FROM  `st_users` WHERE user = '$cookie_user' LIMIT 1");
					return array(
						'user' =>	$query[0]['user'],
						'email' =>	$query[0]['email'],
						'rank' =>	$query[0]['rank'],
					);
				}
				
			}else
			
			 return null;
		}
};