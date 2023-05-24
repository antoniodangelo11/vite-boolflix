<script>
export default {
    props: {
        name: String,
        original_name: String,
        original_language: String,
        vote_average: Number,
    },
};
</script>

<template>
    <div>
        <div>
            {{ name }}
        </div>
        <div>
            {{ original_language }}
        </div>
        <div>
            {{ original_name }}
        </div>
        <div>
            {{ vote_average }}
        </div>
    </div>
</template>

<style lang="scss" scoped></style>