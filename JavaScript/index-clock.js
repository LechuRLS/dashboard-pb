function updateClock() {
    const now = new Date();
  
    let hours = now.getHours().toString().padStart(2, "0");
    let minutes = now.getMinutes().toString().padStart(2, "0");
    let seconds = now.getSeconds().toString().padStart(2, "0");
  
    document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}`;
  
    const day = now.getDate().toString().padStart(2, "0");
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const year = now.getFullYear();
    document.getElementById("date").textContent = `${day}/${month}/${year}`;
  
    const hourValue = now.getHours() + now.getMinutes() / 60;
    let message = "";
  
    if (hourValue <= 7) {
      message = "Es hora de descansar. Apaga y sigue mañana.";
    } else if (hourValue <= 12) {
      message = "Buenos días, desayuna fuerte y a darle al código.";
    } else if (hourValue <= 14) {
      message = "Echa un rato más pero no olvides comer.";
    } else if (hourValue <= 16) {
      message = "Espero que hayas comido.";
    } else if (hourValue <= 18) {
      message = "Buenas tardes, el último empujón.";
    } else if (hourValue <= 22) {
      message = "Esto ya son horas extras, piensa en parar pronto.";
    } else {
      message = "Buenas noches, es hora de pensar en parar y descansar.";
    }
  
    document.getElementById("message").textContent = message;
  }
  
  setInterval(updateClock, 1000);
  updateClock();