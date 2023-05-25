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
    <div class="container">
        <div class="cards_container">
            <div class="movies">
                <h2>MOVIES</h2>
                <AppMovies v-for="movies in store.ArrMovies" :key="movies.id" :DataMovies="movies" />
            </div>
            <div class="series">
                <h2>SERIE TV</h2>
                <AppTvSeries v-for="series in store.ArrTvSeries" :key="series.id" :DataTvSeries="series" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    height: 100vh;
}

.cards_container {
    background-color: grey;
    display: flex;
    justify-content: center;
    gap: 1.2rem;
}
</style>