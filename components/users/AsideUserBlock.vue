<template>
    <div>
        im user sas: {{ userContent}}
    </div>
</template>

<script>
    export default {
        data() {
            return {
                userContent: null,
            }
        },
        async fetch() {
           // this.userContent = await this.$axios.$get(`/users/${this.$route.params.username}`)
        }
    };
</script>
