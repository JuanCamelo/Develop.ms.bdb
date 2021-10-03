const employeeDTO = (
    fullname,
    functions
) => {

    if (fullname == undefined || fullname === '' || fullname == null)
        throw new Error('name is not valid');
    if (functions == undefined || functions === '' || functions == null)
        throw new Error('function is not valid');
    return {
        fullname: fullname,
        functions: functions
    };
};
module.exports = employeeDTO;