module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a4209d947b1926ff6c802fff355d4f42'),
  },
});
