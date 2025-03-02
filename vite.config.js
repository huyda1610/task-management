import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  esbuild: {
    loader: "tsx",
    include: /src\/.*\.tsx?$/,
    exclude: /node_modules/,
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
  build: {
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("redux")) {
              return "redux-vendor"; // Tách Redux Toolkit
            }
            return "vendor"; // Tất cả các thư viện khác
          }
        },
      },
    },
  },
  server: {
    port: 4200, // Chỉnh sửa port tại đây
    open: true,
  },
  resolve: {
    alias: {
      "@core": path.resolve(__dirname, "src/@core"),
      "@components": path.resolve(__dirname, "src/components"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@layouts": path.resolve(__dirname, "src/layouts"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@services": path.resolve(__dirname, "src/services"),
      "@stores": path.resolve(__dirname, "src/stores"),
      "@themes": path.resolve(__dirname, "src/themes"),
      "@enums": path.resolve(__dirname, "src/enums"),
    },
  },
});

