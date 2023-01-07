<template>
  <div class="app font-monospace">
     <div class="content">
        <AppInfo :allMoviesCount="movies.length" :allMoviesFavorite="movies.filter(c=>c.favourite).length"></AppInfo>
       <div class="search-panel">
          <Search :updateTerm="updateTerm"></Search>
          <AppFilter :filterName="filter" :upfilter="upfilter"></AppFilter>
       </div>
      <Movie :movies="onFilter(onSearchHandler(movies,term),filter)" @onToggle="onToggleHandler" @delete = "onRemove"></Movie>
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
         viewers: 400,
         favourite:false,
         like:false,
         id:3,
       },
     ],
     term:'',
     filter:'all',
   }
 },
  methods:{
    createMovie(items){
      items.id = this.movies.length+1
      this.movies.push(items)
    },
    onToggleHandler({id,prop}){
      console.log(prop)
      this.movies = this.movies.map(item => {
        if(item.id==id){
          return {...item,[prop]: !item[prop]}
        }
        return item

      })
    },
    onRemove(id){
      this.movies = this.movies.filter(c=>c.id!=id)
    },
    onSearchHandler(arr,term){
        if(term.length == 0){
          return arr
        }
        return arr.filter(c=>c.name.toLowerCase().indexOf(term) > -1)
    },
    updateTerm(term){
    this.term = term
    },
    onFilter(arr,filter){
          switch (filter){
            case 'popular':
              return arr.filter(c => c.like==true)
            break;
            case 'moveViewers':
              return arr.filter(c =>c.viewers>500)
            break;
            default:
              return arr
            break;
          }
    },
    upfilter(filter){
      this.filter = filter
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