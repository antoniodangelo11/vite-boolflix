<script>
export default {
    props: {
        DataTvSeries: Object,
    },
};
</script>

<template>
    <div class="card_series">
        <div>{{ DataTvSeries.name }}</div>
        <div>{{ DataTvSeries.original_name }}</div>
        <div>{{ DataTvSeries.original_language }}</div>
        <div>{{ DataTvSeries.vote_average }}</div>
    </div>
</template>

<style lang="scss" scoped>
.card_series {
    border: 1px solid black;
}</style>