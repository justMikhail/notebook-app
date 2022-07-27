<template>
  <div class='home'>
    <h2 ref='appTitleRef'>{{ appTitle }}</h2>
    <h3>{{ counterData.title }}</h3>

    <div>
      <button @click='decreaseCounter(2)' class='btn'>--</button>
      <button @click='decreaseCounter(1)' class='btn'>-</button>
      <span class='counter'>
        {{ counterData.count }}
      </span>
      <button @click='increaseCounter(1)' class='btn'>+</button>
      <button @click='increaseCounter(2)' class='btn'>++</button>
    </div>

    <p>
      This counter is {{ oddOrEven }}
    </p>

    <div class='edit'>
      <h4>Edit counter title:</h4>
      <input
        v-model='counterData.title'
        type='text'
        v-autofocus
      />
    </div>
  </div>
</template>

<script setup>
import {
  reactive,
  computed,
  watch,
  ref,
  onMounted,
  nextTick,
} from 'vue';
import {vAutofocus} from '@/directives/vAutofocuse';

const appTitle = 'Great Counter App';

const counterData = reactive({
  count: 0,
  title: 'My Counter'
});

watch(() => counterData.count, (newCount) => {
  console.log('newCount: ', newCount);
});

const oddOrEven = computed(() => {
  if (counterData.count % 2 === 0) return 'even';
  return 'odd';
});

const appTitleRef = ref(0);

const increaseCounter = async (amount) => {
  counterData.count += amount;
  await nextTick(() => {
    console.log('Do something when counter update');
  })
};

const decreaseCounter = (amount) => {
  counterData.count -= amount;
};

onMounted(() => {
  console.log(`appTitleRef wide: ${appTitleRef.value.offsetWidth } px`);
})

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
