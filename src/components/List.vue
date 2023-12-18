<template>
  <table class="table table-bordered">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Title</th>
        <th scope="col">Text</th>
      </tr>
    </thead>
    <tbody>
      <tr
        @click="Read(index)"
        class="textline textBox"
        v-for="(arr, index) in data"
        :key="index"
      >
        <th scope="row">{{ arr.id }}</th>
        <td>{{ arr.name }}</td>
        <td>{{ arr.title }}</td>
        <div class="textBox">{{ arr.text }}</div>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
// import datas from '../data/index';

// const data = ref(datas)
const data = [
          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]


function Read(index) {
  console.log(index);
  this.$router.push({ path: `/read/${index}` });
}

function datasss() {
      return {
        items: [
          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]
      }
    }
</script>

<style scoped>
.table {
  width: 800px;
  overflow: hidden;
  text-overflow: ellipsis;

  -webkit-line-clamp: 1;
  word-wrap: break-word;
}

.textline:hover {
  color: rgba(25, 0, 255, 0.404);
  transition: 0.5s;
}
.textBox {
  width: 500px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>