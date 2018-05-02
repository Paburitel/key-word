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
import { AddGroupComponent } from './words-groups/add-group/add-group.component';
import { ConfirmDirective } from './directive/confirm.directive';

import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './http-interceptors/index.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WordsGroupsComponent,
    WordGroupComponent,
    WordGroupEditComponent,
    TagsComponent,
    AddGroupComponent,
    ConfirmDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(), // Add Bootstrap module here.
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
