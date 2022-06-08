import { defineStore } from "pinia";

export const useMessagesStore = defineStore("messages", {
  state: () => ({
    messages: [],
    username: "test"
  }),

  actions: {
    async sendMessage(message) {
      if (!message) return;
      this.messages.push({ username: this.username, message });
    },

    async submitUsername(username) {
      if (!username.trim()) return;
      this.username = username.trim();
      return true;
    }
  }
});