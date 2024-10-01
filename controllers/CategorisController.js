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
  const result = Categoris.find((e) => e.id === parseInt(req.params.id));
  if (!result) return res.status(400).json({ massege: "result not found" });
  res.json(result);
};

//update category

exports.updatecategory = (req, res) => {
  const result = Categoris.find((cat) => cat.id === parseInt(req.params.id));
  if (!result) res.status(404).json({ massege: "result not found" });
  const { name } = req.body;
  if (name) result.name = name;
  res.json(result);
};

//delete category
exports.deletecategory = (req, res) => {
  const categoryIndex = Categoris.findIndex(
    (cat) => cat.id !== parseInt(req.params.id)
  );
  if (categoryIndex == -1)
    return res.status(404).json({ massege: "categoryIndex not found" });
  Categoris.splice((categoryIndex, 1));
  res.status(200).json({ massege: "success" });
};
