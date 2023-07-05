<script setup>
import Icon from "../Base/AppIcon.vue"

import SearchIcon from "../../assets/icons/search.svg"
</script>

<template>
    <div class="collage-dense">
        <div class="collage-dense__img-main"></div>
        <div class="collage-dense__img-bg collage-dense__img-bg--1"></div>
        <div class="collage-dense__img-bg collage-dense__img-bg--2"></div>
        <div class="collage-dense__img-bg collage-dense__img-bg--3"></div>
        <div class="collage-dense__cta">
            <Icon :file="SearchIcon" :fontSize="'2rem'"></Icon> Drawing ideas!
        </div>
    </div>
</template>

<style scoped>
.collage-dense {
    /* DEV */
    border: 2px solid green;
    height: 40em;
    width: 40em;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;


    &__img-main {
        height: 80%;
        width: 50%;
        background: #000;
        border-radius: 3rem;
        z-index: 10;
    }

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

        &--1 {
            height: 40%;
            width: 30%;
            position: absolute;
            background: #222b20;
            top: 0%;
            left: 52%;
        }

        &--2 {
            height: 40%;
            width: 30%;
            position: absolute;
            background: #222b20;
            top: 35%;
            left: 15%;
        }

        &--3 {
            height: 40%;
            width: 30%;
            position: absolute;
            background: #222b20;
            top: 60%;
            left: 55%;
        }
    }
}
</style>