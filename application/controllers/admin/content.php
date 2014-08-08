<?php


    class ControllerContent extends AppController
    {
        function __construct()
        {
            $this->setPermission('user.admin');
        }

        function action_index()
        {
            AppView::generate('admin/content.php', array('content'=>Content::all()->inArray(),
            'categories'=>Category::all()->inArray()));
        }

        /**
         * Get Ajax table content from Model
         */
        public function action_table()
        {
            if(
                AppValidator::make(array('id' => $_GET['category_id']),
                array(
                    'id' => 'required|numeric|exist:category'
            )))
                echo Content::getTableFromID($_GET['category_id']);

        }

        /**
         * Edit content
         */
        function action_edit()
        {
            $content_id = $this->GetParam();

            if (Input::get('update')) {
                AppValidator::make(Input::all(), array(
                    'id'           => 'required|numeric|exist:content',
                    'category'     => 'required|numeric|exist',
                    'title'        => 'required',
                    'content'      => 'required',
                    'content_full' => 'required'
                ));
                if (!AppValidator::fails()) {
                    \DataBase::table('content')->where('id', Input::get('id'))->update(
                        Input::only('category', 'title', 'content', 'content_full')
                    );
                    $this->model->setMessage("Все изменения успешно сохранены!");
                }

                AppView::generate('admin/content.php', null, $this->model->get_data());
            } else {
                if (\AppValidator::isRequired($content_id)) {
                    $item = DataBase::table('st_content')->select('*')->where('id', $content_id)->first();
                    $this->view->generate('admin/content_edit.php', null, array('page' => $item));
                } else
                    AppView::generate('admin/content.php', null, $this->model->get_data());
            }
        }

        function action_remove()
        {
            $id = $this->GetParam();
            if (AppValidator::make(array('id' => $id), array('id' => 'required|numeric|exist:content'))) {
                $this->model->DeleteContentID($id);
                $this->model->setMessage("Материал успешно удален !");
            }

            AppView::generate('admin/content.php', null, $this->model->get_data());
        }

        function action_new()
        {
            if ($_POST['new']) {
                if (AppValidator::make(Input::all(), array(
                    'id'           => 'required|numeric|exist:content',
                    'category'     => 'required|numeric|exist',
                    'title'        => 'required',
                    'content'      => 'required',
                    'content_full' => 'required'
                ))
                ) {
                    DataBase::table('content')->insert(Input::only('category', 'title', 'content', 'content_full'));
                    $this->model->setMessage("Материал успешно создан !");
                }
                AppView::generate('admin/content.php', null, $this->model->get_data());

            } else
                AppView::generate('admin/content_new.php', null, null);
        }
        function action_active()
        {
            $id = $this->GetParam(1);
            $value = $this->GetParam(2);
            if (AppValidator::make(array('id' => $id), array('id' => 'required|numeric|exist:content'))) {

                DataBase::table('content')->where('id',$id)->andWhere('active',0)->update(array('active'=>1));
                DataBase::table('content')->where('id',$id)->andWhere('active',1)->update(array('active'=>0));

            }
            AppView::generate('admin/content.php', null, $this->model->get_data());
        }
    }