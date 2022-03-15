module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7a5561dae7951aa9ee8b571448676a63'),
  },
});
