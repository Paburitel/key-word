import { Routes, RouterModule } from '@angular/router';

import { WordsGroupsComponent } from './words-groups/words-groups.component';
import { CommonWordsGroupComponent } from './common-words-group/common-words-group.component';
import { ViewMainComponent } from './view-main/view-main.component';
import { LoginComponent } from './login/login.component';


const mainChildrenRoutes: Routes = [
  { path: '', component: WordsGroupsComponent },
  { path: 'shared-groups', component: CommonWordsGroupComponent }
];
/**
 * Routes path*/
export const AppRoutes: Routes = [
  { path: '', component: ViewMainComponent, children: mainChildrenRoutes},
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/' }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(AppRoutes);
