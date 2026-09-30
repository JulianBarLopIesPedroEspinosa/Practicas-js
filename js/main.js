/*
const in1 = document.getElementById("in1");
const in2 = document.getElementById("in2");
const btnSumar = document.getElementById("btnSumar");
const h11 = document.getElementById("h11");



/****************  FUNCTIONS  **********************************************
btnSumar.addEventListener("click",function(){ //Funcion que suma los valores que tengamso en los inputs
        h11.innerHTML = "Resultado de la suma: "    
    if(typeof parseInt(in1.value) == "number" && typeof parseInt(in2.value) == "number")
    h11.innerHTML += parseInt(in1.value) + parseInt(in2.value);
    console.log("Entre")
});
*/



const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log("Elige una opcion del menu\n0 - Sumar\n1 - Restar\n2 - Multiplicar\nElige opcion: 5 para salir");

//Preguntar al usuario
rl.question('¿Elige opcion?'), (nombre) =>{
    console.log(`Hola, ${nombre}!`);

    releaseEvents.close
}