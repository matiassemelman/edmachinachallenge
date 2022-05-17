<template>
   <v-container fluid>
  
    <v-data-iterator
      :items="desserts"
      item-key="name"
      :items-per-page="4"
      hide-default-footer
    >
    <template v-slot:header>
        <v-toolbar
          class="mb-2 d-flex grey lighten-5"
          width="70vw"
          flat
        >
        <v-card class="d-flex grey lighten-5 justify-space-between " style="width:237px" elevation="0">
    <v-toolbar-title class="primary--text headline font-weight-medium" >My Report</v-toolbar-title>
          <button icon>
            <v-icon small>content_copy</v-icon>
          </button>
          <button icon>
            <v-icon small>share</v-icon>
          </button>
        </v-card>
    
          
          <v-spacer></v-spacer>
          <v-icon>highlight_off</v-icon>
          <v-icon>highlight_off</v-icon>

          <v-icon>highlight_off</v-icon>
          <v-icon>highlight_off</v-icon>


          <v-icon>filter_alt</v-icon>
   
        </v-toolbar>
      </template>
     
    </v-data-iterator>
  </v-container>
</template>


<style scoped lang="scss">

</style>