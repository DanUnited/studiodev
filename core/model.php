<?php
class Model
{
    public function get_data()
    {
    }
	//Дублируем возможности для базы данных
	public function SQL($query)
	{
		Core::Data()->DB()->SQL($query);
	}
	public function SelectSQL($query)
	{
		return Core::Data()->DB()->SelectSQL($query);
	}
}
