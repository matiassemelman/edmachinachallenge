<template>
  <v-container fluid>
    <v-data-iterator
      :items="desserts"
      item-key="name"
      :items-per-page="4"
      hide-default-footer
    >
      <template v-slot:header>
        <v-toolbar class="mb-2 d-flex grey lighten-5" width="70vw" flat>
          <v-card
            class="d-flex grey lighten-5 justify-space-between align-center"
            style="width: 237px; marginRight: 375px"
            elevation="0"
            
          >
            <v-toolbar-title class="primary--text headline font-weight-medium"
              >My Report</v-toolbar-title
            >
            <v-btn icon>
              <v-icon small >content_copy</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon small>share</v-icon>
            </v-btn>
          </v-card>

          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon color="#AA3EFF">highlight_off</v-icon>
          </v-btn>

          <span class="span-filter mr-5 flex-shrink-0" > A 01 - 2022</span>
          <v-btn icon>
            <v-icon color="#AA3EFF">highlight_off</v-icon>
          </v-btn>

          <span class="span-filter mr-5">Age</span>
          <v-btn icon>
            <v-icon color="#AA3EFF">highlight_off</v-icon>
          </v-btn>

          <span class="span-filter mr-5">Career</span>
          <v-btn icon>
            <v-icon color="#AA3EFF">highlight_off</v-icon>
          </v-btn>

          <span class="span-filter mr-5">All</span>

          <v-btn color="primary" x-small height="42px">
            <v-icon color="white" depressed>filter_alt</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>dashboard</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>app_registration</v-icon>
          </v-btn>
        </v-toolbar>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<style scoped lang="scss">
.v-btn--icon.v-size--default .v-icon, .v-icon.v-icon {
  height: 21px;
}

.span-filter {
  color: #AA3EFF;
  font-size: 14px;
  font-weight: 600;
}
</style>
