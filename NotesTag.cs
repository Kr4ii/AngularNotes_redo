using System;
using System.Collections.Generic;

namespace AngularNotes;

public partial class NotesTag
{
    public int Id { get; set; }

    public int NoteId { get; set; }

    public int TagId { get; set; }

    public virtual Note Note { get; set; } = null!;

    public virtual Tag Tag { get; set; } = null!;
}
