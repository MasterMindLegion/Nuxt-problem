<template>
  <div class=" grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5  grid-rows-1 bg-white w-full h-full ">

        <!-- Left Sidebar -->
        <div class=' col-start-1 col-end-1   bg-black invisible md:visible '>
            <h1>Tags:</h1>
        </div>

        <!-- Posts -->
        <div class="col-start-2 col-end-5 w-full h-full  container   flex justify-center flex-wrap py-10">
            <!-- Is being Loaded -->
          <template v-if='$fetchState.pending'>
            <div class="container ">
              <content-placeholders
                  v-for="p in 30"
                  :key="p"
                  rounded
                  class="article-card-block"
                  >
              <content-placeholders-img />
              <content-placeholders-text :lines="3" />
            </content-placeholders>
            </div>
          </template>

          <!-- Show errors -->
         <template v-else-if='$fetchState.error'>
             <p>{{ $fetchState.error.message}}</p>
         </template>

            <!-- Articles Loaded -->
            <template v-else>
                <div>
                    <articles-block
                        v-for='(article, i) in articles'
                        :key='article.id'
                        :article='article'
                        >
                    </articles-block>
                </div>

                <div v-if='articles.length' v-observe-visibility='handleScrolledToBottom'></div>
             </template>
        </div>


        <!-- Right Sidebar -->
        <div class="col-start-5 col-end-6   bg-black invisible lg:visible '">
            right
        </div>

  </div>
</template>
<script>
import ArticlesBlock from '@/components/articles/ArticlesBlock.vue'
export default {
  components: {
    ArticlesBlock,
  },
  data() {
    return {
        currentPage: 1,
        lastPage: 1,
        articles:[],
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
    let response = await this.$axios.$get(`/articles?page=${this.currentPage}`)
     this.articles = this.articles.concat(response.data)
     this.lastPage = response.meta.last_page
     this.articlesMeta = response.meta
  }
};
</script>

