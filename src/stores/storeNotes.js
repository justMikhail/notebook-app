import {defineStore} from 'pinia';
import {
  collection,
  onSnapshot,
  doc,
  deleteDoc,
  updateDoc,
  query,
  orderBy,
  addDoc,
} from "firebase/firestore";
import {db} from '@/api/firebase';
import {useAuthStore} from '@/stores/storeAuth';

let notesCollectionRef;
let notesCollectionQuery;
let getNotesSnapshot = null;

export const useNotesStore = defineStore('notes', {

  state: () => {
    return {
      notesList: [],
      isLoading: false,
    }
  },

  actions: {
    init() {
      const authStore = useAuthStore();
      notesCollectionRef = collection(db, 'users', authStore.user.id, 'notes');
      notesCollectionQuery = query(notesCollectionRef, orderBy('date', 'desc'))
      this.getNotesList();
    },

    async getNotesList() {
      this.isLoading = true;

      if (getNotesSnapshot) getNotesSnapshot(); // unsubscribe from any active listener

      getNotesSnapshot = onSnapshot(notesCollectionQuery, (querySnapshot) => {
        let updatedNotesList = [];

        querySnapshot.forEach((doc) => {
          const serverNotesList = {
            id: doc.id,
            text: doc.data().text,
            date: doc.data().date,
          }
          updatedNotesList.push(serverNotesList);
        });
        this.notesList = updatedNotesList;
        this.isLoading = false;
      }, (error) => {
        console.log('error: ', error.message);
      });
    },

    clearNotes() {
      this.notesList = [];
    },

    async addNewNote(newNoteText) {
      const currentDate = new Date().getTime();
      const generatedDate = currentDate.toString();

      await addDoc(notesCollectionRef, {
        date: generatedDate,
        text: newNoteText,
      });
    },

    async deleteNote(noteIdToDelete) {
      await deleteDoc(doc(notesCollectionRef, noteIdToDelete));
    },

    async updateNote(id, updatedText) {
      await updateDoc(doc(notesCollectionRef, id), {
        text: updatedText,
      });
    }
  },

  getters: {
    getNoteText: (state) => {
      return (id) => {
        return state.notesList.filter(note => note.id === id)[0].text;
      }
    },

    totalNotesCount: (state) => {
      return state.notesList.length;
    },

    totalCharactersCount: (state) => {
      let count = 0;

      state.notesList.forEach(note => {
        count += note.text.length;
      })

      return count;
    }
  }
})
