import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ConfirmValidParentMatcher, errorMessages, regExps, CustomValidators } from '../validators';

@Component({
  selector: 'isma-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  signInForm!: FormGroup;

  confirmValidParentMatcher: ErrorStateMatcher =
    new ConfirmValidParentMatcher();
  errors = errorMessages;

  constructor(private fb: FormBuilder) {
    this.buildForm();
  }

  get email() {
    return this.signInForm.get(`email`);
  }

  get password() {
    return this.signInForm.get(`password`);
  }

  buildForm() {
    this.signInForm = this.fb.group({
      email: [``, [Validators.required, Validators.email]],
      password: [
        ``,
        [Validators.required, Validators.pattern(regExps['password'])],
      ],
    });
  }

  handleSubmit() {}
}
