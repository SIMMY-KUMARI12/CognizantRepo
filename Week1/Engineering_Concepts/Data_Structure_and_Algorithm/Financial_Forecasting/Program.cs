using System;

class Program
{
    static void Main(string[] args)
    {
        Console.Write("Enter Current Value: ");
        double currentValue =
            Convert.ToDouble(Console.ReadLine());

        Console.Write("Enter Growth Rate (%): ");
        double growthRate =
            Convert.ToDouble(Console.ReadLine());

        Console.Write("Enter Number of Years: ");
        int years =
            Convert.ToInt32(Console.ReadLine());

        ForecastData forecast =
            new ForecastData(
                currentValue,
                growthRate,
                years);

        double futureValue =
            ForecastOperations.CalculateFutureValue(
                forecast.currentValue,
                forecast.growthRate,
                forecast.years);

        Console.WriteLine(
            "\nPredicted Future Value: " +
            futureValue);
    }
}