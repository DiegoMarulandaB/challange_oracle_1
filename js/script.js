let inputCampoUsuario = document.querySelector("#campoUsuario");
let inputCodigo = document.querySelector("#codigo");

let form_bnt_1 = document.querySelector(".form_bnt_1");
let form_bnt_2 = document.querySelector(".form_bnt_2");
let form_bnt_3 = document.querySelector(".form_bnt_3");

let container = document.querySelector("#container");

function validaciones() {
  let warrning = container.querySelectorAll(".error");
  for (let error of warrning) {
    container.removeChild(error);
  }

  let message = inputMessage.value;
  let validateletters = "abcdefghijklmnñopqrstuvwxyz";
  let errorMessage = document.createDocumentFragment();
  for (let lyrics of message) {
    if (!validateletters.includes(lyrics)) {
      let a = document.createElement("a");
      a.setAttribute("class", "error");
      a.textContent = "lyrics ${lyrics}incorrect 😓";
      errorMessage.appendChild(a);
    }
  }

  container.appendChild(errorMessage);
  if (container.children.length == 0) {
    return true;
  }
  return false;
}

function encrypt() {
  if (!validateletters()) return;
  let message = inputCampoUsuario.value;
  let encryptedMessage = message
    .replaceAll("b", "bienvenid@")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat")
    .replaceAll("h", "hasta luego!");

  inputCodigo.value = encryptedMessage;
}

function decrypt() {
  if (!validateletters()) return;
  let encryptedMessage = inputCampoUsuario.value;
  let message = encryptedMessage
    .replaceAll("bienvenid@", "b")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u")
    .replaceAll("hasta luego!", "h");

  inputCodigo.value = message;
}

function copy() {
  let encryptedMessage = inputCodigo.value;
  navigator.clipboard.writeText(encryptedMessage);
  inputCampoUsuario.value = "";
  inputCampoUsuario.focus();
}

form_bnt_1.onclick = encrypt;
form_bnt_2.onclick = decrypt;
form_bnt_3.onclick = copy;
