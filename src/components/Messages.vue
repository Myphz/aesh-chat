<template>
  <section ref="messages">
    <Message
      v-for="(message, i) in store.messages"
      :key="i"
      :text="message.message"
      :sender="message.username"
      :differentSender="message.username !== store.username"
    />
  </section>
</template>

<script setup>
import Message from "@/components/Message.vue";
import { onMounted, onUpdated, ref } from "vue";
import { useMessagesStore } from "@/store/messages.store";

const store = useMessagesStore();
const messages = ref();

function scrollBottom() {
  messages.value.scrollTo(0, messages.value.scrollHeight);
};

onMounted(scrollBottom);
onUpdated(scrollBottom);
</script>

<style lang="sass" scoped>
  section
    display: flex
    flex-direction: column
    width: 100%
    height: 60vh
    max-height: 60vh
    overflow-y: scroll

    &::-webkit-scrollbar
      display: none

</style>