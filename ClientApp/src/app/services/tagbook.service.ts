import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagbookService {

  constructor(private http: HttpClient) { }

  public tags: Observable<void> = of();

  getTags(): Observable<[{ tagId: number; tagText: string; notesTags: [] }]> {
    return this.http.get<[{ tagId: number; tagText: string; notesTags: [] }]>('https://localhost:7185/api/webtags');
  }

  saveTags(tags: [{ tagId: number; tagText: string; notesTags: [] }]): Observable<void> {
    this.tags = this.http.post<void>('https://localhost:7185/api/webtags', tags).pipe(shareReplay(1));
    return this.tags;
  }



}
