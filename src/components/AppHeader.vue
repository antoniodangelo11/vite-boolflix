<script>
import { store } from '../store';

export default {
    data() {
        return {
            store,
        };
    },

    methods: {
        emitSearchBar() {
            this.$emit('performSearch');
        },

        emitChange() {
            this.$emit('performGenres');
        },
    },
};
</script>

<template>
    <header>
        <div class="flex_container">
            <h1>BOOLFLIX</h1>
            <select v-model="store.SearchGenres" @change="emitChange">
                <option value="">Select Genres</option>
                <option v-for="genres in store.ArrGenres" :key="genres.name" :value="genres.name">
                    {{ genres.name }}
                </option>
            </select>
            <form class="search" @submit.prevent="emitSearchBar">
                <input placeholder="Cerca Film o Serie TV" type="text" v-model="store.SearchBar">
                <button>CERCA</button>
                <div>
                    <small class="error" v-show="store.InputError">Devi scrivere qualcosa!</small>
                </div>
            </form>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.flex_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5rem;
    padding-inline: 2rem;
    background-color: black;

    h1 {
        color: red;
    }

    .search {
        input {
            margin-right: 1rem;
        }
    }

    .error {
        color: red;
    }
}
</style>