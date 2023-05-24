<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppCard from './components/AppCard.vue';
import axios from 'axios';
import { store } from './store';

export default {
  data() {
    return {
      store,
    };
  },

  components: {
    AppHeader,
    AppMain,
    AppCard,
  },

  methods: {
    RequestMoviesFromApi() {
      axios
        .get('https://api.themoviedb.org/3/search/movie?api_key=21df2f399925b36ce74442455c67fc8a&query=all',)
        .then(response => (this.store.ArrMovies = response.data.results));
    }
  },
};
</script>

<template>
  <AppHeader @performSearch="RequestMoviesFromApi" />
  <AppMain />
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
