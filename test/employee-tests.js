var chai = require('chai');
var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;
var employeeDTO = require('../infrastructure/models/employeDTO');

describe('Testing assert function: ', function() {
  describe('Check addTest Function', function(){
    it('Check the returned value using : assert.equal(value, value): ', function() {
       result = employeeDTO("carlos","juan","jefe");
       assert.equal(result, result);
    });
  });
})

