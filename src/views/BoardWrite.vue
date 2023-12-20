<template>
  <div class="px-5 py-5">
    <BForm @submit="onSubmit" @reset="onReset" v-if="show">


      <label for="tags-basic">Type a new tag and press enter</label>
      <BFormTags input-id="tags-basic" v-model="form.tags" /> 

      <BFormGroup  label-cols="4" label-cols-lg="2" floating
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <BFormInput
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        />
          <!-- :state="validation" -->
      </BFormGroup>

      <BFormGroup  label-cols="4" label-cols-lg="2"
      id="input-group-2" label="Your Name:" label-for="input-2">
        <BFormInput
          id="input-2"
          v-model="form.name"
          placeholder="Enter name"
          required
        />
      </BFormGroup>

      <BFormGroup  label-cols="4" label-cols-lg="2"
      id="input-group-22" label="Your password:" label-for="input-22">
        <BFormInput
          id="input-22"
          v-model="form.password"
          type="password"
          placeholder="Enter password"
          required
        />
      </BFormGroup>

      <BFormGroup  label-cols="4" label-cols-lg="2"
      id="input-group-3" label="Food:" label-for="input-3">
        <BFormSelect
          id="input-3"
          v-model="form.food"
          :options="foods"
          required
        />
      </BFormGroup>

      <BFormGroup  label-cols="4" label-cols-lg="2"
      id="input-group-4" label="체크하세요" label-for="">
        <!-- <BFormCheckboxGroup v-model="form.checked_1_hobby" id="input-4" >
          <BFormCheckbox value="pingpong">pingpong</BFormCheckbox>
          <BFormCheckbox value="tenis">tenis</BFormCheckbox>
          <BFormCheckbox value="swim" required>swim</BFormCheckbox>
          <BFormCheckbox value="movie" >movie</BFormCheckbox>
        </BFormCheckboxGroup> -->
        <BFormCheckboxGroup
          v-model="form.checked_1_hobby"
          :options="checkEx2Options"
          class="mb-3"
          value-field="item"
          text-field="name"
          disabled-field="notEnabled"
        />
        <!-- <BFormCheckbox
          v-for="(car, index) in availableCars"
          :key="index"
          v-model="form.checked_1_hobby"
          :value="car"
        >
          {{ car }}
        </BFormCheckbox> -->



      </BFormGroup>

      <BFormGroup  label-cols="4" label-cols-lg="2"
      id="input-group-5" label="remember" label-for="input-5" required>
        <BFormCheckboxGroup id="input-55" v-model="form.checked_2_remember">
          <BFormCheckbox  id="input-5" value="Y" required>remember me</BFormCheckbox> 
        </BFormCheckboxGroup>
      </BFormGroup>

      <BButton type="submit" variant="primary">Submit</BButton>
      <BButton type="reset" variant="danger">Reset</BButton>
    </BForm>

    <BCard class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </BCard>
  </div>
</template>

<script setup>
import { reactive, ref, computed  } from "vue";






 
// const validation = computed(() => form.email.length > 0 )




const foods = [
  { text: "Select One", value: '' },
  { text: "Carrots", value: '001' },
  { text: "Beans", value: '002' },
  { text: "Tomatoes", value: '003' },
  { text: "Corn", value: '004' },
];

const availableCars = ['BMW', 'Mercedes', 'Toyota']



const checkEx2Options = [
  {item: 'A', name: 'Option A'},
  {item: 'B', name: 'Option B'},
  {item: 'D', name: 'Option C', notEnabled: true},
  {item: {d: 1}, name: 'Option D'},
]








const form = reactive({
  tags : ref(['apple', 'orange']),
  email: "sangbinlee9@gmail.com",
  name: "sangbinlee9",
  password: "sangbinlee9",
  food: '',
  checked_1_hobby: [],
  // checked_2_remember: '',
  checked_2_remember: [],
});
const show = ref(true);
const onSubmit = (event) => {
  event.preventDefault();
  alert(JSON.stringify(form));
};
const onReset = (event) => {
  event.preventDefault();
  // Reset our form values
  form.tags = [];
  form.email = "";
  form.name = "";
  form.password = "";
  form.food = '';
  form.checked_1_hobby = [];
  // form.checked_2_remember = ''
  form.checked_2_remember = []


  // Trick to reset/clear native browser form validation state
  // show.value = false;
  // nextTick(() => {
  //   show.value = true;
  // });
};
</script>

<style lang="scss" scoped>
form div{
  margin-bottom: 15px;
}
</style>