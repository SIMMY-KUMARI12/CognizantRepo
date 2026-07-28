class ForecastOperations
{
    public static double CalculateFutureValue(
        double currentValue,
        double growthRate,
        int years)
    {
        if (years == 0)
        {
            return currentValue;
        }

        double nextValue =
            currentValue +
            (currentValue * growthRate / 100);

        return CalculateFutureValue(
            nextValue,
            growthRate,
            years - 1);
    }
}