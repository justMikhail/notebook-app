<template>
  <AppNavBar/>
  <div class="container is-max-desktop px-2 py-4">
    <RouterView/>
  </div>
</template>

<script setup>
import AppNavBar from '@/components/layout/AppNavBar.vue';
import {useAuthStore} from './stores/storeAuth';
import {onMounted} from 'vue';

const authStore = useAuthStore();

onMounted(() => {
  authStore.init()
})

</script>

<style>
@import 'bulma/css/bulma.min.css';
</style>
