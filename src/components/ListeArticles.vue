<script>
import { mapState, mapActions } from 'pinia'
import { useArticlesStore } from '@/stores/articles'
import { usePanierStore } from '@/stores/panier'

export default {
  methods: {
    ...mapActions(usePanierStore, {
      ajouterAuPanierAction: 'ajouterAuPanier'
    })
  },
  computed: {
    ...mapState(useArticlesStore, {
      getAllArticlesState: 'getAllArticles'
    })
  }
}
</script>

<template>
  <div>
    <h2>Liste d'Articles</h2>
    <ul>
      <li v-for="article in getAllArticlesState" :key="article.index">
        {{ article.nom }} : {{ article.prix }}€
        <button @click="ajouterAuPanierAction(article)">Ajouter au panier</button>
      </li>
    </ul>
  </div>
</template>
<style scoped>
div {
  margin: auto;
  padding: 15px;
  border: 2px solid black;
  border-radius: 8px;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 15px;
  background-color: bisque;
  border-radius: 8px;
}
button {
  background-color: khaki;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  padding: 10px;
  transition: background-color 0.2s;
}
button:hover {
  background-color: rgb(176, 148, 80);
}
</style>
