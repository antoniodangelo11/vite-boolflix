<script>
export default {
    props: {
        DataMovies: Object,
    },
};
</script>

<template>
    <div class="card_movies">
        <div class="title">{{ DataMovies.title }}</div>
        <div class="original_title">{{ DataMovies.original_title }}</div>
        <div class="original_movies">{{ DataMovies.original_language }}</div>
        <div class="vote_average">{{ DataMovies.vote_average }}</div>
    </div>
</template>

<style lang="scss" scoped>
.card_movies {
    border: 1px solid black;
}
</style>