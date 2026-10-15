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
/*
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

calendario.oninput =  function (){
    h4.innerHTML = "Hola " + (new Date(this.value))
}
document.body.appendChild(h4);

*/


const h21 = document.getElementById("h21")

let navigatorObject = new Object({
    useragent: navigator.userAgent,
    platform: navigator.platform,
    lenguage: navigator.language,
    conectado: navigator.onLine,
    permitidoCookies: navigator.cookieEnabled,
    cpus: navigator.hardwareConcurrency,
    webdriver: navigator.webdriver
})

h21.innerHTML = navigatorObject.useragent + "<br>";
h21.innerHTML += "Plataforma del sistema operativo" + navigatorObject.platform + "<br>";
h21.innerHTML += "Idioma preferido del navegador" + navigatorObject.lenguage + "<br>";
h21.innerHTML += "Devuelve true si el navegador está conectado a internet." + navigatorObject.conectado + "<br>";
h21.innerHTML += "Devuelve true si las cookies están habilitadas" + navigatorObject.permitidoCookies + "<br>";
h21.innerHTML += "Número de núcleos de CPU disponibles." + navigatorObject.cpus + "<br>";
h21.innerHTML += "Devuelve true si el navegador está controlado por un software de automatización."
    + navigatorObject.webdriver + "<br>";


let screenObject = new Object({
    availHeight: screen.availHeight,
    availWidth: screen.availWidth,
    colorDepth: screen.colorDepth,
    height: screen.height,
    width: screen.width,
    pixelDepth: screen.pixelDepth,
    orientationType: screen.orientation.type,
    orientationAngle: screen.orientation.angle,
    availLeft: screen.availLeft,
    availTop: screen.availTop
})

h21.innerHTML = "Altura disponible de la pantalla para el uso de ventanas: " + screenObject.availHeight + "<br>";
h21.innerHTML += "Anchura disponible de la pantalla para el uso de ventanas: " + screenObject.availWidth + "<br>";
h21.innerHTML += "Número de colores (en bits) que puede representar la pantalla: " + screenObject.colorDepth + "<br>";
h21.innerHTML += "Altura total de la pantalla: " + screenObject.height + "<br>";
h21.innerHTML += "Anchura total de la pantalla: " + screenObject.width + "<br>";
h21.innerHTML += "Resolución de la pantalla expresada en bits por píxel: " + screenObject.pixelDepth + "<br>";
h21.innerHTML += "Tipo de orientación actual de la pantalla: " + screenObject.orientationType + "<br>";
h21.innerHTML += "Ángulo de orientación actual de la pantalla: " + screenObject.orientationAngle + "<br>";
h21.innerHTML += "Posición horizontal disponible desde el borde izquierdo (multimonitor): " + screenObject.availLeft + "<br>";
h21.innerHTML += "Posición vertical disponible desde el borde superior (multimonitor): " + screenObject.availTop + "<br>";


if(screen.height > screen.width){
    h21.innerHTML = "portrait";
}
else{
    h21.innerHTML = "landscape"
}

document.body.onresize = ()=>{   
if(screen.height > screen.width){
    h21.innerHTML = "portrait";
    
}
else{
    h21.innerHTML = "landscape"
}
}


