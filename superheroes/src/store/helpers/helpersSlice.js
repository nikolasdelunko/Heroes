import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: false,
  modalDel: false,
  modalEdit: false,
  activeHero: null,
  heroProfile: null,
};

const helpersSlice = createSlice({
  name: "helpers",
  initialState,
  reducers: {
    openModal(state, action) {
      state.modal = action.payload;
    },
    openModalDel(state, action) {
      state.modalDel = action.payload;
    },
    openModalEdit(state, action) {
      state.modalEdit = action.payload;
    },
    setActiveHero(state, action) {
      state.activeHero = action.payload;
    },
    setPhotoName(state, action) {
      state.heroProfile.Images = action.payload;
    },
    setHeroProfile(state, action) {
      state.heroProfile = action.payload;
    },
  },
});

export const {
  openModal,
  openModalDel,
  openModalEdit,
  setActiveHero,
  setPhotoName,
	setHeroProfile
} = helpersSlice.actions;

export default helpersSlice.reducer;
