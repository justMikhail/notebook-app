<template>
  <div class='modals'>
    <h1>
      Modals
    </h1>
    <button @click='isShowedModal = true'>
      Show modal
    </button>

    <teleport to='.modals-container'>
      <div class='modal' v-if='isShowedModal'>
        <h2>This is a modal</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, autem iusto. Accusamus asperiores atque doloribus incidunt ipsam odit quam quod!
        </p>
        <button @click='isShowedModal = false'>
          Hide modal
        </button>
      </div>
    </teleport>
  </div>
</template>

<script setup>
import {ref} from 'vue';

const isShowedModal = ref(false);

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
