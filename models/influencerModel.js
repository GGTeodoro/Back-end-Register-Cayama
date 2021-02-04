const connection = require('./connection');

const allRegisterInfluencer = async () => {
  const db = await connection();
  const register = await db.collection('influencer').find({}).toArray();

  return register;
};

const registeredEmailInfluencer = async (email) => {
  const db = await connection();
  const register = await db.collection('influencer').find({ email }).toArray();

  return register;
};

const newRegisterInfluencer = async (productObj) => {
  const db = await connection();
  await db.collection('influencer').insertOne(productObj);

  return "registrado";
};

module.exports = {
  allRegisterInfluencer,
  newRegisterInfluencer,
  registeredEmailInfluencer,
};
