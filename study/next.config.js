/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images :{
    remotePatterns:[
      {
        /** https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png **/
        protocol: 'https',
        hostname: 'www.google.com',
        port : '',
        pathname: '/images/**'
      }
    ]
  }
}

module.exports = nextConfig
