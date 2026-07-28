using System;

class Product
{
    public int productId;
    public string productName;
    public string category;

    public Product(int productId, string productName, string category)
    {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }

    public void Display()
    {
        Console.WriteLine("Product ID: " + productId +
                          ", Product Name: " + productName +
                          ", Category: " + category);
    }
}