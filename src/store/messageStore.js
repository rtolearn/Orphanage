import { defineStore } from 'pinia';

export const useMessageStore = defineStore('message', {
  state: () => ({
    statusLogIn: JSON.parse(sessionStorage.getItem('statusLogIn')) || false,
    userId: JSON.parse(localStorage.getItem('userId')) || null // Initialize userId from localStorage
  }),
  actions: {
    setStatus(newStatus) {
      this.statusLogIn = newStatus;
      sessionStorage.setItem('statusLogIn', JSON.stringify(newStatus)); // Save to sessionStorage
    },
    setUserId(id) {
      this.userId = id; // Set the user ID in the store
      localStorage.setItem('userId', JSON.stringify(id)); // Save user ID to localStorage
    },
    clearStorage() {
      this.userId = null; // Clear the user ID from the store
      localStorage.removeItem('userId'); // Remove user ID from localStorage
      localStorage.removeItem('statusLogIn');
    }
  }
});
