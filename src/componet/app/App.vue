<template>
  <div class="app font-monospace">
     <div class="content">
        <AppInfo :allMoviesCount="movies.length" :allMoviesFavorite="movies.filter(c=>c.favourite).length"></AppInfo>
       <div class="search-panel">
          <Search :updateTerm="updateTerm"></Search>
          <AppFilter :filterName="filter" :upfilter="upfilter"></AppFilter>
       </div>
      <Movie :movies="onFilter(onSearchHandler(movies,term),filter)" @onToggle="onToggleHandler" @delete = "onRemove"></Movie>
      <div class="movie-list">
        <p class="display-5 text-danger" v-if="!movies.length && !isLoading">Kinolar hozircha yo'q :(</p>
        <div v-else-if="isLoading" class="spinner-border text-danger text-center" role="status">
           salom
        </div>
      </div>
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
import axios from "axios"



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
     movies:[],
     term:'',
     filter:'all',
     isLoading:false,//statu= holat
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
    },
    async fetchMovie(){
      try {
        this.isLoading = true
          const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')
          const newArr = data.map(item=>({
            id:item.id,
            name:item.title,
            like:false,
            favourite:false,
            viewers:item.id*10
          }))
          this.movies = newArr
      }
      catch (error){
        alert(error.message)
      }
      finally {
        this.isLoading=false
      }



    },
  },
  mounted() {
   this.fetchMovie()
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