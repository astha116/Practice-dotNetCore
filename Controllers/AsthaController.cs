using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DataLayer;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AsthaWebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AsthaController : ControllerBase
    {
        private DBContext _dbcontext;
        public AsthaController(DBContext programcontext)
        {
            _dbcontext = programcontext;
        }
        [HttpGet]
        public IActionResult index()
        {
            var programs = this._dbcontext.asthaDetails;
            return Ok(programs);
        }
    }
}