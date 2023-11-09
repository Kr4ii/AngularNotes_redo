import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NotebookService } from './services/notebook.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';

  constructor(private http: HttpClient, private notebookService: NotebookService) {

  }
}
