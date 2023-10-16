<template>
  <main>
    <div>
      <NuxtLink to="/Form">
        Form page
      </NuxtLink>
    </div>
    <div>
      <password-list />
    </div>
  </main>
</template>

<script>
import PasswordList from '@/components/PasswordList.vue'

export default {
  components: {
    PasswordList
  }
}
</script>
