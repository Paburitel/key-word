import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WordsGroupsComponent } from './words-groups/words-groups.component';
import { WordGroupComponent } from './words-groups/word-group/word-group.component';
import { WordGroupEditComponent } from './words-groups/word-group-edit/word-group-edit.component';
import { TagsComponent } from './help-component/tags/tags.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WordsGroupsComponent,
    WordGroupComponent,
    WordGroupEditComponent,
    TagsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(), // Add Bootstrap module here.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
