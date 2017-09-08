var solc = require("solc");

module.exports = function(content) {
    this.cacheable && this.cacheable();
    this.value = content;
    const compiled = solc.compile(content, 1);

    return `module.exports = ${JSON.stringify(compiled)}`;
}
