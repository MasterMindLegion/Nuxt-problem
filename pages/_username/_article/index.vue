<template>
    <div>

        <template>


        </template>


        <div>
           <Article />
        </div>


         <aside>
            <aside-user-block/>
         </aside>


    </div>

</template>

<script>
    import Article from '@/components/articles/Article.vue'
    import AsideUserBlock from '@/components/users/AsideUserBlock.vue'
    export default {
        components: {
            Article,
            AsideUserBlock
        },
    };
</script>
