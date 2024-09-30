const { products, productId } = require("../Data/Product");
//const { Categoris } = require("../Data/Category");
let currentProductId = productId;
//create product
exports.createProducts = (req, res) => {
  const { name, price, discription, categoryId } = req.body;
  if (!name) {
    return res.status(400).json({ massege: "all details filling mandatory" });
  }
  //  const category = products.find((c) => c.id === categoryId);
  //  console.log(Categoris);
  // console.log(categoryId);

  //  if (!category) {
  //   return res.status(400).json({ masseg: "category is not found" });
  //  }

  const newproduct = {
    id: currentProductId++,
    name,
    price,
    discription,
    categoryId,
  };
  products.push(newproduct);
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

//Delete product

exports.deleteproduct = (req, res) => {
  const prod = products.find((e) => e.id !== parseInt(req.params.id));
  if (prod === -1) return res.status(200).json({ massege: "prod not found" });
  products.slice(prod, 1);
  // res.status(200).json(products);
  res.status(200).json({ massege: "succesfull" });
};

//serch by name
exports.serchName = (req, res) => {
  const name = req.quary;
  const serchproduct = products.find((e) =>
    e.name.tolowerCsae().include(name.tolowerCsae())
  );
  res.json(serchproduct);
};
//filter by categoryid
exports.filtercategoryid = (req, res) => {
  const { categoryId } = req.params;
  const result = products.filter((e) => e.categoryId === parseInt(categoryId));
  console.log(products);
  console.log(categoryId);
  res.status(200).json(result);
};
//filterby price
exports.filterbyprice = (req, res) => {
  const { minimprice, maximprice } = req.params;
  const result = products.filter(
    (e) => e.price >= minimprice && e.price <= maximprice
  );
  res.json(result);
};
