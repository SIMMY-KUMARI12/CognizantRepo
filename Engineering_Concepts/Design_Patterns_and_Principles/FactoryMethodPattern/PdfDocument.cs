using System;
class PdfDocument : IDocument
{
    public void Open()
    {
        Console.WriteLine("PDF Document Opened");
    }
}