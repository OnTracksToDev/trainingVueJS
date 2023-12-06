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
        { index: 6, nom: 'Strawberry', prix: 35 }
      ],
    }
  },
  methods: {
    ajouterAuPanier(article) {
      //verifie présence nouvel article dans le panier
      const index = this.panier.findIndex((item) => item.index === article.index)

      if (index !== -1) {
        //verifie si article est dans panier
        this.panier[index].quantite++ //incremente qté
      } else {
        this.panier.push({ ...article, quantite: 1 }) //ajout avec qté a 1
      }
    },
  }
}
</script>

<template>
  <div>
    <h2>Liste d'Articles</h2>
    <ul>
      <li v-for="article in articles" :key="article.index">
        {{ article.nom }} : {{ article.prix }}€
        <button @click="ajouterAuPanier(article)">Ajouter au panier</button>
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
.listePanier {
  background-color: aquamarine;
}
</style>
