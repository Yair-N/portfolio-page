/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    PUBLIC_URL: './public',
    SKILL_IMAGE: './public/assets/skills/',
  }
}

module.exports = nextConfig
