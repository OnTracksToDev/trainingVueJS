import { defineStore } from 'pinia';

export const useArticlesStore = defineStore('articles', {
  state: () => ({
    articles: [
      { index: 1, nom: 'Apple', prix: 10 },
      { index: 2, nom: 'Peach', prix: 15 },
      { index: 3, nom: 'Orange', prix: 20 },
      { index: 4, nom: 'Banana', prix: 25 },
      { index: 5, nom: 'Grape', prix: 30 },
      { index: 6, nom: 'Cherry', prix: 35 },
      { index: 6, nom: 'Pumpkin', prix: 40 },
      { index: 6, nom: 'Strawberry', prix:45 },
    ],
  }),

  getters: {
    getAllArticles: (state) => state.articles,
  },
});