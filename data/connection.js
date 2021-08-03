const knex = require("knex");
const config = require('../knexfile.js');
// eslint-disable-next-line no-undef
const environment = process.env.NODE_ENV || "development";

module.exports = knex(config[environment])
// module.exports = knex(config.development);