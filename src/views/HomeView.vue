<script setup>
import AppHero from "../components/AppHero.vue"
import AppHeroMobile from "../components/AppHeroMobile.vue"
import signupForm from "../components/AppSignUpForm.vue"
import SplitScreen from "../components/AppSplitScreen.vue"
import CollageDense from "../components/AppCollageDense.vue"
import SectionText from "../components/AppSectionText.vue"
</script>

<template>
  <main>
    <!-- <div class="screen-1">
      <AppHeroMobile v-if="isMobile"></AppHeroMobile>
      <AppHero v-else></AppHero>
    </div> -->
    <section class="section-2">
      <SplitScreen>
        <template v-slot:left>
          <CollageDense></CollageDense>
        </template>
        <template v-slot:right>
          <SectionText :color="'#c31952'">
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
    <!-- <div class="screen-5">
      <signupForm></signupForm>
    </div> -->
  </main>
</template>

<script>
export default {
  data() {
    return {
      isMobile: false
    }
  }
}
</script>

<style scoped>
.screen-1 {
  height: 100vh;
}

.section-2 {
  height: 100vh;
  background: var(--c-yellow);
}
</style>