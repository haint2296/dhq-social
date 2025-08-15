/** @type {import('prettier').Config} */
export default config = {
  semi: false,
  singleQuote: true,
  trailingComma: "all",
  arrowParens: "always",
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  bracketSpacing: true,
  bracketSameLine: false,
  singleAttributePerLine: true,
  plugins: ["prettier-plugin-tailwindcss"],
};

