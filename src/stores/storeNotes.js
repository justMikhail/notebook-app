import {defineStore} from 'pinia';

export const useNotesStore = defineStore('notes', {

  state: () => {
    return {
      notesList: [
        {
          id: '1',
          text: `
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Aliquam facere fugit in molestias numquam quaerat
      quia quibusdam rerum! Iusto, rem?`,

        },
        {
          id: '2',
          text: `This is a shorter note! Woo!`,

        },
        {
          id: '3',
          text: `
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Aliquam facere fugit in molestias numquam quaerat
      quia quibusdam rerum! Iusto, rem?`,

        }
      ]
    }
  },
  actions: {
    addNewNote() {
      console.log('Add New Note')
    }
  }
})
