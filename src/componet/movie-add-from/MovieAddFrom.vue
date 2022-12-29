<template>
 <div class="moovie-add-form">
   <h3>Yangi kino qo'shish</h3>
   <form class="add-form d-flex" @submit.prevent>
        <input type="text" v-model="name" class="form-control new-movie-label" placeholder="Qanday kino ?" >
        <input type="number" v-model="viewers" class="form-control new-movie-label" placeholder="Nechi marotaba ko'rilgan?" >
     <button class="btn btn-outline-dark" @click="channge" type="submit">Qo'shish</button>
   </form>
 </div>
</template>

<script>
export default {
data(){
  return{
    name:"",
    viewers:"",
  }
},
  methods:{
   channge(){
     const Movie = {
       name:this.name,
       viewers: this.viewers,
       favourite:false,
       like:false,
       id:5,
     }
     this.$emit('createMovie',Movie)
     this.name = ""
     this.viewers = ""
   }
  }

}
</script>

<style scoped>
.moovie-add-form{
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: #fcfaf5;
  border-radius: 4px;
  box-shadow: 15px 15px 15px rgb(0,0,0,0.15);

}
</style>