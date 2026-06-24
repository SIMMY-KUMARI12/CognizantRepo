CREATE TABLE Departments (
    DepartmentID INT PRIMARY KEY,
    DepartmentName VARCHAR(100)
);

CREATE TABLE Employees (
    EmployeeID INT AUTO_INCREMENT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    DepartmentID INT,
    Salary DECIMAL(10,2),
    JoinDate DATE,
    FOREIGN KEY (DepartmentID) REFERENCES Departments(DepartmentID)
);

INSERT INTO Departments (DepartmentID, DepartmentName) VALUES
(1, 'HR'),
(2, 'Finance'),
(3, 'IT'),
(4, 'Marketing');

INSERT INTO Employees (EmployeeID, FirstName, LastName, DepartmentID, Salary, JoinDate) VALUES
(1, 'Simmy', 'Kumari', 1, 5000.00, '2020-01-15'),
(2, 'Rahul', 'Sharma', 2, 6000.00, '2019-03-22'),
(3, 'Priya', 'Verma', 3, 7000.00, '2018-07-30'),
(4, 'Amit', 'Kumar', 4, 5500.00, '2021-11-05');

-- Exercise 1  -- creating a stored procedure

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

-- Exercise 2

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

-- Exercise 4

CALL sp_GetEmployeesByDepartment(3);

-- Exercise 5

DELIMITER $$

CREATE PROCEDURE sp_CountEmployees(IN deptId INT)
BEGIN
    SELECT COUNT(*) AS TotalEmployees
    FROM Employees
    WHERE DepartmentID = deptId;
END$$

DELIMITER ;

CALL sp_CountEmployees(3);

-- Exercise 6

DELIMITER $$

CREATE PROCEDURE sp_TotalSalary(
    IN deptId INT,
    OUT totalSalary DECIMAL(10,2)
)
BEGIN
    SELECT SUM(Salary)
    INTO totalSalary
    FROM Employees
    WHERE DepartmentID = deptId;
END$$

DELIMITER ;

CALL sp_TotalSalary(3, @totalSalary);

SELECT @totalSalary AS TotalSalary;

-- Exercise 7

DELIMITER $$

CREATE PROCEDURE sp_UpdateEmployeeSalary(
    IN empId INT,
    IN newSalary DECIMAL(10,2)
)
BEGIN
    UPDATE Employees
    SET Salary = newSalary
    WHERE EmployeeID = empId;
END$$

DELIMITER ;

CALL sp_UpdateEmployeeSalary(1, 5500.00);

-- Exercise 8

DELIMITER $$

CREATE PROCEDURE sp_GiveBonus(
    IN deptId INT,
    IN bonusAmount DECIMAL(10,2)
)
BEGIN
    UPDATE Employees
    SET Salary = Salary + bonusAmount
    WHERE DepartmentID = deptId;
END$$

DELIMITER ;

CALL sp_GiveBonus(1, 500.00);

-- Exercise 9

DELIMITER $$

CREATE PROCEDURE sp_UpdateSalaryTransaction(
    IN empId INT,
    IN newSalary DECIMAL(10,2)
)
BEGIN
    START TRANSACTION;

    UPDATE Employees
    SET Salary = newSalary
    WHERE EmployeeID = empId;

    COMMIT;
END$$

DELIMITER ;

CALL sp_UpdateSalaryTransaction(2, 6500.00);

-- Exercise 10

DELIMITER $$

CREATE PROCEDURE sp_GetEmployeesDynamic(
    IN filterColumn VARCHAR(50),
    IN filterValue VARCHAR(100)
)
BEGIN
    SET @sql = CONCAT(
        'SELECT * FROM Employees WHERE ',
        filterColumn,
        ' = ?'
    );

    PREPARE stmt FROM @sql;
    SET @value = filterValue;
    EXECUTE stmt USING @value;
    DEALLOCATE PREPARE stmt;
END$$

DELIMITER ;

CALL sp_GetEmployeesDynamic('FirstName', 'Simmy');

-- Exercise 11

DELIMITER $$

CREATE PROCEDURE sp_UpdateSalaryWithErrorHandling(
    IN empId INT,
    IN newSalary DECIMAL(10,2)
)
BEGIN
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        SELECT 'Error Occurred While Updating Salary' AS Message;
    END;

    UPDATE Employees
    SET Salary = newSalary
    WHERE EmployeeID = empId;

    SELECT 'Salary Updated Successfully' AS Message;
END$$

DELIMITER ;

CALL sp_UpdateSalaryWithErrorHandling(1, 7000.00);

-- Exercise 3

DROP PROCEDURE IF EXISTS sp_GetEmployeesByDepartment;