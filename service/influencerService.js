const { influencerModels } = require('../models');

const allRegisterInfluencer = async () => influencerModels.allRegisterInfluencer();

const newRegisterInfluencer = async (name, email, tel, url, actual, desire) => {
  if (!name || !email || !tel || !url || !actual || !desire ) {
    return { error: true, status: 404, message: 'Informação incompleta!' };
  }
  const register = await influencerModels.newRegisterInfluencer({
    name, email, contact: tel, url, actual, desire,
  });
  return register;
};

module.exports = {
  allRegisterInfluencer,
  newRegisterInfluencer,
};
