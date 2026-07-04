using Microsoft.EntityFrameworkCore;

using var context = new AppDbContext();

// Retrieveing all products
var products = await context.Products.ToListAsync();

Console.WriteLine("All Products:");

foreach (var p in products)
{
    Console.WriteLine($"{p.Name} - ₹{p.Price}");
}

Console.WriteLine();

// Finding product by ID
var product = await context.Products.FindAsync(1);

Console.WriteLine($"Found: {product?.Name}");

Console.WriteLine();

// first expensive product
var expensive = await context.Products.FirstOrDefaultAsync(p => p.Price > 50000);

Console.WriteLine($"Expensive: {expensive?.Name}");