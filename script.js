let now = new Date();

let days = [
  "Sunday ",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
console.log(days);

let today = days[now.getDay()];
console.log(today);

let hour = now.getHours();
console.log(hour);

let minute = now.getMinutes();
console.log(minute);

let months = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
console.log(months);

let month = months[now.getMonth()];
console.log(month);

let currentHour = document.querySelector("#hours");
currentHour.innerHTML = `${month}/${today} ${hour}:${minute}`;
