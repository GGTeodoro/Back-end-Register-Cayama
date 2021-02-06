require('dotenv/config');
const mongoClient = require('mongodb').MongoClient;

const { DB_URL, DB_NAME } = process.env;

module.exports = () =>
  mongoClient
    .connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((connection) => {
        return connection.db(DB_NAME)})
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
