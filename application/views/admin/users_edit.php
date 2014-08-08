{% extends "admin.tmpl" %}
{% block body %}

		<form action="/admin/users/edit" method="POST">
		<input type="hidden" name="id" value="{{ t_user.id }}">
		<input type="hidden" name="update" value="1">
		<div id="main_content" style="height:600px;">

			<p>Имя пользователя</p>
			<input type="text" name="username" value="{{ t_user.user }}">
			</br>
			<p>Изменить пароль</p>
			<input type="password" name="password" value="">
			<p>E-Mail</p>
			<input type="text" name="email" value="{{t_user.email}}">
			<p>Имя пользователя<p>
			<input type="text" name="name" value="{{t_user.name}}">
			<p>Дата регистрации</p>
			<input type="text" name="data" value="{{t_user.data}}">
			<p>Стутас пользователя</p>
			<h2>Активен</h2>
			<p>Ранк пользователя<p>
			<select name="rank">
                {% for role in roles %}
				<option value="{{role.id}}" {%	if role.id == t_user.rank %} selected {%endif%}>{{role.title}}</option>
			{%endfor%}
			</select>
			<p></p>
			<input type="submit" value="Сохранить">
		</div>
		</form>
{% endblock %}