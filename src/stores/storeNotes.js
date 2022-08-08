import {defineStore} from 'pinia';

export const useNotesStore = defineStore('notes', {

  state: () => {
    return {
      notesList: [
        {
          id: '1',
          text: 'Note 1 text. Note 1 text. Note 1 text.',

        },
        {
          id: '2',
          text: 'Note 2 text. Note 2 text. Note 2 text. Note 2 text.',

        },
        {
          id: '3',
          text: 'Note 3 text. Note 3 text. Note 3 text. Note 1 text. Note 3 text. Note 1 text. Note 3 text.',
        }
      ]
    }
  },
  actions: {
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
