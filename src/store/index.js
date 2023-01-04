import Vue from 'vue';
import Vuex from 'vuex';

import { account } from './account-module';
import { alert } from './alert-module';
import { popup } from './popup-module';
import { contact } from './contact-module';
import { admin } from './admin-module';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        alert,
        account,
        popup,
        contact,
        admin
    }
});


