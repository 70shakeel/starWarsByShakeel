/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                port: '',
                pathname: '/tbone849/star-wars-guide/master/build/assets/img/characters/**',
            },
            {
                protocol: 'https',
                hostname: 'via.placeholder.com',
            }
        ],
    },
};

module.exports = nextConfig;
