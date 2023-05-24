<script>
export default {
    props: {
        title: String,
        original_title: String,
        original_language: String,
        vote_average: Number,
    },
};
</script>

<template>
    <div>
        <div>
            {{ title }}
        </div>
        <div>
            {{ original_language }}
        </div>
        <div>
            {{ original_title }}
        </div>
        <div>
            {{ vote_average }}
        </div>
    </div>
</template>

<style lang="scss" scoped></style>