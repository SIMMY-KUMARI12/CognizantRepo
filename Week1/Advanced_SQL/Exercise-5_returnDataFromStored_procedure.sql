-- schema in the SQL_Exercise_storedProcedure.sql 


DELIMITER $$

CREATE PROCEDURE sp_CountEmployees(IN deptId INT)
BEGIN
    SELECT COUNT(*) AS TotalEmployees
    FROM Employees
    WHERE DepartmentID = deptId;
END$$

DELIMITER ;

CALL sp_CountEmployees(3);