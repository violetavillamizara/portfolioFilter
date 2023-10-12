import env from "../js/config.js";

const uri = `${env.ssl + env.hostName}:${env.port}`;
const config = { method: undefined, headers: { "Content-Type": "application/json" } };

export const getAll = async () => {
    console.log(`${uri}/portafolio`);
    config.method = "GET";

    let res = await (await fetch(`${uri}/portafolio`, config)).json();
    return res;
}

export const getOne = async (id) => {
    config.method = "GET";
    let res = await (await fetch(`${uri}/portafolio/${id}`, config)).json();
    return res;
}

export const post = async ({ obj = {} } = {}) => {
    config.method = "POST";
    config.body = JSON.stringify(obj);
    let res = await (await fetch(`${uri}/portafolio`, config)).json();
    return (res.id) ? { status: 201, message: "El CV fue creado correctamente", id: res.id } : undefined;
}

export const deleteOne = async (id) => {
    config.method = "DELETE";
    config.body = JSON.stringify(obj);
    let res = await (await fetch(`${uri}/portafolio/${id}`, config)).json();
    return res;

}

export const delet = () => {
    const btnDelete = document.querySelectorAll(".delet");
    btnDelete.forEach((element) => {
        element.addEventListener("click", async (e) => {
            const id = e.target.getAttribute("id");
            let config = {
                method: "DELETE",
            };
            let res = await fetch(`${uri} + "/" + ${id}`, config);
            if (res.ok) {
                console.log("Registro eliminado");
                window.location.reload();
            } else {
                console.error("Error al eliminar el registro");
            }
        });
    });
};


export const PUT=async({id, obj = {}} = {})=>{
    // let data = await getOne({ id, uri, endpoint })
    // obj = {...data, ...obj}
    // Object.entries(tabla).forEach((e) => 
    // config.method = "PUT";
    // config.body = JSON.stringify(body);
    // let res = await fetch(`${uri}${endpoint}${id}`, config);
    // if (res.status === 200 || res.status === 404) return { status: res.status, message: res.statusText }
}