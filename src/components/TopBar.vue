<template>
  <v-app-bar flat color="primary" class="px-2">
   
      <v-icon size="24" color="secondary" class="topbarFont--text">mdi-menu</v-icon>
    
    
      <v-img src="../assets/logo.png" max-height="22"
  max-width="146"></v-img>
   

    <v-spacer></v-spacer>
   
      <v-icon color="secondary"  class="topbarFont--text">mdi-magnify</v-icon>
    
    <v-btn @click="toggleTheme" text rounded>
      <v-icon color="secondary"  class="topbarFont--text">{{this.$vuetify.theme.dark === false ? 'dark_mode' : 'light_mode'}}</v-icon>
    </v-btn>
   
      <v-icon color="secondary"  class="topbarFont--text">settings</v-icon>
    
   
      <v-badge color="red" content="4" overlap class="pl-4">
        <v-icon color="secondary "  class="topbarFont--text" >notifications</v-icon>
      </v-badge>
   
    <div class="pr-3 pl-5" >
      <p class="mb-0 topbarFont--text">John Doe</p>
      <p class="mb-0 topbarFont--text text-right small-size">Admin</p>
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
                <p class=" font-weight-bold mt-3 mb-1">Teclab</p>
                <p class="mt-1">12829347</p>
              </div>

              <div>
                <v-menu top :offset-x="offset">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                    
                      text
                      v-bind="attrs"
                      v-on="on"
                      class="ml-16 mt-4"
                    >
                      <v-icon>navigate_next</v-icon>
                    </v-btn>
                  </template>

                  <v-list class="pb-0">
                    <v-toolbar  class="mt-0">
                      <v-toolbar-title 
                        >All Accounts</v-toolbar-title
                      >
                    </v-toolbar>
                    <v-list-item
                      v-for="(account, index) in accounts"
                      :key="index"
                    >
                      <v-list-item-title
                        ><strong>{{ account.title }}</strong
                        >: {{ account.number }}</v-list-item-title
                      >
                    </v-list-item>
                  </v-list>
                </v-menu>
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
</template>

<style scoped lang="scss">

.small-size {
  font-size: 12px;
}

.v-icon.v-icon {
  height: 21px;
}


.v-toolbar__title {
  font-size: 16px;
  font-weight: 600;
}

.account_toolbar {
  height: 49px;
}
</style>

<script>
export default {
  name: "TopBar",

  data: () => ({
    notifications: 4,
    accounts: [
      { title: "Teclab", number: "12835464" },
      { title: "IPP", number: "123456789" },
    ],
   
  } ),
  methods: {
      toggleTheme() {
        this.$vuetify.theme.dark = ! this.$vuetify.theme.dark
      } 
    }
};
</script>
