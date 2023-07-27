<script setup>
import SearchIcon from "@/assets/icons/search.svg"

import cakeMainIMGSmall from "@/assets/images/collage-dense/cake@w149.jpg"
import cakeMainIMGMedium from "@/assets/images/collage-dense/cake@w334.jpg"
import cakeMainIMGLarge from "@/assets/images/collage-dense/cake@w596.jpg"

import cake2IMGSmall from "@/assets/images/collage-dense/cake-frosting@w105.jpg"
import cake2IMGMedium from "@/assets/images/collage-dense/cake-frosting@w210.jpg"
import cake2IMGLarge from "@/assets/images/collage-dense/cake-frosting@w420.jpg"

import cake3IMGSmall from "@/assets/images/collage-dense/cake-pink@w105.jpg"
import cake3IMGMedium from "@/assets/images/collage-dense/cake-pink@w210.jpg"
import cake3IMGLarge from "@/assets/images/collage-dense/cake-pink@w420.jpg"


import cake4IMGSmall from "@/assets/images/collage-dense/cake-rasberry@w105.jpg"
import cake4IMGMedium from "@/assets/images/collage-dense/cake-rasberry@w210.jpg"
import cake4IMGLarge from "@/assets/images/collage-dense/cake-rasberry@w420.jpg"





</script>

<template>
    <div class="collage-dense">
        <div class="collage-dense__img-bg collage-dense__img-bg--main">
            <img :srcset="`${cakeMainIMGSmall} 149w, ${cakeMainIMGMedium} 334w,${cakeMainIMGLarge} 596w`"
                :src="`${cakeMainIMGSmall}`" sizes="(max-width: 400px) 149px ,(max-width: 1920px) 298px, 596px"
                alt="A large cake with donuts on top and covered in blue icing">
        </div>
        <div class="collage-dense__img-bg collage-dense__img-bg--1">
            <img :srcset="`${cake2IMGSmall} 105w, ${cake2IMGMedium} 210w, ${cake2IMGLarge} 420w`" :src="`${cake2IMGMedium}`"
                sizes="(max-width: 400px) 105px ,(max-width: 1920px) 210px, 420px" alt="A large pink cake">
        </div>
        <div class="collage-dense__img-bg collage-dense__img-bg--2">
            <img :srcset="`${cake3IMGSmall} 105w, ${cake3IMGMedium} 210w, ${cake3IMGLarge} 420w`" :src="`${cake3IMGMedium}`"
                sizes="(max-width: 400px) 105px ,(max-width: 1920px) 210px, 420px" alt="A cake with lots of frosting">
        </div>
        <div class="collage-dense__img-bg collage-dense__img-bg--3">
            <img :srcset="`${cake4IMGSmall} 105w,${cake4IMGMedium} 210w,${cake4IMGLarge} 420w`" :src="`${cake4IMGMedium}`"
                sizes="(max-width: 400px) 105px ,(max-width: 1920px) 210px, 420px" alt="A cake covered in rasberries">
        </div>
        <div class="collage-dense__cta">
            <div v-icon="SearchIcon"> {{ $t("ideas.search-text") }} </div>
        </div>
    </div>
</template>

<style scoped>
.collage-dense {

    height: 40em;
    max-width: 40em;
    width: 100%;
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
        border-radius: 10em;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2em;
        font-weight: 600;
    }

    &__img-bg {
        border-radius: 3em;

        & img {
            height: 100%;
            object-fit: cover;
            width: 100%;
            border-radius: inherit;
        }

        &--main {
            height: 28.5em;
            width: 18.625em;

            border-radius: 3em;
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