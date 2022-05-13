<template>
  <v-navigation-drawer permanent width="20%">
    <v-list>
      <v-list-group
        v-for="item in items"
        :key="item.title"
        v-model="item.active"
        :prepend-icon="item.action"
        no-action
        append-icon=""
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item v-for="child in item.items" :key="child.title">
          <v-list-item-content>
            <v-list-item-title v-text="child.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
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
        items: [{title: ' '}],
      },
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
