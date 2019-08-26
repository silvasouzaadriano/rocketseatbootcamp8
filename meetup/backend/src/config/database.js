module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docket',
  database: 'meetup',
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
  },
};
