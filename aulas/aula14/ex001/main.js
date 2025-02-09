const titulo1 = document.querySelector("#titulo1");
const titulo2 = document.querySelector("#titulo2");
const titulo3 = document.querySelector("#titulo3");
const titulo4 = document.querySelector("#titulo4");
const titulo5 = document.querySelector("#titulo5");

fetch("objetos.json")
.then(response => response.json())
.then(caua => {
    caua.objeto1
    caua.objeto2
    caua.objeto3
    caua.objeto4
    caua.objeto5
    titulo1.innerHTML = caua.objeto1
    titulo2.innerHTML = caua.objeto2
    titulo3.innerHTML = caua.objeto3
    titulo4.innerHTML = caua.objeto4
    titulo5.innerHTML = caua.objeto5

}
);