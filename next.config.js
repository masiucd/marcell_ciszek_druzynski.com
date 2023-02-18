// import {withContentlayer} from "next-contentlayer"
const {withContentlayer} = require("next-contentlayer")

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
}

module.exports = withContentlayer(nextConfig)
