<template>
  <div class="container-sm">
    <a href="./">Password list</a>
    <form @submit.prevent="handleSubmit">
      <div class="row mb-3">
        <label for="type" class="col-sm-2 col-form-label">Tipo:</label>
        <div class="col-sm-10">
            <input v-model="formData.type" type="text" class="form-control" id="colFormLabel" placeholder="Type">
        </div>
      </div>
      <div class="row mb-3">
        <label for="description" class="col-sm-2 col-form-label">Descripción:</label>
        <div class="col-sm-10">
          <input v-model="formData.description" type="text" class="form-control" id="colFormLabel" placeholder="Description">
      </div>
        </div>
      <div class="row mb-3">
        <label for="user" class="col-sm-2 col-form-label">Usuario:</label>
        <div class="col-sm-10">
          <input v-model="formData.user" type="text" class="form-control" id="colFormLabel" placeholder="User" >
        </div>
      </div>
      <div class="row mb-3">
        <label for="password" class="col-sm-2 col-form-label">Contraseña:</label>
        <div class="col-sm-10">
          <input v-model="formData.password" type="text" class="form-control" id="colFormLabel" placeholder="Password" >
        </div>
      </div>
      <button type="submit">
        {{ buttonText }}
      </button>
    </form>
    </div>
  </template>

<script>
export default {
  props: {
    password: {
      type: Object,
      default: null
    },
    buttonText: {
      type: String,
      default: 'Save'
    }
  },
  data () {
    return {
      formData: {
        type: this.password ? this.password.type : '',
        description: this.password ? this.password.description : '',
        user: this.password ? this.password.user : '',
        password: this.password ? this.password.password : ''
      }
    }
  },
  methods: {
    handleSubmit () {
      this.$emit('submit', this.formData)
      console.log(this.formData)
    }
  }
}
</script>
