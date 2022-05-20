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
                primary: "#4436FD",
                secondary: '#FFFFFF'
             
            },
            dark: {
                primary: "#000000",
                secondary: '#FFFFFF'
            }
        }
    }
});
