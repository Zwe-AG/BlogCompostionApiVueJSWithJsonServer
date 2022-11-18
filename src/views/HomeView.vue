<template>
  <div class="home">
    <h1>{{ name }}</h1>
    <h1>{{ age }}</h1>
    <h1>{{ personOne.name }}</h1>
    <input type="text" v-model="name">
    <button @click="alertName">Click Me</button> <br>
    <button @click="age++">Increase Age</button>

    <h1>{{ nameTwo.name }}</h1>
    <button @click="personTwo">Click Me</button> 

    <hr>

    <input type="text" v-model="search">

    <div v-for="name in filteredName" :key="name">
      {{name}}
    </div>
  </div>
</template>

<script>
import { computed, reactive, ref } from "vue";
export default {
  name: 'HomeView',
  setup() {
    // Ref -> ref("") ref(20) ref({}) ref([]) 
    // Reactive ->  ref({}) ref([]) cannot use string & number without object & array format

    // let name = "Zwe Htet Aung"; // no reactive value
    let name = ref("Zwe Htet Aung"); //  reactive value
    let age = ref(20); 
    let alertName = ()=>{
      // alert("Welcome to my Vue");
      name.value = "Kyaw Kyaw"
    };
    let personOne = ref({name:"Mg Mg",age:19});

    let nameTwo = reactive({name:"Kaung Kaung"}); //  reactive value 
    let personTwo = ()=>{
      // alert("Welcome to my Vue");
      nameTwo.name = "Nu Nu"
    };

    // Using Computed in compositon Api
    let search = ref("");
    let names = ref(['kyawkyaw','mgmg','susu','nunu']);
    let filteredName = computed(()=>{
       return names.value.filter((name)=>{
         return name.includes(search.value)
       })
    })

    return {name,age,alertName,personOne,personTwo,nameTwo,filteredName,names,search}; // if you call name from setup in template ,  using return in setup
  }
}
</script>
