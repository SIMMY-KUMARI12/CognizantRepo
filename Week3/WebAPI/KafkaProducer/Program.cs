using Confluent.Kafka;

var config = new ProducerConfig
{
    BootstrapServers = "localhost:9092"
};

using var producer = new ProducerBuilder<Null, string>(config).Build();

Console.WriteLine("Kafka Producer Started");
Console.WriteLine("Type 'exit' to quit.");

while (true)
{
    Console.Write("Enter Message: ");

    string? message = Console.ReadLine();

    if (message?.ToLower() == "exit")
        break;

    try
    {
        var result = await producer.ProduceAsync(
            "chat-topic",
            new Message<Null, string>
            {
                Value = message
            });

        Console.WriteLine($"Message Sent : {result.Value}");
    }
    catch (Exception ex)
    {
        Console.WriteLine(ex.Message);
    }
}