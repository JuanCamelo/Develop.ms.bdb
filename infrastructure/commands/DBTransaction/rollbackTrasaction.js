const pool = require("../../postgresDB");
const sqlQueries = require("../../sqlQueries/sqlQueriesTransaction");

const rollbackTransacion = async () => {
    try {
      const result = await pool.DBConnection.query(
        sqlQueries.ROLLBACK_TRANSACTION
      );
      return result.rows;
    } catch (error) {
      throw error;
    }
  };
  
  module.exports = rollbackTransacion;