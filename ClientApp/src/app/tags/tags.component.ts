import { Component } from '@angular/core';
import { TagbookService } from '../services/tagbook.service';
import { waitForAsync } from '@angular/core/testing';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {

  public tagsList: [{ tagId: number; tagText: string; notesTags: [] }] | undefined;
  public tagRow!: { tagId: number; tagText: string; notesTags: [] };

  constructor(public tagbook: TagbookService) {

    tagbook.getTags().subscribe(tags => {
      this.tagsList = tags;
    });

   } 


  onTagCreate(tag: { tagText: string }) {

    this.tagbook.saveTag(tag);
    this.tagbook.getTags()
      .subscribe(tags => {
      this.tagsList = tags;
      });
  }

  onDeleteTag(tagId: number) {
    this.tagbook.deleteTag(tagId);
    this.tagbook.getTags().subscribe(tags => {
      this.tagsList = tags;
    });
  }

  }

  

