import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReminderbookService {

  constructor(private http: HttpClient) { }

  public reminders: Observable<void> = of();

  getReminders(): Observable<[{ noteId: number; noteHeader: string; noteText: string; reminderDate: Date; notesTags: [] }]> {
    return this.http.get<[{ noteId: number; noteHeader: string; noteText: string; reminderDate: Date; notesTags: [] }]>('https://localhost:7185/api/webreminders');
  }

  deleteReminder(noteId: number, note: { noteHeader: string; noteText: string; reminderDate: Date | undefined; notesTags: [] }) {
    console.log(noteId);
    note.reminderDate = undefined;
    this.http.put('https://localhost:7185/api/webnotes/' + noteId.toString(),note).subscribe();
  }
}
