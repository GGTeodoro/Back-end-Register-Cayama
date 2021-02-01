const connection = require('./connection');

const allRegisterInfluencer = async () => {
  const db = await connection();
  const register = await db.collection('influencer').find({}).toArray();

  return register;
};

const newRegisterInfluencer = async (productObj) => {
  const db = await connection();
  const newProduct = await db.collection('influencer').insertOne(productObj);

  return newProduct.ops[0];
};

module.exports = {
  allRegisterInfluencer,
  newRegisterInfluencer,
};
