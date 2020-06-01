<template>
    <div>
        <h1>{{ tagSlug }}</h1>

        <!-- Content is loading -->
        <template v-if='$fetchState.pending'>
            <p>Loading...</p>
        </template>

        <!-- Content Loaded -->
        <template v-else>
            <div v-for='article in articles' class="container">
                    <articles-block
                        :article='article'
                    />
            </div>

            <div v-if='articles.length' v-observe-visibility='handleScrolledToBottom'></div>
        </template>

    </div>
</template>

<script>
    import ArticlesBlock from '@/components/articles/ArticlesBlock.vue'
    export default {
        data() {
            return {
                articles: [],
                tagSlug: null,
                currentPage: 1,
                lastPage: 1,
                articlesMeta: null,
            }
        },
        methods: {
            handleScrolledToBottom(isVisible) {
              if (!isVisible) { return }
              if (this.currentPage >= this.lastPage) { return }

              this.currentPage++

              this.$fetch()
            }
        },
        async fetch() {
            let response = await this.$axios.$get(`/tags/${this.$route.params.slug}?page=${this.currentPage}`)
            this.articles = this.articles.concat(response.data)
            this.articlesMeta = response.meta
            this.lastPage = response.meta.last_page

            this.tagSlug = this.$route.params.slug
        },
        components: {
            ArticlesBlock
        }
    };
</script>
