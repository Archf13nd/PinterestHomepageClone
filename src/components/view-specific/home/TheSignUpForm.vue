<script setup>
import PinterestLogo from "@/assets/logos/badgeRGB.png"
import FacebookLogo from "@/assets/logos/f_logo_RGB-White_58.png"
import GoogleLogo from "@/assets/logos/google.logo.png"

import validateEmail from "@/assets/js/validateEmail.js"
import validatePassword from "@/assets/js/validatePassword.js"



import AppEmailInput from "../../form/AppEmailInput.vue"
import AppPasswordInput from "../../form/AppPasswordInput.vue"
import AppDateInput from "../../form/AppDateInput.vue"

import AppIcon from "@/components/Base/AppIcon.vue"
</script>

<template>
    <section class="signup">
        <div class="signup__logo mt-1">
            <AppIcon :file="PinterestLogo" :fontSize="'2em'" :alt="'Pinterest Brand Logo'"></AppIcon>
        </div>
        <h2 class="signup__heading mt-quarter">{{ $t('signup.title') }}</h2>
        <p class="signup__text">{{ $t('signup.subtitle') }}</p>

        <div class="signup__wrapper">

            <form @submit.prevent="submitForm" novalidate="true" class="signup__form mt-half">
                <AppEmailInput v-model:email="form.email" :validationInfo="form.emailError" @focusout="checkEmailIsValid" />
                <AppPasswordInput v-model:password="form.password"
                    :validationInfo="determineError() === 'password' ? form.passwordError : form.defaultErrorObject"
                    @focusout="checkPasswordIsValid" />
                <AppDateInput v-model:date="form.birthdate"
                    :validationInfo="determineError() === 'birthdate' ? form.birthdateError : form.defaultErrorObject"
                    @focusout="checkBirthdateIsValid" />
                <button class="signup__btn signup__btn--pinterest mt-third">{{ $t('signup.cta-continue') }}</button>
            </form>

            <div class="signup__divider">{{ $t('signup.or') }}</div>
            <button class="signup__btn signup__btn--facebook" v-icon="FacebookLogo">
                <div class="signup__btn__text">{{ $t('signup.cta-facebook') }}</div>
            </button>
            <button class="signup__btn signup__btn--google mt-third" v-icon="GoogleLogo">
                <div class="signup__btn__text">{{ $t('signup.cta-google') }}</div>
            </button>
            <i18n-t keypath="signup.legal-text" tag="p" class="signup__footer-text mt-half">
                <a href="#">{{ $t('signup.tos') }}</a>
                <a href="#">{{ $t('signup.privacy-policy') }}</a>
                <a href="#">{{ $t('signup.collection') }}</a>
            </i18n-t>

            <i18n-t keypath="signup.already-member" tag="p" class="signup__footer-text"><a href="#">{{
                $t('signup.already-member-link') }}</a></i18n-t>
        </div>


        <a class="signup__business-link" href="#">{{ $t('signup.business-account') }}</a>
    </section>
</template>


<script>
export default {
    data() {
        return {
            showBirthdateInfo: false,
            passwordType: 'text',
            form: {
                defaultErrorObject: {
                    isInvalid: false,
                    errorType: ''
                },
                isSubmitting: false,
                currentError: '',
                email: '',
                emailError: {
                    isInvalid: false,
                    errorType: ''
                },
                password: '',
                passwordError: {
                    isInvalid: false,
                    errorType: ''
                },
                birthdate: null,
                birthdateError: {
                    isInvalid: false,
                    errorType: ''
                },
            }
        }
    },
    methods: {
        determineError() {
            // Returns left most error
            return this.form.emailError.isInvalid ? 'email' : false || this.form.passwordError.isInvalid ? 'password' : false || this.form.birthdateError.isInvalid ? 'birthdate' : false
        },
        checkEmailIsValid() {
            if (this.form.email.length > 0 || this.form.isSubmitting) {
                this.form.emailError = this.validateEmail(this.form.email)
                console.log(this.form.emailError)
            } else {
                this.form.emailError = this.form.defaultErrorObject
            }
        },
        checkPasswordIsValid() {
            console.log(this.determineError())
            if (this.form.password.length > 0 || this.form.isSubmitting) {
                this.form.passwordError = this.validatePassword(this.form.password)
            } else {
                this.form.passwordError = this.form.defaultErrorObject
            }
        },
        checkBirthdateIsValid() {

            this.form.birthdateError = {
                isInvalid: !this.form.birthdate,
                errorType: 'empty'
            }

        },

        submitForm() {
            this.form.isSubmitting = true
            this.checkEmailIsValid()
            this.checkPasswordIsValid()
            this.checkBirthdateIsValid()
            this.form.isSubmitting = false
        },
        // Imported methods
        validateEmail,
        validatePassword
    }

}
</script>

<style scoped>
.signup {
    font-size: 1rem;
    color: black;
    max-width: 30.25rem;
    width: 100%;
    /* max-height: 42.75rem; */
    flex-shrink: 1;
    margin-bottom: 4rem;
    /* padding: 0 6.75em; */
    padding-top: 1px;
    background: #ffffff;
    border-radius: 2em;
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    /* overflow-y: scroll; */

    &__wrapper {
        max-width: 16rem;
        margin: 0 auto;
    }

    &__logo {
        width: 3rem;
        margin: 0 auto;
        text-align: center;
    }

    &__heading {
        /* DEV */
        font-size: 1.8em;
        font-weight: 600;

        text-align: center;
    }

    &__text {
        text-align: center;
    }




    &__btn {
        height: 2.5rem;
        width: 100%;
        border-radius: 9em;
        cursor: pointer;
        border: none;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        font-size: 1.5rem;

        &__text {
            width: 100%;
            font-size: 1rem;
            font-family: inherit;
        }


        &--pinterest {
            background: var(--c-company-pinterest);
            color: var(--c-white);
            font-weight: 600;
            font-size: 1rem;
        }

        &--facebook {
            background: var(--c-company-facebook);
            color: #fff;
            font-weight: 700;
            font-family: Helvetica, Arial, sans-serif;

        }

        &--google {
            font-family: "Google Sans", arial, sans-serif;
            background: #fff;
            border: 1px solid #e4e4e4;

            & p {
                width: 100%;
            }
        }
    }

    &__divider {
        line-height: 2.5;
        font-weight: 700;
        text-align: center;
    }

    &__footer-text {
        /* DEV */
        font-size: .75em;
        text-align: center;
        color: var(--c-text-light-fade);
        margin-bottom: 2em;


        & a {
            color: var(--c-black);
            font-weight: 700;
        }

    }

    &__business-link {
        padding: 1em;
        width: 100%;
        text-align: center;
        color: var(--c-black);
        font-weight: 600;
        text-decoration: none;
        display: block;
        background: #bbbbbb;
    }
}

/* margins */

.mt-third {
    margin-top: .625em;
}

.mt-half {
    margin-top: .938em;
}

.mt-1 {
    margin-top: 1.875em;
}

@media (max-width: 1200px) {
    .mt-third {
        margin-top: .5em;
    }

    .mt-half {
        margin-top: .5em;
    }

    .mt-1 {
        margin-top: .9em;
    }
}
</style>