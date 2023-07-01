<template>
    <div class="screen">
        <div class="screen__left">
            <slot name="left"></slot>
        </div>
        <div class="screen__right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<style scoped>
.screen {
    display: grid;
    height: 100%;
    grid-template-columns: 1fr 1fr;

    &__left,
    &__right {
        display: flex;
        justify-content: center;
        align-self: center;
    }


}
</style>