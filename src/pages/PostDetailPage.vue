<template>
  <div class='post-detail'>
    <h1>This is a post page</h1>
    <p>
      Post ID {{ $route.params.id }} here!
    </p>
    <div>
      <button @click='showPostId'>
        Show Post ID
      </button>
    </div>
    <div>
      <button @click='goHomeIn3Seconds'>
        Go Home In 3 Seconds
      </button>
    </div>
    <div>
      <button @click='goToFirstPost'>
        Go to first post
      </button>
    </div>
    <p>
      <RouterLink to='/posts'>&lt; Back</RouterLink>
    </p>
  </div>
</template>

<script setup>
  import {useRoute, useRouter} from 'vue-router'
  const route = useRoute()
  const router = useRouter()

  const showPostId = () => {
    alert(`Current Post ID: ${ route.params.id }`)
  }

  const goHomeIn3Seconds = () => {
    setTimeout(() => {
        router.push('/')
    }, 3000)
  }

  const goToFirstPost = () => {
    router.push({
      name: 'post',
      params: {
        id: 'id1'
      }
    })
  }

</script>
