<template>

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