<template>
 <Messages />
 <main>
   <Input v-model="message" ref="input" />
   <SendButton :message="message" @click.native="() => { message = ''; input.reset() }" />
 </main>
</template>

<script setup>
import Messages from "@/components/Messages.vue";
import Input from "@/components/Input.vue";
import SendButton from "@/components/SendButton.vue";
import { ref } from "vue";

const message = ref("");
const input = ref();
</script>

<style lang="sass">
  @use "@/assets/sass/_utilities.sass" as *

  main
    display: flex
    justify-content: space-between
    width: 100%
    margin-top: 4em
</style>