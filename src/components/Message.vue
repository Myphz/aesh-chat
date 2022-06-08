<template>
  <div :class="'h5 message ' + (differentSender ? 'bg-accent' : 'bg-primary align-right')">
    {{ text }}
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
  }
});
</script>

<style lang="sass" scoped>
  .message
    max-width: 100%
    border-radius: .2em
    overflow-wrap: break-word
    padding: .5em 1em
    margin: .3em

  .align-right
    margin-left: 100%

</style>