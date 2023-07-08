<script setup>
import AppHero from "../components/Single-Instance/TheHero.vue"
import AppHeroMobile from "../components/Single-Instance/TheHeroMobile.vue"
import signupForm from "../components/Single-Instance/TheSignUpForm.vue"
import CollageDense from "../components/Single-Instance/TheCollageDense.vue"
import TheCollageSparse from "../components/Single-Instance/TheCollageSparse.vue"
import TheBackgroundWithMobile from "../components/Single-Instance/TheBackgroundWithMobile.vue"
import TheCTAMobile from "../components/Single-Instance/TheCTAMobile.vue"
import TheFooter from "../components/Single-Instance/TheFooter.vue"
import TheGalleryDesktop from "../components/Single-Instance/TheGalleryDesktop.vue"

import SplitScreen from "../components/Base/AppSplitScreen.vue"
import SectionText from "../components/Base/AppSectionText.vue"
import AppBtnRound from "../components/Base/AppButtonRound.vue"


</script>

<template>
  <!-- Used in scroll functions. Height has no max but going too small will break scroll functions. -->
  <div class="scroller" :style="{ 'height': pageHeight * 2 + 'px' }">
  </div>
  <main class="page">
    <div class="page__window" :style="{ 'top': getPosFromTop + 'px' }">
      <section class=" section section-1" id="hero" :style="{ 'height': pageHeight + 'px' }">
        <AppHeroMobile v-if="pageWidth < 900"></AppHeroMobile>
        <AppHero v-else @bannerClicked="changeCurrentSection(1)"></AppHero>
      </section>

      <section class="section section-2" id="ideas" :style="{ 'height': pageHeight + 'px' }">
        <SplitScreen class="section-2__splitscreen">
          <template v-slot:left>
            <CollageDense class="section-2__collage"></CollageDense>
          </template>
          <template v-slot:right>
            <SectionText class="section-2__text" :color="'#c31952'" :background-color="'#fffd92'">
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

      <section class="section section-3" id="save-ideas" :style="{ 'height': pageHeight + 'px' }">
        <SplitScreen class="section-3__splitscreen">
          <template v-slot:left>
            <SectionText class="section-3__text" :color="'#006b6c'" :background-color="'#dafff6'">
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
            <TheCollageSparse class="section-3__collage"></TheCollageSparse>
          </template>
        </SplitScreen>
      </section>

      <section class="section section-4" id="shop" :style="{ 'height': pageHeight + 'px' }">
        <SplitScreen class="section-4__splitscreen" :scale="maxWidth('bp-tablet-portrait') ? .7 : 1"
          :ratio="maxWidth('bp-tablet-portrait') ? .6 : .5">
          <template v-slot:left>
            <TheBackgroundWithMobile></TheBackgroundWithMobile>
          </template>
          <template v-slot:right>
            <SectionText class="section-3__text" :color="'#c32f00'" :background-color="'#ffe2eb'">
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


      <section v-if="maxWidth('bp-tablet-portrait')" class="section section-5" id="signup">
        <TheCTAMobile></TheCTAMobile>
      </section>
      <section v-if="!maxWidth('bp-tablet-portrait')" class="section section-5 section-5--desktop" id="signup"
        :style="{ 'height': pageHeight + 'px' }">

        <AppBtnRound @click="changeCurrentSection(-1)" :background-color="'#9C0343'"></AppBtnRound>
        <TheGalleryDesktop></TheGalleryDesktop>
        <SplitScreen>
          <template v-slot:left>
            <h2 class="section-5__header">Sign up to get your ideas</h2>
          </template>
          <template v-slot:right>
            <signupForm class="section-5__signup-form"></signupForm>
          </template>
        </SplitScreen>
        <TheFooter></TheFooter>
      </section>


    </div>

  </main>
</template>

<script>
export default {
  props: ['scrollEvent', 'resizeEvent'],
  data() {
    return {
      isMobile: false,
      scrollY: 0,
      scrollerDivisionFactor: 3,
      pageHeight: null,
      pageWidth: null,
      readScroll: true,
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
    changeCurrentSection(num) {

      if (this.currentSection <= 1 && num < 0) {
        return
      }
      if (this.currentSection >= this.sections.total && num > 0) {
        return
      }
      this.currentSection += num
    },
    allowScrollRead() {
      setTimeout(() => {
        this.readScroll = true
        window.scrollTo(0, this.pageHeight / 2)

      }, 1000);
    }
  },
  watch: {
    scrollEvent: function () {

      if (!this.readScroll) {
        return
      }
      const sensitivity = 100
      if (window.scrollY < (this.pageHeight / 2) - sensitivity) {
        this.readScroll = false
        this.changeCurrentSection(-1)
        this.allowScrollRead()

      } else if (window.scrollY > (this.pageHeight / 2) + sensitivity) {
        this.readScroll = false
        this.changeCurrentSection(1)
        this.allowScrollRead()


      }




      this.$router.push('/#' + this.sections[this.currentSection - 1])
    }
  },
  computed: {
    getPosFromTop() {
      return this.pageHeight * (this.currentSection - 1) * -1
    }
  },
  created() {
    this.pageHeight = document.documentElement.clientHeight
    this.pageWidth = document.documentElement.clientWidth
  },
  mounted() {
    window.scrollTo(0, this.pageHeight / 2)
    this.pageY = window.scrollY
  }
}
</script>

<style>
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

.signup {
  /* background: #000; */
  flex-shrink: 0;
}

.section {
  position: relative;
  overflow: hidden;

}


.section-2 {
  background: var(--c-bg-yellow);
  font-size: 1rem;

  @media (max-width: $bp-tablet-portrait) {
    font-size: .7rem;
  }

  @media (max-width: $bp-mobile) {
    font-size: .6rem;
  }

  &__splitscreen {
    @media (max-width: $bp-tablet-portrait) {
      flex-direction: column;
    }
  }

  &__collage {
    margin: 0 auto;
    align-self: center;
  }

  &__text {
    /* padding-bottom: 6rem; */
    margin: 0 auto;
    align-self: center;
  }
}

.section-3 {
  background: var(--c-bg-cyan);

  @media (max-width: $bp-tablet-portrait) {
    font-size: .5rem;
  }

  &__splitscreen {
    @media (max-width: $bp-tablet-portrait) {
      flex-direction: column-reverse;
    }
  }

  &__collage {
    margin: 0 auto;
    align-self: center;
  }

  &__text {
    /* padding-bottom: 6rem; */
    margin: 0 auto;
    align-self: center;
  }
}

.section-4 {
  background: var(--c-bg-pink);

  @media (max-width: $bp-tablet-portrait) {
    font-size: .5rem;
  }

  &__splitscreen {
    @media (max-width: $bp-tablet-portrait) {
      flex-direction: column;
    }
  }
}

.section-5 {

  @media (max-width: $bp-tablet-portrait) {
    font-size: .5rem;
  }

  &--desktop {
    background: #000000d0;
  }

  &__header {
    color: var(--c-white);
    font-size: 4.375rem;
    font-weight: 600;
    max-width: 10ch;
    line-height: 1.4;
    align-self: center;
    margin: 0 auto;
  }

  &__signup-form {
    align-self: center;
    margin: 0 auto;
  }

  & .btn-round-caret {
    position: absolute;
    left: 49%;
    top: 5rem;
    transform: rotateZ(180deg);
  }
}

.footer {
  position: absolute;
  width: 100%;
  bottom: 0;
  background: var(--c-white);
  color: var(--c-black);

}
</style>