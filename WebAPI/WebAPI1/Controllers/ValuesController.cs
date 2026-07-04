using Microsoft.AspNetCore.Mvc;

namespace WebAPI1.Controllers{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        // GET: api/values
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(new string[]
            {
                "Value1",
                "Value2",
                "Value3"
            });
        }

        // POST: api/values
        [HttpPost]
        public IActionResult Post([FromBody] string value)
        {
            return Ok("Received: " + value);
        }
    }
}