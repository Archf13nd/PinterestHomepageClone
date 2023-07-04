<template>
    <div class="animation-bouncing">
        <slot></slot>
    </div>
</template>

<style scoped>
.animation-bouncing {
    animation: bouncing 1s ease-in infinite alternate;
}
</style>