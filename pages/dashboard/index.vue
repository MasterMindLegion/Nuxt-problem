<template>
    <div>
          <p>{{ user }}</p>

    </div>

</template>

<script>
  export default {
    middleware: 'auth'
  };
</script>
