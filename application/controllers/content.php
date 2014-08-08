<?php


    class ControllerContent extends AppController
    {

        function action_index()
        {
            $records = Content::where('active', true)->inArray();
            $res = Content::all();
            var_dump(Content::all()->items);
            foreach ($res as $o)
            {
                var_dump($o);
                echo '<br>';
            }
            AppView::generate('main.php', array('content' => $records));
        }

        function action_page()
        {
            $page = $this->GetParam(1);
            if (AppValidator::Make(
                array('id' => $page),
                array('id' => 'required|integer|exist:content'))
            )

                AppView::generate('content.php', array('content' => Content::find($page)->inArray()));
            else
                AppRoute::ErrorPage404();
        }

        function action_404()
        {
            AppView::generate('404.php');
        }
    }