<script>
import { store } from '../store';
import AppCard from './AppCard.vue';

export default {
    data() {
        return {
            store,
        };
    },
    components: {
        AppCard,
    },
};
</script>

<template>
    <div class="main_container">

        <AppCard v-for="movies in store.ArrMovies" :key="movies.id" :title="movies.title"
            :original_language="movies.original_language" :vote_average="movies.vote_average"
            :original_title="movies.original_title" />

        <!-- FARE CICLO V-FOR PER SERIE-TV -->

    </div>
</template>

<style lang="scss" scoped>
.main_container {
    background-color: grey;
    height: 100%;
}
</style>