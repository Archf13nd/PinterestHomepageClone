<script setup>
const imgDirPath = '/images/collage-sparse'

// Images

import image1Small from "@/assets/images/collage-sparse/cacti@w210.jpg"
import image1Medium from "@/assets/images/collage-sparse/cacti@w420.jpg?w=400&h=420"
import image1Large from "@/assets/images/collage-sparse/cacti@w840.jpg"

import image2Small from "@/assets/images/collage-sparse/ladybugs@w118.jpg"
import image2Medium from "@/assets/images/collage-sparse/ladybugs@w236.jpg?w=222&h=224"
import image2Large from "@/assets/images/collage-sparse/ladybugs@w472.jpg"

import image3Small from "@/assets/images/collage-sparse/blush@w87.jpg"
import image3Medium from "@/assets/images/collage-sparse/blush@w174.jpg?w=165&h=172"
import image3Large from "@/assets/images/collage-sparse/blush@w348.jpg"

import image4Small from "@/assets/images/collage-sparse/desk-setup@w118.jpg"
import image4Medium from "@/assets/images/collage-sparse/desk-setup@w236.jpg?w=222&h=224"
import image4Large from "@/assets/images/collage-sparse/desk-setup@w472.jpg"

import image5Small from "@/assets/images/collage-sparse/moth@w118.jpg"
import image5Medium from "@/assets/images/collage-sparse/moth@w236.jpg?w=222&h=224"
import image5Large from "@/assets/images/collage-sparse/moth@w472.jpg"
</script>

<template>
    <nav class="collage-sparse" aria-label="Unique Ideas Navigation">
        <a href="#" class="collage-sparse__img collage-sparse__img--1 collage-sparse__img--large">
            <img :srcset="`${image1Small} 210w,${image1Medium} 420w, ${image1Large} 840w`" :src="`${image1Medium}`"
                sizes="(max-width: 400px) 210px ,(max-width: 1920px) 420px, 840px" alt="Cacti in pots and bowls indoors.">
            <span>{{ $t("save-ideas.image-1") }}</span>
        </a>
        <a href="#" class="collage-sparse__img collage-sparse__img--2">
            <img :srcset="`${image2Small} 118w,${image2Medium} 236w, ${image2Large} 472w`" :src="`${image2Medium}`"
                sizes="(max-width: 400px) 118px ,(max-width: 1920px) 236px, 472px"
                alt="Macro photograph of two ladybugs on a small leaf.">
            <span>{{ $t("save-ideas.image-2") }}</span>
        </a>
        <a href="#" class="collage-sparse__img collage-sparse__img--3">
            <img :srcset="`${image3Small} 87w,${image3Medium} 174w, ${image3Large} 348w`"
                sizes="(max-width: 400px) 87px ,(max-width: 1920px) 174px, 348px" :src="`${image3Medium}`"
                alt="Top down view of a tray of makeup blush.">
            <span>{{ $t("save-ideas.image-3") }}</span>
        </a>
        <a href="#" class="collage-sparse__img collage-sparse__img--4">
            <img :srcset="`${image4Small} 118w,${image4Medium} 236w, ${image4Large} 472w`"
                sizes="(max-width: 400px) 118px ,(max-width: 1920px) 236px, 472px" :src="`${image4Medium}`"
                alt="A desk setup with laptop against a wall with large black and white photos hanging on it.">
            <span>{{ $t("save-ideas.image-4") }}</span>
        </a>
        <a href="#" class="collage-sparse__img collage-sparse__img--5">
            <img :srcset="`${image5Small} 118w,${image5Medium} 236w, ${image5Large} 472w`"
                sizes="(max-width: 400px) 118px ,(max-width: 1920px) 236px, 472px" :src="`${image5Medium}`"
                alt="Colourful artwork of a moth">
            <span>{{ $t("save-ideas.image-5") }}</span>
        </a>
    </nav>
</template>

<style scoped>
.collage-sparse {
    display: grid;
    grid-template-columns: 1fr .69fr;
    grid-template-rows: 14em min-content 1fr;
    justify-content: center;
    font-size: inherit;

    &__img {
        border-radius: 20%;
        display: flex;
        justify-content: center;
        /* align-items: center; */
        color: #fff;
        position: relative;
        padding: 0 7%;
        line-height: 1.4;
        font-weight: 600;
        background: #000;
        text-decoration: none;
        font-size: 1rem;

        & img {
            border-radius: inherit;
            width: 100%;
            height: 100%;
            /* object-fit: cover; */
            position: absolute;
            left: 0;
            top: 0;
            opacity: .5;
        }

        & span {
            z-index: 10;
        }



        &--1 {
            padding-top: 6em;
            height: 26.25em;
            width: 25em;
            grid-row: 1 / 3;
            grid-column: 1 / 2;

            & span {
                font-size: 3.5em;
            }
        }

        &--2,
        &--4,
        &--5 {
            width: 13.875em;
            height: 14em;
            padding-top: 5em;

            & span {
                font-size: 1.75em;
            }

        }

        &--2 {
            left: 3.375em;
        }

        &--3 {
            width: 10.31em;
            height: 10.75em;
            left: 2.31em;
            top: 2.875em;
            padding-top: 5em;

            & span {
                font-size: 1.25em;
            }
        }

        &--4 {
            left: 9.3125em;
            top: 2.5em;
        }

        &--5 {
            left: 1.1875em;
            top: 5em;
        }



    }
}
</style>