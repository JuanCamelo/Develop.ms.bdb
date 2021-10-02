/**
 * Controler used to mange Employee 
 */
 const response = require("./responses/responses");
 const dbTransaction = require("../infrastructure/commands/DBTransaction/DbTransactionCommandsMudule");




 /**
 * Get adCity
 * @param {} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.getEmployee = async (req, res, next) => {
    try {

        

    } catch (error) {
        await dbTransaction.rollbackTransaction();
        response.error(req, res, "Employee not exists!", 400, error.message);
    }
}