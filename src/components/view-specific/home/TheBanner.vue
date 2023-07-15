<script setup>
import AppButtonRound from "@/components/Base/AppButtonRound.vue"
import AppBouncingAnimation from "@/components/BaseAnimated/AppBouncingAnimation.vue"
import CaretDown from "@/assets/icons/caret-down.svg"

defineProps({
    backgroundColor: String
})
</script>

<template>
    <div class="banner">
        <AppBouncingAnimation @click="handleInteraction">
            <AppButtonRound :backgroundColor="backgroundColor" :text="'Next Section'"></AppButtonRound>
        </AppBouncingAnimation>
        <button @click="handleInteraction" class="banner__btn">{{ $t("banner.text") }} <span v-icon="CaretDown"></span>
        </button>
    </div>
</template> 

<script>
export default {
    methods: {
        handleInteraction() {
            this.$emit('bannerClicked')
        }
    }
}
</script>

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