<template>
  <div :class="'message ' + (differentSender ? 'bg-accent' : 'bg-primary align-right')">
    <div class="text-secondary h3 bold">{{ sender }}</div>
    <div>{{ text }}</div>
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true
  },

  differentSender: {
    type: Boolean,
    required: true
  },

  sender: {
    type: String,
    required: true
  }
});
</script>

<style lang="sass" scoped>
  .message
    max-width: 100%
    border-radius: .2em
    overflow-wrap: break-word
    padding: .5em .75em
    margin: .3em 0
    line-height: 1em
    width: fit-content

  .align-right
    margin-left: 100%

</style>