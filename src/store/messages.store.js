import { defineStore } from "pinia";
import { SERVER_URL } from "../config/config";
export const useMessagesStore = defineStore("messages", {
  state: () => ({
    messages: [],
    username: "test",
    socket: new WebSocket(SERVER_URL)
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