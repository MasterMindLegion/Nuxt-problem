<template>
    <div>
        list of all tags:
        <!-- If loading -->
        <template v-if='$fetchState.pending'>
            <h1>Loading...</h1>
        </template>

        <!-- Loaded -->
        <template v-else>
          <tags-block :tags='tags.data' />
        </template>
    </div>
</template>

<script>
    import TagsBlock from '@/components/tags/TagsBlock.vue'
    export default {
        components: {
            TagsBlock,
        },
        data() {
            return {
                tags: null,
         }
        },
        async fetch() {
            this.tags = await this.$axios.$get(`/tags`)
        }
    };
</script>
