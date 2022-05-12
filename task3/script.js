var second = Number(prompt("Введите секунды"));

var minuts = Math.floor(second / 60);
var seconds = second % 60;

alert(`В ${second} секундах - ${minuts}:${seconds}`);