<script setup>
import AppIcon from "./AppIcon.vue"

defineProps({
    text: String,
    file: String,

})
</script>

<template>
    <button class="btn-cta">
        <AppIcon v-if="file" :file="file" :fontSize="'1.5rem'" :alt="''"></AppIcon>
        <div class="btn-cta__text">
            {{ text }}
        </div>
    </button>
</template>

<style scoped>
.btn-cta {
    width: 100%;
    height: 2.5rem;
    font-size: inherit;
    display: flex;
    align-items: center;
    border-radius: 10rem;
    border: none;
    font-family: inherit;
    justify-content: center;


    &__text {
        width: 100%;
    }
}
</style>