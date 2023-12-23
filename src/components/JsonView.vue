<template>

<div class="container">


  <h2>json view image for 파람 아이디: {{ current_id }}</h2>
  <h2>json view image  for  id: {{ photos_list.id  }}</h2>
  <h2>json view image  for  title: {{ photos_list.title  }}</h2>
  <h2>json view image  for  albumId: {{ photos_list.albumId }}</h2>
  <h2>json view image  for  thumbnailUrl: {{ photos_list.thumbnailUrl }}</h2>
  <h2>json view image  for  url: {{ photos_list.url }}</h2>
  
  <img :src="photos_list.thumbnailUrl" :alt="photos_list.title"  />
  <img :src="photos_list.url" :alt="photos_list.title" />
</div>




</template>

<script setup>

import Api from '@/services/Api';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
const photos_list = ref([])
const current_id = ref('')

const getPhotos = () => {

  const api = new Api();
  api.getPhotos(current_id.value).then((res)=>{
    console.log('2222 res...........',res);
    photos_list.value = res.data

  })

}

onMounted(() => {
  console.log('ready.....................?');
  const { params : {id}} = useRoute()
  current_id.value = id
  getPhotos()
})
</script>

<style lang="scss" scoped>

</style>