
import axios from 'axios'
export const obtenerEmpleado = async (id) => {
    return await obtenerEmpleadoAxios(id);
}

/*const obtenerEmpleadoAPI = async (id) => {
    const data = await fetch(`http://localhost:8085/API/Nomina/V1/empleados/${id}`).then(r => r.json())
    console.log(data)
    return data
}*/



//GET
export const obtenerEmpleadoAxios = async(id) => {
    const data = axios.get(`http://localhost:8085/APINomina/V1/empleados/${id}`).then(r => r.data)
    console.log(data)
    return data
}


//POST
export const insertarEmpleadoAxios = async(body1) => {
    axios.post(`http://localhost:8085/APINomina/V1/empleados`,body1)
}

export const insertEmpleado = async(body) => {
    return await insertarEmpleadoAxios(body);
}

//PUT
export const actualizarEmpleadoAxios = async(body) => {
    const data = axios.put(`http://localhost:8085/APINomina/V1/empleados`,body).then( r=> r.data)
    console.log(data)
    return data
}

export const actualizarEmpleado = async(body) => {
    return await actualizarEmpleadoAxios(body);
}

//DELETE
export const borrarEmpleadoAxios = async(id) => {
    const data = axios.delete(`http://localhost:8085/APINomina/V1/empleados/${id}`).then(r => r.data)
    console.log(data)
    return data
}

export const borrarEmpleado = async(id) => {
    return await borrarEmpleadoAxios(id);
}


export {obtenerEmpleado, borrarEmpleado, actualizarEmpleado, insertEmpleado};
