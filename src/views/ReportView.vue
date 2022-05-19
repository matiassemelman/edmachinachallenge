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

        <v-icon>dashboard</v-icon>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="rgba(0, 0, 0, 0.54)" text v-bind="attrs" v-on="on">
              <v-icon>app_registration</v-icon>
            </v-btn>
          </template>
          <v-list width="208" v-for="(action, index) in actions" :key="index">
            <v-divider v-if="action.icon === 'addchart'"></v-divider>
            <v-list-item dense>
              <v-icon class="mr-2">{{ action.icon }}</v-icon>
              <v-list-item-title>{{ action.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
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
    <v-row no-gutters class="mb-16">
      <v-col v-for="n in 2" :key="n" :cols="n === 1 ? 4 : 8">
        <v-card class="ma-2" tile outlined height="357"> </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    actions: [
      { title: "Export Report", icon: "download " },
      { title: "Share Report", icon: "share" },
      { title: "Report Settings", icon: "tune" },
      { title: "Schedule Report", icon: "schedule" },
      { title: "Edit Report", icon: "dashboard" },
      { title: "Pin Report", icon: "push_pin" },
      { title: "New Report", icon: "addchart" },
      { title: "My Reports", icon: "description" },
    ],
  }),
};
</script>

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

.v-list-item--dense .v-list-item__title {
  font-size: 14px;
}
</style>
