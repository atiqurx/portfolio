/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/resume',
          destination: '/Atiqur_Rahman_Resume.pdf',
          permanent: true, 
        },
      ];
    },
  };
  
  export default nextConfig;