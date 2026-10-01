var btn = document.getElementById("btn");
var numSquare = document.getElementById("numCuadrado");
let numConsole = 1;
let objConsole = [1,2,3];

console.log(numConsole);
console.error(numConsole);
console.table(objConsole);
console.warn(numConsole);

/*************** FUNCIONES ************************/

btn.addEventListener("click", suma);

function suma() {
    numSquare.innerHTML = parseInt(numSquare.innerHTML)+1;  
    if( parseInt(numSquare.innerHTML)%2==0)
        par(colorcito());
    else if(parseInt(numSquare.innerHTML)%3==0)
        parr();
};
function par(colorcito){
    numSquare.style.backgroundColor = colorcito; 
};  

function colorcito(){
    let rojo = Math.floor(Math.random() * 256);
    let verde = Math.floor(Math.random() * 256);
    let azul = Math.floor(Math.random() * 256);

    return `rgb(${rojo}, ${verde}, ${azul})`;    
};
