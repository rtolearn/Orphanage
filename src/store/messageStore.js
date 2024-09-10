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
      if (id) {
        this.userId = id; // Set the user ID in the store
        localStorage.setItem('userId', JSON.stringify(id)); // Save user ID to localStorage
        console.log('User ID saved to localStorage:', id); // Log the saved userId
      } else {
        console.error('User ID is null or undefined, not saving to localStorage');
      }
    },
    clearStorage() {

      localStorage.clear(); // Clear all localStorage items (optional, if you want to clear everything)
      sessionStorage.clear(); // Clear all sessionStorage items
      console.log('Local storage and session storage cleared');
    }
  }
});
