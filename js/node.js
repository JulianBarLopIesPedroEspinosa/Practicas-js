const h12 = document.getElementById("h12");
let myAlumn = {
    name:"John",
    surname: "Power",
    age:19,
    active:true,
    mail:"john@mail.com",
    grades:[6,7.85,9.25]
};

h12.innerHTML = "Nombre del alumno/a: " + myAlumn[0] + ". Nota1: " + myAlumn.grades[0];

let myAlumn2 = new Object();

myAlumn2.name="Anne";
myAlumn2.surname="Flowers";
myAlumn2.age=21;
myAlumn2.active=false;
myAlumn2.mail="anne@mail.com";
myAlumn2.grades=[6.7,7.6,10];

let myAlumn4 = "let the magic in my heart stay true";

let myAlumn3 = new Object();

Object.defineProperties(myAlumn3,{
    name:{configurable:true, enumerable:true, value:"Pepe"},
    surname:{configurable:true, enumerable:true, value:"Perezsito"},
    age:{configurable:true, enumerable:true, value:23}
})

