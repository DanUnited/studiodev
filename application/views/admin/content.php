{% extends "admin.tmpl" %}
{% block body %}

<div id="message">{{ message }}</div>
<form action="admin/index" method="POST">
    <div id="main_content">
        <div style="color: white;float: right;"><a href="/admin/content/new">Создать материал</a></div>
        <p>Выберите категорию материалов:</p>
        <select id="categories">
                {% for cat in categories %}
                    <option value="{{cat.id}}">{{cat.title}}</option>
                {% endfor %}
        </select>
        </br>
        <p>Список материалов </p>
        <table id="content_list">
            <thead>
            <th>ID</th>
            <th>Заголовок</th>
            <th>Категория</th>
            <th>Статус</th>
            <th>Редактировать</th>
            <th>Удалить</th>
            </thead>
            <tbody>
            </tbody>
        </table>
    </div>
</form>
</div>

<script>
    $(document).ready(function(){
        //Ajax получение списка материалов категории
        function loadTable()
        {
            $.get('/admin/content/table/', {category_id:$("#categories :selected").val()}, function(data) {
                //clear and load
                $("#content_list tbody tr").remove();
                $("#content_list tbody").html(data);
            });
        };
        loadTable();
        $("#content_list tr:nth-child(even)").addClass("color");
        $('#categories').change(function() {
            loadTable()
        });
    });
</script>
{% endblock %}