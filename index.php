<?php
ini_set('display_errors', 1);
$config = include('core/config.php');
		  require 'core/core.php';
/*
 *Initialize configs and run
 */
Core::Data()->SetConfig($config);
Core::Data()->Conf();
Core::Data()->Run();
