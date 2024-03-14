/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
        loader: 'custom',
        loaderFile: './loader.ts'
    }
}

module.exports = nextConfig
