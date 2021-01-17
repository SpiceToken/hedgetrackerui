<template>
  <v-container>
    
    <v-badge
        :color="`${color} lighten-3`"
        bottom
        :style="'position:absolute;z-index:1'"
      />
    <v-card class="mx-auto" height="10em">
      
      <v-card-title class="justify-center">
          <strong><h4 class="light-green--text text--lighten-2" > {{sign}} {{ parseFloat(value).toFixed(2) }}</h4></strong>
          
      </v-card-title>
      <v-divider class="mx-4"></v-divider>
      <v-card-title class="justify-center">
        <h5>{{ name }}</h5>
      </v-card-title>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: [ 'name', 'value', 'sign', 'color'] 
}
</script>

<style>

</style>
