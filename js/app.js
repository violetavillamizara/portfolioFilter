import { getAll, getOne, post, deleteOne } from "../storage/portafolio"

const form=document.querySelector("form")

addEventListener("DOMContentLoaded", async(e)=>{
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
                        <button ="${obj.id}" class=""></button>
    
                        <button ="${obj.id}" class=""></button>
                    </td>
                </tr>
            `)
        })
    }
})


form.addEventListener("submit", async(e)=>{
    e.preventDefault()
})