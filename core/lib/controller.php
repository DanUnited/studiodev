<?php
    namespace lib;

    class Controller
    {

        public $model;
        public $view;
        protected $post = array();
        protected $permission;

        function __construct()
        {
            $this->view = new View();
        }
        /**
         * @param $arr
         */
        public function SetPost($arr)
        {
            $this->post = array_merge($this->post, $arr);
        }

        /**
         * @return array
         */
        public function GetPost()
        {
            return $this->post;
        }

        /**
         * @param int $index
         * @return mixed
         */
        public function GetParam($index = 1)
        {
            $param = \AppRoute::GetParams();
            if(array_key_exists($index,$param))
                return $param[$index];
            else return NULL;
        }

        /**
         * @param $key
         */
        public function SetPermission($key)
        {
            $this->permission = $key;

        }

        /**
         * @param string $key
         * @return bool
         */
        public function HasAccess($key = 'no')
        {

            if ($key == 'no') $key = $this->permission;
            $user = \AppCore::GetUser();

            if (($user != NULL) && ($key != NULL)) {

                $rank   = \Database::Data()->SelectSQL("SELECT * FROM  `st_user_ranks` WHERE `id`='" . $user['rank'] . "'");
                $access = json_decode($rank[0]['description'], true);

                if ($access[$key] == 1)
                    return true;
                else
                    return false;
            } else
                if ($key == null) return true;
                else
                    return false;
        }

    }