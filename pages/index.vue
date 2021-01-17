<template>
  <v-container>
    <v-row justify="center" align="center">
        <v-col cols="12" md="3">
          <digits/>    
        </v-col>
        <v-col cols="12" md="3">
          <digits/>    
        </v-col>
        <v-col cols="12" md="3">
          <digits/>    
        </v-col>
        <v-col cols="12" md="3">
          <digits/>
        </v-col>
      </v-row>
      <v-row>
        <analysis/>
      </v-row>
  </v-container>
</template>

<script>

export default {
  data () {
    return {
      data: {}
    }
  },
  methods: {
    messageReceived: function(data){
      console.log(data)
    },
  },
  beforeCreate() {
    this.$options.sockets = {
      onmessage: data => this.messageReceived(data)
    }
  }

}
</script>