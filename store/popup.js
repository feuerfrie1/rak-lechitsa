export const state = () => ({
  isPopupShown: false,
});

export const mutations = {
  togglePopUp(state) {
    state.isPopupShown = !state.isPopupShown;
  },
};

export const getters = {
  getPopupShown(state) {
    return state.isPopupShown;
  },
};
