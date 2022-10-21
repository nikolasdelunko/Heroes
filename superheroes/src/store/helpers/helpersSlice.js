import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: false,
  modalDel: false,
  modalEdit: false,
  activeHero: null,
	activeHeroName: null,
};

const userSlice = createSlice({
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
		setActiveHeroName(state, action) {
      state.activeHeroName = action.payload;
    },
  },
});

export const {
  openModal,
  openModalDel,
  openModalEdit,
  setActiveHero,
	setActiveHeroName
} = userSlice.actions;

export default userSlice.reducer;
