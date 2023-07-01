<script setup>
defineProps({
    isTitleChanging: Boolean,
    forceChange: Boolean
})
</script>

<template>
    <div v-if="true" :class="{ 'slide-out-in': isTitleChanging || forceChange }" class="animated-text">
        <slot></slot>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.slide-out-in {
    animation: slideUpEnter 1s forwards;
}



@keyframes slideUpLeave {
    0% {
        transform: translateY(0);
        opacity: 100%;
    }

    100% {
        transform: translateY(-2rem);
        opacity: 0%;

    }
}

@keyframes slideUpEnter {
    0% {
        transform: translateY(2rem);
        opacity: 0%;
    }

    10% {
        opacity: 100%;
    }

    100% {
        transform: translateY(0);
    }
}
</style>