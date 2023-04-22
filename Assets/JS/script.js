//Pintando tabla con los datos de una API
var contenido = document.querySelector("#contenido");

fetch("https://digimon-api.vercel.app/api/digimon")
    .then(response => response.json())
    .then(datos => {
        tabla(datos);
});

function tabla(datos) {
    contenido.innerHTML = "";

    for (let temp of datos) {
        contenido.innerHTML += `
                <tr>
                    <td scope="col">${temp.name}</td>
                    <td scope="col"><img src="${temp.img}" alt="digimon image"></td>
                    <td scope="col">${temp.level}</td>
                </tr>
            `;
        if (temp.id == 209) {
        }
    }
}

//Escribir y buscar digimon por su nombre
const form = document.querySelector('form[role="search"]');
form.addEventListener('submit', event => {
    event.preventDefault();

    const buscar = event.target.querySelector('input[type="search"]').value;
    
    fetch(`https://digimon-api.vercel.app/api/digimon/name/${buscar}`)
        .then(response => response.json())
        .then(datos => tabla(datos))
        .catch(error => console.error(error));
});

//Eventos JQuery
$("tbody").mouseenter(function(){
    $("td").css("background-color", "#faedcb");
});

$("tbody").mouseleave(function(){
    $("td").css("background-color", "#ffd6a5");
});

$(document).ready(function(){
    $("tbody").click(function(){
        alert("٩(๑`^´๑)۶");
    });
});

//Consumir API
fetch('https://digimon-api.vercel.app/api/digimon')
.then(res => res.json())
.then(res => console.log(res));