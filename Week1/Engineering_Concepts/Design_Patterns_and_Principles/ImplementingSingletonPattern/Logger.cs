using System;

namespace ImplementingSingletonPattern
{
    public class Logger
    {
        private static Logger loggerObject;

        // Private constructor will prevent object creation from outside
        private Logger()
        {
            Console.WriteLine("Logger object created");
        }

        // Returns the single Logger object
        public static Logger GetLogger()
        {
            if (loggerObject == null)
            {
                loggerObject = new Logger();
            }

            return loggerObject;
        }

        // Method used to display log messages
        public void WriteLog(string message)
        {
            Console.WriteLine("Log Message: " + message);
        }
    }
}