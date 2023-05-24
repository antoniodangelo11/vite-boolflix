<script>
import { store } from '../store';
import AppListCard from './AppListCard.vue';

export default {
    data() {
        return {
            store,
        };
    },
    components: {
        AppListCard,
    }
};
</script>

<template>
    <div>
        <!-- FARE CICLO V-FOR PER MOVIE -->
        <AppListCard />
    </div>

    <div>
        <!-- FARE CICLO V-FOR PER SERIE-TV -->
        <AppListCard />
    </div>
</template>

<style lang="scss" scoped></style>