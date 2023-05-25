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
    },
};
</script>

<template>
    <header>
        <div class="flex_container">
            <h1>BOOLFLIX</h1>
            <form class="search" @submit.prevent="emitSearchBar">
                <input type="text" 
                    placeholder="Cerca Film o SerieTV" 
                    v-model="store.SearchBar"
                >
                <button>CERCA</button>
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
}
</style>