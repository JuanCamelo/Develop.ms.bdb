const express = require("express");
const employeeController = require("../controllers/employeeController");
const router = express.Router();

/**
   * @swagger
   * /employee:
   *   get:
   *     description: listado de emoleados!
   *     tags:
   *      - Employee
   *     produces:
   *      - application/json
   *     responses:
   *       200:
   *         description: employee
*/

router.get('/employee',employeeController.getEmployee); 


module.exports = router;