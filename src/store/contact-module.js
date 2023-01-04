import {contactService} from "../services/contactservice";

const state = {status: {}};

const actions = {
    sendContactMessage({ commit }, message) {
        commit('sendContactMessageRequest');
        return contactService.sendContactMessage(message).then(
            () => {
                commit('sendContactMessageSuccess');
            },
            () => {
                commit('sendContactMessageFailure');
            }
        );
    },
};

const mutations = {
    sendContactMessageRequest(state) {
        state.status = { sendingMessage: true };
    },
    sendContactMessageSuccess(state) {
        state.status = { messageSent: true };
    },
    sendContactMessageFailure(state) {
        state.status = { messageFailure: true };
    },
};

export const contact = {
    namespaced: true,
    state,
    actions,
    mutations
};

