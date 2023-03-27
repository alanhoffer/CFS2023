let btnAgregar = document.querySelector("#btnAgregar");
btnAgregar.addEventListener("click", agregar);
let btnDuracion = document.querySelector("#btnDuracion");
btnDuracion.addEventListener("click", duracion);

let pistas = [];
let url = "http://localhost:3000/mock.json"


load();

async function load() {
    let container = document.querySelector("#tblPistas");
    container.innerHTML = "<h1>Loading...</h1>";
    try {

        let response = await fetch("http://localhost:3000/pista");

        if (response.ok) {
            let res = await response.json();
            pistas = res;
            mostrarPistas();
        } else {
            container.innerHTML = "<h1>404 Error - Failed URL!</h1>";
        }
    } catch (response) {
        container.innerHTML = "<h1>500 Connection error</h1>";
    }
}


function agregar() {
    console.log("Función Agregar");
    let identificador = parseInt(document.querySelector('#identificador').value);
    let titulo = document.querySelector('#titulo').value;
    let duracion = parseInt(document.querySelector('#duracion').value);
    let interprete = document.querySelector('#interprete').value;
    let lanzamiento = document.querySelector('#lanzamiento').value;
    let renglon = {
        "identificador": identificador,
        "titulo": titulo,
        "duracion": duracion,
        "interprete": interprete,
        "lanzamiento": lanzamiento,
    }
    pistas.push(renglon);
    mostrarPistas();
}

function duracion() {
    console.log("Función Duración");
    let total = 0;
    for (let i = 0; i < pistas.length; i++) {
        total += pistas[i].duracion;
    }
    let max = pistas[0].duracion;
    for (let r of pistas) {
        if (max < r.duracion)
            max = r.duracion;

    }
    document.querySelector("#total").innerHTML = `
    <p>Duración Total: ${total}</p>
    <p>Duración Máxima: ${max}</p>
    `;

}

function mostrarPistas() {
    let html = "";
    for (let r of pistas) {
        html += `
    <tr>
    <td>${r.identificador}</td>
    <td>${r.titulo}</td>
    <td>${r.duracion}</td>
    <td>${r.interprete}</td>
    <td>${r.lanzamiento}</td>
    </tr>
    `;
    }
    document.querySelector("#tblPistas").innerHTML = html;
}