<script>
import { store } from '../store';
import AppMovies from './AppMovies.vue';
import AppTvSeries from './AppTvSeries.vue';

export default {
    data() {
        return {
            store,
        };
    },

    components: {
        AppMovies,
        AppTvSeries,
    },
};
</script>

<template>
    <div class="cards_container">
        <h2>FILM</h2>
        <div class="movies">
            <AppMovies v-for="movies in store.ArrMovies" :key="movies.id" :DataMovies="movies" />
        </div>
        <h2>SERIE TV</h2>
        <div class="series">
            <AppTvSeries v-for="series in store.ArrTvSeries" :key="series.id" :DataTvSeries="series" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.cards_container {
    background-color: rgb(20, 20, 20);
    padding: 2rem;

    h2 {
        color: rgb(255, 255, 255);
    }
}

.movies {
    display: flex;
    overflow-y: auto;
}

.series {
    display: flex;
    overflow-y: auto;
}
</style>