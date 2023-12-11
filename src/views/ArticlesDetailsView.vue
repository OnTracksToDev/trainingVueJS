<script>
import ArticlesDetails from '@/components/ArticlesDetails.vue';    

export default {
        name:"ArticleDetailView",
        components: {
            ArticlesDetails
        },
        data() {
            return {
                articleId: this.$route.params.id
            }
        },
    }
</script>

<template>
    <section >
        <section >
            <h2> Detail Page</h2>
            <ArticlesDetails
                :articleId="articleId"
            />
        </section>
    </section>
    
</template>