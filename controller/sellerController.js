const rescue = require('express-rescue');
const { sellerService } = require('../service');

const allRegisterSeller = rescue(async (_req, res) => {
  const influencerData = await sellerService.allRegisterSeller();

  res.status(200).json(influencerData);
});

const newRegisterSeller = rescue(async (req, res, next) => {
  const { name, email, tel, url, actual, desire } = req.body;
  const NewRegister = await sellerService.newRegisterSeller(
    name, email, tel, url, actual, desire
  );

  if (NewRegister.error) return next(NewRegister);

  res.status(200).json("Cadastrado com sucesso");
});

module.exports = {
  allRegisterSeller,
  newRegisterSeller,
};
