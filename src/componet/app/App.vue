<template>
  <div class="app font-monospace">
     <div class="content">
        <AppInfo :allMoviesCount="movies.length" :allMoviesFavorite="movies.filter(c=>c.favourite).length"></AppInfo>
       <div class="search-panel">
          <Search></Search>
          <AppFilter></AppFilter>
       </div>
      <Movie :movies="movies" @onLike="onLikeHandler"></Movie>
       <MovieAddFrom
           @createMovie="createMovie" ></MovieAddFrom>
     </div>
  </div>
</template>

<script>
import AppInfo from "../app-info/AppInfo.vue"
import Search from "../search-panel/Search.vue"
import AppFilter from "../app-filter/AppFilter.vue"
import Movie from "../movie-list/Movie.vue"
import MovieAddFrom from "../movie-add-from/MovieAddFrom.vue";


export default {
 components:{
   MovieAddFrom,
   Movie,
   AppFilter,
   Search,
   AppInfo,
 },
 data(){
   return{
     movies:[
       {
         name:'omar',
         viewers: 811,
         favourite:true,
         like:true,
         id:1
       },
       {
         name:'amar',
         viewers: 880,
         favourite:true,
         like:false,
         id:2,
       },
       {
         name:'umar',
         viewers: 908,
         favourite:false,
         like:false,
         id:3,
       },
     ]
   }
 },
  methods:{
    createMovie(items){
      items.id = this.movies.length+1
      this.movies.push(items)
    },
    onLikeHandler(id){
      const arr = this.movies.map(item => {
        if(item.id==id){
          item.like = !item.like
        }

      })

    }
  }
}
</script>
<style>
.app{
  height: 100vh;
  color: #000;
}
.content{
  width: 1000px;
  min-height: 700px;
  background: #fff;
  margin: 0 auto;
  padding: 5rem 0;
}
.search-panel{
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: #fcfaf5;
  border-radius: 4px;
  box-shadow: 15px 15px 15px rgb(0,0,0,0.15);

}
</style>