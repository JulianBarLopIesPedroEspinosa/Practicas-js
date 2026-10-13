/*const in1 = document.getElementById("in1");
const in2 = document.getElementById("in2");
const btnSumar = document.getElementById("btnSumar");
const h11 = document.getElementById("h11");

btnSumar.onclick = doSuma;

let result = doSuma(56.77, 11, 1, 2, 3, 4);
console.log("Resultado de la suma: " + result);

/****************  FUNCTIONS  ***********************************************

function doSuma(a, b, ...restoOperadores){
    console.log(restoOperadores);
    let result = a + b;
    for(op of restoOperadores){     
        result = op;
        
        h11.innerHTML = result;
    }


    return result;
}


    let papa = (a,b) =>  a * b ;
    console.log(papa(1,2));



/*function doSuma(dato_1, dato_2){
    let a = dato_1 || parseFloat(in1.value);
    let b = dato_2 || parseFloat(in2.value);
    let result = 0;

    if((typeof a == "number") && (typeof b == "number")){
        result = a + b;
        h11.innerHTML = result;
        in1.value = "0";
        in2.value = "0";
    }

    return result;

}


/*
btnSumar.addEventListener("click",function(){ //Funcion que suma los valores que tengamso en los inputs
        h11.innerHTML = "Resultado de la suma: "    
    if(typeof parseInt(in1.value) == "number" && typeof parseInt(in2.value) == "number")
    h11.innerHTML += parseInt(in1.value) + parseInt(in2.value);
    console.log("Entre")
});
*/
const h11 = document.getElementById("h11");

let myArray = new Array();

myArray.push("Pepe");
myArray.push(56);
myArray.push(true);
myArray.push("Ana");
myArray.push(new Array(1,2,3));
myArray.push({marca:"Ford", matricula:"123456A"});
myArray.push(Math.PI);

myArray.forEach((elem, i, array) => {
    elem = 2;   // asi no va, es un for normal
    array[i] = 1;
});

let myBooleanArray = myArray.filter(elem=>{
    return typeof elem == "boolean";
});
console.log(myBooleanArray)

let myMap = new Map();

myMap.set(1, "Pepe");
myMap.set(2, "Maria");
myMap.set(true, "Antonio");
myMap.set("123456c","Pepe");
myMap.set(1,"Ana"); //Si se repite la clave machaca el valor

for([clave, valor] of myMap){
    h11.innerText = `Clave ${clave}: ${valor}<br>`
}

const h4 = document.createElement("h2");

let myDate = new Date()

const calendario = document.getElementById("calendario");

h4.innerHTML = "Peo"

calendario.oninput = function (){
    h4.innerHTML = "Hola " + (new Date(this.value))
}
document.body.appendChild(h4);


