class ForecastData
{
    public double currentValue;
    public double growthRate;
    public int years;

    public ForecastData(
        double currentValue,
        double growthRate,
        int years)
    {
        this.currentValue = currentValue;
        this.growthRate = growthRate;
        this.years = years;
    }
}