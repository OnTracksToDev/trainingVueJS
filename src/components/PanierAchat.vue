<script>
export default {
  data() {
    return {
      panier: []
    }
  },
  methods: {
    retirerDuPanier(index) {
      // Si  qté > 1
      if (this.panier[index].quantite > 1) {
        this.panier[index].quantite-- //décrémente qté
      } else {
        this.panier.splice(index, 1) // retire article du panier
      }
    },
    calculerTotal() {
      return this.panier.reduce((acc, curV) => acc + curV.prix * curV.quantite, 0)
    }
  }
}
</script>

<template>
  <div>
    //v-if="panier.length > 0"
    <div>
      <h3>Contenu du panier</h3>
      <ul>
        <li v-for="(item, index) in panier" :key="item.index" class="listePanier">
          {{ item.nom }} : {{ item.prix }}€ x{{ item.quantite }}
          <button @click="retirerDuPanier(index)">Retirer du panier</button>
        </li>
      </ul>
      <p>Total: {{ calculerTotal() }}€</p>
    </div>
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
