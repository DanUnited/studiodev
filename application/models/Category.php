<?php

class Category extends AppModel
{
	public $id;
    public $title;
    public $parent_id;

    protected $table = 'category';
}