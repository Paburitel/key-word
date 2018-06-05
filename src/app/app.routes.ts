import { Routes, RouterModule } from '@angular/router';

import { WordsGroupsComponent } from './words-groups/words-groups.component';
import { CommonWordsGroupComponent } from './common-words-group/common-words-group.component';
import { ViewMainComponent } from './view-main/view-main.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AuthenticatedGuard } from './guards/authenticated-guard.service';


const mainChildrenRoutes: Routes = [
  { path: '', component: WordsGroupsComponent },
  { path: 'shared-groups', component: CommonWordsGroupComponent }
];
/**
 * Routes path*/
export const AppRoutes: Routes = [
  { path: '', component: ViewMainComponent, children: mainChildrenRoutes, canActivate: [ AuthenticatedGuard ]},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot', component: ForgotPasswordComponent },
  { path: 'reset', component: ResetPasswordComponent },
  { path: '**', redirectTo: '/' }
];

export const appRoutingProviders: any[] = [ AuthenticatedGuard ];

export const routing = RouterModule.forRoot(AppRoutes);
