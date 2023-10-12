import env from"../js/config.js";

const uri=`${env.ssl+env.hostName}:${env.port}`;
const config={method:undefined,headers:{"Content-Type":"application/json"}};

export const getAll= async()=>{
    config.method="GET";
    let res= await(await fetch(`${uri}/portafolio`, config)).json();
    return res;
}

export const getOne = async(id)=>{
    config.method = "GET";
    let res = await (await fetch(`${uri}/portafolio/${id}`, config)).json();
    return res;
}

export const post = async ({ obj= {}} = {}) => {
    config.method = "POST";
    config.body = JSON.stringify(obj);
    let res = await (await fetch(`${uri}/portafolio`, config)).json();
    return (res.id) ? {status: 201, message: "El CV fue creado correctamente", id: res.id} : undefined;
}

export const deleteOne = async(id)=>{
    config.method="DELETE";
    config.body=JSON.stringify(obj);
    let res= await(await fetch(`${uri}/portafolio/${id}`, config)).json();
    return res;

}
