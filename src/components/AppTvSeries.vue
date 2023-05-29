<script>
import LangFlag from 'vue-lang-code-flags';
import { store } from '../store';
import axios from 'axios';

export default {
    data() {
        return {
            store,
            ArrGenres: [],
            ArrActors: [],
        };
    },

    components: {
        LangFlag,
    },

    props: {
        DataTvSeries: Object,
    },

    methods: {
        ConvertVote(vote) {
            const convertedVote = Math.ceil((vote / 10) * 5);
            return convertedVote;
        },
    },

    created() {
        //generi
        axios
            .get(`https://api.themoviedb.org/3/tv/${this.DataTvSeries.id}`, {
                params: {
                    api_key: '21df2f399925b36ce74442455c67fc8a',
                },
            })
            .then(response => {
                this.ArrGenres = response.data.genres;
            });


        // attori
        axios
            .get(`https://api.themoviedb.org/3/tv/${this.DataTvSeries.id}/credits`, {
                params: {
                    api_key: '21df2f399925b36ce74442455c67fc8a',
                },
            })
            .then(response => {
                response.data.cast.splice(5);
                this.ArrActors = response.data.cast;
            });

    },
};
</script>

<template>
    <div class="card_series">
        <img :alt="DataTvSeries.poster_path" :src="`http://image.tmdb.org/t/p/w342${DataTvSeries.poster_path}`"
            v-if="DataTvSeries.poster_path">
        <img v-else src="../assets/img/fallback-image.png" alt="">
        <div class="text">
            <div class="name">
                <span>TITOLO: </span>
                {{ DataTvSeries.name }}
            </div>
            <div class="original_name" v-show="DataTvSeries.original_name !== DataTvSeries.name">
                <span>TITOLO ORIGINALE: </span>
                {{ DataTvSeries.original_name }}
            </div>
            <div class="language">
                <span>LINGUA ORIGINALE: </span>
                <lang-flag :iso="DataTvSeries.original_language" :squared="false" />
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
            <div class="overview">
                <span>OVERVIEW: </span>
                {{ DataTvSeries.overview }}
            </div>
            <div class="genres">
                <span>GENERI: </span>
                <div v-for="genres in ArrGenres" :key="genres.id">
                    {{ genres.name }}
                </div>
            </div>
            <div class="actors">
                <span>ATTORI: </span>
                <div v-for="actors in ArrActors" :key="actors.id">
                    {{ actors.name }}
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card_series {
    color: rgb(30, 41, 92);
    position: relative;
    margin: 1.5rem 1rem;
}

.text {
    width: 342px;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    opacity: 0;
    background-color: rgba(255, 255, 255, 0.9);
    transition: opacity 0.3s ease;

    .overview {
        font-size: .8em;
    }
}

.card_series:hover .text {
    opacity: 1;
}

.card_series .image-container {
    position: relative;
}

.card_series .image-container img {
    transition: opacity 0.3s ease;
}

.card_series:hover .image-container img {
    opacity: 0;
}

.star {
    color: yellow;
}
</style>

<lang-flag :iso="" />