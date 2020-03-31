const NeDb = require("nedb");

const db = new NeDb({
    filename: "jogos",
    autoload: true
})

module.exports = db;