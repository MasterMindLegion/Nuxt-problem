<template>
    <div>
        <!-- Content is being loaded -->
        <template v-if='$fetchState.pending'>
            <h1>Loading...</h1>
        </template>

        <!-- Content is loaded -->
        <template v-else>
           <div v-for='tag in tags'>
                <nuxt-link
                    :to="{ name: 'tags-slug', params: {slug: tag.slug }}"
                >
                    {{ tag.name | upperCase }}
                </nuxt-link>
            </div>
        </template>
    </div>
</template>

<script>
    import Test from '@components/test.vue'
    export default {
        data() {
            return {
             tags: null,
        }
        },
        async fetch() {
            let response = await this.$axios.$get(`/tags`)
            this.tags = response.data
        },
        filters: {
            upperCase(value) {
                return '#' + value.toUpperCase();
            }
        },
        componens: {

        }
    };
</script>
