<template>
<input type="text"
       @input="changeHandler"
       :value="term"
       class="form-control search-input"
       placeholder="Kinolarni qidirish"
       >
</template>

<script>
export default {
props:{
  updateTerm:{
    type:Function,
    required:true
  }
},
  data(){
  return{
    term:'',
   }
  },
  methods:{
    changeHandler(e){
      this.term = e.target.value
      this.updateTerm(this.term)
    }
  }
}
</script>

<style scoped>
.search-input{
  margin-top: 2rem;
  padding: 1.5rem;
  border-radius: 4px;
  box-shadow: 15px 15px 15px rgb(0,0,0,0.15);
  background-color: #fcfaf5;
}
</style>