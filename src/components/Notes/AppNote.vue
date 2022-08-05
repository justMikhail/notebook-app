<template>
  <div
    class="card mb-3"
  >
    <div class="card-content">
      <div class="content">
        {{memoData.text}}

        <div class="has-text-right has-text-grey-light mt-2">
          <small>{{memoLength}}</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <a
        class="card-footer-item"
        href="#"
        @click.prevent="handleEditClick"
      >Edit
      </a>
      <a
        class="card-footer-item"
        href="#"
        @click.prevent="handleDeleteClick"
      >
        Delete
      </a>
    </footer>
  </div>
</template>

<script setup>
import {computed} from 'vue';

const props = defineProps({
  memoData: {
    type: Object,
    required: true,
  }
})

const memoLength = computed(() => {
  const length = props.memoData.text.length
  const description = length > 1
    ? 'characters'
    : 'character'

  return `${props.memoData.text.length} ${description}`
})

const emit = defineEmits(['handleDeleteClick'])

const handleDeleteClick = () => {
  console.log('=== handleDeleteClick ===')
  emit('handleDeleteClick', props.memoData.id)
}

const handleEditClick = () => {
  console.log('=== handleEditClick ===')
}
</script>
