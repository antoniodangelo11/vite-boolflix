<script>
export default {
    props: {
        DataMovies: Object,
    },
};
</script>

<template>
    <div class="card_movies">
        <img v-if="DataMovies.poster_path" :src="`http://image.tmdb.org/t/p/w342${DataMovies.poster_path}`" :alt="DataMovies.poster_path">
        <img v-else src="../assets/img/fallback-image.png" alt="">
        <div>
            <div class="title"><span>TITOLO: </span>{{ DataMovies.title }}</div>
            <div class="original_title"><span>TITOLO ORIGINALE: </span>{{ DataMovies.original_title }}</div>
            <div class="original_language"><span>LINGUA ORIGINALE: </span>{{ DataMovies.original_language }}</div>
            <div class="vote_average"><span>VOTO: </span>{{ DataMovies.vote_average }}</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card_movies {
    border: 1px solid black;
    color: rgb(30, 41, 92);
    display: flex;
}
</style>