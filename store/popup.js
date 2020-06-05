export const state = () => ({
  isPopupSocial: false,
  isPopupForm: false,
});

export const mutations = {
  togglePopupSocial(state) {
    return (state.isPopupSocial = !state.isPopupSocial);
  },
  togglePopupForm(state) {
    return (state.isPopupForm = !state.isPopupForm);
  },
};

export const getters = {
  getPopupSocial(state) {
    return state.isPopupSocial;
  },
  getPopupForm(state) {
    return state.isPopupForm;
  },
};
