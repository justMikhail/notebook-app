<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
      <tr>
        <th>Stat</th>
        <th>Value</th>
      </tr>
      </thead>

      <tbody>
      <tr>
        <td>Number of Notes</td>
        <td>{{notesStore.totalNotesCount}}</td>
      </tr>
      <tr>
        <td>Number of Character (of all notes)</td>
        <td>{{notesStore.totalCharactersCount}}</td>
      </tr>
      </tbody>
    </table>

    <input
      class="input"
      v-model="likeNotebook"
      type="text"
      placeholder="Do you like notebook?"
      v-autofocus
    >
  </div>
</template>


<script setup>
import {ref} from 'vue';
import {useNotesStore} from '@/stores/storeNotes';
import {vAutofocus} from '@/directives/vAutofocus';
import {useWatchCharacters} from '@/hooks/useWathCharacters';

const notesStore = useNotesStore();
const likeNotebook = ref('');
useWatchCharacters(likeNotebook, 30);
</script>
