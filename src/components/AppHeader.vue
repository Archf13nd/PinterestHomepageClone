<script setup>
import PinterestLogo from "../assets/logos/badgeRGB.png"
</script>

<template>
  <header class="header">


    <a href="#" class="header__logo">
      <img class="header__logo-img" :src="PinterestLogo" alt="Pinterest Logo">
      <h1 class="header__logo-text">Pinterest</h1>

    </a>
    <nav class="header__nav">
      <ul class="header__nav-items">
        <li class="header__nav-item">
          <RouterLink class="header__nav-link" to="#">About</RouterLink>
        </li>
        <li class="header__nav-item">
          <RouterLink class="header__nav-link" to="#">Business</RouterLink>
        </li>
        <li class="header__nav-item">
          <RouterLink class="header__nav-link" to="#">Blog</RouterLink>
        </li>
        <li class="header__nav-item">
          <RouterLink class="header__btn header__nav-link  header__btn--brand-bg" to="#">Login</RouterLink>
        </li>
        <li class="header__nav-item">
          <RouterLink class="header__btn header__nav-link" to="#">Sign up</RouterLink>
        </li>
      </ul>
    </nav>

  </header>
</template>

<style scoped>
.header {
  height: 4rem;
  width: 100%;
  position: absolute;
  display: flex;
  padding: 0 2rem;
  align-items: center;
  justify-content: space-between;

  font-weight: 600;
  font-size: 1.1rem;

  color: var(--c-black);

  & * {
    &:focus {
      outline: 1px solid black;

    }
  }


  &__logo {
    cursor: pointer;
    display: block;
    height: 2rem;
    width: 2rem;
    margin-right: 1rem;
    display: flex;
    text-decoration: none;
  }



  &__logo-text {
    color: var(--c-company-pinterest);
    margin-left: 1rem;
    font-size: 1.25rem;
    font-weight: 600;
  }

  &__logo-img {
    width: 100%;
    height: auto;
  }

  &__nav {}

  &__nav-items {
    display: flex;
  }

  &__nav-item {
    display: flex;
    align-items: center;
    margin-left: 1rem;


    &:not(:first-child) {
      margin-left: 1rem;
    }
  }

  &__nav-link {
    color: var(--c-black);

    &:visited,
    &:active {
      color: inherit;
    }
  }

  &__btn {
    padding: 0.5rem 1rem;
    border-radius: 5rem;
    background: var(--c-gray);
    transition: .2s;
    text-decoration: none;

    &:hover {
      background: var(--c-gray-hover);
    }


    &--brand-bg {
      background: var(--c-company-pinterest);
      color: #fff;


      &:hover {
        background: var(--c-company-pinterest-hover);
      }

      &:visited {
        color: #fff;
      }
    }
  }
}
</style>
