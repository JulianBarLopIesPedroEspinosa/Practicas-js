const in1 = document.getElementById("in1");
const in2 = document.getElementById("in2");
const btnSumar = document.getElementById("btnSumar");
const h11 = document.getElementById("h11");



/****************  FUNCTIONS  **********************************************/
btnSumar.addEventListener("click",function(){ //Funcion que suma los valores que tengamso en los inputs
        h11.innerHTML = "Resultado de la suma: "    
    if(typeof parseInt(in1.value) == "number" && typeof parseInt(in2.value) == "number")
    h11.innerHTML += parseInt(in1.value) + parseInt(in2.value);
    console.log("Entre")
});
