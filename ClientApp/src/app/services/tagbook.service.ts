import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagbookService {

  constructor(private http: HttpClient) { }

 // public tag: Observable<any> = of();

  getTags(): Observable<[{ tagId: number; tagText: string; notesTags: [] }]> {
    return this.http.get<[{ tagId: number; tagText: string; notesTags: [] }]>('https://localhost:7185/api/webtags');
  }

  saveTag(tag: { /*tagId: number;*/ tagText: string/*; notesTags: []*/ }){
    console.log(tag);
    this.http.post('https://localhost:7185/api/webtags', tag).subscribe((res) => {
      console.log(res);
    });
  }

  deleteTag(tagId: number) {
    console.log(tagId)
    this.http.delete('https://localhost:7185/api/webtags/'+ tagId.toString()).subscribe()
  }


}
