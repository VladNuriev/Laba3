<!DOCTYPE html>
<html lang="en">
<hed>
<meta charset="UTF-8">
<title>Взаимодействие с пользователем</title>
</head>
<body>
<script type="text/javascript">
var answer = true;
if (confirm('Доброго времени суток, у этой страницы есть к вам вопрос, вы готовы ответить?')) {
while (answer) {
var age = prompt('Сколько вам лет?', 'Введите ваш возраст');
if (confirm("Ваш возраст - " + age + " лет?")) {
aler("Спасибо за участие!")
answer = false;
} else [
alert("Введите еще раз")
}
}
}
</script>
</body>
</html>
