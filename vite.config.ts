import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          router: ["react-router-dom"],
          mui: ["@mui/material", "@emotion/react", "@emotion/styled"],
          d3: ["d3"],
          date: ["date-fns", "date-fns-tz"],
        },
      },
    },
  },
});
