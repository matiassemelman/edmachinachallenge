import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
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
