<template>
  <v-container>
    <v-card class="mx-auto justify-center" height="10em" align="center">
        <template slot="progress">
        <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
        ></v-progress-linear>
        </template>
    <v-card-title>
      <h4 class="green--text text--lighten-2"> {{ parseFloat(value).toFixed(2) }}</h4>
    </v-card-title>
    <v-divider class="mx-4"></v-divider>
    <v-card-title><p>{{ name }}</p></v-card-title>
  </v-card>
  </v-container>
</template>

<script>
export default {
  props: [ 'name', 'value' ] 
}
</script>

<style>

</style>
