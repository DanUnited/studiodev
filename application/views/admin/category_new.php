{% extends "admin.tmpl" %}
{% block body %}

		<form action="/admin/category/new" method="POST">
		<input type="hidden" name="new" value="1">
		<div id="main_content" style="height:210px;">
			<p>Название категории:</p>
			<input type="text" name="title" value="{{ category.title }}">
			</br>
			<p>Родительская категория</p>
			<input type="text" name="parent_id" value="{{category.parent_id }}">
			<p></p>
			<input type="submit" value="Сохранить">
		</div>
		</form>
{% endblock %}