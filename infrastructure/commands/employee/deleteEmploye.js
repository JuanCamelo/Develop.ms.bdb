const pool = require('../../postgresDB');
const sqlQueries = require('../../sqlQueries/sqlQueriesEmployee');

const deleteEmployee = async (name) => {
    try {
        const result = await pool.DBConnection.query(sqlQueries.DELETE_EMPLOYEE, [name]);
        return result.rows;
    } catch (error) {
        throw error;
    }
};
module.exports = deleteEmployee;