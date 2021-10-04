/**
 * Controler used to mange Employee 
 */
const response = require("./responses/responses");
const dbTransaction = require("../infrastructure/commands/DBTransaction/DbTransactionCommandsMudule");

const employeeCommands = require("../infrastructure/commands/employee/EmployeeCommandsModule");

const employeeQueries = require("../infrastructure/queries/getEmployeeQueriesModule");
const employeeDTO = require("../infrastructure/models/employeDTO");
const employeeUpdateDTO = require("../infrastructure/models/employeUpdateDTO");


/**
 * Create Employee
 */
exports.createadEmployee = async (req, res, next) => {
    try {
        const record = employeeDTO(
            req.body.employee.fullname,
            req.body.employee.functios
        );

        await dbTransaction.beginTransaction();
        const adEmployee = await employeeCommands.createEmployee(record);;
        const adEmployeeName = adEmployee[0].fullname;
        await dbTransaction.commitTransaction();

        response.success(req, res, adEmployeeName, 201, "Employee record created successfully!");

    } catch (error) {
        await dbTransaction.rollbackTransaction();
        response.error(req, res, "Employee not created!", 400, error.message);
    }
}

/**
 * Update Employee
 */
exports.updateadEmployee = async (req, res, next) => {
    try {
        const IdEmployee = req.query.employeeid;
        const getEmployeeBy = await employeeQueries.getEmployeeById(IdEmployee);

        //Validate that record exists
        if (getEmployeeBy.length == 0)
            throw new Error("Name not exists");

        //Get values to update
        const fullname = req.body.fullname !== undefined ? req.body.fullname : getEmployeeBy[0].fullname;
        const functions = req.body.functios !== undefined ? req.body.functios : getEmployeeBy[0].functios;

        const record = employeeUpdateDTO(
            fullname,
            functions
        );

        if (fullname != getEmployeeBy[0].fullname || functions != getEmployeeBy[0].functios) {
            await dbTransaction.beginTransaction();
            //validate exists a record functios
            if (functions != getEmployeeBy[0].functios) {
                const valfunctions = await employeeQueries.getEmployeeById(functions);
                if (valfunctions.length >= 1)
                    throw new Error("Exists a relationship boss and Employee");
            };

            await employeeCommands.updateEmployee(record, IdEmployee);
            await dbTransaction.commitTransaction();
        };

        response.success(req, res, record.fullname, 201, "Employee record updated successfully!");

    } catch (error) {
        await dbTransaction.rollbackTransaction();
        response.error(req, res, "Employee not updated!", 400, error.message);
    }
};


/**
 * Delete adCity
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.deleteadEmployee = async (req, res, next) => {
    try {
        const IdEmployee = req.query.employeeid;
        const getEmployeeBy = await employeeQueries.getEmployeeById(IdEmployee);

        //Validate that record exists
        if (getEmployeeBy.length == 0)
            throw new Error("Name not exists");

        await dbTransaction.beginTransaction();
        await employeeCommands.deleteEmployee(IdEmployee);
        await dbTransaction.commitTransaction();

        response.success(req, res, getEmployeeBy.fullname, 201, "Employee record deleted successfully!");

    } catch (error) {
        await dbTransaction.rollbackTransaction();
        response.error(req, res, "Employee not deleted!", 400, error.message);
    }
};

/**
* Get getEmployee
* @param {} req 
* @param {*} res 
* @param {*} next 
*/
exports.getEmployee = async (req, res, next) => {
    try {

        const fullname = req.query.fullname != null ? "'" + req.query.fullname + "'" : "p.fullname";
        const functions = req.query.functions != null ? "'" + req.query.name + "'" : "p.functios";
        const employees = await employeeQueries.getEmployee(fullname, functions);
        response.success(req, res, employees, 200, employees.length);

    } catch (error) {
        await dbTransaction.rollbackTransaction();
        response.error(req, res, "Employee not exists!", 400, error.message);
    }
};