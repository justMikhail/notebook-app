<template>
  <div class='modals'>
    <h1>Modals</h1>

    <div>
      <label>
        Show dark modals?
        <input
          v-model="showGreenModals"
          type='checkbox'
        >
      </label>
    </div>

    <pre>
      {{showGreenModals}}
    </pre>

    <button @click='isShowedModal = true'>
      Show modal
    </button>

    <Component
      v-model='isShowedModal'
      :is='showGreenModals ? AppModalGreen : AppModal'
      title='Post title (via prop)'
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, autem iusto. Accusamus asperiores atque doloribus incidunt ipsam odit quam quod!
      </p>
    </Component>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import AppModal from '@/components/AppModal.vue';
import AppModalGreen from '@/components/AppModalGreen.vue';

const isShowedModal = ref(false);
const showGreenModals = ref(false);
</script>

