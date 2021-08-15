import Vue from 'vue';
import Vuex from 'vuex';
import { storage } from '@/_store/account.module';
import { users } from '@/_store/users.module';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        storage,
        users
    }
});
