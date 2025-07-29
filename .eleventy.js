module.exports = function (eleventyConfig) {
  
  // Copia gli assets del template
  eleventyConfig.addPassthroughCopy("src/assets");
  
  // Copia le librerie vendors
  eleventyConfig.addPassthroughCopy("src/vendors");
  
  return {
    dir: {
      input: "src",
      output: "dist"
    }
  };
};
