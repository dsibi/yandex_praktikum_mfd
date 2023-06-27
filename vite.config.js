import { resolve } from "path";
import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";

export default defineConfig({
  // root: resolve(__dirname, "src"),
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        registation: resolve(
          __dirname,
          "src/pages/registration/registration.html"
        ),
      },
    },
  },
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "src/components"),
      context: {
        fields: [
          { label: "First Name", id: "first_name" },
          { label: "Second Name", id: "second_name" },
          { label: "Login", id: "email" },
          { label: "Email", id: "login" },
          { label: "Password", id: "password" },
          { label: "Phone", id: "phone" },
        ],
        regBtn: "Register",
      },
    }),
  ],
});
