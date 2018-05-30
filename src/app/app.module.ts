import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './http-interceptors/index.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WordsGroupsComponent } from './words-groups/words-groups.component';
import { WordGroupComponent } from './words-groups/word-group/word-group.component';
import { WordGroupEditComponent } from './words-groups/word-group-edit/word-group-edit.component';
import { TagsComponent } from './help-component/tags/tags.component';
import { AddGroupComponent } from './words-groups/add-group/add-group.component';
import { CommonWordsGroupComponent } from './common-words-group/common-words-group.component';
import { ViewMainComponent } from './view-main/view-main.component';
import { LoginComponent } from './login/login.component';

import { ConfirmDirective } from './directive/confirm.directive';

import { routing, appRoutingProviders } from './app.routes';

import { AuthService } from './services/auth.service';
import { HttpService } from './services/http.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WordsGroupsComponent,
    WordGroupComponent,
    WordGroupEditComponent,
    TagsComponent,
    AddGroupComponent,
    ConfirmDirective,
    CommonWordsGroupComponent,
    ViewMainComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    routing
  ],
  providers: [
    httpInterceptorProviders, appRoutingProviders, AuthService, HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
