using Microsoft.AspNetCore.Mvc;
using WebAPI1.Models;

namespace WebAPI1.Controllers
{
    [Route("api/Emp")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private static List<Employee> employees = new List<Employee>
        {
            new Employee
            {
                Id = 1,
                Name = "Rahul",
                Department = "IT",
                Salary = 50000,
                Email = "rahul@gmail.com",
                Age = 25
            },
            new Employee
            {
                Id = 2,
                Name = "Amit",
                Department = "HR",
                Salary = 45000,
                Email = "amit@gmail.com",
                Age = 28
            },
            new Employee
            {
                Id = 3,
                Name = "Priya",
                Department = "Finance",
                Salary = 60000,
                Email = "priya@gmail.com",
                Age = 29
            },
            new Employee
            {
                Id = 4,
                Name = "Sneha",
                Department = "Testing",
                Salary = 42000,
                Email = "sneha@gmail.com",
                Age = 24
            },
            new Employee
            {
                Id = 5,
                Name = "Rohan",
                Department = "Development",
                Salary = 70000,
                Email = "rohan@gmail.com",
                Age = 30
            }
        };

        // GET: api/Employee
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(employees);
        }

        // POST: api/Employee
        [HttpPost]
        public IActionResult Post([FromBody] Employee employee)
        {
            employees.Add(employee);
            return Ok(employee);
        }
    }
}