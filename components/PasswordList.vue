<template>
    <div>
      <h2>Password List</h2>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Descripción</th>
            <th>Usuario</th>
            <th>Contraseña</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="password in passwords" :key="password.id">
            <th scope="row">{{ password.type }}</th>
            <td>{{ password.description }}</td>
            <td>{{ password.user }}</td>
            <td>{{ password.password }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      passwords: []
    }
  },
  mounted () {
    this.fetchPasswords()
  },
  methods: {
    async fetchPasswords () {
      try {
        const response = await axios.get('http://localhost:8000/api/passwords')
        this.passwords = response.data.passwords
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>
