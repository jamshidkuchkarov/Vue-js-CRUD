<template>
  <div class="btn-group mt-4">
    <button v-for="btn in filterButtons " @click="filterhandler(btn.name)" class="btn btn-outline-dark" :key="btn.name" :class="[filterName==btn.name?'active':'']">
     {{btn.title}}
    </button>
  </div>
</template>

<script>
export default {
props:{
  upfilter:{
    type:Function,
    required:true
  },
  filterName:{
    type:String,
    required: true,
  }
},
  data(){
  return{
    filter:'all',
    filterButtons:[
      {
        title:"Barcha kinolar",
        name:"all"
      },
      {
        title:"Mashhur kinolar",
        name:"popular"
      },
      {
        title:"Eng ko'p ko'rilgan",
        name:"moveViewers"
      }
      ]
  }
  },
  methods:{
    filterhandler(filter){
     this.filter = filter
    this.upfilter(this.filter)
    }
  }
}
</script>

<style>

</style>