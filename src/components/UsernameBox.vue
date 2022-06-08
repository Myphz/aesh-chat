<template>
  <div class="bg"></div>
  <section>
    <div class="h1">Enter your username</div>
    <Input v-model="username" />
    <button class="h2" @click="() => store.submitUsername(username) && $emit('close')">Continue</button>
  </section>
</template>

<script setup>
import Input from "@/components/Input.vue";
import { useMessagesStore } from "@/store/messages.store";
import { ref } from "vue";

const username = ref("");
const store = useMessagesStore();
</script>

<style lang="sass" scoped>
  .bg
    position: absolute
    top: 0
    left: 0
    background-color: black
    opacity: .99
    height: 100vh
    width: 100vw

  section
    position: fixed
    top: 0
    left: 0
    height: 100vh
    width: 100%
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    z-index: 2

    input
      margin: 1em 0
      width: 50%

    button
      background-color: $primary
      padding: 1em
      border-radius: .5em
      cursor: pointer

</style>