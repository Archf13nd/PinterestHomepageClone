<script setup>
defineProps({
    color: String,
    backgroundColor: String
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
        <div class="section-text__cta" :style="{ 'background-color': color, 'color': backgroundColor }">
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
        font-size: 3.75rem;
        font-weight: 700;
        line-height: 1;

        @media (max-width: $bp-tablet-portrait) {
            font-size: 1.75rem;
        }
    }

    &__paragraph {
        font-size: 1.5rem;
        text-align: center;
        max-width: 29ch;
        line-height: 1.3;
        margin-top: 1em;
    }


    &__cta {
        padding: .8rem;
        background: #000;
        width: 6rem;
        border-radius: 2rem;
        font-weight: 700;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 1.5em;
        font-size: 1rem;
    }

    /* Mobile */
    @media (max-width: 900px) {

        &__paragraph {
            font-size: 1rem;
        }
    }
}
</style>