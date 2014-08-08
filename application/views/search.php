{% extends "main.tmpl" %}
{% block body %}

<div>
    <div id="contentsblock">
        <h2 class = "message">{{ message}}</h2>
        <form action="/app/search/" method="GET" class="login">
            <h2>Поиск по материалам сайта</h2>
            Минимальное количество искомых символов - три.
            <p>Поисковая строка</p>

            <input type="text" name="query" value="{{query}}">

            <p></p>
            <select name="type">
                <option value="FULL">Полнотекстовый поиск
                <option value="SIMPLY" {% if get.type =='SIMPLY' %}  SELECTED {% endif %}>Обычный поиск
            </select>
            <p></p>
            <input type="checkbox" name="find_intext" {% if (get.find_intext =='on') %}CHECKED {% endif %} />Искать только в содержимом
            <p>
                <input type="submit" value="Искать">
            </p>
        </form>
        <form class="login">
            <p>Результаты поиска</p>
            <h3>Найдено материалов: {{ results | length }}</h3>
        </form>
        {% for items in results %}
                <p></p>
                <div id="page">
                    <div id="contenthead"><div >{{ items.title }}</div></div>
                    <div id="readmore">
                        <a href="/content/page/{{ items.id }}">Читать</a>
                    </div>
                    <div id="time">Data</div>
                    {% autoescape false %}
                    <div id="content">{{items.content}}</div>
                    {% endautoescape %}
                    <div style="clear: both;"></div>
                </div>


            {% endfor %}
    </div>
</div>

{% endblock %}