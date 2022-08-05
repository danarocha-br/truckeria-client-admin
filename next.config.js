// eslint-disable-next-line @typescript-eslint/no-var-requires
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  images: {
    domains: ['res.cloudinary.com'],
  },

  // swcMinify: true,
  experimental: {},
  // pwa: {
  //   dest: 'public',
  //   disable: !isProd,
  // },
};
