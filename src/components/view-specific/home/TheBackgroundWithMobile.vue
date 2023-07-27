<script setup>
import bp from "../../../../breakpoints.config"

import phoneIMGSmall from "@/assets/images/shop/architecture@w120.jpg"
import phoneIMGMedium from "@/assets/images/shop/architecture@w220.jpg"
import phoneIMGLarge from "@/assets/images/shop/architecture@w440.jpg"

import profileIMGMedium from "@/assets/images/shop/portrait@w80.jpg"
import profileIMGLarge from "@/assets/images/shop/portrait@w160.jpg"
</script>



<template>
    <div class="background-with-mobile">
        <a href="#" class="background-with-mobile__mobile">
            <div class="background-with-mobile__img">
                <img :srcset="`${phoneIMGSmall} 120w,${phoneIMGMedium} 220w,${phoneIMGLarge} 440w`"
                    :sizes="` (max-width: ${bp['bp-mobile']} 120px,(max-width: ${bp['bp-desktop']} 220px, 440px)`"
                    :src="`${phoneIMGMedium}`"
                    alt="European city with crean coloured stone architecture and cathedral of same stone in background">
            </div>
            <p class="background-with-mobile__text">{{ $t("shop.background-phone-title") }}<br><span>{{
                $t("shop.background-phone-subtext") }}</span></p>
            <div class="background-with-mobile__circle-img">
                <img :srcset="`${profileIMGMedium} 80w,${profileIMGLarge} 160w`"
                    :sizes="`(max-width: ${bp['bp-mobile']}) 80px, 160px`" :src="`${profileIMGMedium}`"
                    alt="Portrait of a woman in a red dress">
            </div>

        </a>
    </div>
</template>


<style scoped>
.background-with-mobile {
    height: 100%;
    width: 100%;
    position: relative;
    flex-shrink: 0;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;


    @media (max-width: $bp-desktop) and (max-resolution: 250dpi) {
        background-image: url("@/assets/images/shop/woman-smiling@w960.jpg");
    }

    @media (max-width: $bp-mobile) and (max-resolution: 150dpi) {
        background-image: url("@/assets/images/shop/woman-smiling@w480.jpg");
    }

    @media (min-width: $bp-desktop),
    (min-resolution: 250dpi) {
        background-image: url("@/assets/images/shop/woman-smiling@w1920.jpg");
    }

    &__mobile {
        position: absolute;
        left: 5.125em;
        bottom: 5.625em;

        @media (max-width: 600px) {
            left: 5em;
            bottom: 2em;

        }
    }

    &__img {
        height: 21.5625em;
        width: 12.125em;
        border-radius: 1rem;
        overflow: hidden;
        border-top: 1px solid #000;

        & img {
            object-fit: cover;
            height: 100%;
            width: auto;
        }
    }

    &__text {
        font-weight: 600;
        margin-top: 4px;
        margin-left: 3em;
        color: #fff;
        line-height: 1.2;
        font-size: 1rem;

        & span {
            font-weight: normal;
        }
    }

    &__circle-img {
        height: 5.375em;
        width: 5.375em;
        border-radius: 50%;
        border: 2px solid #fff;
        overflow: hidden;
        position: absolute;
        top: 73%;
        left: -18%;

        & img {
            object-fit: cover;
            width: 100%;
            height: auto;
        }
    }
}
</style>