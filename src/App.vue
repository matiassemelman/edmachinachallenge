<template>
  <v-app>
    <TopBar />
    <v-main>
      <NavBar />
      <router-view></router-view>
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
