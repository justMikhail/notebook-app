<template>
  <div>
    <AppEditor
      v-model="noteText"
      bgColor="link"
      placeholderText="Edit note"
      labelText="Edit note"
      ref="editorTextarea"
    >
      <template #buttons>
        <button
          @click="$router.back()"
          class="button is-link is-light mr-2"
        >
          Cancel
        </button>

        <button
          class="button is-link has-background-link"
          :disabled="!noteText"
          @click="handleSaveClicked"
        >
          Save Note
        </button>
      </template>
    </AppEditor>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import {useRoute, useRouter} from 'vue-router'
import AppEditor from '@/components/Notes/AppEditor.vue';
import {useNotesStore} from '@/stores/storeNotes';

const route = useRoute();
const router = useRouter();
const noteText = ref('');
const notesStore = useNotesStore();
noteText.value = notesStore.getNoteText(route.params.id);

const handleSaveClicked = () => {
  notesStore.updateNote(route.params.id, noteText.value);
  router.push('/');
}
</script>
