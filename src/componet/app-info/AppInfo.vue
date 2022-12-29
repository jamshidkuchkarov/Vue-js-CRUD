<template>
 <div class="app-info">
      <p class="fs-3 text-uppercase">Barcha kinolar soni : {{allMoviesCount}} </p>
      <p class="fs-4 text-uppercase">Ko'rilgan kinolar soni : {{allMoviesFavorite}} </p>
 </div>
</template>

<script>
export default {
 props:{
   allMoviesCount:{
     type:Number,
     required:true
   },
   allMoviesFavorite:{
     type:Number,
     required:true
   }
 }
}

</script>

<style scoped>
.app-info{
  padding: 1.5rem;
  border-radius: 4px;
  box-shadow: 15px 15px 15px rgb(0,0,0,0.15);
  background-color: #fcfaf5;
}
</style>