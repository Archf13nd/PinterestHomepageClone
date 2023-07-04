<script setup>
import AppButtonRound from "../Base/AppButtonRound.vue"
import AppBouncingAnimation from "../BaseAnimated/AppBouncingAnimation.vue"
import Icon from "../Base/AppIcon.vue"
import CaretDown from "../../assets/icons/caret-down.svg"

defineProps({
    backgroundColor: String
})
</script>

<template>
    <div class="banner">
        <AppBouncingAnimation>
            <AppButtonRound :backgroundColor="backgroundColor"></AppButtonRound>
        </AppBouncingAnimation>
        <button class="banner__btn">Here's how it works <Icon :file="CaretDown"></Icon></button>
    </div>
</template> 


<style scoped>
.banner {
    height: 4rem;
    background: var(--c-bg-yellow);
    display: flex;
    align-items: center;
    justify-content: center;

    &__btn {
        border: none;
        background: none;
        font-size: 1rem;
        font-weight: 600;
        display: flex;
        align-items: center;
    }
}

.animation-bouncing {
    position: absolute;
    top: -120%
}
</style>