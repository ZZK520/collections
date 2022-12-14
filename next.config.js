/** @type {import('next').NextConfig} */
module.exports = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'image.lexica.art',
          },
          {
            protocol: 'https',
            hostname: 'lexica-serve-encoded-images.sharif.workers.dev',
          },
        ],
      },
}