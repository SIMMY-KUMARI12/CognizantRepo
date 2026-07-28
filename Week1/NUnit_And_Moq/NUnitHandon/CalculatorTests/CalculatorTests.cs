using NUnit.Framework;
using CalcLibrary;

namespace CalculatorTests;

[TestFixture]
public class CalculatorTests
{
    private SimpleCalculator calc;

    [SetUp]
    public void Setup()
    {
        calc = new SimpleCalculator();
    }

    [TestCase(10, 20, 30)]
    [TestCase(5, 5, 10)]
    [TestCase(100, 50, 150)]
    public void Addition_ValidInputs_ReturnsCorrectResult(
        double a,
        double b,
        double expected)
    {
        double actual = calc.Addition(a, b);

        Assert.That(actual, Is.EqualTo(expected));
    }

    [TearDown]
    public void Cleanup()
    {
        calc = null;
    }
}