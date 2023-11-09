using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AngularNotes;

namespace AngularNotes.Controllers
{
    [ApiController]
    [Route("api/[controller]")]    
    public class WebRemindersController : ControllerBase
    {
        private WebNotesContext db = new WebNotesContext();

        private readonly ILogger<WebRemindersController> _logger;

        public WebRemindersController(ILogger<WebRemindersController> logger)
        {
            _logger = logger;
        }


        [HttpGet]
        public IEnumerable<Note> GetReminders()
        {
            return db.Notes.Where(n=>n.ReminderDate.HasValue);
        }

    }
}
