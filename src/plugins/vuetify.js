import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
iconfont: 'md'
    },
    theme: {
        themes: {
            light: {
                primary: "#4436FD",
                secondary: "#6E6B7B",
                terciary: "#AA3EFF"
            }
        }
    }
});
