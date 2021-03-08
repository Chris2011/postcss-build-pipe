const purgecss = require("@fullhuman/postcss-purgecss");
const postcssCustomProperties = require("postcss-custom-properties");

module.exports = {
  plugins: [
    require("postcss-nested"),
    require("autoprefixer"),
    purgecss({
      content: ["./**/*.html"],
    }),
    postcssCustomProperties({
      // TODO: set to false when removing the properties syntax.
      preserve: true,
    }),
    require("cssnano")({
      preset: "advanced",
    }),
    // require("@zeecoder/postcss-container-query"),
  ],
};
