const arrayDDD = [
  11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 24, 27, 28, 31, 32, 33, 34, 35, 37, 38, 41, 42, 43,
  44, 45, 46, 47, 48, 49, 51, 53, 54, 55, 61, 62, 63, 64, 65, 66, 67, 68, 69, 71, 73, 74, 75, 77,
  79, 81, 82, 83, 84, 85, 86, 87, 88, 89, 91, 92, 93, 94, 95, 96, 97, 98, 99
]

const checkInfo = async (name, email, tel, url) => {
  const emailTest = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
  const ddd = parseInt(tel.slice(0, 2))
  console.log(ddd, typeof(ddd))
  if (!email.match(emailTest)) {
    return { error: true, status: 400, message: 'E-mail inválido!' };
  }
  else if (tel.length != 11) {
    return { error: true, status: 400, message: 'O telefone deve conter o DDD seguido do seu número' };
  }
  else if (!/^[0-9]+$/.test(tel)) {
    return { error: true, status: 400, message: 'O telefone deve ser composto apenas por números' };
  }
  else if (name.length < 4) {
    return { error: true, status: 400, message: 'O nome deve possuir no mínimo 4 digitos' };
  }
  else if (!name || !email || !tel || !url ) {
    return { error: true, status: 404, message: 'Informação incompleta!' };
  }
  else if (!arrayDDD.includes(ddd)) {
    return { error: true, status: 404, message: 'DDD Invalido!' };
  }

  return;
};

module.exports = {
  checkInfo,
};
