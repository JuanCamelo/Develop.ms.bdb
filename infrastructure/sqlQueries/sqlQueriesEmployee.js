const sqlQueries = {
    INSERT_EMPLOYEE:
        "INSERT INTO " +
        "productos.employee(fullname, functions) " +
        "VALUES($1,$2) " +
        "RETURNING fullname",

    UPDATE_EMPLOYEE:
        "UPDATE " +
        "productos.employee " +
        "SET fullname=$1, functions=$2 " +
        "WHERE fullname=$3",

    DELETE_EMPLOYEE:
        "DELETE " +
        "FROM productos.employee " +
        "where fullname=$1",

    GET_EMPLOYEE_ID:
        "SELECT p. * " +
        "FROM productos.employee p " +
        "WHERE p.fullname =$1",
}
module.exports = sqlQueries;