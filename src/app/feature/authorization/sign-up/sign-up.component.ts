import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'isma-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  signUpForm = this.fb.group({
    email:[``,Validators.required,Validators.email],
    phone:[``,Validators.required,],
    password:[``,Validators.required],
    confirmPassword:[``,Validators.required]
  })

  matcher = new MyErrorStateMatcher();

  get email(){ return this.signUpForm.get(`email`)}
  get phone(){ return this.signUpForm.get(`phone`)}
  get password(){ return this.signUpForm.get(`password`)}
  get confirmPassword(){ return this.signUpForm.get(`confirmPassword`)}

  constructor(private fb:FormBuilder){}
}
