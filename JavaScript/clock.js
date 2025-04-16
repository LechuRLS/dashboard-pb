function updateClock() {
    const now = new Date();
  
    let hours = now.getHours().toString().padStart(2, "0");
    let minutes = now.getMinutes().toString().padStart(2, "0");
    let seconds = now.getSeconds().toString().padStart(2, "0");
  
    const clock = `${hours}:${minutes}:${seconds}`;
    document.getElementById("clock").textContent = clock;
  
    const day = now.getDate().toString().padStart(2, "0");
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const year = now.getFullYear();
    const date = `${day}/${month}/${year}`;
    document.getElementById("date").textContent = date;
  
    const message = document.getElementById("message");
    const currentHour = now.getHours() + now.getMinutes() / 60;
  
    if (currentHour >= 0.01 && currentHour <= 7.0) {
      message.textContent = "Es hora de descansar. Apaga y sigue mañana.";
    } else if (currentHour > 7 && currentHour <= 12) {
      message.textContent = "Buenos días, desayuna fuerte y a darle al código.";
    } else if (currentHour > 12 && currentHour <= 14) {
      message.textContent = "Echa un rato más pero no olvides comer.";
    } else if (currentHour > 14 && currentHour <= 16) {
      message.textContent = "Espero que hayas comido.";
    } else if (currentHour > 16 && currentHour <= 18) {
      message.textContent = "Buenas tardes, el último empujón.";
    } else if (currentHour > 18 && currentHour <= 22) {
      message.textContent = "Esto ya son horas extras, piensa en parar pronto.";
    } else {
      message.textContent = "Buenas noches, es hora de pensar en parar y descansar.";
    }
  }
  
  setInterval(updateClock, 1000);
  updateClock();
  