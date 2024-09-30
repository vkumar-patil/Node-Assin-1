const { Categoris, CategoryId } = require("../Data/Category");
let createcartegoryId = CategoryId;

//create category
exports.CreateCategori = (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(404).send({ massege: "name not found" });
  const newcategory = {
    id: createcartegoryId++,
    name,
  };
  Categoris.push(newcategory);
  res.status(201).json(newcategory);
};
//get all Catgoris
exports.getallCategori = (req, res) => {
  res.status(200).send(Categoris);
};

//single category

exports.getcategoryId = (req, res) => {
  const result = Categoris.find((e) => e.id === parent(req.params.id));
  if (!result) return res.status(400).json({ massege: "result not found" });
  res.json(result);
};
