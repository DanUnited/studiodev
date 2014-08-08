<?php

	
class ControllerApp extends AppController
{
	 function __construct()
    {
        $this->model = new ModelUser();
    }

	function action_search()
	{
			$query = "";
			$result = array();
			
			if($_GET['query']!=NULL)
				$query = $_GET['query']; else
			$query = $this->GetParam(1);
			if($query)
			{
				$Content = new ModelMain();
				if($_GET['type']=="SIMPLY"){
				$result = $Content->Find(rawurldecode ($query));
					}
					else
					if(!$_GET['find_intext']=="on")
					$result = $Content->FullFind(rawurldecode ($query));
					else
						$result = $Content->FullFindContent(rawurldecode ($query));
			}
			AppView::generate('search.php', null ,array(
				'query' => urldecode($query),
				'results' => $result,
                'get'=>$_GET
			));
	}
    function action_login()
    {	
        AppView::generate('login.php', null ,null);
    }
	function action_logout()
	{
		setcookie("id", "", time() - 3600*24*30*12, "/");
		setcookie("hash", "", time() - 3600*24*30*12, "/");
		AppView::redirect("/main/index");
	}
	
	function action_register()
	{
		AppView::generate('register.php', null ,null);
	}
	function action_auth()
	{
			//var_dump($_POST);
			if(isset($_POST['login']))
			{
				if($this->model->AuthUser(
					$_POST['username'],
					$_POST['password']
				)==	false)
				{
				AppView::generate('login.php', null ,array("message"=>"Имя пользователя или пароль неверны"));
				exit;
				}else
				{
                    AppRoute::refRedirect();
				}
			}
			
			if(isset($_POST['register']))
			{
				$this->model->CreateUser(
					$_POST['username'],
					$_POST['password'],
					$_POST['email'],
					$_POST['name']
				);
				AppView::redirect("/main/index");
			}
			
		
	}
}