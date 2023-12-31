﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AngularNotes;

namespace AngularNotes.Controllers
{
    [ApiController]
    [Route("api/[controller]")]    
    public class WebTagsController : ControllerBase
    {
        private WebNotesContext db = new WebNotesContext();

        private readonly ILogger<WebTagsController> _logger;

        public WebTagsController(ILogger<WebTagsController> logger)
        {
            _logger = logger;
        }


        [HttpGet]
        public IEnumerable<Tag> GetTags()
        {
            return db.Tags.ToArray();
        }

        [HttpPost]
        public IEnumerable<Tag> AddTag([FromBody] Tag tag)
        {
            db.Tags.Add(tag);
            db.SaveChanges();
            return db.Tags.ToArray();
        }

        [HttpPut("{id}")]
        public IEnumerable<Tag> ChangeTag(int id, [FromBody] Tag tag)
        {
            var tagRow = db.Tags.Where(n => n.TagId == id).FirstOrDefault();
            tagRow = tag;
            db.SaveChanges();
            return db.Tags.ToArray();
        }

        [HttpDelete("{id}")]
        public IEnumerable<Tag> DeleteTag(int id)
        {
            var tagRow = db.Tags.Where(n => n.TagId == id).FirstOrDefault();
            db.Tags.Remove(tagRow);
            db.SaveChanges();
            return db.Tags.ToArray();
        }
    }
}
