<script setup>
import Icon from "./AppIcon.vue"
import CaretDown from "../../assets/icons/caret-down.svg"

defineProps({
    backgroundColor: String
}) 
</script>

<template>
    <button :style="{ 'background-color': backgroundColor || '#fff' }" class="btn-round-caret">
        <Icon :file="CaretDown" :fontSize="'2em'"></Icon>
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


}
</style>