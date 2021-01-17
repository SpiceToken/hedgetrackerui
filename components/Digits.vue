<template>
  <v-container>    
    <v-badge
        :color="`${color} lighten-3`"
        bottom
        :style="'position:absolute;z-index:1'"
      />
    <v-card class="mx-auto" height="18em">
      
      <v-card-title class="justify-center">
          <h3>{{ name }}</h3>
      </v-card-title>
      <v-divider class="mx-4"></v-divider>
      <v-card-title class="justify-center">
        <div align="center">
          
          <strong><h2 class="light-green--text text--lighten-2" > {{sign}} {{ parseFloat(value).toFixed(2) }}</h2></strong>
          <label>{{  parseDateTime(date).format("dddd, MMMM Do YYYY, h:mm:ss a") }}</label>
        </div>
      </v-card-title>
    </v-card>
  </v-container>
</template>


<script>
import moment from 'moment'

export default {
  props: [ 'name', 'value', 'sign', 'color', 'date'] ,
  methods: {
    parseDateTime (datetime) {
        return moment(datetime)
    }
  }
}
</script>

<style>

</style>
