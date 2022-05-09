<template>
  <v-app>
    <v-app-bar app color="primary" dark flat>
      <v-btn icon>
        <v-icon size="21">mdi-menu</v-icon>
      </v-btn>
      <div>
        <v-img contain src="./assets/logo.png" width="146"></v-img>
      </div>

      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>dark_mode</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>settings</v-icon>
      </v-btn>
      <v-btn icon>
        <v-badge color="red" content="4" overlap>
          <v-icon>notifications</v-icon>
        </v-badge>
      </v-btn>
      <div class="ml-2">
        <p class="mb-0">John Doe</p>
        <p class="mb-0">Admin</p>
      </div>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            class="mx-2"
            v-on:click="avatarActions"
            v-bind="attrs"
            v-on="on"
          >
            <v-avatar>
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-avatar>
            <v-badge
              color="green"
              bottom
              bordered
              dot
              offset-x="15"
              offset-y="-10"
            ></v-badge>
          </v-btn>
        </template>
        <v-list width="208">
          <v-list-item>
            <v-icon class="mr-2">person</v-icon>
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item>
            <v-list-item-title>
              <div class="d-flex">
                <div>
                  <p class="primary--text font-weight-bold mt-3 mb-1">Teclab</p>
                  <p class="mt-1">12829347</p>
                </div>

                <div>
                  <v-btn icon class="mt-3 ml-16">
                    <v-icon>navigate_next</v-icon>
                  </v-btn>
                </div>
              </div>
            </v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item>
            <v-icon class="mr-2">mail</v-icon>
            <v-list-item-title>Inbox</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-icon class="mr-2">notifications</v-icon>
            <v-list-item-title>Notifications</v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item>
            <v-icon class="mr-2">settings</v-icon>
            <v-list-item-title>Account Settings</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-icon class="mr-2">receipt</v-icon>
            <v-list-item-title>Billing</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-icon class="mr-2">logout</v-icon>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main>
      <v-navigation-drawer permanent width="260">
        <v-list class="mt-4">
          <v-list-item v-for="link in links" :key="link.text">
            <v-btn width="230">
              <v-icon class="mx-2">{{ link.icon }}</v-icon>
              <v-list-item-title>{{ link.text }}</v-list-item-title>
            </v-btn>
          </v-list-item>
            <v-list-item>
            <v-card width="230">
              
              <v-list-item-title>Reports</v-list-item-title>
              <v-icon class="mx-2" right>home</v-icon>
            </v-card>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import "./css/app.css";
export default {
  name: "App",

  data: function () {
    return {
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
        },
        {
          icon: "outbound",
          text: "Heads Up",
          route: "/headsup",
        },
        {
          icon: "sync",
          text: "Stay Around",
          route: "/stayaround",
        },
        {
          icon: "analytics",
          text: "Analytics",
          route: "/analytics",
        },
        {
          icon: "leaderboard",
          text: "My Reports",
          route: "/reports",
        },
      ],

      methods: {
        avatarActions() {
          console.log("hello");
        },
      },
    };
  },
};
</script>
