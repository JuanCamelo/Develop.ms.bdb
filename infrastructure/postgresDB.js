const Pool = require("pg").Pool;

var pool;

exports.initPoolDB = () => {
    pool = new Pool({
        user: process.env.USER_DB,
        host: process.env.HOST_DB,
        database: process.env.NAME_DB,
        password: process.env.PORT_DB,
        port: process.env.PASS_DB,
    });
    exports.DBConnection = pool;
};

exports.endPoolDB = () => {
    pool.end();
};