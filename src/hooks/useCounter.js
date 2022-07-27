import {computed, reactive, watch, nextTick} from 'vue';

export const useCounter = () => {
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

  const increaseCounter = async (amount) => {
    counterData.count += amount;
    await nextTick(() => {
      console.log('Do something when counter update');
    })
  };

  const decreaseCounter = (amount) => {
    counterData.count -= amount;
  };

  return  {
    counterData,
    oddOrEven,
    increaseCounter,
    decreaseCounter,
  }
}
