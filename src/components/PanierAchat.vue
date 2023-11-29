<script>
export default {
  data() {
    return {
      articles: [
        { index: 1, nom: 'Apple', prix: 10 },
        { index: 2, nom: 'Peach', prix: 15 },
        { index: 3, nom: 'Orange', prix: 20 },
        { index: 4, nom: 'Banana', prix: 25 },
        { index: 5, nom: 'Grape', prix: 30 },
        { index: 6, nom: 'Strawberry', prix: 35 },
      ],
      panier: []
    }
  },
  methods: {
    ajouterAuPanier(article) {
      this.panier.push({ ...article })//ajoute copie article
    },
    retirerDuPanier(index) {
      this.panier.splice(index, 1)
    },
    calculerTotal() {
      return this.panier.reduce((acc, curV) => acc + curV.prix, 0)
    }
  }
}
</script>

<template>
  <div>
    <h2>Liste d'Articles</h2>
    <ul>
      <li v-for="article in articles" :key="article.index">
        {{ article.nom }} prix : {{ article.prix }}€
        <button @click="ajouterAuPanier(article)">Ajouter au panier</button>
      </li>
    </ul>
    <h3>Contenu du panier</h3>
    <ul>
      <li v-for="(item, index) in panier" :key="item.index">
        {{ item.nom }} - {{ item.prix }}€
        <button @click="retirerDuPanier(index)">Retirer du panier</button>
      </li>
    </ul>
    <p>Total: {{ calculerTotal() }}€</p>
  </div>
</template>

<style scoped>
 
</style>