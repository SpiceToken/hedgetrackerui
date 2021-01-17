<template>
  <v-app dark>
    <v-container>
      <v-row justify="center" align="center">
        <div v-if="error.statusCode === 404" class="justify-center">
          <h1>
            {{ pageNotFound }}
          </h1>
        </div>
        <div v-else justify="center" align="center">
          <h1>
            {{ otherError }}
          </h1>
          <div>
            {{ error }}
          </div>
        </div>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
