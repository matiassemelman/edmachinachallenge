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
          <v-toolbar-title class="primary--text headline mr-8">My Report</v-toolbar-title>
          
          <v-icon small>content_copy</v-icon>
          <v-icon small>share</v-icon>
          <v-spacer></v-spacer>
        <h1>Hello</h1>
        </v-toolbar>
      </template>
     
    </v-data-iterator>
  </v-container>
</template>


<style scoped lang="scss">


.theme--light.v-toolbar.v-sheet {
  background-color: #F8F8F8
}
</style>