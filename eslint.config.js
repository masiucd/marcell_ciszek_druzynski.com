import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

// import eslintPluginAstro from "eslint-plugin-astro";
// import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

// /** @type {import('eslint').Linter.Config[]} */
// export default [
//   { files: ["**/*.{js,mjs,cjs,ts,astro}"] },
  // { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  // pluginJs.configs.recommended,
  // ...tseslint.configs.recommended,
  // ...eslintPluginPrettierRecommended,
  // ...eslintPluginAstro.configs.recommended,
//   {
//     rules: {
//       "no-unused-vars": "error",
//       "no-undef": "warn",
//       "no-console": "error",
//       "no-constant-condition": "error",
//     },
//   },
// ];


import eslintPluginAstro from 'eslint-plugin-astro';
export default [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  {files: ['**/*.{js,mjs,cjs,ts,astro}']},
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  // ...eslintPluginPrettierRecommended,
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      // override/add rules settings here, such as:
      "astro/no-set-html-directive": "error",
      "no-unused-vars": "error",
      "no-undef": "warn",
      "no-console": "warn",
      "no-constant-condition": "error",
      // no var allowed
      "no-var": "error",
      
    
    }
  }
];