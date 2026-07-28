using System;

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Choose Document Type:");
        Console.WriteLine("1. Word");
        Console.WriteLine("2. PDF");
        Console.WriteLine("3. Excel");

        Console.Write("Enter choice: ");
        int choice = Convert.ToInt32(Console.ReadLine());

        DocumentFactory factory = null;

        // Decide which factory to use based on user input
        switch (choice)
        {
            case 1:
                factory = new WordFactory();
                break;

            case 2:
                factory = new PdfFactory();
                break;

            case 3:
                factory = new ExcelFactory();
                break;

            default:
                Console.WriteLine("Invalid Choice");
                return;
        }

        // Create document using factory method
        IDocument document = factory.CreateDocument();

        // Open the created document
        document.Open();
    }
}