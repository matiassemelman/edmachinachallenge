<template>
  <v-navigation-drawer permanent width="260">
    <v-list class="mt-4">
      <v-list-item v-for="link in links" :key="link.text">
        <v-btn width="230" depressed color="white">
          <v-icon color="#6E6B7B" class="mx-2">{{ link.icon }}</v-icon>
          <v-list-item-title>{{ link.text }}</v-list-item-title>
        </v-btn>
      </v-list-item>
      <v-list-item>
        <v-card flat class="d-flex align-end font-weight-bold" width="230">
          <!-- ================= HOW TO ACHIEVE THE LIGHTER COLOR???? -->
          <v-list-item-subtitle class="grey--text text--lighten-1"
            >REPORTS</v-list-item-subtitle
          >
          <v-icon class="mx-2" small right>list_alt</v-icon>
        </v-card>
      </v-list-item>
      <v-list-item v-for="report in reports" :key="report.text" width="230">
        <v-btn v-if="report.submenu.length > 0" depressed color="#4436FD">
          <v-icon color="white">{{ report.icon }}</v-icon>
          <v-list-item-title class="white--text"
            >{{ report.text }}
            <v-icon class="ml-10 pr-2" right>list_alt</v-icon>
          </v-list-item-title>
        </v-btn>
        <v-btn v-else width="230" depressed color="white">
          <v-icon color="#6E6B7B">{{ report.icon }}</v-icon>
          <v-list-item-title>{{ report.text }}</v-list-item-title>
        </v-btn>
      </v-list-item>
      <v-list-item>
        <v-card flat class="d-flex align-end font-weight-bold" width="230">
          <!-- ================= HOW TO ACHIEVE THE LIGHTER COLOR???? -->
          <v-list-item-subtitle class="grey--text text--lighten-1"
            >SETTINGS</v-list-item-subtitle
          >
        </v-card>
      </v-list-item>
      <v-list-item v-for="setting in settings" :key="setting.text">
        <v-btn width="230" depressed color="white">
          <v-icon color="#6E6B7B" class="mx-2">{{ setting.icon }}</v-icon>
          <v-list-item-title>{{ setting.text }}</v-list-item-title>
        </v-btn>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "NavBar",

  data: () => ({
    notifictions: 0,
    links: [
      {
        icon: "home",
        text: "Dashboard",
        route: "/",
      },
      {
        icon: "calendar_today",
        text: "Calendar",
        route: "/calendar",
      },
    ],
    reports: [
      {
        icon: "add_box",
        text: "Machina Hi",
        route: "/machinahi",
        submenu: [],
      },
      {
        icon: "outbound",
        text: "Heads Up",
        route: "/headsup",
        submenu: [],
      },
      {
        icon: "sync",
        text: "Stay Around",
        route: "/stayaround",
        submenu: [],
      },
      {
        icon: "analytics",
        text: "Analytics",
        route: "/analytics",
        submenu: [],
      },
      {
        icon: "leaderboard",
        text: "My Reports",
        route: "/reports",
        submenu: [{}],
      },
    ],
    settings: [
      {
        icon: "person",
        text: "Manage Users",
        route: "/manage",
      },
      {
        icon: "cloud_download",
        text: "Cloud Connect",
        route: "/cloudconnect",
      },
      {
        icon: "api",
        text: "Api Manager",
        route: "/apimanager",
      },
      {
        icon: "help",
        text: "Help/Support",
        route: "/help",
      },
    ],
    methods: {
      avatarActions() {
        console.log("hello");
      },
    },
  }),
};
</script>
