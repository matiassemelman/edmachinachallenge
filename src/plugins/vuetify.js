import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
iconfont: 'md'
    },
    theme:  
    {
        themes: {
            light: {
                topbarFont: "white",
                primary: "#4436FD",
                secondary: '#FFFFFF',
                navbarTitle: "#6E6B7B",
                navbarTile: "#2F3850",
                navbarSubtitle: "#BABFC7",
                navbarActiveTile: "#4436FD",
                navbarActiveText: "white"

             
            },
            dark: {
                topbarFont: "white",
                primary: "#000000",
                secondary: '#283046',
                navbarTitle: "#C4C4C4",
                navbarTile: "#FFFFFF",
                navbarSubtitle: "#C4C4C4",
                navbarActiveTile: "#F1BC01",
                navbarActiveText: "#283046"


            }
        }
    }
});
