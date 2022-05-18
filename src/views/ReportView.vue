<template>
  <v-container fluid class="pa-0 px-4">
    <v-container
      fluid
      class="d-flex justify-space-between grey lighten-5"
      flat
      width="1065"
    >
      <v-card
        class="d-flex grey lighten-5 justify-space-between align-center"
        width="237px"
        elevation="0"
      >
        <v-toolbar-title class="primary--text headline font-weight-medium"
          >My Report</v-toolbar-title
        >
        <v-icon small class="v-btn-size" style="fontsize: 21px"
          >content_copy</v-icon
        >
        <v-icon small class="v-btn-size" style="fontsize: 21px">share</v-icon>
      </v-card>

      <v-spacer></v-spacer>
      <v-card
        class="d-flex grey lighten-5 justify-space-between align-center"
        elevation="0"
      >
        <v-icon color="#AA3EFF" class="mr-2">highlight_off</v-icon>

        <span class="span-filter mr-5 flex-shrink-0"> A 01 - 2022</span>
        <v-icon color="#AA3EFF" class="mr-2">highlight_off</v-icon>

        <span class="span-filter mr-5">Age</span>
        <v-icon color="#AA3EFF" class="mr-2">highlight_off</v-icon>

        <span class="span-filter mr-5">Career</span>
        <v-icon color="#AA3EFF" class="mr-2">highlight_off</v-icon>

        <span class="span-filter mr-5">All</span>
        <v-card class="d-flex justify-center primary pa-4 mr-4">
          <v-icon color="white">filter_alt</v-icon>
        </v-card>

        <v-icon class="mr-4">dashboard</v-icon>
        <v-icon>app_registration</v-icon>
      </v-card>
    </v-container>

    <v-row no-gutters>
      <v-col v-for="n in 4" :key="n" cols="12" sm="3">
        <v-card class="ml-3 mr-3" height="164" outlined tile>
          <v-spacer></v-spacer>
        </v-card>
      </v-col>
    </v-row>
    <v-row no-gutters class="mt-5">
      <v-col v-for="n in 3" :key="n" cols="12" sm="4">
        <v-card class="ml-3 mr-3" height="357" outlined tile>
          <v-spacer></v-spacer>
        </v-card>
      </v-col>
    </v-row>
    <v-toolbar-title class="primary--text headline font-weight-medium mt-7 ml-3"
      >New Group</v-toolbar-title
    >
    <v-row no-gutters>
      <v-col v-for="n in 2" :key="n" :cols="n === 1 ? 4 : 8">
        <v-card class="ma-2" tile outlined height="357"> </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
.v-btn--icon.v-size--default .v-icon,
.v-icon.v-icon,
.v-btn-size {
  height: 21px;
}

.span-filter {
  color: #aa3eff;
  font-size: 14px;
  font-weight: 600;
}
</style>
