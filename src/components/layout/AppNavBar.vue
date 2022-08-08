<template>
  <nav
    class="navbar is-success"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container is-max-desktop px-2">
      <div class="navbar-brand">
        <RouterLink to="/">
          <h1 class="navbar-item is-family-monospace">
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
          @click="isMobileNavOpened = !isMobileNavOpened"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        class="navbar-menu"
        :class="{ 'is-active' : isMobileNavOpened }"
      >
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

const isMobileNavOpened = ref(false)
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
