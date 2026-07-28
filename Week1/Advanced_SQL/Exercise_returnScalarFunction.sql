
-- table

CREATE TABLE Departments (
    DepartmentID INT PRIMARY KEY,
    DepartmentName VARCHAR(100)
);

CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    DepartmentID INT,
    Salary DECIMAL(10,2),
    JoinDate DATE,
    FOREIGN KEY (DepartmentID) REFERENCES Departments(DepartmentID)
);

-- data 
INSERT INTO Departments VALUES
(1, 'HR'),
(2, 'IT'),
(3, 'Finance');

INSERT INTO Employees VALUES
(1, 'John', 'Doe', 1, 5000.00, '2020-01-15'),
(2, 'Jane', 'Smith', 2, 6000.00, '2019-03-22'),
(3, 'Bob', 'Johnson', 3, 5500.00, '2021-07-01');

-- created scalar function

DELIMITER $$

CREATE FUNCTION fn_CalculateAnnualSalary(p_Salary DECIMAL(10,2))
RETURNS DECIMAL(10,2)
DETERMINISTIC
BEGIN
    RETURN p_Salary * 12;
END $$

DELIMITER ;

-- annual salary for all employees using sc alar function

SELECT 
    EmployeeID,
    FirstName,
    LastName,
    Salary,
    fn_CalculateAnnualSalary(Salary) AS AnnualSalary
FROM Employees;

-- annual salary for a specific employee using scalar function
SELECT 
    EmployeeID,
    FirstName,
    LastName,
    fn_CalculateAnnualSalary(Salary) AS AnnualSalary
FROM Employees
WHERE EmployeeID = 1;