const pool = require('../postgresDB');

const getEmployee = async () => {
    try {
        const sqlQuery = `
            SELECT p. *
            FROM productos.ventas p
            WHERE p.id=p.id            
           `

        const result = await pool.DBConnection.query(sqlQuery);
        return result.rows;

    } catch (error) {
        throw error;
    }
};

module.exports = getEmployee;