import reducer, {
  openModal,
  openModalEdit,
  openModalDel,
  setActiveHero,
	setHeroProfile,
} from "./helpersSlice";

const initialState = {
  modal: false,
  modalDel: false,
  modalEdit: false,
  activeHero: null,
  heroProfile: null,
};

const heroTest = {
	id: 3,
	nickname: "DOCTOR STRANGE",
	real_name: "STEPHEN STRANGE",
	origin_description:
		"Possessing vast magical knowledge and skills to call upon, he now serves as Earth’s newest Master of the Mystic Arts.",
	superpowers:
		"solar energy absorption and healing factor, solar flare and heat vision,",
	catch_phrase:
		"“Look, up in the sky, it's a bird, it's a plane, it's Superman!”",
	Images: "1666476818146-1111.jpg",
}

describe("Testing helpers reducer", () => {
  test("should change state modal delete value to true", () => {
    const action = openModal(true);
    const newState = reducer(initialState, action);
    expect(newState.modal).toBe(true);
  });

  test("should change state modalDel delete value to true", () => {
    const actionDel = openModalDel(true);
    const newState = reducer(initialState, actionDel);
    expect(newState.modalDel).toBe(true);
  });

  test("should change state modalEdit delete value to true", () => {
    const actionEdit = openModalEdit(true);
    const newState = reducer(initialState, actionEdit);
    expect(newState.modalEdit).toBe(true);
  });

  test("activeHero actions save active hero for edit", () => {
    const actionActiveHero = setActiveHero(heroTest);
    const newState = reducer(initialState, actionActiveHero);
		expect(newState.activeHero).toBe(heroTest);
  });

  test("heroProfile actions save payload to data", () => {
		const actionHeroProfile = setHeroProfile(heroTest);
    const newState = reducer(initialState, actionHeroProfile);
		expect(newState.heroProfile).toBe(heroTest);
	});
});
