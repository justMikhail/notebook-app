<template>
  <div class="modal is-active p-2">
    <div class="modal-background"></div>
    <div class="modal-card" ref="modalCardRef">
      <header class="modal-card-head">
        <p class="modal-card-title">Delete Note?</p>
        <button
          class="delete"
          aria-label="close"
          @click="closeModal"
        />
      </header>
      <section class="modal-card-body">
        Are you sure you want to delete this note?
      </section>
      <footer class="modal-card-foot is-justify-content-flex-end">
        <button
          class="button"
          aria-label="close"
          @click="closeModal"
        >
          Cancel
        </button>
        <button
          class="button is-danger"
          aria-label="delete"
          @click="notesStore.deleteNote(noteId)"
        >
          Delete
        </button>
      </footer>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted, onUnmounted} from 'vue';
import {onClickOutside} from '@vueuse/core';
import {useNotesStore} from '@/stores/storeNotes';

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: false,
    default: false,
  },
  noteId: {
    type: String,
    required: true,
  }
})

const emits = defineEmits(['update:modelValue'])

const notesStore = useNotesStore();

const closeModal = () => {
  emits('update:modelValue', false)
}

const modalCardRef = ref(null);

onClickOutside(modalCardRef, closeModal);

const handleKeyBoard = (evt) => {
  console.log('=== handleKeyBoard ===')
  if (evt.key === 'Escape') closeModal()
}

onMounted(() => {
  document.addEventListener('keyup', handleKeyBoard)
})

onUnmounted(() => {
  document.removeEventListener('keyup', handleKeyBoard)
})
</script>
