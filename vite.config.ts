import { defineConfig } from "vite";
import prismjsPlugin from "vite-plugin-prismjs";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    prismjsPlugin({
      languages: 'all'
    })
  ],
});
