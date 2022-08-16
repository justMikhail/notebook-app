import {defineStore} from 'pinia';
import {auth} from '@/api/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {useNotesStore} from '@/stores/storeNotes';

export const useAuthStore = defineStore('authStore', {

  state: () => {
    return {
      user: {},
    }
  },

  actions: {
    init() {
      const notesStore = useNotesStore();

      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user.id = user.uid;
          this.user.email = user.email;
          this.router.push('/');
          notesStore.init();
        } else {
          this.user = {};
          this.router.replace('/auth');
          notesStore.clearNotes();
        }
      });
    },

    registerUser(credentials) {
      createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          console.log('[register user] error-message: ', error.message)
        });
    },

    loginUser(credentials) {
      signInWithEmailAndPassword(auth, credentials.email, credentials.password)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          console.log('[login user] error-message: ', error.message)
        })
    },

    logoutUser() {
      signOut(auth)
        .then(() => {
        console.log('=== user logout ===')
      })
        .catch((error) => {
        console.log('[logout user] error-message: ', error.message)
      });
    }
  },

  getters: {}
})
