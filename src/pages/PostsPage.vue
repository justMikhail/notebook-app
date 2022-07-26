<template>
  <div class='posts'>
    <h1>Posts</h1>

    <ul>
      <li>
        <RouterLink to='/PostDetail/id1'>
          Post #1
        </RouterLink>
      </li>
      <li>
        <RouterLink to='/PostDetail/id2'>
          Post #2
        </RouterLink>
      </li>
      <li>
        <RouterLink to='/PostDetail/id3'>
          Post #3
        </RouterLink>
      </li>
    </ul>

    <textarea v-autofocus />
  </div>
</template>

<script setup>
import {vAutofocus} from '@/directives/vAutofocuse';
</script>
