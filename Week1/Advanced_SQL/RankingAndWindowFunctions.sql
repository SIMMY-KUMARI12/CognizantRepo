-- Products Table

CREATE TABLE Products (
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(50),
    Category VARCHAR(50),
    Price DECIMAL(10,2)
);

-- Sample Data

INSERT INTO Products VALUES
(1, 'Gaming Laptop', 'Electronics', 95000.00),
(2, 'Smart TV', 'Electronics', 75000.00),
(3, 'Bluetooth Speaker', 'Electronics', 75000.00),
(10, 'Air Conditioner', 'Electronics', 50000.00),

(4, 'Leather Jacket', 'Fashion', 5000.00),
(5, 'Sneakers', 'Fashion', 3500.00),
(6, 'Casual Shoes', 'Fashion', 3500.00),
(11, 'T-Shirt', 'Fashion', 1500.00),

(7, 'Data Structures Book', 'Books', 1200.00),
(8, 'Java Programming Book', 'Books', 900.00),
(9, 'Python Programming Book', 'Books', 900.00),
(12, 'C Programming Book', 'Books', 700.00);

-- ROW_NUMBER()

SELECT
    Category,
    ProductName,
    Price,
    ROW_NUMBER() OVER (
        PARTITION BY Category
        ORDER BY Price DESC
    ) AS RowNum
FROM Products;

-- RANK() and DENSE_RANK()

SELECT
    Category,
    ProductName,
    Price,
    RANK() OVER (
        PARTITION BY Category
        ORDER BY Price DESC
    ) AS RankNum,

    DENSE_RANK() OVER (
        PARTITION BY Category
        ORDER BY Price DESC
    ) AS DenseRankNum
FROM Products;

-- Top 3 by ROW_NUMBER()

SELECT *
FROM (
    SELECT
        Category,
        ProductName,
        Price,
        ROW_NUMBER() OVER (
            PARTITION BY Category
            ORDER BY Price DESC
        ) AS RowNum
    FROM Products
) AS RankedProducts
WHERE RowNum <= 3;

-- Top 3 by RANK()

SELECT *
FROM (
    SELECT
        Category,
        ProductName,
        Price,
        RANK() OVER (
            PARTITION BY Category
            ORDER BY Price DESC
        ) AS RankNum
    FROM Products
) AS RankedProducts
WHERE RankNum <= 3;

-- Top 3 by DENSE_RANK()

SELECT *
FROM (
    SELECT
        Category,
        ProductName,
        Price,
        DENSE_RANK() OVER (
            PARTITION BY Category
            ORDER BY Price DESC
        ) AS DenseRankNum
    FROM Products
) AS RankedProducts
WHERE DenseRankNum <= 3;