const pool = require("../postgresDB");
const sqlQueries = require("../sqlQueries/sqlQueriesEmployee");


const getEmployeeByID = async (fullName) => {
    try {
        const result = await pool.DBConnection.query(sqlQueries.GET_EMPLOYEE_ID, [fullName]);
        return result.rows;

    } catch (error) {
        throw error;
    };
};

module.exports = getEmployeeByID;