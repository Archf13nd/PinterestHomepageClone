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
    },
    handleResize() {
      console.log('resized')
    },
  },
  created() {
    document.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.handleResize)
  }
}
</script>

<style></style>
