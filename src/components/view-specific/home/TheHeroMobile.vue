<script setup>
import ButtonCTA from "@/components/Base/AppButton-CTA.vue"
import GalleryBackground from "./TheGalleryBackground.vue"

import PinterestLogo from "@/assets/logos/p-badge-white.svg"
import FacebookLogo from "@/assets/logos/f_logo_RGB-White_58.png"
import GoogleLogo from "@/assets/logos/google.logo.png"


</script>

<template>
    <section class="hero">
        <GalleryBackground :imageFolderName="'gallery-mobile'"></GalleryBackground>
        <div class="hero__logo">
            <img :src="PinterestLogo" alt="">
        </div>
        <h1 class="hero__heading-1">Welcome to <br> Pinterest</h1>

        <ButtonCTA class="mt-large hero__btn hero__btn--pinterest" :text="'Continue with email'"></ButtonCTA>
        <ButtonCTA class="mt-tiny hero__btn hero__btn--facebook" :file="FacebookLogo" :text="'Continue with Facebook'">
        </ButtonCTA>
        <ButtonCTA class="mt-tiny hero__btn hero__btn--google" :file="GoogleLogo" :text="'Continue with Google'">
        </ButtonCTA>

        <div class="hero__text mt-large">Already a member? <a class="hero__link" href="#">Log in</a></div>
        <div class="hero__text mt-large">Are you a business? <a class="hero__link" href="#">Get started here</a></div>

        <div class="hero__footer-text mt-large">
            By continuing, you agree to Pinterest's <a class="hero__link" href="#">Terms of Service</a> and acknowledge that
            you've read our <a href="#" class="hero__link">Privacy Policy</a>. <a href="#" class="hero__link">Notice at
                collection</a>
        </div>

    </section>
</template>

<style scoped>
/* MARGINS */
.mt-tiny {
    margin-top: 0.4rem;
}

.mt-medium {
    margin-top: 1rem;
}

.mt-large {
    margin-top: 2rem;
}



.hero {
    padding: 0 10%;
    background: #0000009d;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &__logo {
        width: 3rem;
        height: 3rem;
        margin: 0 auto;

        & img {
            width: 100%;
            height: auto;
        }
    }

    &__heading-1 {
        font-size: 2rem;
        text-align: center;
        color: #fff;
        font-weight: 600;
        line-height: 1.25;
    }

    &__btn {
        width: 80%;
        max-width: 25rem;

        &--pinterest {
            background: var(--c-company-pinterest);
            color: #fff;
            font-weight: 600;

            &:active {
                background: var(--c-company-pinterest-hover);
            }
        }

        &--facebook {
            background: var(--c-company-facebook);
            color: #fff;
            font-weight: 600;
            font-family: Helvetica, Arial, sans-serif;


            &:active {
                background: var(--c-company-facebook-hover);
            }
        }

        &--google {
            background: #fff;
            /* font-weight: 600; */
            font-family: "Google Sans", arial, sans-serif;



            &:active {
                background: #f8faff;
            }
        }
    }

    &__text {
        color: #fff;
        text-align: center;
    }

    &__link {
        font-weight: 600;
        color: #fff;
    }

    &__footer-text {
        font-size: .75rem;
        color: #fff;
        text-align: center;
    }
}
</style>