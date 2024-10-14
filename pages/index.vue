<script setup lang="ts">
/**
 * Meta
 */
definePageMeta({
  pageTitle: 'Home'
})
useSeoMeta({
  title: 'Home',
  description: 'Nuxt starter home page.',
  ogTitle: 'Home',
  ogDescription: 'Nuxt starter home page.',
  twitterTitle: 'Home',
  twitterDescription: 'Nuxt starter home page.',
  twitterCard: 'summary'
})

/**
 * Data
 */

/**
 * Mounted
 */
// onMounted(() => ())

/**
 * Methods
 */
</script>

<template>
  <div>
    <div>
      <button class="btn">
        Something just got here
      </button>
      <button class="btn btn-text">
        Something just got here
      </button>
    </div>
    <div class="container">
      <p>something got here</p>
    </div>
  </div>
</template>
