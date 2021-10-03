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

router.get('/employee', employeeController.getEmployee);

 /**
   * @swagger
   * /employee:
   *   post:
   *     description: registrar epmpleados
   *     tags: 
   *      - Employee
   *     produces:
   *       - application/json
   *     parameters:
   *       - fullname: name
   *         description: name.
   *         in: formData
   *         required: true
   *         type: string
   *     responses:
   *       200:
   *         
   */

  router.post('/employee', employeeController.createadEmployee);

   /**
   * @swagger
   * /employee:
   *   put:
   *     description: registrar epmpleados
   *     tags: 
   *      - Employee
   *     produces:
   *       - application/json
   *     parameters:
   *       - fullname: name
   *         description: name.
   *         in: formData
   *         required: true
   *         type: string
   *     responses:
   *       200:
   *         
   */

    router.put('/employee', employeeController.updateadEmployee);

    /**
   * @swagger
   * /employee:
   *   delete:
   *     description: registrar epmpleados
   *     tags: 
   *      - Employee
   *     produces:
   *       - application/json
   *     parameters:
   *       - fullname: name
   *         description: name.
   *         in: formData
   *         required: true
   *         type: string
   *     responses:
   *       200:
   *         
   */

     router.delete('/employee', employeeController.deleteadEmployee);



module.exports = router;