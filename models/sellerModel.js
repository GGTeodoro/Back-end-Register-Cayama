const connection = require('./connection');

const allRegisterSeller = async () => {
  const db = await connection();
  const register = await db.collection('seller').find({}).toArray();

  return register;
};

const registeredEmailSeller = async (email) => {
  const db = await connection();
  const register = await db.collection('seller').find({ email }).toArray();

  return register;
};

const newRegisterSeller = async (productObj) => {
  console.log(productObj)
  const db = await connection();
  await db.collection('seller').insertOne(productObj);

  return "registrado";
};

module.exports = {
  allRegisterSeller,
  registeredEmailSeller,
  newRegisterSeller,
};
