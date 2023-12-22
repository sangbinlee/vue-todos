<template>

<a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
  Link with href
</a>
<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
  Button with data-bs-target
</button>


<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div>
      Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
    </div>
    <div class="dropdown mt-3">
      <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
        Dropdown button
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>
  </div>
</div>














<!-- 
  
  https://www.youtube.com/watch?v=38PWm8TgaV0&list=PLfLgtT94nNq3Br68sEe26jkOqCPK_8UQ-&index=7

https://codingapple.com/unit/vue-data-import-export/?id=139

코딩애플 참조

-->

{{ data }}



<div class="black-bg text-center" v-if="isModalOpen">
    <div class="white-bg">
      <h4>제목</h4>
      <p>내용</p>
      <button @click="isModalOpen=false">X</button>
    </div>
</div>




<div>
  <button type="button" class="btn btn-primary">Primary  <i class="bi bi-usb-symbol"></i> </button>
   <button type="button" class="btn btn-secondary">Secondary  <i class="bi bi-usb-symbol"></i></button>
   <div>
   
   </div>
 </div>


 <svg class="bi" width="32" height="32" fill="currentColor">
  <use xlink:href="~/bootstrap-icons/bootstrap-icons.svg#shop"/>
</svg>


<svg class="bi" width="32" height="32" fill="currentColor">
  <use xlink:href="~/bootstrap-icons/bootstrap-icons.svg#heart-fill"/>
</svg>
<svg class="bi" width="32" height="32" fill="currentColor">
  <use xlink:href="~/bootstrap-icons/bootstrap-icons.svg#toggles"/>
</svg>
<svg class="bi" width="32" height="32" fill="currentColor">
  <use xlink:href="~/bootstrap-icons/bootstrap-icons.svg#shop"/>
</svg>

<!-- 

<svg class="bi" width="32" height="32" fill="currentColor">
  <use xlink:href="bootstrap-icons.svg#heart-fill"/>
</svg>
<svg class="bi" width="32" height="32" fill="currentColor">
  <use xlink:href="bootstrap-icons.svg#toggles"/>
</svg>
<svg class="bi" width="32" height="32" fill="currentColor">
  <use xlink:href="bootstrap-icons.svg#shop"/>
</svg> -->











  <div class="container  text-center">



    <div v-for="(o,i) in data" :key="o" class="my-5">
      <img :src="o.image" alt="ssss" width="400px" />
      <!-- <img src="../assets/r1.jpg"/> -->
      <h4 @click="isModalOpen=true">{{ o.title }}</h4>
      <p>{{o.price/10000}} 만원</p>
      <button @click="신고수[i]++">허위매물신고</button><span>신고수 : {{ 신고수[i] }}</span>
    </div>














    <div v-for="(o,i) in 8" :key="o" class="my-5">
      <img :src="roomImgs[i]" alt="ssss" width="400px" />
      <!-- <img src="../assets/r1.jpg"/> -->
      <h4 @click="isModalOpen=true">역삼동원룸{{ i }}</h4>
      <p>50 만원</p>
      <button @click="신고수[i]++">허위매물신고</button><span>신고수 : {{ 신고수[i] }}</span>
    </div>

  </div>

</template>

<script setup>
import { ref } from "vue";

// import  apple from '../assets/oneroom';
// import   {apple,apple2} from '../assets/oneroom';
import data from '../assets/oneroom';
// console.log('apple======',apple);
// console.log('apple2======',apple2);

// const roomImgs = ref( [])
const roomImgs = [];

const arr = Array(8).fill(0);
console.log('arr==========',arr);

const arr2 = arr.map((v,i) => {
  roomImgs[i]=  '/src/assets/r'+ (i+1) +'.jpg'
  // roomImgs[i]=  new URL('./assets/r'+ (i+1) +'.jpg')
  console.log('i========',i);
  return 1
});

console.log('arr22222==========',arr2);
console.log('arr==========',arr);

console.log('roomImgs==========',roomImgs);


const 신고수 = ref(arr)
// const isModalOpen = ref(true)
const isModalOpen = ref(false)




</script>

<style lang="scss" scoped>





@import "bootstrap-icons/font/bootstrap-icons.css";








body {
  margin: 0 ;
  // margin: 0 auto;
  // text-align: center;
}

div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba($color: #000000, $alpha: 0.5);
  position: fixed;
  padding: 20px;
}
.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
</style>