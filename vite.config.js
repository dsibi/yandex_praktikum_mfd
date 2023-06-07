import { resolve } from "path";
import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";

export default defineConfig({
  // root: resolve(__dirname, "src"),
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        registation: resolve(__dirname, "src/pages/registation.html"),
      },
    },
  },
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "src/components"),
      context: {
        kids: [
          { name: "Jimmy", age: "12" },
          { name: "Sally", age: "4" },
        ],
        fields: ["fdfds", "aaaa", "fdsdddd"],
      },
    }),
  ],
});
