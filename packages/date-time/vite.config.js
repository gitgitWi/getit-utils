import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      name: "@getit-utils/date-time",
      formats: ["es", "cjs"],
      fileName: (format) => `date-time.${format}.js`,
    },
  },
});
