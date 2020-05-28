<template>
    <div>
        Im the one tag
        {{ tagContent }}
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tagContent: null,
            }
        },
        async fetch() {
            this.tagContent = await this.$axios.$get(`/tags/${this.$route.params.slug}`)
        }
    };
</script>
