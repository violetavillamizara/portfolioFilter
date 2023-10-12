import { getAll, getOne, post, deleteOne, delet } from "../storage/portafolio.js"

const button = document.querySelector("button");

button.addEventListener("submit", async (e) => {
    const showTable = (data) => {
        const tabla = document.querySelector("#tabla");
        tabla.innerHTML = ""; // Limpia el contenido anterior de la tabla

        data.forEach((obj) => {
            tabla.insertAdjacentHTML("beforeend", `
                <tr>
                    <th>${obj.id}</th>
                    <td>${obj.nombre}</td>
                    <td>${obj.foto}</td>
                    <td>
                        <button class="btnPortafolio">Botón 1</button>
                    </td>
                    <td>
                        <button data-id="${obj.id}" class="delet">Eliminar</button>
                    </td>
                </tr>
            `);
        });
    }

    // Ejemplo de datos para mostrar en la tabla
    const data = [
        { id: 1, nombre: "Ejemplo 1", foto: "foto1.jpg" },
        { id: 2, nombre: "Ejemplo 2", foto: "foto2.jpg" },
        // Agrega más objetos de datos según tus necesidades
    ];

    showTable(data);
});

addEventListener("DOMContentLoaded", async (e) => {
    const showTable = (data) => {
        const tabla = document.querySelector("#tabla")
        tabla.forEach((obj) => {
            tabla.insertAdjacentHTML("beforeend", `
                <tr>
                    <th>${obj.id}</th>
                    <td>${obj.nombre}</td>
                    <td>${obj.foto}</td>
                    <td><button class="btnPortafolio"></button>
                    <td>
                        <button ="${obj.id}" class="delet">Eliminar</button>
    
                        <button ="${obj.id}" class=""></button>
                    </td>
                </tr>
            `)
        })
    }
})

document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.querySelector("form");

    formulario.addEventListener("submit", async function (e) {
        e.preventDefault();

        const formData = Object.fromEntries( new FormData(formulario));
        console.log(formData);
        // const formDataObject = {};
        // formData.forEach((value, key) => {
        //     formDataObject[key] = value;
        // });

        let res = await post({obj: formData});
        console.log(res);
        formulario.reset();
    });
});