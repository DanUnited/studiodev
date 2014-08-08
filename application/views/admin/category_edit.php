{% extends "admin.tmpl" %}
{% block body %}

		<form action="/admin/category/edit" method="POST">
		<input type="hidden" name="id" value="{{ category.id }}">
		<input type="hidden" name="update" value="1">
		<div id="main_content" style="height:210px;">
			<p>Название категории:</p>
			<input type="text" name="title" value="{{category.title}}">
			</br>
			<p>Родительская категория</p>
			<input type="text" name="parent_id" value="{{category.parent_id}}">
			<p></p>
			<input type="submit" value="Сохранить">
		</div>
		</form>
{% endblock %}