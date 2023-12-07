<script>
import ListeArticles from '@/components/ListeArticles.vue'
import PanierAchat from '@/components/PanierAchat.vue'

export default {
  components: {
    ListeArticles,
    PanierAchat
  }
}
</script>

<template>
  <div>
    <h1>Shopping App</h1>
    <ListeArticles></ListeArticles>
    <PanierAchat></PanierAchat>
  </div>
</template>

