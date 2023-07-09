<script setup>
import PinterestLogo from "../../assets/logos/badgeRGB.png"
import FacebookLogo from "../../assets/logos/f_logo_RGB-White_58.png"
import GoogleLogo from "../../assets/logos/google.logo.png"
import InfoCircle from "../../assets/icons/info-circle.svg"
import EyeFill from "../../assets/icons/eye-fill.svg"
import EyeSlashFill from "../../assets/icons/eye-slash-fill.svg"
import ExclamationTriangle from "../../assets/icons/exclamation-triangle-fill.svg"

import AppIcon from "../Base/AppIcon.vue"
</script>

<template>
    <section class="signup">
        <div class="signup__logo mt-1">
            <AppIcon :file="PinterestLogo" :fontSize="'2em'" :alt="'Pinterest Brand Logo'"></AppIcon>
        </div>
        <h2 class="signup__heading mt-quarter">Welcome to Pinterest</h2>
        <p class="signup__text">Find new ideas to try</p>

        <div class="signup__wrapper">

            <form @submit.prevent="submitForm" novalidate="true" class="signup__form mt-half">
                <div class="signup__input">
                    <label for="email">Email</label>
                    <input type="email" name="email" @blur="validateEmail" v-model="form.email" placeholder="Email">
                    <div v-if="form.errors.email && form.email" class="signup__error-text">
                        <div class="flex" v-icon="ExclamationTriangle">
                            {{ form.errors.email }}
                        </div>
                    </div>
                </div>
                <div class="signup__input ">
                    <label for="password">Password</label>
                    <input :type="passwordType" name="password" @blur="validatePassword" v-model="form.password"
                        placeholder="Create a password">
                    <div v-if="passwordType === 'password'" @click="passwordType = 'text'" class="signup__show-password">
                        <AppIcon :file="EyeFill" :fontSize="'1em'"></AppIcon>
                    </div>
                    <div v-if="passwordType === 'text'" @click="passwordType = 'password'" class="signup__show-password"
                        v-icon="EyeSlashFill">
                    </div>
                    <div v-if="form.errors.password && form.password && !form.errors.email" class="signup__error-text">
                        <div class="flex" v-icon="ExclamationTriangle">
                            {{ form.errors.password }}
                        </div>
                    </div>

                </div>
                <div class="signup__input">
                    <label for="birthdate">Birthdate <AppIcon :file="InfoCircle" @mouseleave="showBirthdateInfo = false"
                            @mouseover="showBirthdateInfo = true" :fontSize="'1.2em'" :alt="'Info icon'">
                        </AppIcon></label>
                    <div v-if="showBirthdateInfo" class="signup__info-box">We collect this info to help provide a better
                        experience for the younger
                        people in
                        our community. We'll also use your birthdate to help personalize your recommendations and ads. It
                        will not be displayed publically</div>
                    <input type="date" v-model="form.birthdate" placeholder="dd/mm/yyyy">
                    <div v-if="form.errors.birthdate && !form.errors.email && !form.errors.password"
                        class="signup__error-text">
                        <div class="flex" v-icon="ExclamationTriangle">
                            {{ form.errors.birthdate }}
                        </div>
                    </div>
                </div>
                <button class="signup__btn signup__btn--pinterest mt-third">Continue</button>
            </form>
            <div class="signup__divider">OR</div>
            <button class="signup__btn signup__btn--facebook" v-icon="FacebookLogo">
                <div class="signup__btn__text">Continue with
                    Facebook</div>
            </button>
            <button class="signup__btn signup__btn--google mt-third" v-icon="GoogleLogo">
                <div class="signup__btn__text">Continue with Google</div>
            </button>
            <p class="signup__footer-text mt-half">By continuing, you agree to Pinterest's <a href="#">Terms of Service</a>
                and
                ackknowledge you've read our <a href="#">Privacy Policy.</a> <a href="#">Notice at
                    collection.</a><br><br>Already a member? <a href="#">Log in</a></p>
        </div>


        <a class="signup__business-link" href="#">Create a free business account</a>
    </section>
</template>


<script>
export default {
    data() {
        return {
            showBirthdateInfo: false,
            passwordType: 'text',
            form: {
                currentError: '',
                errors: {
                    email: '',
                    password: '',
                    birthdate: ''
                },
                email: '',
                password: '',
                birthdate: null
            }
        }
    },
    methods: {
        validateEmail() {
            const isEmailValid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.form.email)
            console.log(this.form.birthdate)
            if (!isEmailValid) {
                console.log('email invalid')
                this.form.errors.email = " Hmm...that doesn't look like an email address"
                return false
            } else {
                console.log('email valid')
                this.form.errors.email = ""
            }
        },
        validatePassword() {
            const isLengthGtr6 = this.form.password.length >= 6
            const hasNumber = /[0-9]/.test(this.form.password)
            const hasSpecial = /[!@#%^&*()]/.test(this.form.password)
            if (!isLengthGtr6) {
                this.form.errors.password = '  Password contain more than 6 characters'
                console.log('Error in length')
                return
            }
            if (!hasNumber) {
                this.form.errors.password = 'Password must contain a number'
                return
            }
            if (!hasSpecial) {
                console.log('Error in special')
                this.form.errors.password = 'Password must contain a special character'
                return
            }
            this.form.errors.password = ''
        },
        validateBirthdate() {
            if (!this.form.birthdate) {
                this.form.errors.birthdate = "You missed a spot. Don't forget to add your birthday."
                return
            }
            this.form.errors.birthdate = ''
        },
        submitForm() {
            this.validateEmail()
            this.validatePassword()
            this.validateBirthdate()
            if (
                !this.form.errors.email && this.form.email,
                !this.form.errors.password && this.form.password,
                !this.form.errors.birthdate && this.form.birthdate
            ) {
                console.log('Form Submitted')
            } else {
                console.log("can't submit form", this.form.birthdate)
            }
        }
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

    &__info-box {
        font-size: .75rem;
        position: absolute;
        width: 12em;
        background: var(--c-black);
        color: var(--c-white);
        border-radius: .5em;
        padding: .5em;
        left: 40%;
        top: 35%;
    }

    &__show-password {
        position: absolute;
        right: 0;
        top: 1.5rem;
        width: 3em;
        height: 3rem;
        border-radius: 50%;
        background: #6e6e6e00;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
            background: #c0c0c0;
        }
    }

    &__input {
        display: flex;
        flex-direction: column;
        position: relative;

        & label {
            /* DEV */
            font-size: .75rem;
            line-height: 2;

            margin-left: .5em;
            display: flex;
            /* align-items: center; */

            & span {
                margin-left: .2em;
            }
        }

        & input {
            height: 3rem;
            border-radius: 1em;
            border: 1px solid var(--color-border);
            padding: 1em 1em;

            &:focus {
                outline: none;
                border-color: var(--color-border-hover);
            }
        }
    }

    &__error-text {
        /* TODO */
        font-size: .75rem;
        margin-left: .5em;
        color: var(--color-danger);
        font-weight: 600;
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