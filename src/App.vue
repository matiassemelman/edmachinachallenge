<template>
  <v-app id="app">
    <TopBar />
    
    <v-main>
      <v-container fluid class="d-flex">
 <NavBar />
      <router-view></router-view>
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
.container, .v-navigation-drawer {
  background-color: #F8F8F8
}



</style>