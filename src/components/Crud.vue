<template>
  <input v-model="id" type="text" />
  <input v-model="nombre" type="text" />
  <button @click="consultar">Consultar</button>
  <button @click="insertar">Insertar</button>
  <button @click="actualizar">Actualizar</button>
  <button @click="eliminar">Eliminar</button>
</template>

<script>
import {obtenerEmpleado, insertEmpleado, actualizarEmpleado, borrarEmpleado} from "../helpers/procesarEmpleado.js"
export default {
  data(){
      return {
          id:null,
          nombre:null
      }
  },
  methods:{
      async consultar() {
    const response= await obtenerEmpleado(this.id);
    console.log(response)
  },
  async eliminar(){
      const response= await borrarEmpleado(this.id);
      console.log(response)
  },
  async insertar(){
      const empleado1= {
      'id': this.id,
      'nombre': this.nombre,
      'apellido': "suniga",
      'fechaNacimiento': "1999-12-13T00:00:00",
      'salario': 40
      };
      const response= await insertEmpleado(empleado1);
      console.log(response)
  },
  async actualizar(){
      const empleado= {
      'id': this.id,
      'nombre': this.nombre,
      'apellido': "suniga",
      'fechaNacimiento': "1999-12-13T00:00:00",
      'salario': 40
      };
      const response= await actualizarEmpleado(empleado);
      console.log(response)
  },
  },
};
</script>

<style>
</style>