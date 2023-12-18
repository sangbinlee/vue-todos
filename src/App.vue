
<script setup>
import { useDark, useToggle } from '@vueuse/core';
import { onMounted, ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

import { useColorMode } from 'bootstrap-vue-next';

import Header from './components/Header.vue';
import Footer from './views/layout/FooterView.vue';
const isDark = useDark()
console.log('isDark.value=',isDark.value);
// const isDark = useDark({
//   selector: 'body',
//   attribute: 'color-scheme',
//   valueDark: 'dark',
//   valueLight: 'light',
// })

const toggleDark = useToggle(isDark)


const root = ref(null)
// const root = ref<HTMLElement | null>(null)
console.log('root',root.value);
const mode = useColorMode({
  selector: root,
})

const changeColor = () => {
  mode.value = mode.value === 'dark' ? 'light' : 'dark'
}

// lifecycle hooks
onMounted(() => {
  console.log(`The root is ${root.value}.`)
  console.log(root.value)
})

</script>
<template>
 
  <div ref="root">
    </div>

    <button @click="toggleDark()">
  <span class="ml-2">{{ isDark ? 'Dark' : 'Light' }} mode</span>
    <i inline-block align-middle i="dark:carbon-moon carbon-sun" />
  </button>


  
  <button @click="changeColor()">
  <span class="ml-2">{{ isDark ? 'Dark' : 'Light' }} mode</span>
    <i inline-block align-middle i="dark:carbon-moon carbon-sun" />
  </button>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

 

  <Header />
  <RouterView />
  <Footer />
</template>


 