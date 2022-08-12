<template>
  <div class="notes">
    <AppEditor
      v-model="newNoteText"
      ref="editorTextarea"
      placeholderText="Type a new note..."
    >
      <template #buttons>
        <button
          class="button is-link has-background-success"
          :disabled="!newNoteText"
          @click="addNote"
        >
          Add New Note
        </button>
      </template>
    </AppEditor>

    <progress
      class="progress is-large is-success"
      max="100"
      v-if="notesStore.isLoading"
    />

    <template v-else>
      <AppNote
        v-for="note in notesStore.notesList"
        :key="note.id"
        :noteData="note"
        @handleDeleteClick="deleteNote"
      />

      <div
        class="is-size-4 has-text-centered has-text-grey-light is-family-monospace"
        v-if="!notesStore.notesList.length"
      >
        No notes here yet...
      </div>
    </template>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import AppNote from '@/components/Notes/AppNote.vue';
import AppEditor from '@/components/Notes/AppEditor.vue';
import {useNotesStore} from '@/stores/storeNotes';
import {useWatchCharacters} from '@/hooks/useWathCharacters';

const newNoteText = ref('');
const notesStore = useNotesStore();
const editorTextarea = ref(null);

const addNote = () => {
  notesStore.addNewNote(newNoteText.value)
  newNoteText.value = '';
  editorTextarea.value.focusTextarea()
}

const deleteNote = (id) => {
  notesStore.deleteNote(id)
}

useWatchCharacters(newNoteText)

</script>
