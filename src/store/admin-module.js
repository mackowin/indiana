import {userService} from "../services/userservice";

const state = {
    users: [],
    leads: []
};

const actions = {
    getUsers({ commit }) {
        userService.getUsers()
            .then(
                users => commit('getUsers', users)
            );
    },
    getLeads({ commit }) {
        userService.getLeads()
            .then(
                leads => commit('getLeads', leads)
            );
    }
};

const mutations = {
    getLeads(state, leads) {
        console.log(leads)
        state.leads = leads;
    },
    getUsers(state, users) {
        console.log(users)
        state.users = users;
    }
};

export const admin = {
    namespaced: true,
    state,
    actions,
    mutations
};

