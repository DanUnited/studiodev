<?php
/*
 *Синглтон ядра сайта
 *Data() возвращает экземпляр класса
 */
require_once 'core/database.php';

class Core
{
		static $data;
		protected $config;
		static function Data()
		{
			if(!isset(self::$data))
				self::$data = new Core();
			return self::$data;
		}
		public function SetConfig($conf = null)
		{
				
		 	if(null != $conf)
			{
				$this->config = $conf;
			}else
				throw new Exception('Config param is null.');
		}
		/*
		 *Возвращает ассоциативный массив настроек
		 */
		public function Conf()
		{
			return $this->config;
		}
		public function DB()
		{
		 return DataBase::Data();
		}
		public function Run()
		{
			require_once 'core/model.php';
			require_once 'core/view.php';
			require_once 'core/controller.php';
			require_once 'core/route.php';
			Route::start();
		}
};