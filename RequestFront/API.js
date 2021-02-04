const axios = require('axios');

export const influencer = async (name, email, tel, url, actual, desire) => {
  const data = await axios.post('http://localhost:8001/Influencer/register', {
    name,
    email,
    tel,
    url,
    actual,
    desire,
  })
    .then((response) => response)
    .catch((err) => {
      const errorMessage = { error: true, err };
      return errorMessage;
    });
  return data;
};

export { influencer as registerInfluencer };

export const seller = async (name, email, tel, url, actual, desire) => {
  const data = await axios.post('http://localhost:8001/Logista/register', {
    name,
    email,
    tel,
    url,
    actual,
    desire,
  })
    .then((response) => response)
    .catch((err) => {
      const errorMessage = { error: true, err };
      return errorMessage;
    });
  return data;
};

export { seller as registerSeller };
