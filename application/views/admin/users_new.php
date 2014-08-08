{% extends "admin.tmpl" %}
{% block body %}
<form action="/admin/users/new" method="POST">
    <input type="hidden" name="new" value="1">

    <div id="main_content" style="height:500px;">

        <p>Имя пользователя</p>
        <input type="text" name="username" value="">
        </br>
        <p>Пароль</p>
        <input type="password" name="password" value="">

        <p>E-Mail</p>
        <input type="text" name="email" value="">

        <p>Имя пользователя</p>
            <input type="text" name="name" value="">

        <p>Ранк пользователя</p>
            <select name="rank">
                {% for role in roles %}
                <option value="{{role.id}}">{{role.title}}</option>
                {%endfor%}
            </select>
        <p></p>
        <input type="submit" value="Сохранить">
    </div>
</form>
{% endblock %}