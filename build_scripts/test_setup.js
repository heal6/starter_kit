// this file isn't transpiled, so must use ES5 and CommonJS

// register babel to transpile before our tests run
require("babel-register")

require.extensions[".css"] = function () {}
