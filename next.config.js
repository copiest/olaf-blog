const withMDX = require('@next/mdx')({
  extension: /\.mdx$/,
})

/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = withMDX(nextConfig)
