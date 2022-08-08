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

    <AppNote
      v-for="note in notesStore.notesList"
      :key="note.id"
      :noteData="note"
      @handleDeleteClick="deleteNote"
    />
  </div>
</template>

<script setup>
import {ref} from 'vue';
import AppNote from '@/components/Notes/AppNote.vue';
import AppEditor from '@/components/Notes/AppEditor.vue';
import {useNotesStore} from '@/stores/storeNotes';

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
</script>
