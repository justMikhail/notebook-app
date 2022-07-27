<template>
  <div class='home'>
    <h2 ref='appTitleRef'>{{ appTitle }}</h2>
    <h3>{{ counter.counterData.title }}</h3>

    <div>
      <button @click='counter.decreaseCounter(2)' class='btn'>--</button>
      <button @click='counter.decreaseCounter(1)' class='btn'>-</button>
      <span class='counter'>
        {{ counter.counterData.count }}
      </span>
      <button @click='counter.increaseCounter(1)' class='btn'>+</button>
      <button @click='counter.increaseCounter(2)' class='btn'>++</button>
    </div>

    <p>
      This counter is {{ counter.oddOrEven }}
    </p>

    <div class='edit'>
      <h4>Edit counter title:</h4>
      <input
        v-model='counter.counterData.title'
        type='text'
        v-autofocus
      />
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import {vAutofocus} from '@/directives/vAutofocuse';
import {useCounter} from '@/hooks/useCounter';

const appTitle = 'Great Counter App';
const appTitleRef = ref(null);

const counter = useCounter();

onMounted(() => {
  console.log(`appTitleRef wide: ${appTitleRef.value.offsetWidth} px`);
});
</script>

<style>
.home {
  text-align: center;
  padding: 20px;
}

.btn, .counter {
  font-size: 40px;
  margin: 10px;
}
</style>
