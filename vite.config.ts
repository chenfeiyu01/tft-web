import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@models": path.resolve(__dirname, "./src/models"),
      "@constants": path.resolve(__dirname, "./src/constants"),
    },
  },
  css: {
    modules: {
      // 修改这里，添加 .m.scss 文件的匹配规则
      generateScopedName: "[name]__[local]__[hash:base64:5]",
      localsConvention: "camelCase",
    },
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@styles/variables" as *;
          @use "@styles/mixins" as *;
        `,
      },
    },
  }
});
