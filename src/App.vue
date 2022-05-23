<template>
  <v-app id="app">
    <TopBar />

    <v-main class="reportBg">
      <v-container fluid class="d-flex ma-0 pa-0">
        <NavBar />
        <v-container class="ma-0 pa-0 d-flex flex-column justify-space-between">
          <router-view></router-view>
          <v-footer inset padless class="footerBg">
            <v-col class="text-left" cols="12">
              COPYRIGHT © 2022 EdMachina
            </v-col>
          </v-footer>
        </v-container>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import TopBar from "./components/TopBar.vue";
import NavBar from "./components/NavBar.vue";
import "./css/app.css";
export default {
  name: "App",
  components: {
    TopBar,
    NavBar,
  },
  data: function () {
    return {};
  },
};
</script>

