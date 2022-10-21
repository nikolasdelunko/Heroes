let heroes = require("../../data/heroes");

exports.getHeroes = (req, res) => {
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const result = {};
	result.length = heroes.length

  if (endIndex < heroes.length) {
    result.next = {
      page: page + 1,
      limit: limit,
    };
  }

  if (startIndex > 0) {
    result.previous = {
      page: page - 1,
      limit: limit,
    };
  }

  result.result = heroes.slice(startIndex, endIndex);

  if (!heroes) {
    res.status(404).send(`heroes not found`).end();
  } else {
    res.send(result).end();
  }
};


