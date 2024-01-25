/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
       remotePatterns:[{
        protocol: "https",
        hostname:"links.rv5.com"
       } ]
    }
}

module.exports = nextConfig
