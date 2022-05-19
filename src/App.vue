<template>
  <v-app id="app">
    <TopBar />

    <v-main>
      <v-container fluid class="d-flex ma-0 pa-0">
        <NavBar />
        <v-container class="ma-0 pa-0">
          <router-view></router-view>
          <v-footer
            absolute
            inset
            padless
            class="indigo lighten-1 white--text mt-16"
          >
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

<style scoped lang="scss">
.container,
.v-navigation-drawer {
  background-color: #f8f8f8;
}
</style>
