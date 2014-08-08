{% extends "main.tmpl" %}
{% block body %}

<div>
    <div id="contentsblock">
        <h2 class = "message">{{message}}</h2>
        <form action="/app/auth" method="POST" class="login">
            <input type="hidden" value = "1" name="login">
            <h2>Авторизация пользователя</h2>
            <p>Логин</p>
            <input type="text" name="username" value="">
            <p>Пароль</p>
            <input type="password" name="password" value="">
            <p>
                <input type="submit" value="Отправить">
            </p>
            <a href="/app/register">Регистрация</a>
        </form>
    </div>
</div>

{% endblock %}