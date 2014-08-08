{% extends "main.tmpl" %}
{% block body %}

<div>
    <div id="contentsblock">

        <div id="breadthrumbs">&nbsp</div>
        <div id="page">
            <div id="contenthead_w">
                <div>{{ content.title }}</div>
            </div>
            <div id="time">Сегодня 12:06</div>
            <div id="content_full">
                {% autoescape false %}
                {{ content.content_full }}
                {% endautoescape %}
            </div>
            <div style="clear: both;"></div>
        </div>
    </div>
</div>
<script>
    $("#right_indent").attr('id', 'right_indent_small');
</script>

{% endblock %}

