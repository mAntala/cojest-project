<template>
  <main class="app">
    <app-header></app-header>

    <keep-alive>
      <router-view :key="$route.fullPath"></router-view>
    </keep-alive>

    <app-aside v-if="!isLoginOrRegister"></app-aside>

    <app-navigation></app-navigation>

    <app-footer v-if="!isLoginOrRegister"></app-footer>
  </main>
</template>

<script>
import AppNavigation from '@/components/AppNavigation';
import AppHeader from '@/components/AppHeader';
import AppAside from '@/components/AppAside';
import AppFooter from '@/components/AppFooter';

export default {
  components: {
    AppNavigation,
    AppHeader,
    AppAside,
    AppFooter
  },
  computed: {
    isLoginOrRegister() {
      return this.$route.name === 'Login' || this.$route.name === 'Register';
    }
  }
}
</script>

<style lang="scss">
html,
body {
  box-sizing: border-box;
  margin: 0;
  left: 0;
}

body {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: $dark;
  padding-bottom: 3.5rem;
}

.content {
  padding: 1rem 0.5rem;

  &--title {
    font-weight: 500;
    font-size: 1.25rem;
    margin: 0 0 1rem;
  }
}

p {
  color: rgba($dark, 0.8);
  line-height: 1.4;
  font-size: 1rem;
  margin: 0 0 1rem 0;
}

strong {
  color: $dark;
  font-weight: 500;
}

a {
  color: $main;
  text-decoration: none;
  transition: all .2s ease-in-out;

  &:hover {
    text-decoration: underline;
  }
}
</style>