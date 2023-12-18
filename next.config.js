/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');

const nextConfig = {
  ...withPWA({
    dest: 'public',
    register: true,
    skipWaiting: true,
    swSrc: 'serice-worker.js',
  }),
};

module.exports = nextConfig;
