/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["cdn.discordapp.com"],
    },
    async rewrites() {
        return [
            {
                source: "/api/:path*",
                destination: "https://kotiasv.vercel.app/api/:path*",
            },
        ]
    },
}

// eslint-disable-next-line no-undef
module.exports = nextConfig
