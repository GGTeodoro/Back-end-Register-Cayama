const { sellerModel } = require('../models');

const allRegisterSeller = async () => sellerModel.allRegisterSeller({});

const newRegisterSeller = async (name, email, tel, url, actual, desire) => {
  if (!name || !email || !tel || !url || !actual || !desire ) {
    return { error: true, status: 404, message: 'Informação incompleta!' };
  }

  const testEmail = await sellerModel.registeredEmailSeller(email);

  if (testEmail) return { error: true, status: 404, message: 'E-mail já cadastrado!' };

  const register = await sellerModel.newRegisterSeller({
    name, email, contact: tel, url, actual, desire,
  });

  return register;
};

module.exports = {
  allRegisterSeller,
  newRegisterSeller,
};
