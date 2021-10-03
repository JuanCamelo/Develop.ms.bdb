const pool = require("../../postgresDB");
const sqlQueries = require("../../sqlQueries/sqlQueriesEmployee");

const updateEmployee = async (params,fullname) => {
    try {
        const result = await pool.DBConnection.query(sqlQueries.UPDATE_EMPLOYEE, [
            ...Object.values(params), fullname,
        ]);
        return result.rows;
    } catch (error) {
        throw error;
    }
};
module.exports = updateEmployee;