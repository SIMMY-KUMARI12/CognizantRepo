using System;

class SearchOperations
{
    // Linear Search
    public static int LinearSearch(Product[] products, string name)
    {
        for (int i = 0; i < products.Length; i++)
        {
            if (products[i].productName.Equals(
                name,
                StringComparison.OrdinalIgnoreCase))
            {
                return i;
            }
        }

        return -1;
    }

    // Binary Search
    public static int BinarySearch(Product[] products, string name)
    {
        int left = 0;
        int right = products.Length - 1;

        while (left <= right)
        {
            int mid = left + (right - left) / 2;

            int result = string.Compare(
                products[mid].productName,
                name,
                StringComparison.OrdinalIgnoreCase);

            if (result == 0)
            {
                return mid;
            }

            if (result < 0)
            {
                left = mid + 1;
            }
            else
            {
                right = mid - 1;
            }
        }

        return -1;
    }
}