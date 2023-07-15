<script setup>
import AppHero from "../components/view-specific/home/TheHero.vue"
import AppHeroMobile from "../components/view-specific/home/TheHeroMobile.vue"
import signupForm from "../components/view-specific/home/TheSignUpForm.vue"
import CollageDense from "../components/view-specific/home/TheCollageDense.vue"
import TheCollageSparse from "../components/view-specific/home/TheCollageSparse.vue"
import TheBackgroundWithMobile from "../components/view-specific/home/TheBackgroundWithMobile.vue"
import TheCTAMobile from "../components/view-specific/home/TheCTAMobile.vue"
import TheFooter from "../components/view-specific/home/TheFooter.vue"
import TheGalleryDesktop from "../components/view-specific/home/TheGalleryDesktop.vue"

import AppBtnRound from "../components/Base/AppButtonRound.vue"


</script>

<template>
  <!-- Used in scroll functions. Height has no max but going too small will break scroll functions. -->
  <div class="scroller" :style="{ 'height': pageHeight * 2 + 'px' }">
  </div>
  <main class="page">
    <div class="page__window" :style="{ 'top': getPosFromTop + 'px' }">
      <section class="section section-1" id="hero" :style="{ 'height': pageHeight + 'px' }">
        <AppHeroMobile v-if="pageWidth < 900"></AppHeroMobile>
        <AppHero v-else @bannerClicked="changeCurrentSection(1)"></AppHero>

      </section>

      <section class="section section-2 splitscreen" id="ideas" :style="{ 'height': pageHeight + 'px' }">
        <CollageDense class="section-2__collage"></CollageDense>
        <div class="section-text section-text--collage">
          <h2 class="section-text__heading">
            {{ $t("ideas.heading") }}
          </h2>
          <p class="section-text__paragraph">
            {{ $t("ideas.paragraph") }}
          </p>
          <a class="section-text__cta" href="#">
            {{ $t("ideas.button") }}
          </a>
        </div>
      </section>

      <section class="section section-3 splitscreen splitscreen__save-ideas" id="save-ideas"
        :style="{ 'height': pageHeight + 'px' }">
        <div class="section-text section-text--collage">
          <h2 class="section-text__heading">
            {{ $t("save-ideas.heading") }}
          </h2>
          <p class="section-text__paragraph">
            {{ $t("save-ideas.paragraph") }}
          </p>
          <a class="section-text__cta" href="#">
            {{ $t("save-ideas.button") }}
          </a>
        </div>
        <TheCollageSparse class="section-3__collage"></TheCollageSparse>

      </section>

      <section class="section section-4 splitscreen splitscreen__shop" id="shop" :style="{ 'height': pageHeight + 'px' }">
        <TheBackgroundWithMobile></TheBackgroundWithMobile>
        <div class="section-text section-text--collage">
          <h2 class="section-text__heading">
            {{ $t("shop.heading") }}
          </h2>
          <p class="section-text__paragraph">
            {{ $t("shop.paragraph") }}
          </p>
          <a class="section-text__cta" href="#">
            {{ $t("shop.button") }}
          </a>
        </div>
      </section>

      <section v-if="maxWidth('bp-tablet-portrait')" class="section section-5" id="signup">
        <TheCTAMobile></TheCTAMobile>
      </section>
      <section v-if="!maxWidth('bp-tablet-portrait')" class="section section-5 section-5--desktop splitscreen" id="signup"
        :style="{ 'height': pageHeight + 'px' }">
        <h2 class="section-5__header">{{ $t("signup.heading") }}</h2>
        <signupForm class="section-5__signup-form"></signupForm>
        <AppBtnRound @click="changeCurrentSection(-1)" :background-color="'#9C0343'" :text="'Back to top'"></AppBtnRound>
        <TheGalleryDesktop></TheGalleryDesktop>
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

.splitscreen {
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;

  @media (max-width: $bp-tablet-portrait) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }

  &__save-ideas {
    @media (max-width: $bp-tablet-portrait) {
      & div:first-child {
        grid-row: 2 / 3;
      }
    }
  }

  &__shop {
    @media (max-width: $bp-tablet-portrait) {
      grid-template-rows: 6fr 4fr;
    }
  }
}


.section-text {
  max-width: 40rem;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 3rem;

  &__heading {
    font-size: 3.75rem;
    font-weight: 700;
    line-height: 1;
    color: inherit;

    @media (max-width: $bp-tablet-portrait) {
      font-size: 1.75rem;
    }
  }

  &__paragraph {
    font-size: 1.5rem;
    text-align: center;
    max-width: 29ch;
    line-height: 1.3;
    margin-top: 1rem;
  }


  &__cta {
    padding: .8rem;
    background: var(--lv-text-col);
    color: var(--lv-background-col);
    width: 6rem;
    border-radius: 2rem;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1.5rem;
    font-size: 1rem;
  }

  /* Mobile */
  @media (max-width: 900px) {

    &__paragraph {
      font-size: 1rem;
    }
  }
}

.section-2 {
  --lv-background-col: var(--c-bg-yellow);
  --lv-text-col: var(--c-text-red-1);

  color: var(--lv-text-col);
  background: var(--lv-background-col);
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

  & .section__text {
    &__heading {
      color: var(--c-text-red-1);

    }
  }
}

.section-3 {
  --lv-background-col: var(--c-bg-cyan);
  --lv-text-col: var(--c-text-green);

  color: var(--lv-text-col);
  background: var(--lv-background-col);

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
  --lv-background-col: var(--c-bg-pink);
  --lv-text-col: var(--c-text-red-1);

  color: var(--lv-text-col);
  background: var(--lv-background-col);

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