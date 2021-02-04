const { influencerModel } = require('../models');

const allRegisterInfluencer = async () => {
  const allRegister = await influencerModel.allRegisterInfluencer();

  return allRegister;
}

const newRegisterInfluencer = async (name, email, tel, url, actual, desire) => {
  if (!name || !email || !tel || !url || !actual || !desire ) {
    return { error: true, status: 404, message: 'Informação incompleta!' };
  }

  const testEmail = await influencerModel.registeredEmailInfluencer(email);

  if (testEmail) return { error: true, status: 404, message: 'E-mail já cadastrado!' };
  
  const register = await influencerModel.newRegisterInfluencer({
    name, email, contact: tel, url, actual, desire,
  });

  return register;
};

module.exports = {
  allRegisterInfluencer,
  newRegisterInfluencer,
};
