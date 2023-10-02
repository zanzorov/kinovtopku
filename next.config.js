/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "avatars.mds.yandex.net"
            }
        ]
    }
}

module.exports = nextConfig
