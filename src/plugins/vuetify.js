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
                navbarTile: "#FFFFFF",
                navbarSubtitle: "#BABFC7",
                navbarActiveTile: "#4436FD",
                navbarActiveText: "white",
                reportTitle: "#4436FD",
                reportBg: "#F8F8F8",
                filters: "#AA3EFF",
                filterAltText: "white",
                filterAltBg: "#4436FD",
                footerBg: "#8C80F9"

             
            },
            dark: {
                topbarFont: "white",
                primary: "#000000",
                secondary: '#283046',
                navbarTitle: "#C4C4C4",
                navbarTile: "#2F3850",
                navbarSubtitle: "#C4C4C4",
                navbarActiveTile: "#F1BC01",
                navbarActiveText: "#283046",
                reportTitle: "white",
                reportBg: "#171E31",
                filters: "#F1BC01",
                filterAltText: "#F1BC01",
                filterAltBg: "#171E31",
                footerBg: "#000000"


            }
        }
    }
});
