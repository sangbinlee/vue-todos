<template>
  <div>
json child 1 data = {{ props.data1 }}
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps(['data1'])
</script>

<style lang="scss" scoped>

</style>