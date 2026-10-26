//Actualizar antes de desplegar
const URL = location.href; // http://127.0.0.1:5500/

var userWindow = null;
const login = document.getElementById("login");
const info = document.getElementById("info");
const mail = document.getElementById("email");


info.innerHTML = location.origin;


document.getElementById("aSendEmail").onclick = function () {
    //location.assign("http://127.0.0.1:5500/src/email.html")
    location.replace(URL + "src/email.html");
}