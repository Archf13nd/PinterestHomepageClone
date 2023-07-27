
<script setup>
defineProps({
    isGalleryChanging: Boolean
})
</script>

<template>
    <div class="gallery">
        <div class="gallery__wrapper">
            <div class="gallery__overlay"></div>
            <!-- Renders 7 1x2 grids using responsive image loading with srcset and animates transition when new gallery is loaded in -->
            <div class="gallery__1x2" :style="{ 'animation-delay': calcAnimationDelay(i) }"
                :class="[`gallery__1x2--${i}`, { 'render-1x2': isGalleryChanging }]" v-for="i in  7 " :key="i">
                <div class="gallery__bg-img" :class="`gallery__bg-img--${i}`">
                    <img :srcset="`${imageFiles[currentTheme]['hd'][i - 1]} 240w, ${imageFiles[currentTheme]['4k'][i - 1]} 480w`"
                        sizes="(max-width: 1920px) 240px, 480px" :src="`${imageFiles[currentTheme][i - 1]}`" alt="">
                </div>
                <!-- The ternary operator is used to grab the last 4 images in the array-->
                <div v-if="[1, 2, 6, 7].includes(i)" class="gallery__bg-img">
                    <img :srcset="`${imageFiles[currentTheme]['hd'][i < 3 ? 6 + i : 6 + 10 - i]} 240w, ${imageFiles[currentTheme]['4k'][i < 3 ? 6 + i : 6 + 10 - i]} 480w`"
                        sizes="(max-width: 1920px) 240px, 480px" :src="`${imageFiles[currentTheme][i - 1]}`" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            devMode: true,
            currentTheme: 'travel',
            imageFiles: {
                'digital-art': {
                    hd: [],
                    '4k': []
                },
                'new-look': {
                    hd: [],
                    '4k': []
                },
                'food-ideas': {
                    hd: [],
                    '4k': []
                },
                'travel': {
                    hd: [],
                    '4k': []
                },

            },
            imageURLs: [],
            toRenderArray: [true, true, true, true, true, true, true],
            renderSpeed: 350,
            interval: null
        }
    },

    methods: {
        calcAnimationDelay(index) {
            return (1 / 5) * index + 's'
        }
    },
    created() {

        const digitalArtFilesHD = import.meta.glob(`@/assets/images/gallery_desktop/digital-art/@H350/*`, { as: 'url', eager: true })
        for (const file in digitalArtFilesHD) {
            this.imageFiles['digital-art'].hd.push(digitalArtFilesHD[file])
        }

        const digitalArtFiles4K = import.meta.glob(`@/assets/images/gallery_desktop/digital-art/@H700/*`, { as: 'url', eager: true })
        for (const file in digitalArtFiles4K) {

            this.imageFiles['digital-art']['4k'].push(digitalArtFiles4K[file])
        }

        const newLookFilesHD = import.meta.glob(`@/assets/images/gallery_desktop/new-look/@H350/*`, { as: 'url', eager: true })
        for (const file in newLookFilesHD) {
            this.imageFiles['new-look'].hd.push(newLookFilesHD[file])
        }

        const newLookFiles4K = import.meta.glob(`@/assets/images/gallery_desktop/new-look/@H700/*`, { as: 'url', eager: true })
        for (const file in newLookFiles4K) {
            this.imageFiles['new-look']['4k'].push(file)
        }

        const foodIdeasFilesHD = import.meta.glob(`@/assets/images/gallery_desktop/food-ideas/@H350/*`, { as: 'url', eager: true })
        for (const file in foodIdeasFilesHD) {
            this.imageFiles['food-ideas'].hd.push(foodIdeasFilesHD[file])
        }

        const foodIdeasFiles4K = import.meta.glob(`@/assets/images/gallery_desktop/food-ideas/@H700/*`, { as: 'url', eager: true })
        for (const file in foodIdeasFiles4K) {
            this.imageFiles['food-ideas']['4k'].push(file)
        }
        const travelFilesHD = import.meta.glob(`@/assets/images/gallery_desktop/travel/@H350/*`, { as: 'url', eager: true })
        for (const file in travelFilesHD) {
            this.imageFiles['travel'].hd.push(travelFilesHD[file])
        }

        const travelFiles4K = import.meta.glob(`@/assets/images/gallery_desktop/travel/@H700/*`, { as: 'url', eager: true })
        for (const file in travelFiles4K) {
            this.imageFiles['travel']['4k'].push(file)
        }

    }
}
</script>

<style scoped>
.wrapper {
    height: 100%;
}

.gallery {
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-top: 10rem;

    &__wrapper {
        justify-content: center;
        display: flex;
        align-items: flex-end;
        width: 100%;
        height: 100%;
    }

    &__bg-img {
        background-size: cover;
        background-repeat: no-repeat;
        width: 14.75rem;
        height: 21.875rem;
        margin: .5rem;
        border-radius: 1rem;
        flex-shrink: 0;
        overflow: hidden;

        & img {
            border-radius: inherit;
            height: 100%;
            object-fit: contain;
        }
    }

    &__1x2 {
        position: relative;
        height: 100%;
        display: flex;
        flex-direction: column;


        &--1,
        &--7 {
            top: 0%
        }

        &--2,
        &--6 {
            top: 30%
        }

        &--3,
        &--5 {
            top: 50%
        }

        &--4 {
            top: 70%;
        }
    }
}



.render-1x2 {
    animation: 2s forwards slideUpFade;

}


@keyframes slideUpFade {
    0% {
        transform: translateY(0rem);
        opacity: 100%;
        gap: 0;

    }

    50% {
        transform: translateY(-2rem);
        opacity: 0%;
        gap: .5rem;
    }

    60% {
        transform: translateY(2rem);
        opacity: 0%;
        gap: .5rem;

    }

    100% {
        transform: translateY(0rem);
        opacity: 100%;
        gap: 0;
    }
}
</style>