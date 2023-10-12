import { getAll, getOne, deleteOne } from "../storage/portafolio"

const showTable = (data) => {
    const myData = document.querySelector("#tabla")
    tabla.forEach((obj) => {
        tabla.insertAdjacentHTML("beforeend", `
            <tr>
                <th>${obj.id}</th>
                <td>${obj.nombre}</td>
                <td>${obj.foto}</td>
                <td><button class="btnPortafolio"></button>
                <td>
                    <button data-mod="${obj.id}" class="btnModificar"></button>

                    <button data-del="${obj.id}" class="btnEliminar"></button>
                </td>
            </tr>
        `)
    })
}

let myLibro = document.querySelector("#myLibro");
let myCategoria = document.querySelector("#myCategoria");
let myAutor = document.querySelector("#myAutor");
let myData = document.querySelector("#myData");

addEventListener("DOMContentLoaded", async(e)=>{
    let cat = await getAllCat();
    cat = cat.map(res=> `<option value="${res.id}">${res.nombre}</option>`);
    myCategoria.insertAdjacentHTML("beforeend", `${cat.join("")}`);

    let aut = await getAllAut();
    aut = aut.map(res=> `<option value="${res.id}">${res.nombre} ${res.apellido}</option>`);
    myAutor.insertAdjacentHTML("beforeend", `${aut.join("")}`);

    let relLibro = await ObtenerAllData();
    console.log(relLibro);
    relLibro = relLibro.map(res=>{
        return `
            <tr>
                <td>${res.id}</td>
                <td>${res.isbn}</td>
                <td><img src="${res.imagen}" style="width: 60px;height: 80px; object-fit: fill;"  /></td>
                <td>${res.titulo}</td>
                <td>${(res.categoriaId.nombre) ? res.categoriaId.nombre : res.categoriaId.message}</td>
                <td>${res.autorId.nombre}</td>
                <td>${res.editorialId}</td>
                <td>${res.numPaginacion}</td>
                <td>${res.fecha}</td>
                <td>${res.estadoId}</td>
            </tr>
        `;
    })
    myData.insertAdjacentHTML("beforeend", `${relLibro.join("")}`);
})