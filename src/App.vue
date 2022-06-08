<template>
  <UsernameBox v-if="openBox" @close="openBox = false"/>
  <Messages />
  <form class="controls" @submit.prevent="() => { store.sendMessage(message); message=''; input.reset() }">
    <Input v-model="message" ref="input" />
    <SendButton />
  </form>
</template>

<script setup>
import Messages from "@/components/Messages.vue";
import Input from "@/components/Input.vue";
import SendButton from "@/components/SendButton.vue";
import UsernameBox from "@/components/UsernameBox.vue";
import { useMessagesStore } from "@/store/messages.store"
import { ref } from "vue";

const store = useMessagesStore();
store.initializeSocket();

const message = ref("");
const input = ref();
const openBox = ref(true);
</script>

<style lang="sass">
  @use "@/assets/sass/_utilities.sass" as *

  .controls
    display: flex
    justify-content: space-between
    width: 100%
    margin-top: 4em
</style>