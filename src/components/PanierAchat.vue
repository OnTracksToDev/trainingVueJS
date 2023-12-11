<script>
import { mapState, mapActions } from 'pinia'
import { usePanierStore } from '@/stores/panier'

export default {
  methods: {
    ...mapActions(usePanierStore, {
      retirerDuPanierAction: 'retirerDuPanier'
    })
  },
  computed: {
    ...mapState(usePanierStore, {
      getPanierState: 'getPanier',
      calculerTotalState: 'calculerTotal'
    })
  }
}
</script>

<template>
  <div v-if="getPanierState.length > 0">
    <h3>Contenu du panier</h3>
    <ul>
      <li v-for="(item, index) in getPanierState" :key="item.id">
        {{ item.nom }} : {{ item.prix }}€ x {{ item.quantite }}
        <button @click="retirerDuPanierAction(index)">Retirer du panier</button>
      </li>
    </ul>
    <p>Total:💸 {{ calculerTotalState }}€</p>
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
  background-color:aqua;
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
