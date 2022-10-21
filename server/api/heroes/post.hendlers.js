let heroes = require("../../data/heroes");

const generateId = (data) => {
  const id = Math.floor(Math.random() * (1000 - 1)) + 1;
  return data.find((u) => u.id === id) ? generateId(data) : id;
};

exports.postHero = (req, res) => {
  if (!heroes) {
    res.status(404).send(`heroes not found`).end();
  }

  const requiredKeys = [
    "nickname",
    "real_name",
    "origin_description",
    "superpowers",
    "catch_phrase",
    "Images",
  ];
  const keys = Object.keys(req.body).filter((k) => requiredKeys.includes(k));
  if (keys.length !== requiredKeys.length) {
    res
      .status(400)
      .send(`keys ${requiredKeys.join(",")} are required!`)
      .end();
  }
  keys.forEach((k) => {
    if (req.body[k] === null || req.body === undefined) {
      res.status(400).send(`key ${k} is required`).end();
    }
  });
  const hero = [...keys].reduce(
    (acc, el) => ({ ...acc, [el]: req.body[el] }),
    {}
  );
  hero.id = generateId(heroes);
  heroes.push(hero);
  res.send(`hero name: ${hero.nickname} created! id - ${hero.id}`).end();
};
