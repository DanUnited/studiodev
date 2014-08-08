{% extends "admin.tmpl" %}
{% block body %}

<form action="/admin/content/new" method="POST">
    <input type="hidden" name="new" value="1">
    <div id="main_content" style="height:1160px;">

        <p>Название материала:</p>
        <input type="text" name="title" value="">
        </br>
        <p>Категория материала</p>
        <input type="text" name="category" value="">
        <p>Краткое содержание материала (HTML)</p>
        <textarea name="content" cols="96" rows = "25" id="content_min">
        </textarea>
        <p>Полное содержание материала (HTML)</p>
        <textarea name="content_full" cols="96" rows = "25" id="content_full">
        </textarea>

        </pre>
        <input type="submit" value="Сохранить">
    </div>
</form>
<script>
    $(document).ready(function(){
        editAreaLoader.init({
            id : "content_min"
            ,syntax: "html"
            ,start_highlight: true
            ,toolbar: "undo, redo,fullscreen,select_font,word_wrap"
            ,language:'ru'
        });
        editAreaLoader.init({
            id : "content_full"
            ,syntax: "html"
            ,start_highlight: true
            ,toolbar: "undo, redo,fullscreen,select_font,word_wrap"
            ,language:'ru'
        });

    });
</script>
{% endblock %}