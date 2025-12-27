/** @type {import('next').NextConfig} */
const nextConfig = {
  // Output as static HTML/CSS/JS files for optimal performance
  output: 'export',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Trailing slash for consistency
  trailingSlash: false,
  
  // TypeScript configuration
  typescript: {
    // Ignore old Vite files during build
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
