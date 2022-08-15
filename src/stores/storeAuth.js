import {defineStore} from 'pinia';
import {auth} from '@/api/firebase';
import {createUserWithEmailAndPassword} from "firebase/auth";

export const useAuthStore = defineStore('authStore', {

  state: () => {
    return {}
  },

  actions: {
    registerUser(credentials) {
      createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log('user: ', user)
        })
        .catch((error) => {
          console.log('[register user] error-message: ', error.message)
        });
    },

    loginUser(credentials) {
      console.log('=== registerUser action ===', credentials)
    }
  },

  getters: {}
})
