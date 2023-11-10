using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AngularNotes;
using Microsoft.AspNetCore.Razor.TagHelpers;

namespace AngularNotes.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class NotesTagsController : ControllerBase
    {
        private WebNotesContext db = new WebNotesContext();

        private readonly ILogger<NotesTagsController> _logger;

        public NotesTagsController(ILogger<NotesTagsController> logger)
        {
            _logger = logger;
        }

        [HttpGet()]
        public IEnumerable<NotesTag> GetNotesTags()
        {
            //return db.Tags.Where(t=>t.TagId==db.NotesTags.FirstOrDefault(i=>i.NoteId==id).TagId);
            return db.NotesTags.ToArray();
        }
 
        [HttpPost("{noteId, tagId}")]
        public void AddNoteTag([FromBody] int noteId, int tagId)
        {
            db.NotesTags.Add(new NotesTag { NoteId=noteId,TagId=tagId});
            db.SaveChanges();
        }

        [HttpDelete("{noteId, tagId}")]
        public void DeleteNoteTag(int noteId,int tagId)
        {
            var noteTagRow = db.NotesTags.Where(n => n.NoteId == noteId && n.TagId==tagId).FirstOrDefault();
            db.NotesTags.Remove(noteTagRow);
            db.SaveChanges();
        }

    }
}
