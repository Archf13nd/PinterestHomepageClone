<template>
    <div class="gallery-desktop">
        <div v-for="i in 7" :key="i" class="gallery-desktop__1x3" :style="{ 'margin-top': calcDisplacement(i) }">
            <div v-for="j in 3" :key="j" class="gallery-desktop__img">
                <img :srcset="`${imagesW236[i * 3 - j]} 236w, ${imagesW472[i - 1]} 472w`"
                    sizes="(max-width: 1920px) 236px, 472px" alt="">
            </div>
            <div v-if="((i === 3 || i === 5))" class="gallery-desktop__img">
                <img :srcset="`${imagesW236[i]} 236w, ${imagesW472[i]} 472w`" sizes="(max-width: 1920px) 236px, 472px"
                    alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            imagesW236: [],
            imagesW472: [],
            displacementKeys: {
                1: '0rem',
                2: '-8rem',
                3: '-15rem',
                4: '-2rem',
                5: '-15rem',
                6: '-8rem',
                7: '0rem'


            }
        }
    },
    methods: {
        calcDisplacement(i) {
            return this.displacementKeys[i]
        }
    },
    created() {
        const imagesW236 = import.meta.glob('/images/gallery-signup/w236/\*');
        for (const file in imagesW236) {
            this.imagesW236.push(file)
        }
        const imagesW472 = import.meta.glob('/images/gallery-signup/w472/\*');
        for (const file in imagesW472) {
            this.imagesW472.push(file)
        }
    }
}
</script>

<style scoped>
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