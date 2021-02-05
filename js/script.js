let time = document.getElementById("time");
console.log(time);
function setTime() {
  let now = new Date();
  let seconds = now.getSeconds();
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  let hours = now.getHours();
  time.innerHTML = `${hours}:${minutes}:${seconds} `;
}

setInterval(setTime, 1000);
