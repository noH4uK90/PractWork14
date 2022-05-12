var days =["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
var now = new Date();
var datetime = now.getDate() + "." + (now.getMonth() + 1) + "." + now.getFullYear();

alert(`${datetime}, ${days[now.getDay()]}`);