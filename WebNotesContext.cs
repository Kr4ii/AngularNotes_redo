using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;


namespace AngularNotes;

public partial class WebNotesContext : DbContext
{
    public WebNotesContext()
    {
    }

    public WebNotesContext(DbContextOptions<WebNotesContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Note> Notes { get; set; }

    public virtual DbSet<NotesTag> NotesTags { get; set; }

    public virtual DbSet<Tag> Tags { get; set; }

    

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseNpgsql("Host=localhost;Port=5432;Database=web_notes;Username=postgres;Password=DnotesB");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Note>(entity =>
        {
            entity.HasKey(e => e.NoteId).HasName("notes_pkey");

            entity.ToTable("notes");

            entity.Property(e => e.NoteId).HasColumnName("note_id");
            entity.Property(e => e.NoteHeader)
                .HasMaxLength(25)
                .HasColumnName("note_header");
            entity.Property(e => e.NoteText).HasColumnName("note_text");
            entity.Property(e => e.ReminderDate)
                .HasColumnType("timestamp without time zone")
                .HasColumnName("reminder_date");
        });

        modelBuilder.Entity<NotesTag>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("notes_tags_pkey");

            entity.ToTable("notes_tags");

            entity.HasIndex(e => new { e.NoteId, e.TagId }, "notes_tags_note_id_tag_id_key").IsUnique();

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.NoteId).HasColumnName("note_id");
            entity.Property(e => e.TagId).HasColumnName("tag_id");

            entity.HasOne(d => d.Note).WithMany(p => p.NotesTags)
                .HasForeignKey(d => d.NoteId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("notes_tags_note_id_fkey");

            entity.HasOne(d => d.Tag).WithMany(p => p.NotesTags)
                .HasForeignKey(d => d.TagId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("notes_tags_tag_id_fkey");
        });

        modelBuilder.Entity<Tag>(entity =>
        {
            entity.HasKey(e => e.TagId).HasName("tags_pkey");

            entity.ToTable("tags");

            entity.HasIndex(e => e.TagText, "tags_tag_text_key").IsUnique();

            entity.Property(e => e.TagId).HasColumnName("tag_id");
            entity.Property(e => e.TagText)
                .HasMaxLength(25)
                .HasColumnName("tag_text");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
