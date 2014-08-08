<?php

class ControllerUsers extends AppController
{
	protected $ModelRole;
	 function __construct()
    {
		parent::__construct();
        $this->model = new ModelUser();
		$this->ModelRole = new ModelRole();
		$this->setPermission('user.admin');
    }
	
	function action_index()
	{
		$data = $this->model->get_data();
		AppView::generate('admin/users.php', null ,$data);
	}
	function action_edit()
	{
		$user_id = $this->GetParam(1);
		if(Input::have('update'))
		{
			$this->model->UpdateUserID($_POST['id'],$_POST['username'],$_POST['password'],$_POST['email'],$_POST['name'],$_POST['data'],$_POST['rank']);
			$this->model->setMessage("Все изменения успешно сохранены!");
			AppView::generate('admin/users.php', null ,$this->model->get_data());
		}else
		{
		if($user_id != null)
			{
				$item = DataBase::SelectSQL("SELECT * FROM  `st_users` WHERE id = $user_id");
				$this->view->generate('admin/users_edit.php', null ,array_merge(array('t_user'=> $item[0]),$this->ModelRole->get_data()));
			}else
			AppView::generate('admin/users.php', null ,array_merge(array($this->model->get_data(),
			$this->ModelRole->get_data()	
			)));
		}
	}
	function action_remove()
	{
		$user_id = $this->GetParam(1);
		$this->model->DeleteUserID($user_id);
		$this->model->setMessage("Пользователь успешно удален !");
		AppView::redirect("/admin/users");
	}
	function action_rules()
	{
		$this->ModelRole->setRole();
		AppView::redirect("/admin/users");
	}
	function action_new()
	{
			if($_POST['new'])
			{
				$this->model->CreateUser($_POST['username'],$_POST['password'],$_POST['email'],$_POST['name'],$_POST['rank']);
				$this->model->setMessage("Пользователь успешно создан !");
				AppView::redirect("/admin/users");
				
			}else
			AppView::generate('admin/users_new.php', null ,$this->ModelRole->get_data());
	}
}