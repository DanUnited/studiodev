<?php

    class Content extends AppModel
    {
        /** Fields */
        public $id;
        public $category;
        public $title;
        public $content;
        public $content_full;
        public $data;
        public $active;
        public $blocked;

        protected $table = 'content';

        /**
         * Генерирует HTML данные для Ajax запроса
         * Возвращяет string
         */
        public function _getTableFromID($cid)
        {
            //$items = Content::where('category',$cid);
            var_dump($this->_all());
            die();
            if(count($items)==1) $items = array($items);
            if(count($items)==0) return;

            $table = "";
            foreach ($items as $content) {
                $table .= "<tr>";
                $table .= "<td>" . $content->id . "</td>";
                $table .= "<td>" . $content->title . "</td>";
                $table .= "<td>" . $content->category . "</td>";
                if ($content->active != 1)
                    $table .= "<td>" . '<a class="icon" href="/admin/content/active/' . $content->id . '/' . $content->active . '"
                                title="Материал не отображается">✖</span></td>';
                else
                    $table .= "<td>" . '<a class="icon" href="/admin/content/active/' . $content->id . '/' . $content->active . '"
                                title="Материал отображается на сайте">✓</span></td>';
                $table .= "<td><a href='/admin/content/edit/" . $content->id . "'>Редактировать</a></td>";
                $table .= "<td><a href='/admin/content/remove/" . $content->id . "''>Удалить</a></td>";
                $table .= "</tr>";
            }
            return $table;
        }

        /**
         * @param $query
         * @return array
         */
        public function FindText($query)
        {
            $item = Database::SelectSQL("SELECT * FROM st_content WHERE content_full LIKE '%$query%'");
            return $item;
        }

        /**
         * @param $query
         * @return array
         */
        public function FullFind($query)
        {
            $item = Database::SelectSQL("SELECT id,title,content, MATCH (title, content, content_full) AGAINST ('$query' IN BOOLEAN MODE) FROM st_content WHERE
									 MATCH (title, content, content_full) AGAINST ('$query' IN BOOLEAN MODE)");
            return $item;
        }

        /**
         * @param $query
         * @return array
         */
        public function FullFindContent($query)
        {
            $item = Database::SelectSQL("SELECT id,title,content, MATCH (content_full) AGAINST ('$query' IN BOOLEAN MODE) FROM st_content WHERE
									 MATCH (content_full) AGAINST ('$query' IN BOOLEAN MODE)");
            return $item;
        }
    }