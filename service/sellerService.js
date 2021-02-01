const { sellerModels } = require('../models');

const allRegisterSeller = async () => sellerModels.allRegisterSeller({});

const newRegisterSeller = async (name, email, tel, url, actual, desire) => {
  if (!name || !email || !tel || !url || !actual || !desire ) {
    return { error: true, status: 404, message: 'Informação incompleta!' };
  }
  const register = await sellerModels.newRegisterSeller({
    name, email, contact: tel, url, actual, desire,
  });
  return register;
};

module.exports = {
  allRegisterSeller,
  newRegisterSeller,
};
