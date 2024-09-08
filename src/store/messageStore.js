// stores/messageStore.js
import { defineStore } from 'pinia';

export const useMessageStore = defineStore('message', {
  state: () => ({
    statusLogIn: false
  }),
  actions: {
    setStatus(newStatus) {
      this.statusLogIn = newStatus;
    }
  }
});










