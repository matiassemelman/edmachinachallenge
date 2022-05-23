<template>
  <v-navigation-drawer floating permanent width="260" class="flex-shrink-0">
    <v-list>
      <v-list-item-group v-model="selectedItem" class="pa-0 mx-4">
        <v-list-item
          class="py-0 mb-2 navbarTile"
          v-for="(item, i) in items"
          :key="i"
          link @click="$router.push({ path: item.route })"
        >
          <v-list-item-icon class="mr-4 my-2">
            <v-icon v-text="item.action"></v-icon>
          </v-list-item-icon>
          <v-list-item-content >
            <v-list-item-title
              v-text="item.title"
              class="navbarTitle--text"
            ></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <v-list class="d-flex">
      <v-subheader class="navbarSubtitle--text">REPORTS</v-subheader>
      <v-list-item-title class="navbarTitle--text"></v-list-item-title>

      <v-icon right small class="mr-4">list_alt</v-icon>
    </v-list>
    <v-list>
      <v-list-group
        v-for="report in reports"
        :key="report.title"
        v-model="report.active"
        :append-icon="report.action !== 'leaderboard' ? '' : 'navigate_next'"
        active-class="navbarActiveTile rounded-lg navbarActiveText--text"
        class="pa-0 mx-4 my-2 navbarTile"
        @click="$router.push({ path: report.route })"
      >
        <template v-slot:activator>
          <v-icon slot="prependIcon" class="mr-4">{{ report.action }}</v-icon>
          <v-list-item-content
            link
            
          >
            <v-list-item-tile v-text="report.title"></v-list-item-tile>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="child in report.items"
          :key="child.title"
          class="listItemHeight"
        >
          <v-list-item-content>
            <v-list-item-title
              v-text="child.title"
              class="navbarTitle--text"
            ></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>

    <v-subheader class="navbarSubtitle--text">SETTINGS</v-subheader>

    <v-list>
      <v-list-group
        v-for="setting in settings"
        :key="setting.title"
        v-model="setting.active"
        :append-icon="setting.action !== 'leaderboard' ? '' : 'expand_more'"
        active-class="secondary rounded-lg"
        color="secondary"
        class="pa-0 mx-4 my-2 navbarTile"
      >
        <template v-slot:activator>
          <v-icon slot="prependIcon" class="mr-4">{{ setting.action }}</v-icon>

          <v-list-item-content
            link
            @click="$router.push({ path: setting.route })"
          >
            <v-list-item-title
              v-text="setting.title"
              class="navbarTitle--text"
            ></v-list-item-title>
          </v-list-item-content>
        </template>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "NavBar",

  data: () => ({
    items: [
      {
        action: "home",
        items: [],
        route: "/",
        title: "Dashboard",
      },
      {
        action: "calendar_today",
        active: true,
        items: [],
        title: "Calendar",
        route: "/calendar",
      },
    ],
    reports: [
      {
        action: "add_box",
        title: "Machina Hi",
        route: "/machinahi",
        items: [],
      },
      {
        action: "outbound",
        title: "Heads Up",
        route: "/headsup",
        items: [],
      },
      {
        action: "sync",
        title: "Stay Around",
        route: "/stayaround",
        items: [],
      },
      {
        action: "analytics",
        title: "Analytics",
        route: "/analytics",
        items: [],
      },
      {
        action: "leaderboard",
        title: "My Reports",
        route: "/reports",
        items: [{ title: " " }],
      },
    ],
    settings: [
      {
        action: "person",
        items: [],
        title: "Manage Users",
        route: "/manage",
      },
      {
        action: "cloud_download",
        title: "Cloud Connect",
        items: [],
        route: "/cloudconnect",
      },
      {
        action: "api",
        title: "Api Manager",
        items: [],
        route: "/apimanager",
      },
      {
        action: "help",
        title: "Help/Support",
        items: [],
        route: "/help",
      },
    ],
  }),
};
</script>

<style scoped lang="scss">

.theme--dark.v-navigation-drawer {
background-color: #283046;
}

.listItemHeight {
  height: 600px;
}

.navbarTile {
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
}

.navbarTitle--text {
  font-weight: 500;
}

.border {
  border-radius: 5%;
}


</style>
