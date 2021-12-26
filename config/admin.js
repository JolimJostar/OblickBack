module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd4314ddf20f7762d4a7fd12b0071ca27'),
  },
});
