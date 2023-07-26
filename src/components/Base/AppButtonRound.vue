<script setup>
import CaretDown from "../../assets/icons/caret-down.svg"

defineProps({
    backgroundColor: String,
    text: String,
}) 
</script>

<template>
    <button :style="{ 'background-color': backgroundColor || '#fff' }" class="btn-round-caret" v-icon="CaretDown">
        <div class="btn-round-caret__description">{{ text }}</div>
    </button>
</template>

<style scoped>
.btn-round-caret {
    height: 3rem;
    width: 3rem;
    border: none;
    border-radius: 50%;
    color: var(--c-white);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    font-size: 1.5rem;

    &__description {
        font-size: 0;
    }



}
</style>