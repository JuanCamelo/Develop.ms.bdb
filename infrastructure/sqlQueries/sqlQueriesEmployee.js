const sqlQueries = {
    INSERT_EMPLOYEE:
        "INSERT INTO " +
        "public.employee(employeeid,fullname, functios) " +
        "VALUES($1,$2,$3) " +
        "RETURNING fullname",

    UPDATE_EMPLOYEE:
        "UPDATE " +
        "public.employee " +
        "SET fullname=$1, functios=$2 " +
        "WHERE employeeid=$3",

    DELETE_EMPLOYEE:
        "DELETE " +
        "FROM public.employee " +
        "where employeeid=$1",

    GET_EMPLOYEE_ID:
        "SELECT p. * " +
        "FROM public.employee p " +
        "WHERE p.employeeid =$1",
}
module.exports = sqlQueries;