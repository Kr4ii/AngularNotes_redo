using System;
using System.Collections.Generic;

namespace AngularNotes;

public partial class Tag
{
    public int TagId { get; set; }

    public string? TagText { get; set; }

    public virtual ICollection<NotesTag> NotesTags { get; set; } = new List<NotesTag>();
}
