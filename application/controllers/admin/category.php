<?php

class ControllerCategory extends AppController
{
	 function __construct()
    {
		parent::__construct();
		$this->model = new ModelCategory();
		$this->setPermission('user.admin');
    }
	
	function action_index()
	{
		$data = $this->model->get_data();
		AppView::generate('admin/category.php', null ,$data);
	}
	function action_edit()
	{
		$category_id = $this->GetParam(1);
		if($_POST['update'])
		{
			$this->model->UpdateCategoryID($_POST['id'],$_POST['title'],$_POST['parent_id']);
			$this->model->setMessage("Все изменения успешно сохранены!");
			AppView::generate('admin/category.php', null ,$this->model->get_data());
		}else
		{
		if($category_id != null)
			{
				$item = DataBase::SelectSQL("SELECT * FROM  `st_category` WHERE id = $category_id");
				$this->view->generate('admin/category_edit.php', null ,array('category'=> $item[0]));
			}else
			AppView::generate('admin/category.php', null ,$this->model->get_data());
		}
	}
	function action_remove()
	{
		$category_id = $this->GetParam(1);
		$this->model->DeleteCategoryID($category_id);
		$this->model->setMessage("Материал успешно удален !");
		AppView::redirect("/admin/category");
	}
	function action_new()
	{
			if($_POST['new'])
			{
				$this->model->CreateCategory($_POST['title'],$_POST['parent_id']);
				$this->model->setMessage("Материал успешно создан !");
				//AppView::generate('admin_category.php', null ,$this->model->get_data());
				AppView::redirect("/admin/category");
				
			}else
			AppView::generate('admin/category_new.php', null ,null);
	}
}