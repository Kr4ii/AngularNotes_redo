import { Component } from '@angular/core';
import { ReminderbookService } from '../services/reminderbook.service';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.css']
})
export class RemindersComponent {

  public remindersList: [{ noteId: number; noteHeader: string; noteText: string; reminderDate: Date; notesTags: [] }] | undefined;

  constructor(public reminderbook: ReminderbookService) {

    reminderbook.getReminders().subscribe(reminders => {
      this.remindersList = reminders;
    })

    
  }
}
