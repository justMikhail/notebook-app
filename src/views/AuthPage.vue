<template>
  <div class="auth">
    <div class="tabs is-centered">
      <ul>
        <li
          :class="{'is-active' : !isRegisterPage}"
        >
          <a @click.prevent="isRegisterPage = false">Login</a>
        </li>
        <li
          :class="{'is-active' : isRegisterPage}"
        >
          <a @click.prevent="isRegisterPage = true">Register</a>
        </li>
      </ul>
    </div>
    <form
      class="auth-form"
      @submit.prevent="handleSubmit"
    >
      <div class="card">
        <div class="card-content">
          <h1 class="title has-text-centered">
            {{formTitle}}
          </h1>

          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input
                class="input"
                type="email"
                placeholder="example@mail.com"
                autocomplete="nope"
                v-model="credentials.email"
              >
            </div>
          </div>

          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input
                class="input"
                type="password"
                placeholder="..."
                autocomplete="new-password"
                v-model="credentials.password"
              >
            </div>
          </div>

          <div class="field is-grouped is-grouped-right">
            <p class="control">
              <button
                class="button is-primary"
                type="submit"
              >
                {{formTitle}}
              </button>
            </p>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import {computed, reactive, ref} from 'vue';
import {useAuthStore} from '@/stores/storeAuth';

const authStore = useAuthStore();
const isRegisterPage = ref(false);

const formTitle = computed(() => {
  return isRegisterPage.value
    ? 'Register'
    : 'Login';
})

const credentials = reactive({
  email: '',
  password: '',
})

const handleSubmit = (evt) => {
  evt.preventDefault()
  if (!credentials.email || !credentials.password) {
    alert('Please enter an email and password gosh darnit!')
  } else {
    if (isRegisterPage.value) {
      authStore.registerUser(credentials);
    } else {
      authStore.loginUser(credentials);
    }
  }
}
</script>


<style>
.auth-form {
  max-width: 400px;
  margin: 0 auto;
}
</style>
