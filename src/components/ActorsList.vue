<template>
  <div class="mx-3">
    <h2 class="mt-2 grey--text">Popular Actors</h2>
    <v-container fluid>
        <v-row>
            <v-col cols="12" sm="3" :key="actor.id" v-for="actor in this.actors">
                <ActorCard :actor="actor" />
            </v-col>
            <v-col cols="12" class="d-flex justify-center mt-5">
                <v-btn class="mx-2" fab dark small color="error" v-on:click.prevent="previous()">
                    <v-icon dark>
                        fas fa-step-backward
                    </v-icon>
                </v-btn>
                <v-btn class="mx-2" fab dark small color="error" v-on:click.prevent="next()">
                    <v-icon dark>
                        fas fa-step-forward
                    </v-icon>
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
  </div>
</template>

<script lang="js">
import ActorCard from '../components/ActorCard.vue';
export default {
    components: {
        ActorCard
    },
    data() {
        return {
            currentPage: 1,
            actors: []
        }
    },
    mounted(){
        this.fetchActors(this.currentPage);
    },
    methods: {
        async fetchActors(page){
            try {
                const response = await this.$http.get('https://api.themoviedb.org/3/person/popular?page=' + page)
                this.actors = response.data.results;
            } catch (error) {
                console.log(error);
            }
        },
        scroll(){
            window.scroll = () => {
                let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
                if(bottomOfWindow){
                    this.currentPage++;
                    this.fetchActors(this.currentPage++);
                }
            }
        },
        next() {
            this.currentPage++;
            this.fetchActors(this.currentPage);
        },
        previous() {
            this.currentPage--;
            this.fetchActors(this.currentPage);
        },
        },

}
</script>

<style>

</style>