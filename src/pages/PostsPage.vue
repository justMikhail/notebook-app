<template>
  <div class='posts'>
    <h1>Posts</h1>

    <ul>
      <li
        v-for='post in postsList'
        :key='post.id'
      >
        <RouterLink :to="`/post/${post.id}`">
          {{post.title}}
        </RouterLink>
      </li>
    </ul>

    <textarea v-autofocus />

    <div>
      <button
        class='counter-button'
        :class="{'yellow' : oddOrEven === 'odd'}"
        @click='increaseCounter(1)'
      >
          {{counterData.count}}
      </button>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import {useCounter} from '@/hooks/useCounter';
import {vAutofocus} from '@/directives/vAutofocuse';

const { counterData, increaseCounter, oddOrEven } = useCounter();

const postsList = ref([
  {
    id: '1',
    title: 'Post 1',
  },
  {
    id: '2',
    title: 'Post 2',
  },
  {
    id: '3',
    title: 'Post 3',
  }
])
</script>

<style>
.counter-button {
  width: 120px;
  height: 40px;
  background: aquamarine;
  cursor: pointer;
}

.yellow {
  background: yellow;
}
</style>
