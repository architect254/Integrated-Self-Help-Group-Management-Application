import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';


import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ContainerComponent } from './container/container.component';
import { EntryComponent } from './entry/entry.component';

const materialModules = [
  MatCardModule,MatInputModule,MatButtonModule,MatDividerModule,MatProgressBarModule,MatIconModule
]

const routes: Routes = [
  { path: '', component: ContainerComponent, children:[
    { path: 'SignUp', component: SignUpComponent },
    { path: 'SignIn', component: SignInComponent },
    { path: 'Welcome', component: EntryComponent },
    { path: '', redirectTo: '/Welcome', pathMatch:'full' },
  ] },
 
];

@NgModule({
  declarations: [SignUpComponent, SignInComponent, ContainerComponent, EntryComponent],
  imports: [CommonModule, RouterModule.forChild(routes),materialModules,ReactiveFormsModule],
  exports: [RouterModule],
})
export class AuthorizationModule {}
