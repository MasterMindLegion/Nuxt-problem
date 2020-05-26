<template>
  <nuxt-link
           class='font-bold text-xl mb-2 pointer'
            :to="{ name: 'username-article', params: { username: article.user.id, article: article.slug }}"
            tag='article' >
      <!--  Article Component -->
      <article class=" p-12 min-h-600  w-full rounded overflow-hidden shadow-lg bg-white">
        <div class="px-6 py-4">
            <nuxt-link
             class='font-bold text-xl mb-2 pointer'
              :to="{ name: 'username-article', params: { username: article.user.id, article: article.slug }}"
              tag='article' >
             Name: {{ article.name }}
          </nuxt-link>

          <p class="text-gray-700 text-base">
           {{article.body}}
          </p>
          <!-- <span>By: {{ article.user.full_name}}</span> -->
        </div>
        <div
          v-for='(tag, i) in article.tags'
          :key='tag.id'
          class="px-6 py-4">
          <!-- ADD LINK FOR TAGS -->
          <nuxt-link
            :to="{ name: 'tags-tag', params:{ tag: tag.name }}"
            >
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{{ tag.name }}</span>
          </nuxt-link>
        </div>
       </article>
     </nuxt-link>
</template>

<script>
  export default {
    props: {
      article: {
        required: true,
        Type: Object,
        default: null
      }
    }
  };
</script>
