/**
 * @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig
 * @returns {ReturnType<import("@11ty/eleventy/src/defaultConfig")>}
 */
module.exports = function (eleventyConfig) {
  eleventyConfig.addGlobalData("baseLayout", "./_layouts/base.njk");

  return {
    dir: {
      input: "src",
      output: "www",
      // includes: "_includes",
      layouts: "_layouts",
    }
  };
};
