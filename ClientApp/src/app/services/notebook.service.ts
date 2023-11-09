import { HttpClient } from '@angular/common/http';
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

  saveNotes(notes: [{ noteId: number; noteHeader: string; noteText: string; reminderDate: Date; notesTags: [] }]): Observable<void> {
    this.notes = this.http.post<void>('https://localhost:7185/api/webnotes', notes).pipe(shareReplay(1));
    return this.notes;
  }

  getTags(): Observable<[{ tagId: number; tagText: string; notesTags: [] }]> {
    return this.http.get<[{ tagId: number; tagText: string; notesTags: [] }]>('https://localhost:7185/api/webtags');
  }

}
