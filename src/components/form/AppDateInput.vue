<script setup>
import InfoCircle from "@/assets/icons/info-circle.svg"
import ExclamationTriangle from "@/assets/icons/exclamation-triangle-fill.svg"

defineProps({
    date: null,
    validationInfo: Object
})
</script>

<template>
    <div class="form__input-field">
        <label class="form__label flex align-c" for="birthdate">
            <div>{{ $t('signup.birthdate') }}</div>
            <div class="info-circle" @click="showInfoBox = !showInfoBox" @mouseenter="showInfoBox = true"
                @mouseleave="showInfoBox = false" v-icon="InfoCircle">
                <div v-if="showInfoBox" class="form__info-box">{{ $t('signup.birthdate-info') }}</div>
            </div>
        </label>
        <div class="form__input">
            <input class="form__input" type="date" @input="update($event)" :value="date" placeholder="dd/mm/yyyy">
        </div>
        <div v-if="validationInfo.isInvalid" class="form__error-text" v-icon="ExclamationTriangle">
            <span>{{ $t('signup.birthdate-error') }}</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showInfoBox: false,
        }
    },
    methods: {
        update($event) {
            this.$emit('update:date', $event.target.value)
        },
    }
}
</script>

<style scoped>
.info-circle {
    font-size: 1rem;
    margin-left: .2rem
}
</style>