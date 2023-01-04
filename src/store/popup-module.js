const state = {
    seen: false
};

const actions = {};

const mutations = {
    setSeen(state) {
        state.seen = true;
    }
};

export const popup = {
    namespaced: true,
    state,
    actions,
    mutations
};

