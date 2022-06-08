<template>
  <section>
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
</script>

<style lang="sass" scoped>
  section
    width: 50vw
    display: flex
    flex-direction: column
</style>