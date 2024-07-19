import react from "@vitejs/plugin-react";
import {defineConfig} from "vitest/config";

// @ts-ignore
export default defineConfig({
  // @ts-ignore
  plugins: [react()],
  test: {
    environment: "jsdom",
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
