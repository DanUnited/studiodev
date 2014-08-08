<?php

class User extends AppModel
{

	/*
	 * Генерирует случайную последовательность заданной длины
	 */
	protected function generateCode($length=6) {
	
		$chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHI JKLMNOPRQSTUVWXYZ0123456789";
		$code = "";
		$clen = strlen($chars) - 1;  
		while (strlen($code) < $length) {
            $code .= $chars[mt_rand(0,$clen)];  
		}
    return $code;
	}
	
	public function AuthUser($username, $password)
	{
		$password = md5($password);
		$user = Database::SelectSQL("SELECT * FROM  `st_users` WHERE `user` = '$username' AND `password` = '$password' ");
		$user = $user[0];
		
		if(isset($user))
		{
			#генерируем случайный хэш
			$hash = md5($this->generateCode(10));

			DataBase::SQL("UPDATE st_sessions SET `user` = '".$user['user']."', `hash` = '$hash'");
			
			setcookie("user", $user['user'], time()+60*60*24*30, '/');
			setcookie("hash", $hash, time()+60*60*24*30,'/');

			return 1;
		}else
			return 0;
	}
	public function getUsers()
	{
		$users = Database::SelectSQL("SELECT * FROM  `st_users`");
		return $users;
	}

	public function UpdateUserID($id, $username, $password, $email, $name, $data, $rank)
	{
		$sql_password = "";
		if($password != "")
		{
			$password = md5($password);
			$sql_password = ", `password` = '$password' ";
		}
		$sql = "UPDATE `st_users` SET `user`='$username', `email`='$email', `name` = '$name', `data` = '$data', `rank` = $rank $sql_password WHERE `id`=$id";
		$result = Database::SQL($sql);
	}
	public function DeleteUserID($id)
	{
		$sql = "DELETE FROM `st_category` WHERE `id`= $id";
		$result = Database::SQL($sql);
	}

	public function get_data()
    {
        return array(
				'users'=>$this->getUsers(),
				'message'=> $this->getMessage(),
				'user'=> AppCore::GetUser()
        );
    }
}