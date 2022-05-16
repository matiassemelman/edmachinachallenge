<template>
  <v-navigation-drawer permanent width="20%">
    <v-list rounded>
      
      <v-list-item-group
        v-model="selectedItem"
        color="primary"
        class="mx-2 py-0"

      >
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-icon>
            <v-icon v-text="item.action"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <v-list class='d-flex'>
       <v-subheader>REPORTS</v-subheader>
            <v-list-item-title ></v-list-item-title>
       
       <v-icon right small class="mr-4">list_alt</v-icon>
    </v-list>
    <v-list>
      
      <v-list-group
        v-for="report in reports"
        :key="report.title"
        v-model="report.active"
        :prepend-icon="report.action"
        :append-icon="report.action !== 'leaderboard' ? '' : 'expand_more'"
        active-class="primary rounded-lg"
        color="white"
        class="mx-4 py-0"
      >
   

        <template v-slot:activator>
 
          <v-list-item-content>
            <v-list-item-title v-text="report.title"></v-list-item-title>
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
  
       <v-subheader class="height: 1px" >SETTINGS</v-subheader>

     <v-list>
      
      <v-list-group
        v-for="setting in settings"
        :key="setting.title"
        v-model="setting.active"
        :prepend-icon="setting.action"
        :append-icon="setting.action !== 'leaderboard' ? '' : 'expand_more'"
        active-class="primary rounded-lg"
        color="white"
        class="mx-4 py-0"
      >
   

        <template v-slot:activator>
 
          <v-list-item-content>
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
      }],
      settings : [
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
  height: 400px;
}

.border {
  border-radius: 5%;
}
</style>
