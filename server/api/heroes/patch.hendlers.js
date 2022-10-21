let heroes = require("../../data/heroes");

exports.updateHeroesById = async (req, res) => {
  if (!heroes) {
    res.status(404).send(`Heroes not found`).end();
  } else {
		heroes.forEach(function(el, i) {
			if (el.id == req.params.id) heroes.splice(i, 1, {
				id: req.params.id,
				nickname: req.body.nickname,
				real_name: req.body.real_name,
				origin_description: req.body.origin_description,
				superpowers: req.body.superpowers,
				catch_phrase: req.body.catch_phrase,
				Images: req.body.Images,
						})
		})
    res.send(`hero with id  ${req.params.id} update`).end();
  }
};
