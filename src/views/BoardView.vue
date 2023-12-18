

<script setup>
import { onMounted, ref } from "vue";

import axios from "axios";
import { useModal } from 'bootstrap-vue-next';

const items = [
  { 나이: 40, first_name: "Dickerson", 성: "Macdonald" },
  { 나이: 21, first_name: "Larsen", 성: "Shaw" },
  { 나이: 89, first_name: "Geneva", 성: "Wilson" },
  { 나이: 89, first_name: "Geneva", 성: "Wilson" },
  { 나이: 89, first_name: "Geneva", 성: "Wilson" },
  { 나이: 89, first_name: "Geneva", 성: "Wilson" },
  { 나이: 89, first_name: "Geneva", 성: "Wilson" },
  { 나이: 89, first_name: "Geneva", 성: "Wilson" },
];

// const fields = [ '나이' , '성']
const fields = [
  'selected',
  'index',
  {
    key: 'userId',
    label: 'userId',
    thStyle: { width: "10%"  },
    sortable: false
  },
  {
    key: 'id',
    label: 'No',
    sortable: false
  },
  {
    key: 'titles',
    label: '제목s',
    thStyle: { width: "10%" },
    sortable: true
  },
  {
    key: 'title',
    label: '제목',
    thStyle: { width: "10%" },
    sortable: true
  },
  // {
  //   key: 'body',
  //   label: '내용',
  //   sortable: true,
  //   // variant: 'danger'
  // }  ,
  
  { key: 'actions', label: 'Actions' },
 ];

const currentPage = ref(1);
const ex1PerPage = ref(10);
const ex1Rows = ref(0);
const totalRows = ref(0);
const posts = ref([]);
  
const headVariant = 'dark'
// const headVariant = ref('dark')


const filter = ref(null);
const filterOn = ref( []);



const selectableTable = ref(null);
const selected = ref([]);
const modes= ['multi', 'single', 'range']
const selectMode = ref(modes[2]);


const modal = ref(false)
// const sortBy = ref('');
// const sortDesc = ref(false);
// let sortBy = ''
// let sortDesc = false
let sortBy = ref('');
let sortDesc = ref(false);

const onRowClicked = (item, index, event) => {
  // console.log("Index", index)
  // console.log("Item", item)
  // console.log("event", event)
}
const onRowDblClicked = (item, index, event) => {
  // console.log("Index", index)
  // console.log("Item", item)
  // console.log("event", event)
}
const onRowSelected = (items) => {
  console.log("items", items)
  selected.value = items
}


function selectAllRows() {
  selectableTable.value.selectAllRows()
  // $refs.selectableTable.selectAllRows()
}
function      clearSelected() {
  selectableTable.value.clearSelected()
  // this.$refs.selectableTable.clearSelected()
}
function selectThirdRow() {
  // Rows are indexed from 0, so the third row is index 2
  selectableTable.value.selectRow(2)
  // this.$refs.selectableTable.selectRow(2)
}
function unselectThirdRow() {
  // Rows are indexed from 0, so the third row is index 2
  selectableTable.value.unselectRow(2)
  // this.$refs.selectableTable.unselectRow(2)
}


const infoModal = ref({
  id: 'info-modal',
  title:'',
  content:'',
});


function info(item, index, button) {
  const {show, hide, modal} = useModal(infoModal.value.id)
  infoModal.value.title =  `Row index: ${index}`
  infoModal.value.content = JSON.stringify(item, null, 2)
  console.log('modal......................... item', item);
  console.log('modal......................... index', index);
  console.log('modal......................... button', button);
  // modal !=modal
  show();
  // return
  // infoModal.title = `Row index: ${index}`
  // infoModal.content = JSON.stringify(item, null, 2)
  // // $root.$emit('bv::show::modal', infoModal.id, button)
}


function resetInfoModal() {
  infoModal.value.title = ''
  infoModal.value.content = ''
  // hide();
}



// const {hide, hideAll} = useModalController()


function    rowClass(item, type) {
    if (!item || type !== 'row') return
    if (item.status === 'awesome') return 'table-success'
  }




  function onFiltered(filteredItems) {
    console.log('filteredItems==========',filteredItems);
    // Trigger pagination to update the number of buttons/pages due to filtering
    totalRows = filteredItems.length
    currentPage = 1
  }









// const postsUrl = ref('https://jsonplaceholder.typicode.com/posts');
const postsUrl = 'https://jsonplaceholder.typicode.com/posts';

const item = {
  userId: 1,
  id: 1,
  title: 'title',
  body: 'body',
   status: 'awesome'
}
// let posts = []
const getData = () => {
  axios.get(postsUrl)
  .then((response) => {
    posts.value = response.data;


    posts.value.splice(0, 0, item)

    ex1Rows.value = posts.value.length;
    totalRows.value = posts.value.length;


    // console.log("response", response);
    console.log("response.data", response.data);
    // console.log("items", items);
    // console.log("posts.value.length", posts.value.length);
    console.log("posts.value", posts.value);
    // console.log("ex1Rows.value", ex1Rows.value);
    // console.log("fields", fields);
  })
  .catch(error => {
    console.log(error)
  }
  )
}

