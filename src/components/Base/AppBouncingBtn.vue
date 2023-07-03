<script setup>
import Icon from "./AppIcon.vue"
import CaretDown from "../../assets/icons/caret-down.svg"

defineProps({
    backgroundColor: String
}) 
</script>

<template>
    <button :style="{ 'background-color': backgroundColor || '#fff' }" class="bouncing-button">
        <Icon :file="CaretDown" :fontSize="'2em'"></Icon>
    </button>
</template>

<style scoped>
.bouncing-button {
    height: 3.5rem;
    width: 3.5rem;
    border: none;
    border-radius: 50%;
    color: var(--c-white);
    animation: bouncing infinite alternate 1.2s;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
}

@keyframes bouncing {
    0% {
        transform: translateY(0);
    }

    100% {
        transform: translateY(-2rem);

    }
}
</style>