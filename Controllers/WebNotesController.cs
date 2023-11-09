using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AngularNotes;

namespace AngularNotes.Controllers
{
    [ApiController]
    [Route("api/[controller]")]    
    public class WebNotesController : ControllerBase
    {
        private WebNotesContext db = new WebNotesContext();

        private readonly ILogger<WebNotesController> _logger;

        public WebNotesController(ILogger<WebNotesController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Note> GetNotes()
        {
            return db.Notes.ToArray();
        }
 
        [HttpPost]
        public void AddNote([FromBody] Note note)
        {
            db.Notes.Add(note);
            db.SaveChanges();
        }

        [HttpPut("{id}")]
        public void ChangeNote(int id, [FromBody] Note note)
        {
            var noteRow = db.Notes.Where(n => n.NoteId == id).FirstOrDefault();
            noteRow = note;
            db.SaveChanges();
        }

        [HttpDelete("{id}")]
        public void DeleteNote(int id)
        {
            var noteRow = db.Notes.Where(n => n.NoteId == id).FirstOrDefault();
            db.Notes.Remove(noteRow);
            db.SaveChanges();
        }

        //TO DO получить теги заметки
    }
}
