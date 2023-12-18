<template>
  <div class="setup">
    <h1>vue 3 설치 순서</h1>
    <BAccordion free>
      <BAccordionItem title="1. Creating a Vue Application" visible>
        <strong>npm create vue@latest</strong> 
        <code>
        <pre>
          {{setupProcess}}
        </pre>
        </code>
      </BAccordionItem>
      <BAccordionItem title="2. add lib">
        <strong>....</strong>  
        <code>
          <pre>
            {{lib}}
          </pre>
        </code>
      </BAccordionItem>
      <BAccordionItem title="3. add google font">
        <strong>in src\App.vue</strong>  
        <code>
          <pre>
            {{fonts}}
          </pre>
        </code>
      </BAccordionItem>
    </BAccordion>    
  </div>
</template>


<script setup>
import { ref } from 'vue';

const tt =`
✔ Project name: … <your-project-name>
✔ Add TypeScript? … No / Yes
✔ Add JSX Support? … No / Yes
✔ Add Vue Router for Single Page Application development? … No / Yes
✔ Add Pinia for state management? … No / Yes
✔ Add Vitest for Unit testing? … No / Yes
✔ Add an End-to-End Testing Solution? … No / Cypress / Playwright
✔ Add ESLint for code quality? … No / Yes
✔ Add Prettier for code formatting? … No / Yes

Scaffolding project in ./<your-project-name>...
Done.`
const setupProcess = ref(tt)

const lib = `

yarn add -D sass

npm i bootstrap bootstrap-vue-next
npm i unplugin-vue-components -D

npm i @vueuse/core

npm i unplugin-icons unplugin-vue-components @vue/compiler-sfc -D

`
const libs = ref(lib)

const font = `
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;200;300;400;500;600;700;800;900&display=swap');

*{
  font-family: 'Noto Sans KR', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container{
  max-width: 1100px;
  margin: 0 auto;
}
</style>
`
const fonts = ref(font)
</script>


<style>
@media (min-width: 1024px) {
  .setup {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
