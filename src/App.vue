
<script setup>
import { useDark, useToggle } from '@vueuse/core';
import { onMounted, ref } from 'vue';
import { RouterView, useRoute, useRouter } from 'vue-router';

import { useBreadcrumb, useColorMode } from 'bootstrap-vue-next';

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



const breadcrumb = useBreadcrumb()

const items = [
  {
    text: 'Home',
    href: 'https://google.com'
  },
  {
    text: 'Posts',
    to: { name: 'home' }
  },
  {
    text: 'Another Story',
    active: true
  }
]

const addItem = () => {
  breadcrumb.items= items
  // breadcrumb.items.push(path)
  // inputValue.value = ''
}

const route = useRoute()
const router = useRouter()
console.log('route===============',route);
console.log('router===============',router);
console.log('router.currentRoute.value===============',router.currentRoute.value);
console.log('route.name===============',route.name); 
 
const pathname = location.pathname;
console.log('pathname===============',pathname); 
const breadcrumbStringArray = [
  {href:'/', text:'Home'}, 
  {href:pathname, text:pathname.replace('/','')}, 
]
</script>













<template>
 
  <div ref="root">

    <button @click="toggleDark()">
  <span class="ml-2">{{ isDark ? 'Dark' : 'Light' }} mode</span>
    <i inline-block align-middle i="dark:carbon-moon carbon-sun" />
  </button>


  
  <button @click="changeColor()">
  <span class="ml-2">{{ isDark ? 'Dark' : 'Light' }} mode</span>
    <i inline-block align-middle i="dark:carbon-moon carbon-sun" />
  </button>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

 


    <div class="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
      <button class="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center" id="bd-theme" type="button" aria-expanded="false" data-bs-toggle="dropdown" aria-label="Toggle theme (auto)">
        <svg class="bi my-1 theme-icon-active" width="1em" height="1em"><use href="#circle-half"></use></svg>
        <span class="visually-hidden" id="bd-theme-text">Toggle theme</span>
      </button>
      <ul class="dropdown-menu dropdown-menu-end shadow" aria-labelledby="bd-theme-text" style="">
        <li>
          <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="light" aria-pressed="false">
            <svg class="bi me-2 opacity-50 theme-icon" width="1em" height="1em"><use href="#sun-fill"></use></svg>
            Light
            <svg class="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
          </button>
        </li>
        <li>
          <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="dark" aria-pressed="false">
            <svg class="bi me-2 opacity-50 theme-icon" width="1em" height="1em"><use href="#moon-stars-fill"></use></svg>
            Dark
            <svg class="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
          </button>
        </li>
        <li>
          <button type="button" class="dropdown-item d-flex align-items-center active" data-bs-theme-value="auto" aria-pressed="true">
            <svg class="bi me-2 opacity-50 theme-icon" width="1em" height="1em"><use href="#circle-half"></use></svg>
            Auto
            <svg class="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
          </button>
        </li>
      </ul>
    </div>



  <Header />
  <BBreadcrumb :items="breadcrumbStringArray" />
  <RouterView />
  <Footer />
    </div>
</template>


 