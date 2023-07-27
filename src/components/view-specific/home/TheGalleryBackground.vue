<script setup>
defineProps({
    imageFolderName: String
})

</script>

<template>
    <div class="gallery-background">
        <div v-for="i in 12" :key="i" class="gallery-background__image">
            <h1></h1>
            <img :srcset="`${imagesW110[i - 1]} 110w, ${imagesW220[i - 1]} 220w, ${imagesW330[i - 1]} 330w`"
                sizes="(max-width: 350px) 110px, (max-width: 700px) 220px, 330px" alt="">

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            imagesW110: [],
            imagesW220: [],
            imagesW330: []
        }
    },
    created() {
        const galleryFilesW110 = import.meta.glob('@/assets/images/gallery-mobile-hero/w110/\*', { as: 'url', eager: true });

        for (const file in galleryFilesW110) {
            this.imagesW110.push(galleryFilesW110[file])
        }
        const galleryFilesW220 = import.meta.glob("@/assets/images/gallery-mobile-hero/w220/\*", { as: 'url', eager: true })
        for (const file in galleryFilesW220) {
            this.imagesW220.push(galleryFilesW220[file])
        }
        const galleryFilesW330 = import.meta.glob("@/assets/images/gallery-mobile-hero/w330/\*", { as: 'url', eager: true })
        for (const file in galleryFilesW330) {
            this.imagesW330.push(galleryFilesW330[file])
        }
    }
}
</script>

<style scoped>
.gallery-background {
    position: absolute;
    max-width: 100%;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: grid;
    left: 0;
    grid-template-columns: repeat(4, minmax(70px, 330px));
    z-index: -10;
    background: #000;

    @media (max-width: $bp-mobile) {
        grid-template-columns: repeat(3, minmax(70px, 330px));
    }


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