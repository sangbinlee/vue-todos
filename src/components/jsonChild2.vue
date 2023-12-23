<template>
  <div>
json child 2 data = {{ props.data2 }}
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps(['data2'])
</script>

<style lang="scss" scoped>

</style>