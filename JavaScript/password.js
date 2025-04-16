console.log("index-password.js cargado");

const lengthInput = document.getElementById("length");
const generateBtn = document.getElementById("generate");
const passwordOutput = document.getElementById("password");

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_=+";

function generatePassword(length) {
  let allChars = uppercase + lowercase + numbers + symbols;
  let password = "";

  password += getRandomChar(uppercase);
  password += getRandomChar(lowercase);
  password += getRandomChar(numbers);
  password += getRandomChar(symbols);

  for (let i = 4; i < length; i++) {
    password += getRandomChar(allChars);
  }

  const finalPassword = shuffle(password);
  console.log("Contraseña generada:", finalPassword);
  return finalPassword;
}

function getRandomChar(str) {
  return str[Math.floor(Math.random() * str.length)];
}

function shuffle(str) {
  return str.split("").sort(() => Math.random() - 0.5).join("");
}

generateBtn.addEventListener("click", () => {
    const length = parseInt(lengthInput.value);
    if (isNaN(length) || length < 12 || length > 50) {
      alert("La longitud debe estar entre 12 y 50.");
      return;
    }
  
    const password = generatePassword(length);
    passwordOutput.value = password;
  
    copyBtn.textContent = "📋";
    copyMsg.textContent = "";
    copyMsg.style.opacity = 0;
});
  
  

const copyBtn = document.getElementById("copyPassword");
const copyMsg = document.getElementById("copy-msg");

copyBtn.addEventListener("click", () => {
  const password = passwordOutput.value;
  if (!password) return;

  navigator.clipboard.writeText(password).then(() => {
    copyBtn.textContent = "✅";
    copyMsg.textContent = "¡Copiada!";
    copyMsg.style.opacity = 1;

    clickSound.play();

    setTimeout(() => {
      copyBtn.textContent = "📋";
      copyMsg.style.opacity = 0;
    }, 1500);
  });
});

