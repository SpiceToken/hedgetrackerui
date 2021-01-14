<template>
  <v-container>
    <v-card :loading="loading" class="mx-auto">
        <template slot="progress">
        <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
        ></v-progress-linear>
        </template>
    <v-card-title>Datapoint</v-card-title>
    <v-divider class="mx-4"></v-divider>
    <v-card-title>$100.00</v-card-title>
  </v-card>
  </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>
