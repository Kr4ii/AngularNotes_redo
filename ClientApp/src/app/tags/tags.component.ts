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
    })

/*    tagbook.saveTag().subscribe(tag => {
      
    })*/
   } 

  getTagFormData(data: any)
  {
/*    console.warn(data)
    this.tagbook.tag
    this.tagbook.saveTag()*/
  }

  }

  

