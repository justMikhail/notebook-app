<template>
  <nav
    class="navbar is-success"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container is-max-desktop px-2">
      <div class="navbar-brand">
        <RouterLink to="/">
          <h1 class="navbar-item title is-family-monospace">
            NoteBook
          </h1>
        </RouterLink>

        <a
          class="navbar-burger"
          :class="{ 'is-active' : isMobileNavOpened }"
          role="button"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          ref="navBarBurgerRef"
          @click="isMobileNavOpened = !isMobileNavOpened"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        class="navbar-menu"
        :class="{ 'is-active' : isMobileNavOpened }"
        id="navbarBasicExample"
        ref="navBarMenuRef"
      >
        <div class="navbar-start">
          <button
            class="button is-small is-info mt-3 ml-3"
            v-if="authStore.user.id"
            @click="handleLogout"
          >
            Logout {{ authStore.user.email }}
          </button>
        </div>

        <div class="navbar-end">
          <RouterLink
            class="navbar-item"
            active-class="is-active"
            to="/"
            @click="isMobileNavOpened = false"
          >
            Notes
          </RouterLink>

          <RouterLink
            class="navbar-item"
            active-class="is-active"
            to="/stats"
            @click="isMobileNavOpened = false"
          >
            Stats
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import {ref} from 'vue';
import { onClickOutside } from '@vueuse/core';
import {useAuthStore} from '@/stores/storeAuth';

const authStore = useAuthStore();
const isMobileNavOpened = ref(false);
const navBarMenuRef = ref(null);
const navBarBurgerRef = ref(null);

onClickOutside(navBarMenuRef, () => {
  isMobileNavOpened.value = false;
}, {
  ignore: [navBarBurgerRef]
});

const handleLogout = () => {
  authStore.logoutUser();
  isMobileNavOpened.value = false;
}
</script>

<style>
@media (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>
