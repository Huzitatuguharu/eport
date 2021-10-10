/** @type {import('next').NextConfig} */
const path = require('path');
module.exports = {
  i18n: {
    locales: ['en', 'ja'],
    defaultLocale: 'ja',
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  reactStrictMode: true,
  // distDir: 'build',
};
