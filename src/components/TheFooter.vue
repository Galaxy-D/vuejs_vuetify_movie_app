<template>
  <v-footer dark padless>
    <v-card flat tile class="blue white--text text-center" width="100%">
        <v-card-text>
            <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
                <v-icon size="24px">{{icon}}</v-icon>
            </v-btn>
        </v-card-text>
        <v-card-text class="white--text pt-0">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam maxime sed nobis. Optio doloremque eius deserunt fugit? Laudantium perferendis consequatur illo voluptate, sint numquam saepe vero non neque mollitia necessitatibus!
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text class="white--text">
          {{new Date().getFullYear()}} - <strong>Amine BENLAMA</strong>
        </v-card-text>
    </v-card>    
  </v-footer>
</template>

<script lang="js">
export default {
  name:'TheFooter',
  data() {
    return {
      icons:[
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram'
      ]
    }
  },
}
</script>

<style>

</style>