﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AngularNotes;
using System.Globalization;

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
            var notes = db.Notes;
            /*foreach (var row in notes)
            {
                row.NotesTags = db.Tags.Where(t => t.TagId == db.NotesTags.FirstOrDefault(i => i.NoteId == row.NoteId).TagId) as List<NotesTag>;
            }*/
            return notes;
        }
 
        [HttpPost]
        public void AddNote([FromBody] Note note)
        {
            System.Console.WriteLine(note.ReminderDate.ToString());
            note.ReminderDate = DateTime.ParseExact(note.ReminderDate.ToString(), "yyyy-MM-ddThh:mm", CultureInfo.InvariantCulture);
            //TimeZoneInfo.ConvertTimeBySystemTimeZoneId((DateTime)note.ReminderDate, "Russian Standard Time");
            System.Console.WriteLine(note.ReminderDate.ToString());
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

        
    }
}
