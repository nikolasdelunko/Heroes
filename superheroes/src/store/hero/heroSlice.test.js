import reducer, {
	setHero
} from "./heroSlice";

const initialState = {
  heroes: null,
};

const heroTest = [{
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
},
{
	id: 1,
	nickname: "DOCTOR STRANGE",
	real_name: "STEPHEN STRANGE",
	origin_description:
		"Possessing vast magical knowledge and skills to call upon, he now serves as Earth’s newest Master of the Mystic Arts.",
	superpowers:
		"solar energy absorption and healing factor, solar flare and heat vision,",
	catch_phrase:
		"“Look, up in the sky, it's a bird, it's a plane, it's Superman!”",
	Images: "1666476818146-1111.jpg",
},
]


test("heroProfile actions save payload to data", () => {
	const actionHeroProfile = setHero(heroTest);
	const newState = reducer(initialState, actionHeroProfile);
	expect(newState.heroes).toBe(heroTest);
});
