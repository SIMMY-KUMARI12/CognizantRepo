-- schema in the SQL_Exercise_storedProcedure.sql 


DELIMITER $$

DROP PROCEDURE IF EXISTS sp_GetEmployeesByDepartment$$

CREATE PROCEDURE sp_GetEmployeesByDepartment(IN deptId INT)
BEGIN
    SELECT EmployeeID,
           FirstName,
           LastName,
           DepartmentID,
           Salary
    FROM Employees
    WHERE DepartmentID = deptId;
END$$

DELIMITER ;
CALL sp_GetEmployeesByDepartment(3);
