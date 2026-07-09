using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WebAPI1.Models;
using WebAPI1.Filters;

namespace WebAPI1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [CustomAuthFilter]

    public class EmployeeController : ControllerBase
    {
        private readonly List<Employee> employees;

        public EmployeeController()
        {
            employees = GetStandardEmployeeList();
        }

        private List<Employee> GetStandardEmployeeList()
        {
            return new List<Employee>
            {
                new Employee
                {
                    Id = 1, Name = "Rahul", Salary = 50000, Permanent = true,
                    Department = new Department { Id = 1, Name = "IT" },
                    Skills = new List<Skill> { new Skill { Id = 1, Name = "C#" }, new Skill { Id = 2, Name = "SQL" } },
                    DateOfBirth = new DateTime(1998, 5, 12)
                },
                new Employee
                {
                    Id = 2, Name = "Amit", Salary = 45000, Permanent = false,
                    Department = new Department { Id = 2, Name = "HR" },
                    Skills = new List<Skill> { new Skill { Id = 3, Name = "Communication" } },
                    DateOfBirth = new DateTime(1996, 3, 20)
                },
                new Employee
                {
                    Id = 3, Name = "Priya", Salary = 60000, Permanent = true,
                    Department = new Department { Id = 3, Name = "Finance" },
                    Skills = new List<Skill> { new Skill { Id = 4, Name = "Excel" } },
                    DateOfBirth = new DateTime(1995, 11, 2)
                }
            };
        }

        [HttpGet]
        [AllowAnonymous]
        [ProducesResponseType(typeof(List<Employee>), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public ActionResult<List<Employee>> Get()
        {
            //  throw new Exception("Simulated failure while fetching employees");
            return Ok(employees);
        }

        [HttpPost]
        public IActionResult Post([FromBody] Employee employee)
        {
            employees.Add(employee);
            return Ok(employee);
        }

        [HttpPut]
        public IActionResult Put([FromBody] Employee employee)
        {
            var existing = employees.FirstOrDefault(e => e.Id == employee.Id);
            if (existing == null) return NotFound();

            existing.Name = employee.Name;
            existing.Salary = employee.Salary;
            existing.Permanent = employee.Permanent;
            existing.Department = employee.Department;
            existing.Skills = employee.Skills;
            existing.DateOfBirth = employee.DateOfBirth;

            return Ok(existing);
        }
    }
}