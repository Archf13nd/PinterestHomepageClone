<script setup>
defineProps({
    imageFolderName: String
})

const images = ['womanFROMunsplash', 'spicesFROMunsplash', 'tangerineFROMunsplash', 'woman_laughingFROMunsplash', 'mugFROMunsplash', 'manFROMunsplash', 'leavesFROMunsplash', 'dressFROMunsplash', 'controllerFROMunsplash', 'churchFROMunsplash', 'cakeFROMunsplash', 'balloonsFROMunsplash']
</script>

<template>
    <div class="gallery-background">
        <div v-for="i in 12" :key="i" class="gallery-background__image">
            <img :srcset="`/gallery_mobile/${images[i - 1]}@1x.jpg 1x, /gallery_mobile@2x/${images[i - 1]}@2x.jpg 2x, /gallery_mobile@3x/${images[i - 1]}@3x.jpg 3x`"
                sizes="(max-width: 600)" alt="">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            images: []
        }
    },
    created() {

    }
}
</script>

<style scoped>
.gallery-background {

    &__image {
        height: 100%;
        width: 100%;
        overflow: hidden;
        padding: 0.2rem;
        border-radius: 1.2rem;


        & img {

            width: 100%;
            height: 100%;
            border-radius: inherit;
            object-fit: cover;

        }
    }
}
</style>