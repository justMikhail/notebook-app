<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-4">
      <div class="field">
        <div class="control">
          <textarea
            class="textarea"
            placeholder="Add a new memo"
            v-model="newNoteText"
            ref="newNoteRef"
          />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button
            class="button is-link has-background-success"
            :disabled="!newNoteText"
            @click="addNote"
          >
            Add New Memo
          </button>
        </div>
      </div>
    </div>

    <AppMemo
      v-for="memo in storeNotes.notesList"
      :key="memo.id"
      :memoData="memo"
      @handleDeleteClick="deleteMemoClick"
    />
  </div>
</template>


<script setup>
import {ref} from 'vue';
import AppMemo from '@/components/Notes/AppNote.vue';
import {useNotesStore} from '@/stores/storeNotes';

const newNoteText = ref('');
const newNoteRef = ref(null);

const storeNotes = useNotesStore();

const addNote = () => {
  storeNotes.addNewNote()
  newNoteText.value = '';
  newNoteRef.value.focus();
}

const deleteMemoClick = (id) => {
  notesList.value = notesList.value.filter(memo => {return memo.id !== id })
}
</script>
