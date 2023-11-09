import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotebookService {

  constructor(private http: HttpClient ) { }

  public notes: Observable<void> = of();

  getNotes(): Observable<[{ id: number, note: string, reminderDate: Date, header: string }]> {
    return this.http.get<[{ id: number, note: string, reminderDate: Date, header: string }]>('https://localhost:7185/api/webnotes');
  }

  saveNote(notes: [{ id: number, note: string, reminderDate: Date, header: string }]): Observable<void> {
    this.notes = this.http.post<void>('https://localhost:7185/api/webnotes', notes).pipe(shareReplay(1));
    return this.notes;
  }
}
