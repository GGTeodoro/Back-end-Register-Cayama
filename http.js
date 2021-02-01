module.exports = (express, routes, cors, bodyParser) => {
  const app = express();
  app.use(bodyParser.json());

  app.use(cors());
  app.use('/Influencer', routes.influencerRoute);
  app.use('/Logista', routes.sellerRoute);

  app.use((error, _req, res, _next) => {
    const { message, status } = error;
    if (status < 500) {
      return res.status(status).json(message);
    }
    res.status(500).send('Something broke!');
  });

  return app;
};
