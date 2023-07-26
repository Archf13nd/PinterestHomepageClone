<script setup>
import SearchIcon from "@/assets/icons/search.svg"
const imgDirPath = '/images/collage-dense'

</script>

<template>
    <div class="collage-dense">
        <div class="collage-dense__img-bg collage-dense__img-bg--main">
            <img :srcset="`${imgDirPath}/cake@w149.jpg 149w, ${imgDirPath}/cake@w334.jpg 334w,${imgDirPath}/cake@w596.jpg 596w`"
                :src="`${imgDirPath}/cake@w298.jpg`" sizes="(max-width: 400px) 149px ,(max-width: 1920px) 298px, 596px"
                alt="A large pink cake">
        </div>
        <div class="collage-dense__img-bg collage-dense__img-bg--1">
            <img :srcset="`${imgDirPath}/cake-pink@w105.jpg 105w, ${imgDirPath}/cake-pink@w210.jpg 210w,${imgDirPath}/cake-pink@w420.jpg 420w`"
                :src="`${imgDirPath}/cake-pink@w210.jpg`" sizes="(max-width: 400px) 105px ,(max-width: 1920px) 210px, 420px"
                alt="A large pink cake">
        </div>
        <div class="collage-dense__img-bg collage-dense__img-bg--2">
            <img :srcset="`${imgDirPath}/cake-frosting@w105.jpg 105w,${imgDirPath}/cake-frosting@w210.jpg 210w,${imgDirPath}/cake-frosting@w420.jpg 420w`"
                :src="`${imgDirPath}/cake-frosting@w210.jpg`"
                sizes="(max-width: 400px) 105px ,(max-width: 1920px) 210px, 420px" alt="A large pink cake">
        </div>
        <div class="collage-dense__img-bg collage-dense__img-bg--3">
            <img :srcset="`${imgDirPath}/cake-rasberry@w105.jpg 105w,${imgDirPath}/cake-rasberry@w210.jpg 210w,${imgDirPath}/cake-rasberry@w420.jpg 420w`"
                :src="`${imgDirPath}/cake-rasberry@w210.jpg`"
                sizes="(max-width: 400px) 105px ,(max-width: 1920px) 210px, 420px" alt="A large pink cake">
        </div>
        <div class="collage-dense__cta">
            <div v-icon="SearchIcon"> {{ $t("ideas.search-text") }} </div>
        </div>
    </div>
</template>

<style scoped>
.collage-dense {

    height: 40em;
    width: 40em;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;




    &__cta {
        width: 60%;
        height: 20%;
        background: #fff;
        position: absolute;
        z-index: 15;
        border-radius: 10rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2em;
        font-weight: 600;
    }

    &__img-bg {
        border-radius: 3rem;

        & img {
            height: 100%;
            object-fit: cover;
            width: 100%;
            border-radius: inherit;
        }

        &--main {
            height: 28.5rem;
            width: 18.625rem;

            border-radius: 3rem;
            z-index: 10;
        }

        &--1 {
            height: 40%;
            width: 30%;
            position: absolute;

            top: 0%;
            left: 52%;
        }

        &--2 {
            height: 40%;
            width: 30%;
            position: absolute;

            top: 35%;
            left: 15%;
        }

        &--3 {
            height: 40%;
            width: 30%;
            position: absolute;

            top: 60%;
            left: 55%;
        }
    }
}
</style>