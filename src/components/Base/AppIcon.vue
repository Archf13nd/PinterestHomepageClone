<script setup>
defineProps({
    file: {
        type: String
    },
    altText: {
        type: String
    },
    fontSize: {
        default: 'inherit'
    }
})
</script>

<template>
    <span class="brand-icon" :style="`font-size: ${fontSize}`">
        <img :src="file" :alt="altText">
    </span>
</template>

<script>
</script>



<style scoped>
.brand-icon {
    display: inline-block;
    height: 1em;
    width: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 3px;

    & img {
        height: auto;
        width: 100%;
    }
}
</style>