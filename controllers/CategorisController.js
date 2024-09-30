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
