<template>
  <div
    class="card mb-3"
  >
    <div class="card-content">
      <div class="content">
        {{noteData.text}}
        <div class="has-text-right has-text-grey-light mt-2">
          <small>{{noteTextLength}}</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink
        class="card-footer-item"
        :to="`/editNote/${noteData.id}`"
      >
        Edit
      </RouterLink>
      <a
        class="card-footer-item"
        href="#"
        @click.prevent="modals.deleteNote = true"
      >
        Delete
      </a>
    </footer>

    <AppDeleteNoteModal
      v-if="modals.deleteNote"
      v-model="modals.deleteNote"
      :noteId="noteData.id"
    />
  </div>
</template>

<script setup>
import {computed, reactive} from 'vue';
import AppDeleteNoteModal from '@/components/Notes/AppDeleteNoteModal.vue'

const props = defineProps({
  noteData: {
    type: Object,
    required: true,
  }
})

const noteTextLength = computed(() => {
  const length = props.noteData.text.length
  const description = length > 1
    ? 'characters'
    : 'character'

  return `${props.noteData.text.length} ${description}`
})

const emit = defineEmits(['handleDeleteClick'])

const handleDeleteClick = () => {
  emit('handleDeleteClick', props.noteData.id)
}

const modals = reactive({
  deleteNote: false,
})
</script>
