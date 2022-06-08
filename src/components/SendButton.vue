<template>
  <button @click="() => store.sendMessage(message)">
    Send <img src="/images/arrow.svg">
  </button>
</template>

<script setup>
import { toRef } from "vue";
import { useMessagesStore } from "@/store/messages.store";
const store = useMessagesStore();

const props = defineProps({
  message: {
    type: String,
    required: true
  }
});

const message = toRef(props, "message");
</script>

<style lang="sass" scoped>
  button
    display: flex
    align-items: center
    gap: .5em
    cursor: pointer
    background-color: $primary
    height: 100%
    padding: .5em
    border-radius: .25em
</style>