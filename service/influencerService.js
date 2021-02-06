const { checkInfo } = require('../aux/dataTreatment');
const { influencerModel } = require('../models');

const allRegisterInfluencer = async () => {
  const allRegister = await influencerModel.allRegisterInfluencer();

  return allRegister;
}

const newRegisterInfluencer = async (name, email, tel, url) => {
  const testInfo = await checkInfo(name, email, tel, url);

  if (testInfo) return testInfo;

  const testEmail = await influencerModel.registeredEmailInfluencer(email);

  if (testEmail.length > 0) return { error: true, status: 409, message: 'E-mail já cadastrado!' };

  const register = await influencerModel.newRegisterInfluencer({ name, email, contact: tel, url });

  return register;
};

module.exports = {
  allRegisterInfluencer,
  newRegisterInfluencer,
};
