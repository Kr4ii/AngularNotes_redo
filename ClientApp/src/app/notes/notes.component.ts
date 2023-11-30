import { Component, ViewChild } from '@angular/core';
import { NotebookService } from '../services/notebook.service';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {



  public notesList: [{ noteId: number; noteHeader: string; noteText: string; reminderDate: Date; notesTags: [] }] | undefined;
  public tagsList!: [{ tagId: number; tagText: string; notesTags: [] }];
  public noteTagsList: [{ id: number; tagId: number; noteId: number; }] | undefined;
  public noteId!: number;
  selected: any;
  filtered: any;
  editMode: boolean = false;
  currentNoteId!: number;
  @ViewChild('noteForm') form: NgForm | undefined;


  constructor(public notebook: NotebookService) {

    notebook.getNotes().subscribe(notes => {
      this.notesList = notes;
    })

    notebook.getTags().subscribe(tags => {
      this.tagsList = tags;
    })

    //notebook.getNoteTags(this.noteId).subscribe(tags => {
    //  this.noteTagsList = tags;
    //})

  }

  //список тегов
  onOptionsSelected() {
    console.log(this.selected);
    this.filtered = this.tagsList.filter(t => t.tagText == this.selected);
  }

  onNoteCreate(note: [{/* noteId: number;*/ noteHeader: string; noteText: string; reminderDate: Date; notesTags: [] }]) {
    if (!this.editMode) {
      this.notebook.saveNote(note);
    } else {
      this.notebook.editNote(this.currentNoteId, note);
      this.editMode = false;
    }
    this.notebook.getNotes().subscribe(notes => {
      this.notesList = notes;
    })
    this.form?.setValue({
      noteDate: '',
      noteHeader: '',
      noteTag: '',
      noteText: ''
    });
  }

  getNoteTags(noteId: number) {
    //TO DO получить теги заметки
    //  return this.tagsList?.filter(x => x.tagId ==
    //    this.noteTagsList[{"tagId"}])
  }

  onDeleteNote(noteId: number) {
    this.notebook.deleteNote(noteId);
    this.notebook.getNotes().subscribe(notes => {
      this.notesList = notes;
    })
  }

  onEditNote(noteId: number) {
    this.currentNoteId = noteId;
    let currentNote = this.notesList?.find((n) => { return n.noteId === noteId });
    console.log(currentNote);
    console.log(this.form);
    this.form?.setValue({
      noteDate: currentNote?.reminderDate,
      noteHeader: currentNote?.noteHeader,
      noteTag: currentNote?.notesTags,
      noteText: currentNote?.noteText
    });
    this.editMode = true;
  }

}


