{% extends "admin.tmpl" %}
{% block body %}

<div id="message">{{ data.message }}</div>
<form action="admin/index" method="POST">
    <div id="main_content">
        <div style="color: white;float: right;"><a href="/admin/category/new">Создать категорию</a></div>
        </br>
        <p>Список категорий материалов </p>
        <table id="content_list">
            <thead>
            <th>ID</th>
            <th>Заголовок</th>
            <th>Родительская категория</th>
            <th>Редактировать</th>
            <th>Удалить</th>
            </thead>
            <tbody>
            {% for cat in categories %}
                    <tr>
                        <td>{{cat.id}}</td>
                        <td>{{cat.title}}</td>
                        <td>{{cat.parent_id}}</td>
                        <td><a href="/admin/category/edit/{{cat.id}}"<>Редактировать</a></td>
                        <td><a href="/admin/category/remove/{{cat.id}}">Удалить</a></td>
                    </tr>
                {% endfor %}
            </tbody>
        </table>
    </div>
</form>
{% endblock %}