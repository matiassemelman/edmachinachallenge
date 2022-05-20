<template>
  <v-navigation-drawer
    floating
    permanent
    width="260"
    class="flex-shrink-0"
  >
    <v-list rounded class="px-0">
      <v-list-item-group v-model="selectedItem" class="py-0">
        <v-list-item v-for="(item, i) in items" :key="i">
          <v-list-item-icon class="mr-4">
            <v-icon v-text="item.action"></v-icon>
          </v-list-item-icon>
          <v-list-item-content link @click="$router.push({ path: item.route })">
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <v-list class="d-flex">
      <v-subheader>REPORTS</v-subheader>
      <v-list-item-title></v-list-item-title>

      <v-icon right small class="mr-4">list_alt</v-icon>
    </v-list>
    <v-list>
      <v-list-group
        v-for="report in reports"
        :key="report.title"
        v-model="report.active"
        :append-icon="report.action !== 'leaderboard' ? '' : 'expand_more'"
        active-class="rounded-lg"
        
        class="py-0"
      >
        <template v-slot:activator>
          <v-icon slot="prependIcon" class="mr-4">{{ report.action }}</v-icon>
          <v-list-item-content
            link
            @click="$router.push({ path: report.route })"
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
            <v-list-item-title v-text="child.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>

    <v-subheader>SETTINGS</v-subheader>

    <v-list>
      <v-list-group
        v-for="setting in settings"
        :key="setting.title"
        v-model="setting.active"
        :append-icon="setting.action !== 'leaderboard' ? '' : 'expand_more'"
        active-class=" rounded-lg"
        
        class="py-0"
      >
        <template v-slot:activator>
          <v-icon slot="prependIcon" class="mr-4">{{ setting.action }}</v-icon>

          <v-list-item-content
            link
            @click="$router.push({ path: setting.route })"
          >
            <v-list-item-title v-text="setting.title"></v-list-item-title>
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
.listItemHeight {
  height: 600px;
}

.border {
  border-radius: 5%;
}


</style>
