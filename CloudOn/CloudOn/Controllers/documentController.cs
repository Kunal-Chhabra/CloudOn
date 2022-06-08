using System;
using System.Collections.Generic;
using System.Linq;

using System.Threading.Tasks;
using CloudOn.Models;
using CloudOn.RequestModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CloudOn.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class documentController : ControllerBase
    {
        // GET: api/document
        private readonly cloudOnContext _d;
        public documentController(cloudOnContext doc)
        {
            _d = doc;
        }
        [HttpGet]
        public IActionResult Get3()
        {
            var D = _d.Documents.ToList();
            return Ok(D);
        }
        [HttpGet("{id:int}")]
        public IActionResult Get(int id)
        {
            try
            {
                var result = _d.Documents.Where(obj => obj.FolderId == id);

                if (result == null) return NotFound();

                return Ok(result);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Error retrieving data from the database");
            }
        }


        // POST: api/document
        [HttpPost]
        public void Post([FromBody] Document value)
        {
            Documents obj1 = new Documents();
            obj1.DName = value.DName;
            obj1.ContentType = value.ContentType;
            obj1.Size = value.Size;
            obj1.FolderId = value.FolderId;
            obj1.CreatedAt = value.CreatedAt;
            obj1.CreatedBy = value.CreatedBy;
            obj1.IsDeleted = value.IsDeleted;
            _d.Documents.Add(obj1);
            _d.SaveChanges();
        }

        // PUT: api/document/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var delete = _d.Documents.Where(o => o.DocId == id).ToList();
            delete.ForEach(res => _d.Documents.Remove(res));
            _d.SaveChanges();
        }

        [HttpGet("folder/{id}/{value}")]
        public IActionResult Get(int id, string value)
        {
            var result = _d.Documents.Where(obj => (obj.DName.Contains(value) && obj.FolderId == id));
            return Ok(result);
        }






    }
}
