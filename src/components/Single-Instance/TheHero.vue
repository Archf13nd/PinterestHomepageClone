<script setup>
import AnimatedText from "../Base/AppAnimatedText.vue"
import BtnRow from "../Base/AppBtnRow.vue"
import Gallery from "./TheGalleryValleyAnimated_7x2.vue";
import Banner from "./TheBanner.vue"
import AppHeader from "./TheHeader.vue"
import timer from "../../assets/js/timer.js"
</script>

<template>
    <div class="hero">
        <AppHeader></AppHeader>
        <div class="hero__heading">
            <h2>Get your next</h2>
            <AnimatedText :isTitleChanging="updateTitle">
                <h2 :style="{ 'color': titles[currentTitle].color }" class="heading heading__bottom-text">{{
                    titles[currentTitle].title }}</h2>
            </AnimatedText>
        </div>
        <BtnRow @btnChange="changeSlide" :currentBtn="currentTitle" :currentColor="titles[currentTitle].color"></BtnRow>
        <div class="hero-gallery-container">
            <div class="overlay"></div>
            <Gallery :isGalleryChanging="updateGallery"></Gallery>
        </div>
        <Banner @bannerClicked="handleInteraction" :backgroundColor="titles[currentTitle].color"></Banner>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // States: done, entering, leaving
            animationState: 'done',
            isBeingAnimated: false,
            currentTitle: 0,
            theTimer: null,
            updateTitle: false,
            currentTimings: null,
            timingCycle1: 0,
            timingCycle2: 0,
            timingCycle3: 0,
            titles: [
                {
                    title: "New makeup ideas",
                    color: "green"
                },
                {
                    title: "Create character art",
                    color: "red"
                },
                {
                    title: "Fresh website designs",
                    color: "blue",
                },
                {
                    title: "Crazy hair styles",
                    color: "violet"
                }]
        }
    },
    methods: {
        loadNextTitle() {
            const numOfTitles = this.titles.length - 1
            if (this.currentTitle < numOfTitles) {
                this.currentTitle += 1
            } else {
                this.currentTitle = 0
            }
        },
        changeSlide(e) {
            if (e === 0) {
                this.currentTitle = 3
            } else {
                this.currentTitle = e - 1
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
            completeCycle: 6000
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
        left: 50%;
        top: 47%;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        transform: translate(-50%, -50%);
        text-align: center;
        font-weight: 600;
        width: 100%;

        & h2 {
            font-weight: inherit;
            line-height: 1.3;
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
</style>