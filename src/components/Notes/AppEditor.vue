<template>
  <div
    class="card p-4 mb-4"
    :class="`has-background-${props.bgColor}-dark`"
  >
    <label
      class="label has-text-white"
      v-if="labelText"
    >
      {{labelText}}
    </label>

    <div class="field">
      <div class="control">
          <textarea
            class="textarea"
            :value="modelValue"
            ref="textareaRef"
            :placeholder="placeholderText"
            v-autofocus
            maxlength="50"
            @input="$emit('update:modelValue', $event.target.value)"
          />
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons"/>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {ref} from 'vue';
  import {vAutofocus} from '@/directives/vAutofocus';

  const props = defineProps({
    modelValue: {
      type: String,
      required: true,
    },
    bgColor: {
      type: String,
      required: false,
      default: 'success',
    },
    placeholderText: {
      type: String,
      default: 'Type something...'
    },
    labelText: {
      type: String,
    }
  })

  const emit = defineEmits(['update:modelValue']);

  const textareaRef = ref(null)

  const focusTextarea = () => {
    textareaRef.value.focus();
    console.log('focusTextArea');
  }

  defineExpose({
    focusTextarea
  })
</script>