function postData(){
    axios
    .post(postsUrl, {
      userId: '1',
      title:  'Article title',
      body:   'Article body content'
    })
    .then((response) => {

      console.log('response insert=',response)

    })
}

function putData(){
  axios
      .put(postsUrl +'/1', {
        id: '1',
        userId: '1',
        title:  'Article title2222222222222222',
        body:   'Article body content'
      })
      .then((response) => {
        console.log('put.......................');
        console.log('response=',response)
      })
}

function patchData(){
  axios
      .patch(postsUrl +'/1', {
        title:  'Article title only'
      })
      .then((response) => {
        console.log('patch.......................');
        console.log('response=',response)
      })
}

function deleteData(){
  axios
      .delete(postsUrl +'/1')
      .then((response) => {
        console.log('delete.......................');
        console.log('response=',response)
      })
}

onMounted(() => {

  // patchData()
  // deleteData()
  getData()
  // getData()
})
</script>



<template>
  <!-- <List/> -->


  <p>
      <b-button size="sm" @click="selectAllRows">Select all</b-button>
      <b-button size="sm" @click="clearSelected">Clear selected</b-button>
      <b-button size="sm" @click="selectThirdRow">Select 3rd row</b-button>
      <b-button size="sm" @click="unselectThirdRow">Unselect 3rd row</b-button>
    </p>


  <BFormGroup
    id="fieldset-1"
    label="search"
    label-for="input-1"
    label-cols-sm="4"
    label-cols-lg="3"
    content-cols-sm
    content-cols-lg="7"
    label-class="mb-1 "
    style="text-align: right;padding-right: 20px;"
  >
    <BInputGroup  class="mb-3">
      <BFormInput id="input-1" v-model="filter" type="search"   placeholder="Type to Search" />
      <BInputGroupAppend>
        <BButton size="sm" text="Button" :disabled="!filter" @click="filter = ''">clear</BButton>
      </BInputGroupAppend>
    </BInputGroup>
  </BFormGroup>
    
    <!-- @row-dbl-clicked="onRowDblClicked" -->
  <BTable 
  :filter="filter"
  :items="posts" 
    :fields="fields" 
    per-page="10"
    :current-page="currentPage"
    primary-key="id"
    @row-clicked="onRowClicked"
    hover
    striped 
    bordered
    :tbody-tr-class="rowClass"
    :head-variant="headVariant"
    responsive="sm" 
    fixed
    stickyHeader
      ref="selectableTable"
    :select-mode="selectMode"
    selectable
      @row-selected="onRowSelected"
      :sort-by="sortBy"
      :sort-desc="sortDesc"
      sort-icon-left
    >


      <!-- Example scoped slot for select state illustrative purposes -->
      <template #cell(selected)="{ rowSelected }">
        <template v-if="rowSelected">
          <span aria-hidden="true">&check;</span>
          <span class="sr-only">Selected</span>
        </template>
        <template v-else>
          <span aria-hidden="true">&nbsp;</span>
          <span class="sr-only">Not selected</span>
        </template>
      </template>









      <!-- A virtual column -->
      <template #cell(index)="data">
        {{ ((currentPage -1 ) * 10) + data.index + 1 }}
      </template>

      <!-- A custom formatted column -->
      <template #cell(titles)="data">
        <b class="text-info">{{ data.item.id }}</b>, <b>{{ data.item.title.toUpperCase() }}</b>
      </template>





      <template #cell(actions)="row">
        <BButton size="sm" @click="info(row.item, row.index, $event.target )" class="mr-1">
          Info modal 
        </BButton>
        <!-- <BButton size="sm" @click="row.toggleDetails">
        {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
        </Button> -->
      </template>









  </BTable>
  <BPagination
    v-model="currentPage"
    :total-rows="totalRows"
    :per-page="10"
    first-text="First"
    prev-text="Prev"
    next-text="Next"
    last-text="Last"
  />
  Current page : {{ currentPage }}

  <p>
      Selected Rows:<br>
      {{ selected }}
    </p>


    <div>
      Sorting By: <b>{{ sortBy }}</b>, Sort Direction:
      <b>{{ sortDesc ? 'Descending' : 'Ascending' }}</b>
    </div>

    <!-- Info modal -->
    <!-- <b-modal :id="infoModal.id" :title="infoModal.title" ok-only @hide="resetInfoModal">
      <pre>{{ infoModal.content }}</pre>
    </b-modal> -->
    <BModal 
    v-model="modal"  
    :id="infoModal.id" 
    :title="infoModal.title" 
    ok-only 
    @hide="resetInfoModal"> 
      <pre>{{ infoModal.content }}</pre>
    </BModal>


</template>


<style>
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
