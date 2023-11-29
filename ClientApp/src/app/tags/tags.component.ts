import { Component } from '@angular/core';
import { TagbookService } from '../services/tagbook.service';

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

    //tagbook.saveTag(this.tagRow).subscribe((res) => {
    //  console.log(res);
    //});
   } 

//  getTagFormData(data: any)
//  {
///*    console.warn(data)
//    this.tagbook.tag
//    this.tagbook.saveTag()*/S
//  }

  onTagCreate(tag: { tagText: string }) {

    this.tagbook.saveTag(tag);
  }

  }

  

