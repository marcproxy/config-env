module.exports = {
    process(sourceText, sourcePath) {
      return `module.exports = ${JSON.stringify(sourcePath)};`;
    },
    getCacheKey() {
      return 'fileMock';
    },
  };