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
import Analysis from '../components/Analysis.vue'
import Digits from '../components/Digits.vue'
export default {
	components: { Analysis, Digits },

}
</script>