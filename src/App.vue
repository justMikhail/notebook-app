<template>
  <AppNavBar/>

  <div class="container is-max-desktop px-2 py-4">
    <RouterView/>
  </div>
</template>

<script>
import AppNavBar from '@/components/layout/AppNavBar.vue';

export default {
  components: {AppNavBar}
}

</script>

<style>
@import 'bulma/css/bulma.min.css';
</style>
