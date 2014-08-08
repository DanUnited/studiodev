{% extends "main.tmpl" %}
{% block body %}

<div>
    <div id="contentsblock">
        <form action="/app/auth" method="POST" class="login">
            <input type="hidden" value = "1" name="register">
            <h2>Регистрация пользователя</h2>
            <p>Логин</p>
            <input type="text" name="username" value="">
            <p>Пароль</p>
            <input type="password" name="password" value="">
            <p>Повторите ваш пароль</p>
            <input type="password" name="repeat_password" value="">
            <p>Введите E-Mail</p>
            <input type="text" name="email" value="">
            <p>Ваше имя</p>
            <input type="text" name="name" value="">
            <p>
                <input type="submit" value="Отправить">
            </p>
            <a href="/app/login">Авторизация</a>
        </form>
    </div>
</div>

{% endblock %}