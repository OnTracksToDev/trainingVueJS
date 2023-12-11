<script>
import { mapState } from 'pinia'
import { useArticlesStore } from '@/stores/articles'

export default {
  name: 'ArticlesDetails',
  props: {
    articleId: {
      type: [Number, String],
      required: false,
      default: function () {
        return null
      }
    }
  },
  computed: {
    ...mapState(useArticlesStore, ['getArticleById']),
    getCurrentArticle() {
      return this.getArticleById(this.articleId)
    }
  }
}
</script>

<template>
  <h2>Details article</h2>
  <div v-if="getCurrentArticle != null">
    <p>ID : {{ getCurrentArticle.id }}</p>
    <p>Nom : {{ getCurrentArticle.nom }}</p>
    <p>Prix : {{ getCurrentArticle.prix }} €</p>
    <img :src="getCurrentArticle.image" alt="" />
  </div>
</template>
