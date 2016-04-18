var wrapper = require("./wrapper");
var commands = require("./commands");

function writer () {
}

writer.prototype.set = function (key, val, cb) {
    wrapper.wrap(commands.SET, key, val, function (req) {
        cb(req);
    }); 
}

module.exports = new writer();


