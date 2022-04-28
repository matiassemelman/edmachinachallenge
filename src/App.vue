<template>
  <v-app>
    <v-app-bar app color="primary" dark>
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
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    notifictions: 0,
    //
  }),
};
</script>
