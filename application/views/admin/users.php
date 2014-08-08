{% extends "admin.tmpl" %}
{% block body %}

<div id="message">{{ data.message }}</div>
<form action="admin/users/index" method="POST">
    <div id="main_content">
        <div style="color: white;float: right;"><a href="/admin/users/new">Создать пользователя</a></div>
        <p>Список пользователей</p>
        <table id="content_list">
            <thead>
            <th>ID</th>
            <th>Никнейм</th>
            <th>E-Mail</th>
            <th>Дата регистрации</th>
            <th>Редактировать</th>
            <th>Удалить</th>
            </thead>
            <tbody>
            {% for u in users %}
            <tr>
                <td>{{ u.id }}</td>
                <td>{{ u.user }}</td>
                <td>{{ u.email }}</td>
                <td>{{ u.data }}</td>
                <td><a href="/admin/users/edit/{{ u.id }}"<>Редактировать</a></td>
                <td><a href="/admin/users/remove/{{ u.id }}">Удалить</a></td>
            </tr>
            {% endfor %}
            </tbody>
        </table>
    </div>
</form>
{% endblock %}