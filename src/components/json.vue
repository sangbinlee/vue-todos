<template>

  <h1>this is parent json </h1>


  <div class="container">
    <Child1 :data1="child1_data"/>
    <Child2 :data2="child2_data"/>
  </div>

  <table class="table align-middle table-sm table-bordered table-dark  table-striped table-hover">
    <thead>
      <tr> 
        <th>albumId</th>
        <th>id</th>
        <th>thumbnailUrl</th>
        <th>title</th>
        <th>url</th>
        <th>img url</th>
        <th>action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(o, i ) in photos_list" :key="i">
        <td>{{ o.albumId }}</td>
        <td>{{ o.id }}</td>
        <td>
          <a :href="o.url">
            <img :src="o.thumbnailUrl" :alt="o.title" height="50px"/>
          </a>
        </td>
        <td>{{ o.title }}</td>
        <td>{{ o.url }}</td>
        <td><img :src="o.url" :alt="o.title" height="50px"/></td>
        <td>
          <button @click="router.push({name:'json-view', params:{id:o.id}})">view</button>  
        </td>
      </tr>
    </tbody>
  </table>
  

</template>

<script setup>


// https://www.youtube.com/watch?v=tUw8BmbXW58
import Child1 from './jsonChild1.vue'
import Child2 from './jsonChild2.vue'



let child1_data = ref(' xxx child 1 data...........');
let child2_data = ref(' xxx child 2 data...........');









import Api from '@/services/Api';
import { onMounted, ref } from 'vue';
import router from '@/router'
let photos_list = ref([])
const getPhotos = () => {

  const api = new Api();

  api.getPhotos().then((res)=>{
    console.log('2222 res...........',res);
    // photos_list.value = res.data
    photos_list.value = res.data.splice(0,10)

  })

}

onMounted(() => {
  console.log('ready.....................?');
  getPhotos()
})
</script>

<style lang="scss" scoped>

</style>