import { defineStore } from "pinia";
import { SERVER_URL } from "../config/config";

// Secret easter egg ;)
function easterEgg(message) {
  const words = message.split(" ");
  return words.map(word => {
    if (word.length == 1) return word;
    const randomIdx = Math.floor(Math.random() * (word.length-2));
    const charArray = Array.from(word);
    [charArray[randomIdx], charArray[randomIdx+1]] = [charArray[randomIdx+1], charArray[randomIdx]];
    return charArray.join("");
  }).join(" ");
};

export const useMessagesStore = defineStore("messages", {
  state: () => ({
    messages: [],
    username: null,
    socket: null
  }),

  actions: {
    initializeSocket() {
      this.socket = new WebSocket(SERVER_URL);
      this.socket.onmessage = this.newMessage;
    },

    sendMessage(message) {
      if (!message) return;
      const newMessage = easterEgg(message);
      this.socket.send(JSON.stringify({ username: this.username, message: newMessage }));
    },

    submitUsername(username) {
      if (!username.trim()) return;

      this.username = username.trim();
      return true;
    },

    newMessage({ data }) {
      const message = JSON.parse(data);
      this.messages.push(message);
    }
  }
});