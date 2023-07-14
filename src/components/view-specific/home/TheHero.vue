<script setup>
import BtnRow from "@/components/Base/AppBtnRow.vue"
import Gallery from "./TheGalleryValleyAnimated_7x2.vue";
import Banner from "./TheBanner.vue"
import AppHeader from "./TheHeader.vue"
import timer from "@/assets/js/timer.js"
</script>

<template>
    <div class="hero">
        <AppHeader></AppHeader>
        <div class="hero__heading">
            <h2>
                {{ $t("hero.header-top") }} <br>
                <Transition name="slide-out-in" mode="out-in">
                    <span v-if="currentFrame === 0" :style="{ color: colors[0] }">{{ $t("hero.header-look") }}</span>
                    <span v-else-if="currentFrame === 1" :style="{ color: colors[1] }">{{ $t("hero.header-art") }}</span>
                    <span v-else-if="currentFrame === 2" :style="{ color: colors[2] }">{{ $t("hero.header-food") }}</span>
                    <span v-else-if="currentFrame === 3" :style="{ color: colors[3] }">{{ $t("hero.header-travel") }}</span>
                </Transition>
            </h2>

        </div>
        <BtnRow @btnChange="changeSlide" :currentBtn="currentFrame" :currentColor="colors[currentFrame]"></BtnRow>
        <div class="hero-gallery-container">
            <div class="overlay"></div>
            <Gallery :isGalleryChanging="updateGallery"></Gallery>
        </div>
        <Banner @bannerClicked="handleInteraction" :backgroundColor="colors[currentFrame]"></Banner>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // States: done, entering, leaving
            animationState: 'done',
            isBeingAnimated: false,
            currentFrame: 0,
            theTimer: null,
            updateTitle: false,
            currentTimings: null,
            timingCycle1: 0,
            timingCycle2: 0,
            timingCycle3: 0,
            colors: ['#c28B00', '#61867b', '#0076d3', '#407a57']
        }
    },
    methods: {
        loadNextTitle() {
            const numOfTitles = 3
            if (this.currentFrame < numOfTitles) {
                this.currentFrame += 1
            } else {
                this.currentFrame = 0
            }
        },
        changeSlide(e) {
            if (e === 0) {
                this.currentFrame = 3
            } else {
                this.currentFrame = e - 1
            }
            this.currentTimings['timing-1'] = 0
            this.currentTimings['timing-2'] = 0

            setTimeout(() => {
                this.currentTimings['timing-1'] = 1
                this.currentTimings['timing-2'] = 1
            }, 100);
        },
        handleInteraction() {
            this.$emit('bannerClicked')
        }
    },
    watch: {
        'currentTimings.timing-1': function () {
            if (this.currentTimings['timing-1'] % 2) {
                this.loadNextTitle()
                this.updateTitle = true
            } else {
                this.updateTitle = false

            }
        }
    },
    computed: {
        updateGallery() {
            if (this.currentTimings['timing-2'] % 2) {
                return true
            } else {
                return false
            }
        }
    },
    created() {
        this.currentTimings = {
            completeCycle: 3000
        }
        this.theTimer = timer(this.currentTimings, [
            {
                name: 'timing-1',
                timing: 250
            },
            {
                name: 'timing-2',
                timing: 300
            },
            {
                name: 'timing-3',
                timing: 100
            }
        ])
    }
}
</script>

<style scoped>
.hero {
    &__heading {
        font-size: 2.5rem;
        position: absolute;
        top: 35%;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        text-align: center;
        font-weight: 600;
        width: 100%;

        & h2 {
            font-weight: inherit;
            line-height: 1.3;
        }

        & span {
            display: block;
        }

    }
}

.btn-row {
    position: absolute;
    left: 50%;
    top: 60%;
    transform: translateX(-50%);
}

.hero-gallery-container {
    overflow: hidden;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 0;
    pointer-events: none;
}

.overlay {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background: rgb(253, 253, 255);
    background: linear-gradient(180deg, rgba(2, 0, 36, 0) 0%, rgba(2, 0, 36, 0) 70%, rgba(255, 255, 255, 1) 100%);
    z-index: 10;
    pointer-events: none;
}

.banner {
    position: absolute;
    bottom: 0;
    z-index: 100;
    width: 100%;
}

.slide-out-in-enter-active {
    animation: slideUpEnter .5s forwards;
}

.slide-out-in-leave-active {
    animation: slideUpLeave .75s;

}



@keyframes slideUpLeave {
    0% {
        transform: translateY(0rem);
        opacity: 100%;
    }

    100% {
        transform: translateY(-2rem);
        opacity: 0%;

    }
}

@keyframes slideUpEnter {
    0% {
        transform: translateY(1rem);
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