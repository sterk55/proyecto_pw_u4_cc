
import axios from 'axios'
const obtenerEmpleado = async (id) => {
    return await obtenerEmpleadoAxios(id);
}

/*const obtenerEmpleadoAPI = async (id) => {
    const data = await fetch(`http://localhost:8085/API/Nomina/V1/empleados/${id}`).then(r => r.json())
    console.log(data)
    return data
}*/



//GET
const obtenerEmpleadoAxios = async(id) => {
    const data = axios.get(`http://localhost:8085/APINomina/V1/empleados/${id}`).then(r => r.data)
    console.log(data)
    return data
}


//POST
const insertarEmpleadoAxios = async(body1) => {
    axios.post(`http://localhost:8085/APINomina/V1/empleados`,body1)
}

const insertEmpleado = async(body) => {
    return await insertarEmpleadoAxios(body);
}

//PUT
const actualizarEmpleadoAxios = async(body) => {
    const data = axios.put(`http://localhost:8085/APINomina/V1/empleados`,body).then( r=> r.data)
    console.log(data)
    return data
}

const actualizarEmpleado = async(body) => {
    return await actualizarEmpleadoAxios(body);
}

//DELETE
const borrarEmpleadoAxios = async(id) => {
    const data = axios.delete(`http://localhost:8085/APINomina/V1/empleados/${id}`).then(r => r.data)
    console.log(data)
    return data
}

const borrarEmpleado = async(id) => {
    return await borrarEmpleadoAxios(id);
}


export {obtenerEmpleado, borrarEmpleado, actualizarEmpleado, insertEmpleado};
