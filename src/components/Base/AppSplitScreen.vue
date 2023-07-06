<script setup>
defineProps({
    ratio: {
        type: Number,
        default: 1
    }
})
</script>

<template>
    <div class="screen">
        <div class="screen__left" :style="{ 'flex-basis': `${(ratio) * 100}%` }">
            <slot name="left"></slot>
        </div>
        <div class="screen__right" :style="{ 'flex-basis': `${((1 - ratio) * 100) || 100}%` }">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.screen {
    display: flex;
    height: 100%;
    width: 100%;

    &__left,
    &__right {
        width: 100%;
        height: 100%;
        display: flex;
    }
}
</style>