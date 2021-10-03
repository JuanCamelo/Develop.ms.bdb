const pool = require("../../postgresDB");
const sqlQueries = require("../../sqlQueries/sqlQueriesEmployee");

const createADEmployee = async (params) => {
  try {
    const result = await pool.DBConnection.query(sqlQueries.INSERT_EMPLOYEE,
      Object.values(params)
    );
    return result.rows;
  } catch (error) {
    throw error;
  }
};
module.exports = createADEmployee;