<template>
  <div>
    <Navigation />
    <nuxt />
  </div>
</template>

<script>
  import Navigation from '@/layouts/partials/Navigation.vue'
  export default {
    components: {
      Navigation,
    }
  };
</script>
