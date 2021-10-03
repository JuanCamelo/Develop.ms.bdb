const pool = require('../postgresDB');

const getEmployee = async (fullname, functions) => {
    try {
        const sqlQuery = `
            SELECT p. *
            FROM productos.employee p
            WHERE p.functions=${functions}  
            AND p.fullname=${fullname}        
           `
        const result = await pool.DBConnection.query(sqlQuery);
        return result.rows;

    } catch (error) {
        throw error;
    }
};

module.exports = getEmployee;