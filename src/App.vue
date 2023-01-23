<template>
  <v-app>
    <NavBar></NavBar>   
    <v-main>
      <router-view/>
    </v-main>
    <TheFooter></TheFooter> 
  </v-app>
</template>

<script lang="js">
  import NavBar from "./components/NavBar.vue";
  import TheFooter from "./components/TheFooter.vue";
  export default {
    name: 'App',
    components:{
      NavBar,
      TheFooter
    },
    data: () => ({
      //
    }),
  };
</script>
