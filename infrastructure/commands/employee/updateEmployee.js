const pool = require("../../postgresDB");
const sqlQueries = require("../../sqlQueries/sqlQueriesEmployee");

const updateEmployee = async (params,employeeid) => {
    try {
        const result = await pool.DBConnection.query(sqlQueries.UPDATE_EMPLOYEE, [
            ...Object.values(params), employeeid,
        ]);
        return result.rows;
    } catch (error) {
        throw error;
    }
};
module.exports = updateEmployee;