import { defineStore } from "pinia";

export const useMessagesStore = defineStore("messages", {
  state: () => ({
    messages: [],
    username: "test"
  }),

  actions: {
    async sendMessage(message) {
      this.messages.push({ username: this.username, message });
    }
  }
});