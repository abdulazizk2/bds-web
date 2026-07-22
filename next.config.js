/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Remote sample lecture videos are streamed directly by the <video> element,
    // so no special image domains are required here yet. Add domains if you
    // introduce next/image with remote thumbnails.
    unoptimized: true,
  },
};

module.exports = nextConfig;
