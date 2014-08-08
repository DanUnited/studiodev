<?php

    class Role extends AppModel
    {
        public $id;
        public $title;
        public $description;

        protected $table = 'user_ranks';
    }