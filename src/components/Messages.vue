<template>
  <section ref="messages">
    <Message
      v-for="i in 10"
      :key="i"
      text="test"
      sender="testUser"
      differentSender
    />
  </section>
</template>

<script setup>
import Message from "@/components/Message.vue";
import { onMounted, onUpdated, ref } from "vue";
const messages = ref();

function scrollBottom() {
  messages.value.scrollTo(0, messages.value.scrollHeight);
};

onMounted(scrollBottom);
onUpdated(scrollBottom);
</script>

<style lang="sass" scoped>
  section
    width: 100%
    display: flex
    flex-direction: column
    height: 60vh
    max-height: 60vh
    overflow-y: scroll
    scroll-behavior: smooth

    &::-webkit-scrollbar
      display: none

</style>