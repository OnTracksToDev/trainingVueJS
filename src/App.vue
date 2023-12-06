<script setup>
import PanierAchat from './components/PanierAchat.vue'
import ListeArticles from './components/ListeArticles.vue'
</script>

<template>
  <header>
    <div class="wrapper"></div>
  </header>

  <main>
    <section>
      <ListeArticles />
    </section>
    <section>
      <PanierAchat />
    </section>
  </main>

  <template>
    <footer></footer>
  </template>
</template>

<style scoped></style>
