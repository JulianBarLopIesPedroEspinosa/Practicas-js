var numConsole = 50;

var alumno = ["Pepe", true, 5.67, null, {name:"Ana", curso:"2ºDAW"},[7,8.3,9.5]];

console.log("Tamaño de a es: " + alumno.length);
console.log(alumno[5]);
console.log(typeof alumno);

/****************  FUNCTIONS  **********************************************/
document.getElementById("itnNumItemCarrito").addEventListener("blur",function(){
    numConsole += parseInt(this.value);
    console.log(numConsole);
});
