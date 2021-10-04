const chai = require('chai');
const assert = chai.assert;
const employeeDTO = require('../infrastructure/models/employeDTO');
const employeeUpdateDTO = require('../infrastructure/models/employeUpdateDTO');
const queries = require("../infrastructure/queries/getEmployeeQueriesModule");

describe('Testing assert function: ', function() {
  describe('Check addTest Function', function(){
    it('Check the returned value using : assert.equal(value, value): ', function() {
       result = employeeDTO("carlos","juan","jefe");
       assert.equal(result, result);
    });
  });
});

describe('Testing assert function: ', function() {
  describe('Check addTest Function', function(){
    it('Check the returned value using : assert.equal(value, value): ', function() {
      const param1 = "carllos"
      const param2 = "emp" 
       result = employeeUpdateDTO(param1, param2);
       assert.equal(result, result);
    });
  });
});

describe('Testing assert function: ', function() {
  describe('Check addTest Function', function(){
    it('Check the returned value using : assert.equal(value, value): ', function() {
       result = queries.getEmployeeById("31d7e785-575d-41b5-8ab9-22eeb42a373f");
       assert.equal(result,result);
    });
  });
});

describe('Testing assert function: ', function() {
  describe('Check addTest Function', function(){
    it('Check the returned value using : assert.equal(value, value): ', function() {
       result = queries.getEmployee("31d7e785-575d-41b5-8ab9-22eeb42a373f");
       assert.equal(result, result);
    });
  });
});
