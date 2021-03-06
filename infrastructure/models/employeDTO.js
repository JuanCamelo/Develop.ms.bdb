const { v4: uuidv4  } = require('uuid');
const employeeDTO = (
    fullname,
    functions
) => {

    if (fullname == undefined || fullname === '' || fullname == null)
        throw new Error('name is not valid');
    if (functions == undefined || functions === '' || functions == null)
        throw new Error('function is not valid');
    return {  
        employeeid:uuidv4(),      
        fullname: fullname,
        functions: functions,        
    };
};
module.exports = employeeDTO;