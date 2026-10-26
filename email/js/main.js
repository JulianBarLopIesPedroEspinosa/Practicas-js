// var vetanaGoogle = null;
// vetanaGoogle = window.open("https://www.google.com/?hl=es_419", "_blank", "width=350px,height=250px");
// "_blank" --> la url se carga en una nueva ventana
var ventanaEmail = null;
document.getElementById("aSendEmail").onclick = function () {
    if ((!ventanaEmail) || (ventanaEmail.closed)) {
        ventanaEmail = window.open("src/email.html", "_blank", "width=350px,height=250px");
    } else {
        alert("Ya tienes la ventana email abierta")
        ventanaEmail.focus();
    }
}
document.getElementById("aMoverWindow").onclick = function () {
    if (ventanaEmail) {
        ventanaEmail.moveTo(500, 300);
        ventanaEmail.focus();
    } else {
        alert("La ventana ya se cerro");
    }
}
// moveTo(500, 300): "ve a este sitio". Pones la ventana en esa posición exacta.
// moveBy(500, 300): "muévete tanto". Desde donde estás, sumas 500 a la derecha y 300 abajo.
// Ejemplo: la ventana está en (100, 100)
// moveTo(500, 300) --> acaba en (500, 300)
// moveBy(500, 300) --> acaba en (600, 400)