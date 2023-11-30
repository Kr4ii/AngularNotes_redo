import { Component } from '@angular/core';
import { NotebookService } from '../services/notebook.service';



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
  //public getNoteTags(noteId: number) {
  //  return this.tagsList?.filter(x => x.tagId ==
  //    this.noteTagsList[{"tagId"}])
  //};

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
    this.notebook.saveNote(note);
    this.notebook.getNotes().subscribe(notes => {
      this.notesList = notes;
    })
  }

  getNoteTags(noteId: number) {
    //TO DO получить теги заметки
  }
}


