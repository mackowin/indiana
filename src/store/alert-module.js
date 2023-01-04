const state = {
    type: null,
    message: null,
    failed: null
};

const actions = {
    success({ commit }, message) {
        commit('success', message);
    },
    error({ commit }, message) {
        commit('error', message);
    },
    clear({ commit }) {
        commit('clear');
    }
};

const mutations = {
    success(state, message) {
        state.type = 'alert-success';
        state.message = message;
        state.failed = false;
    },
    error(state, message) {
        state.type = 'alert-danger';
        state.message = message;
        state.failed = true;
    },
    clear(state) {
        state.type = null;
        state.message = null;
        state.failed = null;
    }
};

export const alert = {
    namespaced: true,
    state,
    actions,
    mutations
};

