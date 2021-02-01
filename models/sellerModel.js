const connection = require('./connection');

const allRegisterSeller = async () => {
  const db = await connection();
  const register = await db.collection('seller').find({}).toArray();

  return register;
};

const newRegisterSeller = async (productObj) => {
  const db = await connection();
  const newProduct = await db.collection('seller').insertOne(productObj);

  return newProduct.ops[0];
};

module.exports = {
  allRegisterSeller,
  newRegisterSeller,
};
