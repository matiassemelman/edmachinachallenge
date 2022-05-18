<template>
  <v-container fluid>
    <v-data-iterator
      :items="desserts"
      item-key="name"
      :items-per-page="4"
      hide-default-footer
    >
      <template v-slot:header>
        <v-container
          class="mb-2 d-flex justify-space-between grey lighten-5"
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
            <v-icon small class="v-btn-size" style="fontsize: 21px"
              >share</v-icon
            >
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
            <v-card class="d-flex justify-center primary pa-4">
              <v-icon color="white">filter_alt</v-icon>
            </v-card>

            <v-icon>dashboard</v-icon>
            <v-icon>app_registration</v-icon>
          </v-card>
        </v-container>
      </template>
    </v-data-iterator>
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
