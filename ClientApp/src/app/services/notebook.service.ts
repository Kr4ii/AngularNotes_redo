import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotebookService {

  constructor(private http: HttpClient ) { }

  public notes: Observable<void> = of();
  public tags: Observable<void> = of();

  getNotes(): Observable<[{ noteId: number; noteHeader: string; noteText: string; reminderDate: Date; notesTags: [] }]> {
    return this.http.get<[{ noteId: number; noteHeader: string; noteText: string; reminderDate: Date; notesTags: [] }]>('https://localhost:7185/api/webnotes');
  }

  saveNote(note: [{/* noteId: number;*/ noteHeader: string; noteText: string; reminderDate: Date; notesTags: [] }]){
    console.log(note);
    this.http.post('https://localhost:7185/api/webnotes', note).subscribe((res) => {
      console.log(res);
    });
  }

  getTags(): Observable<[{ tagId: number; tagText: string; notesTags: [] }]> {
    return this.http.get<[{ tagId: number; tagText: string; notesTags: [] }]>('https://localhost:7185/api/webtags');
  }

  getNoteTags(noteId: number ): Observable<[{ id: number, tagId: number; noteId: number }]> {
    const params = new HttpParams()
      .set('noteId', noteId);
    return this.http.get<[{ id: number, tagId: number; noteId: number }]>('https://localhost:7185/api/notetags', {params});
  }

  deleteNote(noteId: number) {
    console.log(noteId);
    this.http.delete('https://localhost:7185/api/webnotes/' + noteId.toString()).subscribe();
  }
}
