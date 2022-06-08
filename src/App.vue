<template>
 <Messages />
 <section>
   <Input v-model="message" />
   <SendButton :message="message" />
 </section>
</template>

<script setup>
import Messages from "@/components/Messages.vue";
import Input from "@/components/Input.vue";
import SendButton from "@/components/SendButton.vue";
import { ref } from "vue";

const message = ref();
</script>

<style lang="sass">
  @use "@/assets/sass/_utilities.sass" as *
</style>

<style scoped lang="sass">
  section
    display: flex
    justify-content: space-between
    width: 100%
    margin-top: 4em
</style>