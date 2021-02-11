require('dotenv/config');
const mongoClient = require('mongodb').MongoClient;

// const { DB_URL, DB_NAME } = process.env;
const DB_URL = `mongodb+srv://Jafet:LEGF1995!@cluster0.kiwoy.mongodb.net/NomeQualquer?retryWrites=true&w=majority`;
let schema = null;
module.exports = () => {
  if (schema) return Promise.resolve(schema);

  return mongoClient
    .connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((connection) => connection.db('CayamaLeeds'))
    .then((dbSchema) => {
      schema = dbSchema;
      return schema;
    })
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
}