<template>
  <input
    type="text"
    @input="$emit('update:modelValue', $event.target.value)"
    spellcheck="false"
    autocapitalize="none"
  >
</template>

<style lang="sass" scoped>
  input
    color: black
    background-color: $bg-input
    border-radius: .25em
    padding: .5em
    width: 90%
</style>