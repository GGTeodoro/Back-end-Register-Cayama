const rescue = require('express-rescue');
const { influencerService } = require('../service');

const allRegisterInfluencer = rescue(async (_req, res) => {
  const influencerData = await influencerService.allRegisterInfluencer();

  res.status(200).json(influencerData);
});

const newRegisterInfluencer = rescue(async (req, res, next) => {
  const { name, email, tel, url, actual, desire } = req.body;
  const NewRegister = await influencerService.newRegisterInfluencer(
    name, email, tel, url, actual, desire
  );

  if (NewRegister.error) return next(NewRegister);

  res.status(200).json("Cadastrado com sucesso");
});

module.exports = {
  allRegisterInfluencer,
  newRegisterInfluencer,
};
