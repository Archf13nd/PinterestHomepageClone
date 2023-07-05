<script setup>
defineProps({
    order: null,
    scale: {
        type: Number,
        default: 1
    },
    ratio: {
        type: Number,
        default: 1
    }
})
</script>

<template>
    <div class="screen" :style="{ 'font-size': scale + 'rem' }">
        <div class="screen__left" :style="{ 'flex-basis': `${(ratio) * 100}%` }">
            <slot name="left"></slot>
        </div>
        <div class="screen__right" :style="{ 'flex-basis': `${((1 - ratio) * 100) || 100}%` }">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<style scoped>
.screen {
    display: flex;
    height: 100%;
    width: 100%;
    font-size: 1rem;

    &__left,
    &__right {
        width: 100%;
        height: 100%;
        display: flex;
    }
}

@media screen and (max-width:55em) {
    .screen {
        flex-direction: column;
    }
}
</style>