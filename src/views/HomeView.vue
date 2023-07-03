<script setup>
import AppHero from "../components/Single-Instance/TheHero.vue"
import AppHeroMobile from "../components/Single-Instance/TheHeroMobile.vue"
import signupForm from "../components/Single-Instance/TheSignUpForm.vue"
import SplitScreen from "../components/Base/AppSplitScreen.vue"
import CollageDense from "../components/Single-Instance/TheCollageDense.vue"
import SectionText from "../components/Base/AppSectionText.vue"


</script>

<template>
  <div class="scroller" :style="{ 'height': pageHeight * (sections.total + 1) + 'px' }">
  </div>
  <main class="page">
    <div class="page__window" :style="{ 'top': getPosFromTop + 'px' }">
      <section class=" section section--1" id="hero" :style="{ 'height': pageHeight + 'px' }">
        <AppHeroMobile v-if="isMobile"></AppHeroMobile>
        <AppHero v-else></AppHero>
      </section>
      <section class="section section--2" id="ideas" :style="{ 'height': pageHeight + 'px' }">
        <SplitScreen>
          <template v-slot:left>
            <CollageDense></CollageDense>
          </template>
          <template v-slot:right>
            <SectionText :color="'#c31952'" :background-color="'#fffd92'">
              <template v-slot:heading>
                Search for an idea
              </template>
              <template v-slot:paragraph>
                What do you want to try next? Think of something you’re into—like “easy chicken dinner”—and see what you
                find.
              </template>
              <template v-slot:btn>
                Explore
              </template>
            </SectionText>
          </template>
        </SplitScreen>
      </section>

      <section class="section section--3" :style="{ 'height': pageHeight + 'px' }">
        <SplitScreen>
          <template v-slot:left>
            <SectionText :color="'#006b6c'" :background-color="'#dafff6'">
              <template v-slot:heading>
                Save ideas you like
              </template>
              <template v-slot:paragraph>
                Collect your favorites so you can get back to them later.
              </template>
              <template v-slot:btn>
                Explore
              </template>
            </SectionText>
          </template>
          <template v-slot:right>
            <CollageDense></CollageDense>
          </template>
        </SplitScreen>
      </section>

      <section class="section section--4" :style="{ 'height': pageHeight + 'px' }">
        <SplitScreen>
          <template v-slot:left>
            <CollageDense></CollageDense>
          </template>
          <template v-slot:right>
            <SectionText :color="'#c32f00'" :background-color="'#ffe2eb'">
              <template v-slot:heading>
                See it, make it, try it, do it
              </template>
              <template v-slot:paragraph>
                The best part of Pinterest is discovering new things and ideas from people around the world.
              </template>
              <template v-slot:btn>
                Explore
              </template>
            </SectionText>
          </template>
        </SplitScreen>
      </section>

      <section class="section section--5" :style="{ 'height': pageHeight + 'px' }">
        <signupForm></signupForm>
      </section>


    </div>

  </main>
</template>

<script>
export default {
  props: ['scrollEvent'],
  data() {
    return {
      isMobile: false,
      scrollY: 0,
      pageHeight: null,
      sections: {
        total: 5,
        0: 'hero',
        1: 'ideas',
        2: 'save-ideas',
        3: 'shop',
        4: 'sign-up'
      },
      currentSection: 1,
    }
  },
  methods: {
    handleScroll() {
      console.log('scroll')
    }
  },
  watch: {
    scrollEvent: function () {
      console.log(window.scrollY, this.pageHeight)
      if (window.scrollY > 0 && window.scrollY < this.pageHeight) {
        this.scrollY = 0

      } else if (window.scrollY > this.pageHeight * 1 && window.scrollY < this.pageHeight * 2) {
        this.scrollY = this.pageHeight * 1
        this.currentSection = 2

      } else if (window.scrollY > this.pageHeight * 2 && window.scrollY < this.pageHeight * 3) {
        this.scrollY = this.pageHeight * 2
        this.currentSection = 3

      } else if (window.scrollY > this.pageHeight * 3 && window.scrollY < this.pageHeight * 4) {
        this.scrollY = this.pageHeight * 3
        this.currentSection = 4

      } else if (window.scrollY > this.pageHeight * 4 && window.scrollY < this.pageHeight * 5) {
        this.scrollY = this.pageHeight * 4
        this.currentSection = 5
      }
      this.$router.push('/#' + this.sections[this.currentSection - 1])
      console.log(this.scrollY)
    }
  },
  computed: {
    getPosFromTop() {
      return this.scrollY * -1
    }
  },
  created() {
    this.pageHeight = document.documentElement.clientHeight

  }
}
</script>

<style scoped>
.page {
  position: fixed;
  top: 0;
  width: 100vw;

  &__window {
    position: relative;
    left: 0;
    transition: all .5s ease-in;
  }
}

.section {
  position: relative;

  &--2 {
    background: var(--c-bg-yellow);
  }

  &--3 {
    background: var(--c-bg-cyan);
  }

  &--4 {
    background: var(--c-bg-pink);
  }

  &--5 {
    background: #000;
  }
}
</style>