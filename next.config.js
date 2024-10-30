/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    env: {
        stackbitPreview: process.env.STACKBIT_PREVIEW
    },
    trailingSlash: true,
    reactStrictMode: true,
    swcMinify: true,
    // experimental: { 
    //     netlifyFunctions: true, // Enable Netlify Functions for forms - added by Ash
    // },
};

module.exports = nextConfig;
