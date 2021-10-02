/**
 * Controler used to mange Employee 
 */
const response = require("./responses/responses");
const dbTransaction = require("../infrastructure/commands/DBTransaction/DbTransactionCommandsMudule");

const employeeQueries = require("../infrastructure/queries/getEmployeeQueriesModule");


/**
* Get adCity
* @param {} req 
* @param {*} res 
* @param {*} next 
*/
exports.getEmployee = async (req, res, next) => {
    try {

        const employees = await employeeQueries.getEmployee();
        response.success(req, res, employees, 200, employees.length);

    } catch (error) {
        await dbTransaction.rollbackTransaction();
        response.error(req, res, "Employee not exists!", 400, error.message);
    }
}