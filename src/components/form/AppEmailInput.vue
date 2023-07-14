<script setup>
import ExclamationTriangle from "@/assets/icons/exclamation-triangle-fill.svg"
defineProps({
    email: String,
    validationInfo: Object
})
</script>

<template>
    <div class="form__input-field">
        <label class="form__label" for="email">{{ $t('signup.email') }}</label>
        <div class="form__input" :class="{ 'form__input--invalid': validationInfo.isInvalid }">
            <input type="email" :placeholder="$t('signup.email-placeholder')" id="email" :value="email"
                @input="update($event)" />
        </div>
        <div v-if="validationInfo.isInvalid" v-icon="ExclamationTriangle" class="form__error-text">
            <span v-if="validationInfo.errorType === 'not email'">{{ $t('signup.email-error-invalid') }}</span>
            <span v-else-if="validationInfo.errorType === 'empty'">{{ $t('signup.email-error-empty') }}</span>
        </div>
    </div>
</template>

<script>


export default {
    name: 'EmailInput',

    methods: {
        update($event) {
            this.$emit('update:email', $event.target.value)
        },

    }
}
</script>