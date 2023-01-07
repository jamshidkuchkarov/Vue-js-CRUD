<template>
  <div class="btn-group mt-4">
    <button @click="filterhandler('all')" class="btn btn-outline-dark " :class="[filterName=='all'?'active':'']">Barcha kinolar</button>
    <button @click="filterhandler('popular')" class="btn btn-outline-dark" :class="[filterName=='popular'?'active':'']" >Mashhur kinolar</button>
    <button @click="filterhandler('moveViewers')" class="btn btn-outline-dark" :class="[filterName=='moveViewers'?'active':'']" >Eng ko'p ko'rilgan</button>
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
    filter:'all'
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