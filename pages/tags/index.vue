<template>
    <div>
        <h2>List of all tags</h2>
          <tags-block  />

    </div>
</template>

<script>
    import TagsBlock from '@/components/tags/TagsBlock.vue'
    export default {
        components: {
            TagsBlock,
        },
    };
</script>
