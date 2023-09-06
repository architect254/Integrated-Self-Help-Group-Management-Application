import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';


import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';

const materialModules = [
  MatCardModule,MatInputModule,MatButtonModule,MatDividerModule,MatProgressBarModule
]

const routes: Routes = [
  { path: 'SignUp', component: SignUpComponent },
  { path: 'SignIn', component: SignInComponent },
  { path: '', redirectTo: '/SignUp', pathMatch:'full' },
];

@NgModule({
  declarations: [SignUpComponent, SignInComponent],
  imports: [CommonModule, RouterModule.forChild(routes),materialModules,ReactiveFormsModule],
  exports: [RouterModule],
})
export class AuthorizationModule {}
