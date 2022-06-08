<template>
  <div class="bg"></div>
  <section>
    <div class="h1">Enter your username</div>
    <form @submit.prevent="() => store.submitUsername(username) && $emit('close')">
      <Input v-model="username" />
      <button type="submit" class="h2">Continue</button>
    </form>
  </section>
</template>

<script setup>
import Input from "@/components/Input.vue";
import { useMessagesStore } from "@/store/messages.store";
import { ref } from "vue";

const username = ref("");
const store = useMessagesStore();
defineEmits(["close"]);
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

    form
      width: 100%
      display: flex
      justify-content: center
      align-items: center
      flex-direction: column

      input
        margin: 1em 0
        width: 50%

      button
        background-color: $primary
        padding: 1em
        border-radius: .5em
        cursor: pointer

</style>