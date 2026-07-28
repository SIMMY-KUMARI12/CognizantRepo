using System;

class Program
{
    static void Main(string[] args)
    {
        Product[] products =
        {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Mouse", "Electronics"),
            new Product(103, "Keyboard", "Electronics"),
            new Product(104, "Phone", "Electronics"),
            new Product(105, "Tablet", "Electronics")
        };

        Product[] sortedProducts = (Product[])products.Clone();

        // Sorting by Product Name usiing bubble sort
        for (int i = 0; i < sortedProducts.Length - 1; i++)
        {
            for (int j = 0; j < sortedProducts.Length - 1 - i; j++)
            {
                if (string.Compare(
                    sortedProducts[j].productName,
                    sortedProducts[j + 1].productName,
                    StringComparison.OrdinalIgnoreCase) > 0)
                {
                    Product temp = sortedProducts[j];
                    sortedProducts[j] = sortedProducts[j + 1];
                    sortedProducts[j + 1] = temp;
                }
            }
        }

        while (true)
        {
            Console.WriteLine("\n===== Product Search System =====");
            Console.WriteLine("1. Linear Search");
            Console.WriteLine("2. Binary Search");
            Console.WriteLine("3. Exit");

            Console.Write("Enter Choice: ");
            int choice = Convert.ToInt32(Console.ReadLine());

            switch (choice)
            {
                case 1:

                    Console.Write("Enter Product Name: ");
                    string name = Console.ReadLine() ?? "";

                    int index1 =
                        SearchOperations.LinearSearch(products, name);

                    if (index1 != -1)
                    {
                        Console.WriteLine("\nProduct Found:");
                        products[index1].Display();
                    }
                    else
                    {
                        Console.WriteLine("Product Not Found");
                    }

                    break;

                case 2:

                    Console.Write("Enter Product Name: ");
                    name = Console.ReadLine() ?? "";

                    int index2 =
                        SearchOperations.BinarySearch(sortedProducts, name);

                    if (index2 != -1)
                    {
                        Console.WriteLine("\nProduct Found:");
                        sortedProducts[index2].Display();
                    }
                    else
                    {
                        Console.WriteLine("Product Not Found");
                    }

                    break;

                case 3:

                    Console.WriteLine("Exiting...");
                    return;

                default:

                    Console.WriteLine("Invalid Choice");
                    break;
            }
        }
    }
}