module.exports = function(eleventyConfig) {
  // Plugins
  const rssPlugin = require("@11ty/eleventy-plugin-rss");
  const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

  eleventyConfig.addPlugin(rssPlugin);
  eleventyConfig.addPlugin(syntaxHighlight);

  // Pass-through files
  eleventyConfig.addPassthroughCopy("assets");

  // Lazy-loading YouTube embeds
  eleventyConfig.addShortcode("youtube", function(id) {
    return `<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;"><iframe src="https://www.youtube.com/embed/${id}" frameborder="0" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div>`;
  });

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
