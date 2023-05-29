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
        DataMovies: Object,
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
            .get(`https://api.themoviedb.org/3/movie/${this.DataMovies.id}`, {
                params: {
                    api_key: '21df2f399925b36ce74442455c67fc8a',
                },
            })
            .then(response => {
                this.ArrGenres = response.data.genres;
            });


        // attori
        axios
            .get(`https://api.themoviedb.org/3/movie/${this.DataMovies.id}/credits`, {
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
    <div class="card_movies">
        <div class="image-container">
            <img :alt="DataMovies.poster_path" :src="`http://image.tmdb.org/t/p/w342` + DataMovies.poster_path"
                v-if="DataMovies.poster_path">
            <img alt="" src="../assets/img/fallback-image.png" v-else>
        </div>
        <div class="text">
            <div class="title">
                <span>TITOLO: </span>
                {{ DataMovies.title }}
            </div>
            <div class="original_title" v-show="DataMovies.original_title !== DataMovies.title">
                <span>TITOLO ORIGINALE: </span>
                {{ DataMovies.original_title }}
            </div>
            <div class="language">
                <span>LINGUA ORIGINALE: </span>
                <lang-flag :iso="DataMovies.original_language" :squared="false" />
                <span class="lang_text">{{ DataMovies.original_language }}</span>
            </div>
            <div class="vote">
                <span>VOTO: </span>
                <font-awesome-icon :icon="['fas', 'star']" :key="star" class="star"
                    v-for="star in ConvertVote(DataMovies.vote_average)" />
                <template v-for="star in 5 - ConvertVote(DataMovies.vote_average)">
                    <font-awesome-icon :icon="['far', 'star']" :key="star" class="star"
                        v-if="ConvertVote(DataMovies.vote_average) < 5" />
                </template>
            </div>
            <div class="overview">
                <span>OVERVIEW: </span>
                {{ DataMovies.overview }}
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
.card_movies {
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

.card_movies:hover .text {
    opacity: 1;
}

.card_movies .image-container {
    position: relative;
    height: auto;
    width: 100%;
}

.card_movies .image-container img {
    transition: opacity 0.3s ease;
}

.card_movies:hover .image-container img {
    opacity: 0;
}

.star {
    color: yellow;
}

.lang_text {
    display: none;
}

.flag-icon-undefined {
    display: none;
}

.flag-icon-undefined+.lang_text {
    display: inline;
}
</style>
