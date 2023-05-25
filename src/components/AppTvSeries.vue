<script>
export default {
    methods: {
        ConvertVote(vote) {
            const convertedVote = Math.ceil((vote / 10) * 5);
            return convertedVote;
        },
    },
    props: {
        DataTvSeries: Object,
    },
};
</script>

<template>
    <div class="card_series">
        <img v-if="DataTvSeries.poster_path" :src="`http://image.tmdb.org/t/p/w342${DataTvSeries.poster_path}`"
            :alt="DataTvSeries.poster_path">
        <img v-else src="../assets/img/fallback-image.png" alt="">
        <div>
            <div class="name">
                <span>TITOLO: </span>
                {{ DataTvSeries.name }}
            </div>
            <div class="original_name">
                <span>TITOLO ORIGINALE: </span>
                {{ DataTvSeries.original_name }}
            </div>
            <div class="language">
                <span>LINGUA ORIGINALE: </span>
                {{ DataTvSeries.original_language }}
            </div>
            <div class="vote">
                <span>VOTO: </span>
                <font-awesome-icon class="star" v-for="star in ConvertVote(DataTvSeries.vote_average)" :key="star"
                    :icon="['fas', 'star']" />
                <template v-for="star in 5 - ConvertVote(DataTvSeries.vote_average)">
                    <font-awesome-icon class="star" :key="star" :icon="['far', 'star']"
                        v-if="ConvertVote(DataTvSeries.vote_average) < 5" />
                </template>

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card_series {
    border: 1px solid black;
    color: rgb(30, 41, 92);
    padding: 0.5rem;
}

.star {
    color: yellow;
}
</style>