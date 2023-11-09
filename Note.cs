using System;
using System.Collections.Generic;

namespace AngularNotes;

public partial class Note
{
    public int NoteId { get; set; }

    public string? NoteHeader { get; set; }

    public string? NoteText { get; set; }

    public DateTime? ReminderDate { get; set; }

    public virtual ICollection<NotesTag> NotesTags { get; set; } = new List<NotesTag>();
}
