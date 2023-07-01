<script setup>
defineProps({
    currentBtn: Number,
    currentColor: String
})
</script>

<template>
    <ul class="btn-row">
        <li>
            <button class="btn-row__btn" :style="{ 'background-color': currentBtn === 0 ? currentColor : '#464646' }"
                @click="changeActiveBtn(0)"></button>
        </li>
        <li>
            <button class="btn-row__btn" :style="{ 'background-color': currentBtn === 1 ? currentColor : '#464646' }"
                @click="changeActiveBtn(1)"></button>
        </li>
        <li>
            <button class="btn-row__btn" :style="{ 'background-color': currentBtn === 2 ? currentColor : '#464646' }"
                @click="changeActiveBtn(2)"></button>
        </li>
        <li>
            <button class="btn-row__btn" :style="{ 'background-color': currentBtn === 3 ? currentColor : '#464646' }"
                @click="changeActiveBtn(3)"></button>
        </li>
    </ul>
</template>

<script>
export default {
    methods: {
        changeActiveBtn(slide) {
            this.$emit('btnChange', slide)
        }
    },
    computed: {
        getColor(n) {
            if (this.currentBtn === n) {
                return this.currentColor
            } else {
                return 'inherit'
            }
        }
    }

}
</script>

<style scoped>
.btn-row {
    display: flex;
    justify-content: space-between;
    width: 5rem;


    & li {}

    &__btn {
        height: .7rem;
        width: .7rem;
        background: #464646;
        border-radius: 50%;
        border: none;


    }
}
</style>