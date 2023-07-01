<script setup>
defineProps({
    color: String
})
</script>

<template>
    <div class="section-text" :style="{ 'color': color }">
        <h2 class="section-text__heading">
            <slot name="heading"></slot>
        </h2>
        <p class="section-text__paragraph">
            <slot name="paragraph"></slot>
        </p>
        <div class="section-text__cta" :style="{ 'background-color': color }">
            <slot name="btn"></slot>
        </div>
    </div>
</template>

<style scoped>
.section-text {
    max-width: 40rem;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;

    &__heading {
        font-size: 4rem;
        font-weight: 700;
    }

    &__paragraph {
        font-size: 1.5rem;
        text-align: center;
        max-width: 65%;
        line-height: 1.3;
    }

    &__cta {
        padding: .8rem;
        background: #000;
        width: 6rem;
        border-radius: 2rem;
        color: var(--c-yellow);
        font-weight: 700;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 1.8rem;
    }
}
</style>