<template>
    <div class="container">
        <main class="form-signin w-100 m-auto">
            <!-- <form class="form-data"> -->
                <h1 class="h3 mb-3 fw-normal">todo</h1>

                <div class="form-floating">
                    <input v-model="form.title"
                        type="text"
                        class="form-control"
                        id="floatingInput"
                        placeholder="todo"
                    />
                    <label for="floatingInput">title</label>
                </div>
                <div class="form-floating">
                    <textarea v-model="form.task"
                        class="form-control"
                        placeholder="Leave a comment here"
                        id="floatingTextarea2"
                        style="height: 100px"
                    ></textarea>
                    <label for="floatingTextarea2">task</label>
                </div>

                <div class="form-floating">
                    <input v-model="form.date"
                        type="date"
                        class="form-control"
                        id="floatingPassword"
                        placeholder="date"
                    />
                    <label for="floatingPassword">date</label>
                </div>

                <div class="form-check text-start my-3">
                    <input
                        class="form-check-input"
                        type="checkbox"
                        value="remember-me"
                        id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                        Remember me
                    </label>
                </div>
                <button @click="addData" class="btn btn-primary w-100 py-2" >
                  submit
                </button>
                <p class="mt-5 mb-3 text-body-secondary">{{form}}</p>
            <!-- </form> -->
        </main>

        <table class="table align-middle table-sm table-bordered table-dark  table-striped table-hover">
          <thead>
            <tr>
              <th>title</th>
              <th>task</th>
              <th>date</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(o,i) in todo_data" :key="i">
              <td>{{ o.title }}</td>
              <td>{{ o.task }}</td>
              <td>{{ o.date }}</td>
            </tr>
          </tbody>
        </table>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const form = ref({
  title:'',
  task:'',
  date:'',
})

const addData = () => {
  todo_data.value.push(form.value)
  form.value = {
    title:'',
    task:'',
    date:'',
  }
}

const todo_data = ref([])
</script>

<!-- <style lang="scss" scoped> -->
<style lang="css" scoped>
@import url(./todo.css);
</style>