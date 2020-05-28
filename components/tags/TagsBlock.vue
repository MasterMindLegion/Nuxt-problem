<template>
    <div>
        <div v-for='tag in tags'>
            <nuxt-link
                :to="{ name: 'tags-slug', params: {slug: tag.slug }}"
            >
                {{ tag.name }}
            </nuxt-link>

        </div>

    </div>
</template>

<script>
    export default {
        props: {
            tags: {
                required: true,
                Type: Object,
                default: null
            }
        }

    };
</script>
