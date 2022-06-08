<template>
  <div class="h5 message">
    {{ text }}
  </div>
</template>

<script setup>
const { text } = defineProps({
  text: {
    type: String,
    required: true
  },

  differentSender: {
    type: Boolean,
    required: true
  }
});
</script>

<style lang="sass" scoped>
  .message
    max-width: 100%
    background-color: $accent
    border-radius: .2em
    overflow-wrap: break-word
    padding: .5em 1em
    margin: .3em

</style>