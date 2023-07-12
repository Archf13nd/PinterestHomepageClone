<template>
    <div class="gallery-desktop">
        <div v-for="i in 7" :key="i" class="gallery-desktop__1x3">
            <div v-for="j in 3" :key="j" class="gallery-desktop__img" :class="{ 'displace': i === 3 }">
                <img :srcset="`${imagesW236[i * j - 1]} 236w, ${imagesW472[i - 1]} 472w`"
                    sizes="(max-width: 1920px) 236px, 472px" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            imagesW236: [],
            imagesW472: []
        }
    },
    created() {
        const imagesW236 = import.meta.glob('/public/images/gallery-signup/w236/\*');
        for (const file in imagesW236) {
            this.imagesW236.push(file)
        }
        const imagesW472 = import.meta.glob('/public/images/gallery-signup/w472/\*');
        for (const file in imagesW472) {
            this.imagesW472.push(file)
        }
    }
}
</script>

<style scoped>
.displace {
    margin-top: 5rem;
}

.gallery-desktop {
    width: 95%;
    margin-left: 2.5%;
    justify-content: center;
    height: 100%;
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    z-index: -10;

    &__img {
        margin: .5rem;



        & img {
            width: 100%;
            height: auto;
            border-radius: 1.5rem;
        }
    }
}
</style>