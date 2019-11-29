import Vue from "vue";
import Vuex from "vuex";
import { error } from "./error";
import { auth } from "./auth";

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
       error,
       auth
    }
});
