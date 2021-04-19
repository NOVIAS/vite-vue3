import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"), // 设置 `@` 指向 `src` 目录
    },
  },
  base: "./",
  server: {
    port: 4001,
    // 自动打开浏览器
    open: true,
    // 允许跨域
    cors: true,

    // 跨域配置
    // proxy: {
    //   "/api": {
    //     target: "",
    //     changeOrigin: true,
    //     secure: false,
    //     rewrite: (path) => path.replace("/api/", "/"),
    //   },
    // },
  },
});
