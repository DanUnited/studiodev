<?php
namespace lib;
/*
 * Rules: 
 * --required
 * --alpha
 * --alpha_num
 * --aplha_dash
 * --numeric
 * --integer
 * --email
 * --url
 * --exist:table
 * --unique:table
 */

class Validator
{
 protected $errors = array();
 protected $rules = array();
 protected $input = array();
 
 public function Make($input = array(),$rules = array())
 {
	$this->rules = array_merge($this->rules,$rules);
	$this->input = array_merge($this->input,$input);
	return $this->Run();
 }
 public function Run()
 {
	if(sizeof($this->input)!=0)
	foreach ($this->rules as $field => $sum_rules)
	{
			if(array_key_exists($field,$this->input))
				{
					foreach(explode('|',$sum_rules) as $rule)
					{
						$rule = trim($rule);
						$value = $this->input[$field];

						if($rule!="" and is_string($this->parse($rule)))
                        {
                            if(!$this->{'validate_'.$rule}($field, $value, null, $this))
                                $this->addError($field,$rule);
                        }else{
                            list($rule,$param) = $this->parse($rule);
                            if(!$this->{'validate_'.$rule}($field, $value, $param, $this))
                                $this->addError($field,$rule);
                        }

					}
				}
	}
	else $this->addError('general','Input data is empty');

     return $this->fails()==false;
 }
  
 public function addError($key,$value)
 {
	$this->errors = array_merge($this->errors,array($key=>$value));
 }
 
 public function getErrors()
 {
	return $this->errors;
 }
 
 public function fails()
 {
	return count($this->errors) != 0;
 }
  
 /**
     * Validate that a required attribute exists in the attributes array.
     *
     * @param  string  $attribute
     * @param  mixed   $value
     * @return bool
     */
    protected function validate_required($attribute, $value)
    {
        if (is_null($value))
        {
            return false;
        }
        elseif (is_string($value) and trim($value) === '')
        {
            return false;
        }
	
        return true;
    }
	
 /**
     * Validate that an attribute is numeric.
     *
     * @param  string  $attribute
     * @param  mixed   $value
     * @return bool
     */
    protected function validate_numeric($attribute, $value)
    {
        return is_numeric($value);
    }

    /**
     * Validate that an attribute is an integer.
     *
     * @param  string  $attribute
     * @param  mixed   $value
     * @return bool
     */
    protected function validate_integer($attribute, $value)
    {
        return filter_var($value, FILTER_VALIDATE_INT) !== false;
    }
 /**
     * Validate that an attribute is a valid e-mail address.
     *
     * @param  string  $attribute
     * @param  mixed   $value
     * @return bool
     */
    protected function validate_email($attribute, $value)
    {
        return filter_var($value, FILTER_VALIDATE_EMAIL) !== false;
    }
 /**
     * Validate that an attribute is a valid URL.
     *
     * @param  string  $attribute
     * @param  mixed   $value
     * @return bool
     */
    protected function validate_url($attribute, $value)
    {
        return filter_var($value, FILTER_VALIDATE_URL) !== false;
    }
	
/**
     * Validate that an attribute contains only alphabetic characters.
     *
     * @param  string  $attribute
     * @param  mixed   $value
     * @return bool
     */
    protected function validate_alpha($attribute, $value)
    {
        return preg_match('/^([a-z])+$/i', $value);
    }

    /**
     * Validate that an attribute contains only alpha-numeric characters.
     *
     * @param  string  $attribute
     * @param  mixed   $value
     * @return bool
     */
    protected function validate_alpha_num($attribute, $value)
    {
        return preg_match('/^([a-z0-9])+$/i', $value);
    }

    /**
     * Validate that an attribute contains only alpha-numeric characters, dashes, and underscores.
     *
     * @param  string  $attribute
     * @param  mixed   $value
     * @return bool
     */
    protected function validate_alpha_dash($attribute, $value)
    {
        return preg_match('/^([-a-z0-9_-])+$/i', $value);
    }

    /**
     * Проверяет значение $value в таблице $table на существование по имени
     * @param $attribute
     * @param $value
     * @param $table
     * @return bool
     */
    protected function validate_exist($attribute, $value, $table)
    {
        if($table!='')
        {
            if(\DataBase::table($table)->exists(array($attribute=>$value)))
                return true;
            else
                return false;
        }else
            //будем по ID ебашить
            if(\DataBase::table($attribute)->exists(array('id'=>$value)))
                return true;
            else
                return false;


    }

    /**
     * Проверяет уникальность заданного аттрибута
     * @param $attribute
     * @param $value
     * @param $table
     * @return bool
     */
    protected function validate_unique($attribute, $value, $table)
    {
        return !$this->validate_exist($attribute,$value,$table);
    }
    /**
     * @param $rule
     * @return array | string
     */
    protected function parse($rule)
{
	// The format for specifying validation rules and parameters follows a
	// {rule}:{parameters} formatting convention. For instance, the rule
	// "max:3" specifies that the value may only be 3 characters long.

    if (($colon = strpos($rule, ':')) !== false)
    {
        return explode(':',$rule,2);
    }
    else
        return $rule;
}

    /**
     * Позволяет вызывать правила по отдельности в формате isRule
     * @param $name
     * @param $arguments
     * @return mixed
     * @throws \Exception
     */
    public function __call($name, $arguments)
	{
		if(strlen($name)>=3)
		{
			array_unshift ($arguments,"NULL");
			
			$rule = substr($name,2,strlen($name)-2);
			$start = substr($name,0,2);
			   if($start=="is" || $start == "Is")
				if(method_exists($this,'validate_'.$rule))
					return call_user_func_array(array($this, 'validate_'.$rule), $arguments);
								
				throw new \Exception("Правила 'validate_".$rule."' не существует");
		} else
			throw new \Exception("Функция ".$name." меньше трех символов");
	}

    /**  Начиная с версии PHP 5.3.0  */
    public static function __callStatic($name, $arguments) {
        // Замечание: значение $name регистрозависимо.
        echo "Вызов статического метода '$name' "
             . implode(', ', $arguments). "\n";
    }
	
}