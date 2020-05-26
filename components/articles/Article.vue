<template>
    <div>

         <p>IM ARTICLE COMPONENT {{ articleContent }} </p>

    </div>

</template>

<script>
    export default {
        data() {
            return {
                articleContent: null,
            }
        },
        async fetch() {
            this.articleContent = await this.$axios.$get(`/articles/${this.$route.params.article}`)
        }
    };
</script>
