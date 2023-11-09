import { Component } from '@angular/core';
import { TagbookService } from '../services/tagbook.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {

  public tagsList: [{ tagId: number; tagText: string; notesTags: [] }] | undefined;

  constructor(public tagbook: TagbookService) {

    tagbook.getTags().subscribe(tags => {
      this.tagsList = tags;
    })
  }
}
