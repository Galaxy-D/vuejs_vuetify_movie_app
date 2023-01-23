<template>
  <div>
    <PopularMovies/>
    <UpComingMovies/>
  </div>
</template>

<script>
  import PopularMovies from '../components/PopularMovies.vue';
  import UpComingMovies from '../components/UpComingMovies.vue';
  export default {
    name: 'HomeView',
    components: {
      PopularMovies,
      UpComingMovies
    },
  }
</script>
