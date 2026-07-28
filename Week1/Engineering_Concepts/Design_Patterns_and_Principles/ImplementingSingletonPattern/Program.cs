using System;

namespace ImplementingSingletonPattern
{
    class Program
    {
        static void Main(string[] args)
        {
            Logger logger1 = Logger.GetLogger();
            Logger logger2 = Logger.GetLogger();

            logger1.WriteLog("Application Started");
            logger2.WriteLog("User Logged In");

            if (logger1 == logger2)
            {
                Console.WriteLine("Only one Logger object exists");
            }
            else
            {
                Console.WriteLine("Different Logger objects created");
            }
        }
    }
}