using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace WebAPI1.Filters
{
    public class CustomExceptionFilter : IExceptionFilter
    {
        public void OnException(ExceptionContext context)
        {
            var exception = context.Exception;

            string logPath = Path.Combine(AppContext.BaseDirectory, "error_log.txt");
            string logMessage =
                $"{DateTime.Now:yyyy-MM-dd HH:mm:ss} - {exception.GetType().Name}: {exception.Message}{Environment.NewLine}" +
                $"{exception.StackTrace}{Environment.NewLine}{new string('-', 60)}{Environment.NewLine}";

            File.AppendAllText(logPath, logMessage);

            context.Result = new ObjectResult(new
            {
                Message = "An unexpected error occurred.",
                Detail = exception.Message
            })
            {
                StatusCode = StatusCodes.Status500InternalServerError
            };

            context.ExceptionHandled = true;
        }
    }
}