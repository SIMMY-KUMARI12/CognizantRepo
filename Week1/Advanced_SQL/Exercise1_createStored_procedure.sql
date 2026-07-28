-- schema in the SQL_Exercise_storedProcedure.sql 

DELIMITER $$

CREATE PROCEDURE sp_GetEmployeesByDepartment(IN deptId INT)
BEGIN
    SELECT EmployeeID,
           FirstName,
           LastName,
           DepartmentID
    FROM Employees
    WHERE DepartmentID = deptId;
END$$

DELIMITER ;

DELIMITER $$

CREATE PROCEDURE sp_InsertEmployee(
    IN p_FirstName VARCHAR(50),
    IN p_LastName VARCHAR(50),
    IN p_DepartmentID INT,
    IN p_Salary DECIMAL(10,2),
    IN p_JoinDate DATE
)
BEGIN
    INSERT INTO Employees
    (FirstName, LastName, DepartmentID, Salary, JoinDate)
    VALUES
    (p_FirstName, p_LastName, p_DepartmentID, p_Salary, p_JoinDate);
END$$

DELIMITER ;