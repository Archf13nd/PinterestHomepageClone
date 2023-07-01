
<script setup>
defineProps({
    isGalleryChanging: Boolean
})
</script>

<template>
    <div class="gallery">
        <div class="gallery__overlay"></div>


        <div class="gallery__1x2" :style="{ 'animation-delay': calcAnimationDelay(i) }"
            :class="[`gallery__1x2--${i}`, { 'render-1x2': isGalleryChanging }]" v-for="i in 7" :key="i">
            <div class="gallery__bg-img" :class="`gallery__bg-img--${i}`" :style="{
                backgroundImage: `url(${imageURLs[i - 1]})`

            }">
            </div>
            <div v-if="[1, 2, 6, 7].includes(i)" class="gallery__bg-img" :style="{
                backgroundImage: `url(${imageURLs[i - 1]})`
            }"></div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            devMode: true,
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
    async created() {
        for (let i = 0; i < 11; i++) {
            if (this.devMode) {
                this.imageURLs.push('https://images.pexels.com/photos/17248059/pexels-photo-17248059/free-photo-of-black-and-white-picture-of-a-woman-sitting-on-a-chair-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load')

            } else {

                const response = await fetch('https://picsum.photos/200/300')
                const imageURL = await response.url

                this.imageURLs.push(imageURL)
            }
        }
    }
}
</script>

<style scoped>
.wrapper {
    height: 100%;
}

.gallery {

    height: 43.75rem;
    justify-content: flex-end;
    display: flex;
    align-items: flex-end;
    position: relative;
    overflow: hidden;

    &__bg-img {
        background-size: cover;
        background-repeat: no-repeat;
        width: 14.75rem;
        height: 50%;
        margin: .5rem;
        border-radius: 1rem;
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