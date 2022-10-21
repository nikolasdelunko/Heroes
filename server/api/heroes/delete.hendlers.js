let heroes = require("../../data/heroes");

exports.deleteHeroesById = async (req, res) => {
  if (!heroes) {
    res.status(404).send(`Heroes not found`).end();
  } else {
		heroes.forEach(function(el, i) {
			if (el.id == req.params.id) heroes.splice(i, 1)
		})
    res.send(`hero with id  ${req.params.id} deleted`).end();
  }
};