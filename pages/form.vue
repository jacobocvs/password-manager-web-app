<template>
    <main>
      <div>
        <PasswordForm :password="password" :button-text="buttonText" @submit="handleFormSubmit" />
      </div>
    </main>
  </template>

<script>
import axios from 'axios'
import PasswordForm from '@/components/PasswordForm.vue'

export default {
  components: {
    PasswordForm
  },
  data () {
    return {
      password: {
        title: '',
        username: '',
        password: ''
      },
      buttonText: 'Save'
    }
  },
  methods: {
    async handleFormSubmit (formData) {
      try {
        const response = await axios.post('http://localhost:8000/api/passwords', formData)
        console.log(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    // handleFormSubmit(formData) {
    //   // Handle the form submission
    //   console.log(formData);
    //   // Example: Call an API to save the password
    // }
  }
}
</script>
