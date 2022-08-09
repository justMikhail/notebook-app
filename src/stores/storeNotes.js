import {defineStore} from 'pinia';
import {collection, getDocs} from "firebase/firestore";
import {db} from '@/api/firebase';

export const useNotesStore = defineStore('notes', {

  state: () => {
    return {
      notesList: []
    }
  },

  actions: {
    async getNotesList() {
      const querySnapshot = await getDocs(collection(db, "notes"));
      querySnapshot.forEach((doc) => {
        const serverNotesList = {
          id: doc.id,
          text: doc.data().text,
        }

        this.notesList.push(serverNotesList)
      });
    },
    addNewNote(newNoteText) {
      const currentDate = new Date().getTime();
      const id = currentDate.toString();

      const note = {
        id,
        text: newNoteText,
      };

      this.notesList.unshift(note);
    },
    deleteNote(noteIdToDelete) {
      this.notesList = this.notesList.filter(note => note.id !== noteIdToDelete);
    },
    updateNote(id, updatedText) {
      const index = this.notesList.findIndex(note => note.id === id);
      this.notesList[index].text = updatedText;
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
