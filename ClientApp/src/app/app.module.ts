import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { NotesComponent } from './notes/notes.component';
import { TagsComponent } from './tags/tags.component';
import { RemindersComponent } from './reminders/reminders.component';
//import { Observable } from 'rxjs';
/*import { Notebook } from './services/notebook.service';*/


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    NotesComponent,
    TagsComponent,
    RemindersComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: NotesComponent, pathMatch: 'full' },
      { path: 'tags', component: TagsComponent },
      { path: 'reminders', component: RemindersComponent }
    ])
  ],
  providers: [
   /*Notebook*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
