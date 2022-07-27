<template>
  <teleport to='.modals-container'>
    <div
      class='modal'
      v-if='modelValue'
    >
      <h2>
        {{ props.title }}
      </h2>
      <slot />
      <button @click="handleButtonClick">
        Hide modal
      </button>
    </div>
  </teleport>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: 'No title specified'
  }
});

const emit  = defineEmits(['update:modelValue'])
const handleButtonClick = () => {
  emit('update:modelValue', false);
}
</script>

<style>
.modal {
  background: gray;
  padding: 15px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>
