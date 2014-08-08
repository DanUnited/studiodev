{% extends "main.tmpl" %}
{% block body %}
<div>
<div id="contentsblock">

	<div id="breadthrumbs">&nbsp</div>
    {% for item in content %}
			<div id="page">
				<div id="contenthead"><div>{{item.title}}</div></div>
				<div id="readmore">
					<a href="/content/page/{{item.id}}">Читать</a>
				</div>
				<div id="time">Сегодня 12:06</div>
				<div id="content">
                    {% autoescape false %}
                    {{ item.content }}
                    {% endautoescape %}
				</div>
			<div style="clear: both;"></div>
			</div>
    {% endfor %}
</div>
</div>

{% endblock %}