<script setup>

import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView :scrollEvent="scrollEvent">
  </RouterView>
</template>

<script>
export default {
  data() {
    return {
      global: {
        scrollEventLister: null
      },
      scrollEvent: null,
      resizeEvent: null
    }
  },
  methods: {
    handleScroll(e) {
      this.scrollEvent = e
    }
  },
  created() {
    document.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped>
body {
  height: 200vh;
}
</style>
