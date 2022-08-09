<template>
  <AppNavBar/>
  <div class="container is-max-desktop px-2 py-4">
    <RouterView/>
  </div>
</template>

<script setup>
import AppNavBar from '@/components/layout/AppNavBar.vue';
import {useNotesStore} from './stores/storeNotes';
import {onMounted} from 'vue';

const notesStore = useNotesStore();

onMounted(() => {
  notesStore.getNotesList()
})

</script>

<style>
@import 'bulma/css/bulma.min.css';
</style>
