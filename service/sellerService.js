const { checkInfo } = require('../aux/dataTreatment');
const { sellerModel } = require('../models');

const allRegisterSeller = async () => sellerModel.allRegisterSeller({});

const newRegisterSeller = async (name, email, tel, url) => {
  const testInfo = await checkInfo(name, email, tel, url);

  if (testInfo) return testInfo;

  const testEmail = await sellerModel.registeredEmailSeller(email);

  if (testEmail.length > 0) return { error: true, status: 409, message: 'E-mail já cadastrado!' };

  const register = await sellerModel.newRegisterSeller({ name, email, contact: tel, url });

  return register;
};

module.exports = {
  allRegisterSeller,
  newRegisterSeller,
};
