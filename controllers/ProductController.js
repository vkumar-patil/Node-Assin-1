const { Products, ProductId, products } = require("../Data/Product");
const { Categoris } = require("../Data/Category");
const currentProductId = ProductId;
//create product
exports.createProducts = (req, res) => {
  const { name, price, discription, categoryId } = req.body;
  if (!name || !price || !discription) {
    return res.status(400).json({ massege: "all details filling mandatory" });
  }
  const category = Categoris.find((c) => c.id === categoryId);
  console.log(Categoris);
  console.log(categoryId);

  //console.log(typeof ProductId);
  if (!category) {
    return res.status(400).json({ masseg: "category is not found" });
  }

  const newproduct = {
    id: currentProductId++,
    name,
    price,
    discription,
    categoryId,
  };
  Products.push(newproduct);
  res.status(201).json(newproduct);
};

//get all product
exports.getallproduct = (req, res) => {
  res.status(200).json(products);
};
//get a single product
exports.getproductsingleid = (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(400).json({ massege: "product not found" });
  }
  res.json(product);
};
//update product
exports.updateproduct = (req, res) => {
  const product = products.find((e) => e.id === parseInt(req.params.id));
  if (!product) {
    res.status(404).json({ massege: "pruduct not found" });
  }
  const { name, discription, price, categoryId } = req.body;
  if (name) product.name = name;
  if (price) product.price = price;
  if (discription) product.discription = discription;
  if (categoryId) product.categoryId = categoryId;

  res.status(202).json(product);
};
