let date = document.getElementById('date');
let day = document.getElementById('day');
let month = document.getElementById('month');
let year = document.getElementById('year');

let weeksNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


let today = new Date();
console.log(today);

date.innerHTML = (today.getDate() < 10? "0":"") + today.getDate();
day.innerHTML = weeksNames[today.getDay()];
month.innerHTML = monthNames[today.getMonth()];
year.innerHTML = today.getFullYear();
