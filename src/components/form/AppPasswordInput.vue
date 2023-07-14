<script setup>
import ExclamationTriangle from "@/assets/icons/exclamation-triangle-fill.svg"
import EyeFill from "@/assets/icons/eye-fill.svg"
import EyeSlashFill from "@/assets/icons/eye-slash-fill.svg"
defineProps({
    password: String,
    validationInfo: null
})
</script>
<template>
    <div class="form__input-field">
        <label class="form__label" for="password">{{ $t('signup.password') }}</label>
        <div class="form__input" :class="{ 'form__input--invalid': validationInfo.isInvalid }">
            <input :type="inputType" id="password" :value="password" @input="update($event)"
                :placeholder="$t('signup.password-placeholder')">
            <div @mousedown="changeInputType" class="form__input-icon">
                <div v-if="inputType === 'password'" v-icon="EyeFill"></div>
                <div v-else v-icon="EyeSlashFill"></div>
            </div>
        </div>

        <div v-if="validationInfo.isInvalid" class="form__error-text" v-icon="ExclamationTriangle">
            <span v-if="validationInfo.errorType === 'empty'">{{ $t('signup.password-error-empty') }}</span>
            <span v-if="validationInfo.errorType === 'length'">{{ $t('signup.password-error-length') }}</span>
            <span v-if="validationInfo.errorType === 'number'">{{ $t('signup.password-error-number') }}</span>
            <span v-if="validationInfo.errorType === 'special'">{{ $t('signup.password-error-special') }}</span>
        </div>

    </div>
</template>

<script>

export default {
    name: 'PasswordInput',
    data() {
        return {
            inputType: 'password',
            isPasswordInvalid: false,
        }
    },
    methods: {
        update($event) {
            this.$emit('update:password', $event.target.value)
        },
        changeInputType(e) {
            e.preventDefault()
            this.cancelBlur = true
            this.inputType === 'password' ? this.inputType = 'text' : this.inputType = 'password'
        }
    },
    computed: {
        determineIconFromType() {
            if (this.inputType === 'password') {
                return EyeSlashFill
            } else {
                return EyeFill
            }
        },
    }
}
</script>